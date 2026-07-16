import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get the headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    })
  }

  // Get the raw body text for Svix signature verification
  const body = await req.text()

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET)

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occured', {
      status: 400,
    })
  }

  // Handle the webhook
  const eventType = evt.type

  if (eventType === 'user.created') {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data

    const primaryEmail = email_addresses[0]?.email_address || ''
    const name = [first_name, last_name].filter(Boolean).join(' ') || 'User'

    await prisma.user.create({
      data: {
        id: id,
        email: primaryEmail,
        name: name,
        image: image_url,
        role: 'STUDENT',
        onboardingComplete: false,
        authProvider: 'clerk',
        planType: 'FREE',
        subscriptionStatus: 'ACTIVE'
      },
    })
  } else if (eventType === 'user.updated') {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data

    const primaryEmail = email_addresses[0]?.email_address
    const name = [first_name, last_name].filter(Boolean).join(' ')

    const updateData: any = {}
    if (primaryEmail) updateData.email = primaryEmail
    if (name) updateData.name = name
    if (image_url) updateData.image = image_url

    await prisma.user.update({
      where: { id: id },
      data: updateData
    }).catch(e => console.error("Failed to update user locally:", e))
  } else if (eventType === 'user.deleted') {
    const { id } = evt.data

    if (id) {
      await prisma.user.delete({
        where: { id: id }
      }).catch(e => console.error("Failed to delete user locally:", e))
    }
  }

  return new Response('', { status: 200 })
}
