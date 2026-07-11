'use client';

import { useEffect, useRef, useState } from 'react';
import { trpc } from '@/lib/trpc/client';

// ─── WebGL Shader Background ─────────────────────────────────

// Shader removed for light theme

// ─── Pricing Card ─────────────────────────────────────────────

export interface PricingCardProps {
  planName: string;
  description: string;
  price: string;
  priceSymbol: string;
  billingLabel: string;
  savingsLabel?: string;
  features: string[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
  isPopular: boolean;
  discountedPrice?: string;
  discountPct?: number;
  creatorName?: string;
  onClick?: () => void;
}

function PricingCard({
  planName,
  description,
  price,
  priceSymbol,
  billingLabel,
  savingsLabel,
  features,
  buttonText,
  buttonVariant,
  isPopular,
  discountedPrice,
  discountPct,
  creatorName,
  onClick,
}: PricingCardProps) {
  const [hovered, setHovered] = useState(false);
  const hasDiscount = !!discountedPrice && !!discountPct;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#FFFFFF',
        border: isPopular
          ? '2px solid var(--brand-blue)'
          : '1px solid var(--border)',
        borderRadius: '20px',
        padding: '32px 28px',
        position: 'relative',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isPopular
          ? '0 12px 32px rgba(45,129,247,0.12)'
          : hovered
          ? '0 12px 32px rgba(0,0,0,0.06)'
          : '0 4px 12px rgba(0,0,0,0.03)',
        transition: 'all 350ms cubic-bezier(0.16,1,0.3,1)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {isPopular && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 20,
            background: 'var(--brand-blue)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.08em',
            fontSize: '10px',
            fontWeight: 700,
            textTransform: 'uppercase',
            padding: '5px 14px 6px',
            borderRadius: '0 0 8px 8px',
          }}
        >
          Most Popular
        </div>
      )}

      {/* Plan name */}
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '13px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
          marginBottom: '16px',
          fontWeight: 700,
        }}
      >
        {planName}
      </div>

      {/* Price */}
      {hasDiscount ? (
        <div style={{ marginBottom: '4px' }}>
          {/* Creator discount badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            padding: '3px 10px', borderRadius: 100, marginBottom: 6,
            background: 'var(--green-light)',
            border: '1px solid var(--green-border)',
            fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600,
            color: 'var(--brand-green)', letterSpacing: '0.02em',
          }}>
            🎉 {discountPct}% off via {creatorName}
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: 20,
              color: 'var(--text-muted)', fontWeight: 700,
              textDecoration: 'line-through', opacity: 0.6,
            }}>
              {priceSymbol}{price}
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--brand-green)', fontWeight: 700 }}>{priceSymbol}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 48, color: 'var(--brand-green)', fontWeight: 700, lineHeight: 1 }}>{discountedPrice}</span>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '20px',
            color: 'var(--text-primary)', fontWeight: 700,
          }}>
            {priceSymbol}
          </span>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '52px',
            color: 'var(--text-primary)', fontWeight: 700, lineHeight: 1,
          }}>
            {price}
          </span>
        </div>
      )}

      {/* Billing label */}
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          color: 'var(--text-muted)',
          marginBottom: savingsLabel ? '8px' : '12px',
        }}
      >
        {billingLabel}
      </div>

      {/* Savings label */}
      {savingsLabel && (
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            color: 'var(--brand-green)',
            marginBottom: '12px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            background: 'var(--green-light)',
            padding: '3px 10px',
            borderRadius: '100px',
            width: 'fit-content',
            fontWeight: 500,
          }}
        >
          {savingsLabel}
        </div>
      )}

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
          marginBottom: '20px',
          margin: '0 0 20px',
        }}
      >
        {description}
      </p>

      {/* Divider */}
      <div
        style={{
          borderTop: '1px solid var(--border)',
          marginBottom: '16px',
        }}
      />

      {/* Features */}
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 0 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          flex: 1,
        }}
      >
        {features.map((f) => (
          <li
            key={f}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
            }}
          >
            <span style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '1px' }}>
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={onClick}
        style={{
          width: '100%',
          padding: '13px 24px',
          borderRadius: '100px',
          fontFamily: 'var(--font-display)',
          fontSize: '15px',
          letterSpacing: '0.03em',
          cursor: 'pointer',
          transition: 'all 200ms ease',
          ...(buttonVariant === 'primary'
            ? {
                background: 'var(--brand-blue)',
                color: '#FFFFFF',
                border: 'none',
                fontWeight: 600,
              }
            : {
                background: 'transparent',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                fontWeight: 500,
              }),
        }}
        onMouseOver={(e) => {
          if (buttonVariant === 'primary') {
            e.currentTarget.style.filter = 'brightness(1.1)';
          } else {
            e.currentTarget.style.borderColor = 'var(--brand-blue)';
            e.currentTarget.style.color = 'var(--brand-blue)';
          }
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.filter = 'none';
          if (buttonVariant !== 'primary') {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.color = 'var(--text-primary)';
          }
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

// ─── Pricing Page ─────────────────────────────────────────────

const savioursPlans: PricingCardProps[] = [
  {
    planName: 'Free',
    description: 'Start your prep without spending a rupee.',
    price: '0',
    priceSymbol: '₹',
    billingLabel: 'forever',
    features: ['Smart Planner', 'Monthly Mission', 'Dashboard & Subjects'],
    buttonText: 'Get Started Free',
    buttonVariant: 'secondary',
    isPopular: false,
  },
  {
    planName: 'Monthly',
    description: 'Full access, one month at a time.',
    price: '1',
    priceSymbol: '₹',
    billingLabel: '/month',
    features: [
      'Everything in Free',
      'AI Doubt Solver (unlimited)',
      'Smart Planner',
      'Competency Test',
      'Customise Test',
      'Flip the Question',
      'Focus Mode',
    ],
    buttonText: 'Choose Monthly',
    buttonVariant: 'primary',
    isPopular: false,
  },
  {
    planName: 'Yearly',
    description: 'Commit to your boards. Best value.',
    price: '599',
    priceSymbol: '₹',
    billingLabel: '/year',
    savingsLabel: 'Save ₹1,789 vs monthly',
    features: [
      'Everything in Monthly',
      'Priority AI responses',
      'Early access to new features',
      'Yearly progress report',
    ],
    buttonText: 'Get Yearly Access',
    buttonVariant: 'primary',
    isPopular: true,
  },
];

interface AnimatedGlassyPricingProps {
  isMobile: boolean;
  onSelectPlan: (plan: 'FREE' | 'MONTHLY' | 'YEARLY' | 'DOMIN8', domin8Code?: string) => void;
  userName?: string;
  // Optional: pass creator discount directly (avoids DB lag in onboarding flow)
  creatorDiscount?: { discountPercentage: number; creatorName: string } | null;
}

export default function AnimatedGlassyPricing({
  isMobile,
  onSelectPlan,
  userName,
  creatorDiscount,
}: AnimatedGlassyPricingProps) {
  const [showDomin8Modal, setShowDomin8Modal] = useState(false);
  const [domin8Code, setDomin8Code] = useState('');
  // Fall back to DB query if no prop passed (used on /pricing standalone page)
  const { data: dbDiscount } = trpc.creator.getMyDiscount.useQuery(undefined, {
    enabled: creatorDiscount === undefined,
  });

  const activeDiscount = creatorDiscount !== undefined ? creatorDiscount : dbDiscount;
  const discountPct = activeDiscount?.discountPercentage ?? 0;
  const creatorName = activeDiscount?.creatorName ?? undefined;
  // Discount applies to yearly only
  const yearlyDiscounted = discountPct > 0 ? String(Math.round(599 * (1 - discountPct / 100))) : undefined;
  const [domin8Error, setDomin8Error] = useState('');
  const [domin8Loading, setDomin8Loading] = useState(false);

  const handleDomin8Submit = () => {
    const code = domin8Code.trim();
    if (!code || !code.startsWith('W')) {
      setDomin8Error('Invalid code. Please try again.');
      return;
    }
    setDomin8Error('');
    setDomin8Loading(true);
    onSelectPlan('DOMIN8', code);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto',
        zIndex: 1000,
        background: '#FFFFFF',
      }}
    >

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1060px',
          width: '100%',
          padding: isMobile ? '24px 16px' : '48px 32px',
          animation: 'fadeIn 600ms ease-out both',
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: isMobile ? '32px' : '48px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            textAlign: 'center',
            marginBottom: '8px',
            lineHeight: 1.1,
          }}
        >
          Choose your <span style={{ color: 'var(--brand-blue)' }}>plan</span>
          {userName ? `, ${userName.split(' ')[0]}` : ''}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: isMobile ? '14px' : '16px',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            marginBottom: isMobile ? '32px' : '48px',
          }}
        >
          Your boards are in 10 months. Every day counts.
        </p>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '16px' : '20px',
            marginBottom: '32px',
          }}
        >
          {savioursPlans.map((plan, i) => (
            <div
              key={plan.planName}
              style={{
                animation: `slideInUp 0.5s ease-out ${i * 100}ms both`,
              }}
            >
              <PricingCard
                {...plan}
                discountedPrice={
                  plan.planName === 'Yearly' ? yearlyDiscounted : undefined
                }
                discountPct={plan.planName === 'Yearly' ? discountPct || undefined : undefined}
                creatorName={plan.planName === 'Yearly' ? creatorName : undefined}
                onClick={() =>
                  onSelectPlan(
                    plan.planName.toUpperCase() as 'FREE' | 'MONTHLY' | 'YEARLY'
                  )
                }
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            textAlign: 'center',
            opacity: 0.8,
          }}
        >
          Secure payment via Razorpay. Cancel anytime.
        </p>
      </div>

      {/* ── Domin8 Pro Code Modal ── */}
      {showDomin8Modal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(8px)',
            animation: 'fadeIn 200ms ease-out both',
          }}
          onClick={(e) => { if (e.target === e.currentTarget && !domin8Loading) setShowDomin8Modal(false); }}
        >
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: isMobile ? '28px 22px' : '36px 32px',
              maxWidth: '420px',
              width: isMobile ? 'calc(100% - 32px)' : '100%',
              boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
              animation: 'slideInUp 0.4s ease-out both',
            }}
          >
            {/* Header */}
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                textAlign: 'center',
                marginBottom: '6px',
              }}
            >
              Domin8 <span style={{ color: 'var(--brand-blue)' }}>Pro</span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--text-secondary)',
                textAlign: 'center',
                marginBottom: '24px',
                lineHeight: 1.5,
              }}
            >
              Enter the special code provided to you
            </p>

            {domin8Loading ? (
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: '16px', padding: '20px 0',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  border: '3px solid var(--border)',
                  borderTopColor: 'var(--brand-blue)',
                  animation: 'spin360 0.7s linear infinite',
                }} />
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px', color: 'var(--text-muted)',
                }}>
                  Activating your access...
                </div>
              </div>
            ) : (
              <>
                {/* Code Input */}
                <input
                  type="text"
                  value={domin8Code}
                  onChange={(e) => { setDomin8Code(e.target.value); setDomin8Error(''); }}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleDomin8Submit(); }}
                  placeholder="Enter your code"
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: domin8Error
                      ? '1px solid #ef4444'
                      : '1px solid var(--border)',
                    background: '#F9FAFB',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px',
                    letterSpacing: '0.08em',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 200ms ease',
                    textAlign: 'center',
                  }}
                  onFocus={(e) => {
                    if (!domin8Error) e.currentTarget.style.borderColor = 'var(--brand-blue)';
                  }}
                  onBlur={(e) => {
                    if (!domin8Error) e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                />

                {/* Error */}
                {domin8Error && (
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: '#ef4444',
                      textAlign: 'center',
                      marginTop: '10px',
                    }}
                  >
                    {domin8Error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleDomin8Submit}
                  style={{
                    width: '100%',
                    padding: '13px 24px',
                    borderRadius: '100px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    letterSpacing: '0.03em',
                    cursor: 'pointer',
                    background: 'var(--brand-blue)',
                    color: '#FFFFFF',
                    border: 'none',
                    fontWeight: 600,
                    marginTop: '18px',
                    transition: 'all 200ms ease',
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.filter = 'brightness(1.1)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.filter = 'none'; }}
                >
                  Activate Access
                </button>

                {/* Cancel */}
                <button
                  onClick={() => setShowDomin8Modal(false)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'transparent',
                    border: 'none',
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    marginTop: '10px',
                  }}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
