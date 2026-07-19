'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useResponsive } from '@/hooks/useResponsive';
import { trpc } from '@/lib/trpc/client';
import dynamic from 'next/dynamic';

const ShuffleCards = dynamic(() => import('@/components/ui/testimonial-cards'), { ssr: false });
const AnimatedGlassyPricing = dynamic(() => import('@/components/ui/animated-glassy-pricing'), { ssr: false });
const VapourText = dynamic(() => import('@/components/ui/vapour-text-effect'), { ssr: false });

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const VIDEO_URL = 'https://res.cloudinary.com/dv0w2nfnw/video/upload/v1774898701/videoplayback_tgdakw.mp4';

// Phase 1: Apple-style greetings
const GREETINGS = [
  { text: 'Hello.', delay: 400 },
  { text: 'नमस्कार।', delay: 1800 },
];

// Phase 2: Contextual messages
const MESSAGES = [
  { text: 'You just moved to Class 10.', color: 'var(--text-primary)', delay: 0 },
  { text: 'Boards are 10 months away.', color: 'var(--text-secondary)', delay: 900 },
  { text: 'We have crazy things for you.', color: 'var(--accent-gold)', delay: 2000 },
];

const LOADING_LINES = [
  'Setting up your workspace...',
  'Mapping your syllabus...',
  'Preparing your AI tools...',
  'Almost there...',
];

export default function OnboardingFlow() {
  const { isMobile } = useResponsive();
  const { data: session } = trpc.auth.getSession.useQuery();
  const userName = (session?.user as any)?.name || '';
  const userEmail = (session?.user as any)?.email || '';

  const [step, setStep] = useState<Step>(1);
  const [greetingPhase, setGreetingPhase] = useState<'greetings' | 'messages'>('greetings');
  const [activeGreeting, setActiveGreeting] = useState(-1);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showCta, setShowCta] = useState(false);
  const [loadingLine, setLoadingLine] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [profileError, setProfileError] = useState('');
  const [savingProfile, setSavingProfile] = useState(false);
  const [creatorSearch, setCreatorSearch] = useState('');
  const [selectedCreatorCode, setSelectedCreatorCode] = useState<string | null>(undefined as unknown as null);
  const [creators, setCreators] = useState<Array<{ creatorName: string; creatorCode: string; discountPercentage: number }>>([]);
  const [savingCreator, setSavingCreator] = useState(false);
  const [creatorDropdownOpen, setCreatorDropdownOpen] = useState(false);

  const video1Ref = useRef<HTMLVideoElement>(null);
  const video6Ref = useRef<HTMLVideoElement>(null);

  // Particles removed for light theme - state kept for zero-diff on state structure
  useEffect(() => {
    // noop - floating particles removed in Phase 1 reskin
  }, []);



  // ── Screen 1 setup
  useEffect(() => {
    if (step !== 1) return;
    const t1 = setTimeout(() => setLogoVisible(true), 600);
    const t2 = setTimeout(() => setShowTagline(true), 1400);
    const t3 = setTimeout(advanceFromS1, 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [step]);

  // ── Screen 2 - Apple-style two-phase reveal
  useEffect(() => {
    if (step !== 2) return;
    setGreetingPhase('greetings');
    setActiveGreeting(-1);
    setVisibleMessages(0);
    setShowCta(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    GREETINGS.forEach((g, i) => {
      timers.push(setTimeout(() => setActiveGreeting(i), g.delay));
    });

    const messagesStart = 3400;
    timers.push(setTimeout(() => setGreetingPhase('messages'), messagesStart));

    MESSAGES.forEach((m, i) => {
      timers.push(
        setTimeout(() => setVisibleMessages(v => Math.max(v, i + 1)), messagesStart + 400 + m.delay)
      );
    });

    timers.push(setTimeout(() => setShowCta(true), messagesStart + 400 + 3200));

    return () => timers.forEach(clearTimeout);
  }, [step]);

  // ── Screen 7 - Loading
  useEffect(() => {
    if (step !== 7) return;
    setLoadingLine(0);
    const timers = LOADING_LINES.map((_, i) =>
      setTimeout(() => setLoadingLine(i + 1), 800 * (i + 1))
    );
    // After loading, go to final welcome screen
    timers.push(setTimeout(() => setStep(8), 3600));
    return () => timers.forEach(clearTimeout);
  }, [step]);

  // Screen 8 - auto-navigate to dashboard after the welcome animation completes
  useEffect(() => {
    if (step !== 8) return;
    // 3s: 0.3s logo + 0.7s text + 1.4s tagline + 0.6s buffer
    const t = setTimeout(() => doComplete(), 3200);
    return () => clearTimeout(t);
  }, [step]);

  function advanceFromS1() {
    setFadeOut(true);
    setTimeout(() => { setFadeOut(false); setStep(2); }, 600);
  }

  async function handleSaveProfile() {
    setProfileError('');
    const finalName = (nameInput || userName.split(' ')[0]).trim();
    const cleanedPhone = phoneInput.replace(/\D/g, '');

    if (!finalName || finalName.length < 2) {
      setProfileError('Please enter your name.');
      return;
    }
    if (cleanedPhone.length < 10) {
      setProfileError('Please enter a valid 10-digit phone number.');
      return;
    }

    setSavingProfile(true);
    try {
      const res = await fetch('/api/auth/save-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: finalName, phone: cleanedPhone }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setProfileError(data.error || 'Failed to save profile. Please try again.');
        setSavingProfile(false);
        return;
      }
      setSavingProfile(false);
      // Skip creator code (step 5) and go straight to pricing (step 6)
      setStep(6);
    } catch {
      setProfileError('Network error. Please try again.');
      setSavingProfile(false);
    }
  }

  async function doComplete() {
    try { await fetch('/api/auth/complete-onboarding', { method: 'POST' }); } catch {}
    window.location.href = '/dashboard';
  }

  function handleSaveCreator(codeToSave: string | null) {
    // Go to pricing immediately - no waiting for the API
    setStep(6);
    // Save to DB in background
    fetch('/api/auth/save-creator', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ creatorCode: codeToSave }),
    }).catch(() => {});
  }

  async function handleFreePlan() {
    setSubmitting(true);
    try {
      await fetch('/api/auth/set-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planType: 'FREE' }),
      });
    } catch {}
    setSubmitting(false);
    setStep(7);
  }

  async function handlePaidPlan(planKey: 'MONTHLY' | 'YEARLY') {
    // Load Razorpay SDK
    const loaded = await new Promise((resolve) => {
      if (window.Razorpay) { resolve(true); return; }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

    if (!loaded) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const commonHandler = async (response: any) => {
      try {
        const { verifyPaymentAction } = await import('@/actions/verify-payment');
        const result = await verifyPaymentAction(response);
        if (result.success) {
          setStep(7);
        } else {
          alert('Payment verification failed: ' + result.error);
        }
      } catch {
        alert('Verification failed. Please contact support if money was deducted.');
      }
    };

    const prefill = { name: nameInput || userName, email: userEmail };
    const themeColor = '#2D81F7';
    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '';

    try {
      if (planKey === 'MONTHLY') {
        // ── Recurring subscription flow (₹199/month) ──
        const subRes = await fetch('/api/create-subscription', { method: 'POST' });
        const subData = await subRes.json();

        if (!subData.success) {
          alert(`Subscription Error: ${subData.error || 'Failed to create subscription'}`);
          return;
        }

        const options = {
          key,
          name: 'PADH.AI',
          description: 'Monthly Access - ₹199/month',
          subscription_id: subData.subscription.id,
          handler: commonHandler,
          prefill,
          theme: { color: themeColor },
        };

        const paymentObject = new (window as any).Razorpay(options);
        paymentObject.open();
      } else {
        // ── One-time order flow (₹599 yearly) ──
        const orderRes = await fetch('/api/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'PRO_YEARLY' }),
        });
        const orderData = await orderRes.json();

        if (!orderData.success) {
          alert(`Payment Error: ${orderData.error}`);
          return;
        }

        const options = {
          key,
          amount: orderData.order.amount,
          currency: orderData.order.currency,
          name: 'PADH.AI',
          description: 'Yearly Access - ₹599/year',
          order_id: orderData.order.id,
          handler: commonHandler,
          prefill,
          theme: { color: themeColor },
        };

        const paymentObject = new (window as any).Razorpay(options);
        paymentObject.open();
      }
    } catch {
      alert('Payment failed. Please try again.');
    }
  }

  async function handleDomin8Activate(code: string) {
    setSubmitting(true);
    try {
      const res = await fetch('/api/auth/activate-domin8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      if (!res.ok) throw new Error('Activation failed');
    } catch {
      alert('Activation failed. Please try again.');
      setSubmitting(false);
      return;
    }
    setSubmitting(false);
    setStep(7);
  }

  function handlePlanSelect(plan: 'FREE' | 'MONTHLY' | 'YEARLY' | 'DOMIN8', domin8Code?: string) {
    if (plan === 'FREE') {
      handleFreePlan();
    } else if (plan === 'DOMIN8') {
      handleDomin8Activate(domin8Code || '');
    } else {
      handlePaidPlan(plan);
    }
  }

  // ── SCREEN 1 - Cinematic Splash ─────────────────────────────
  if (step === 1) return (
    <div
      data-theme="light"
      onClick={advanceFromS1}
      style={{
        position: 'fixed', inset: 0,
        background: 'linear-gradient(160deg, #FFFFFF 0%, #F0F4F7 50%, #DFEAF5 100%)',
        colorScheme: 'light',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 600ms ease',
        cursor: 'pointer', zIndex: 1000,
        overflow: 'hidden',
      }}
    >
      {/* Subtle accent blobs - no particles, no glow */}
      <div style={{
        position: 'absolute', top: '-15%', right: '-5%',
        width: 360, height: 360, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,129,247,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-5%',
        width: 280, height: 280, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(8,189,128,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center',
        opacity: logoVisible ? 1 : 0,
        transform: logoVisible ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(20px)',
        transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
      }}>
        {/* PADH.AI logo mark */}
        <img 
          src="/logo_nobg.png" 
          alt="PADH.AI"
          style={{
            width: 64, height: 64,
            borderRadius: 18,
            margin: '0 auto 20px',
            boxShadow: '0 8px 24px rgba(45,129,247,0.18)',
            objectFit: "contain",
          }}
        />

        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: isMobile ? 20 : 24,
          letterSpacing: '0.18em',
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
          marginBottom: 12,
          fontWeight: 700,
        }}>
          PADH.AI
        </div>

        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: isMobile ? 14 : 16,
          fontWeight: 400,
          color: 'var(--text-secondary)',
          letterSpacing: '0.01em',
          opacity: showTagline ? 1 : 0,
          transform: showTagline ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.8s ease-out',
        }}>
          CBSE Board Prep, Reimagined.
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: isMobile ? 48 : 40,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        opacity: logoVisible ? 1 : 0,
        transition: 'opacity 0.8s ease 0.6s',
      }}>
        <div style={{
          width: 1, height: 32,
          background: 'linear-gradient(to bottom, transparent, var(--brand-blue))',
          animation: 'float 2s ease-in-out infinite',
        }} />
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          color: 'var(--text-muted)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}>
          Tap to begin
        </div>
      </div>
    </div>
  );

  // ── SCREEN 2 - Apple-style Greeting + Message Reveal ────────
  if (step === 2) return (
    <div
      data-theme="light"
      style={{
        position: 'fixed', inset: 0,
        background: '#FFFFFF',
        colorScheme: 'light',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: isMobile ? '32px 24px' : '64px 80px',
        zIndex: 1000,
        overflow: 'hidden',
      }}
    >
      {/* Subtle blobs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,129,247,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {greetingPhase === 'greetings' && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column',
          gap: isMobile ? 12 : 20,
          transition: 'opacity 600ms ease-out',
          opacity: greetingPhase === 'greetings' ? 1 : 0,
        }}>
          {GREETINGS.map((g, i) => (
            <div
              key={i}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: isMobile ? 52 : 80,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: i === 0 ? 'var(--text-primary)' : 'var(--brand-blue)',
                textAlign: 'center',
                opacity: activeGreeting >= i ? 1 : 0,
                transform: activeGreeting >= i
                  ? 'translateY(0) scale(1)'
                  : 'translateY(30px) scale(0.96)',
                transition: 'opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              {g.text}
            </div>
          ))}
        </div>
      )}

      {greetingPhase === 'messages' && (
        <div style={{
          position: 'relative', zIndex: 1,
          maxWidth: 750, width: '100%',
          animation: 'fadeIn 500ms ease-out both',
        }}>
          {MESSAGES.map((msg, i) => (
            <div key={i} style={{ overflow: 'hidden', marginBottom: isMobile ? 14 : 22 }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: isMobile ? 28 : 48,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  color: i === 2 ? 'var(--brand-blue)' : msg.color,
                  opacity: visibleMessages > i ? 1 : 0,
                  transform: visibleMessages > i
                    ? 'translateY(0)'
                    : 'translateY(36px)',
                  transition: 'opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {showCta && (
            <div style={{
              marginTop: 28,
              animation: 'fadeIn 600ms ease-out both',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              {userName && (
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: isMobile ? 16 : 20,
                  fontWeight: 400,
                  color: 'var(--text-secondary)',
                  animation: 'fadeIn 500ms ease-out 200ms both',
                }}>
                  Ready when you are, {userName.split(' ')[0]}.
                </div>
              )}
              <button
                onClick={() => setStep(3)}
                className="btn-primary"
                style={{
                  fontSize: 'var(--text-md)',
                  padding: '15px 40px',
                  width: 'fit-content',
                }}
              >
                Begin &rarr;
              </button>
            </div>
          )}
        </div>
      )}

      <div style={{
        position: 'absolute',
        bottom: isMobile ? 32 : 40,
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        fontWeight: 400,
        color: 'var(--text-muted)',
        letterSpacing: '0.03em',
        opacity: showCta ? 0.6 : 0,
        transition: 'opacity 0.6s ease',
      }}>
        CBSE Class 10 Edition
      </div>
    </div>
  );

  // ── SCREEN 3 - Testimonial Cards (NEW) ─────────────────────
  if (step === 3) return (
    <div
      data-theme="light"
      style={{
        position: 'fixed', inset: 0,
        background: '#F0F4F8',
        colorScheme: 'light',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000,
        overflow: 'hidden',
      }}
    >
      <video
        src={VIDEO_URL}
        autoPlay muted playsInline loop
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          opacity: 0.05,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ShuffleCards onContinue={() => setStep(4)} isMobile={isMobile} />
      </div>
    </div>
  );

  // ── SCREEN 4 - Name Input ──────────────────────────────────
  if (step === 4) return (
    <div
      data-theme="light"
      style={{
        position: 'fixed', inset: 0,
        background: '#F0F4F8',
        colorScheme: 'light',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: isMobile ? '32px 24px' : '64px 80px',
        zIndex: 1000,
        overflow: 'hidden',
      }}
    >
      <video
        src={VIDEO_URL}
        autoPlay muted playsInline loop
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          filter: 'grayscale(100%)',
          opacity: 0.05,
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.7) 0%, var(--bg-base) 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 480, width: '100%',
        textAlign: 'center',
        animation: 'fadeIn 600ms ease-out both',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: isMobile ? 28 : 40,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
          marginBottom: 8,
        }}>
          A few quick details.
        </h1>
        <p style={{
          fontFamily: 'var(--font-tagline)',
          fontSize: 14,
          fontStyle: 'italic',
          color: 'var(--text-muted)',
          marginBottom: 28,
        }}>
          We'll use these to personalise your experience.
        </p>

        <input
          type="text"
          value={nameInput || userName.split(' ')[0]}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Your first name"
          autoFocus
          className="sa-input"
          style={{
            width: '100%',
            padding: '16px 20px',
            fontSize: '18px',
            fontFamily: 'var(--font-body)',
            background: 'var(--bg-surface)',
            border: '1.5px solid var(--bg-border)',
            borderRadius: '14px',
            color: 'var(--text-primary)',
            textAlign: 'center',
            outline: 'none',
            marginBottom: 14,
            transition: 'border-color 0.2s ease',
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent-gold-border)'}
          onBlur={(e) => e.currentTarget.style.borderColor = 'var(--bg-border)'}
        />

        <input
          type="tel"
          inputMode="numeric"
          value={phoneInput}
          onChange={(e) => setPhoneInput(e.target.value.replace(/[^\d+\s-]/g, ''))}
          placeholder="10-digit mobile number"
          maxLength={15}
          className="sa-input"
          style={{
            width: '100%',
            padding: '16px 20px',
            fontSize: '18px',
            fontFamily: 'var(--font-body)',
            background: 'var(--bg-surface)',
            border: '1.5px solid var(--bg-border)',
            borderRadius: '14px',
            color: 'var(--text-primary)',
            textAlign: 'center',
            outline: 'none',
            marginBottom: profileError ? 10 : 24,
            transition: 'border-color 0.2s ease',
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent-gold-border)'}
          onBlur={(e) => e.currentTarget.style.borderColor = 'var(--bg-border)'}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSaveProfile();
          }}
        />

        {profileError && (
          <div style={{
            marginBottom: 18,
            padding: '10px 14px',
            background: 'rgba(248,113,113,0.08)',
            border: '1px solid rgba(248,113,113,0.25)',
            borderRadius: 10,
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            color: 'var(--status-red)',
          }}>
            {profileError}
          </div>
        )}

        <button
          onClick={handleSaveProfile}
          disabled={savingProfile}
          className="btn-primary"
          style={{
            fontSize: 'var(--text-md)',
            padding: '14px 44px',
            opacity: savingProfile ? 0.6 : 1,
            cursor: savingProfile ? 'wait' : 'pointer',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span style={{ position: 'relative', zIndex: 1 }}>
            {savingProfile ? 'Saving…' : 'Continue →'}
          </span>
        </button>
      </div>
    </div>
  );

  // ── SCREEN 5 - Creator Code ────────────────────────────────────────────────
  if (step === 5) {
    const enteredCode = creatorSearch.trim().toLowerCase();
    const matchedCreator = enteredCode
      ? creators.find(c => c.creatorCode.toLowerCase() === enteredCode)
      : null;
    const isInvalid = enteredCode.length > 0 && !matchedCreator;

    return (
      <div
        data-theme="light"
        style={{
          position: 'fixed', inset: 0,
          background: '#F0F4F8',
          colorScheme: 'light',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: isMobile ? '32px 20px' : '64px 80px',
          zIndex: 1000, overflow: 'hidden',
        }}
      >
        <video src={VIDEO_URL} autoPlay muted playsInline loop style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', filter: 'grayscale(100%)', opacity: 0.05,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.7) 0%, var(--bg-base) 100%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative', zIndex: 1, maxWidth: 460, width: '100%',
          textAlign: 'center', animation: 'fadeIn 600ms ease-out both',
        }}>
          {/* Icon */}
          <div style={{
            width: 56, height: 56, borderRadius: 16,
            background: 'rgba(45,129,247,0.1)',
            border: '1px solid rgba(45,129,247,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px', fontSize: 26,
          }}>🎟️</div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: isMobile ? 26 : 34,
            letterSpacing: '-0.02em', color: 'var(--text-primary)',
            marginBottom: 12,
          }}>
            Got a creator code?
          </h1>

          {/* Highlighted description */}
          <div style={{
            display: 'inline-block',
            padding: '10px 18px',
            marginBottom: 28,
            background: 'linear-gradient(135deg, rgba(45,129,247,0.08), rgba(139,92,246,0.08))',
            border: '1px solid rgba(45,129,247,0.2)',
            borderRadius: 12,
          }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 13,
              color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0,
            }}>
              <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>You'll get an exclusive discount</span>
              {' '}if you have a code from the EdTech channels we've partnered with.{' '}
              <span style={{ color: 'var(--text-muted)' }}>Leave blank if you don't have one.</span>
            </p>
          </div>

          {/* Code input */}
          <input
            type="text"
            value={creatorSearch}
            onChange={e => setCreatorSearch(e.target.value.replace(/\s/g, ''))}
            placeholder="Enter creator code (e.g. BL2047)"
            autoFocus
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            style={{
              width: '100%',
              padding: '16px 20px',
              fontSize: '17px',
              fontFamily: 'var(--font-body)',
              background: 'var(--bg-surface)',
              border: `1.5px solid ${
                matchedCreator ? 'rgba(34,197,94,0.5)' :
                isInvalid ? 'rgba(248,113,113,0.4)' :
                'var(--bg-border)'
              }`,
              borderRadius: '14px',
              color: 'var(--text-primary)',
              textAlign: 'center',
              outline: 'none',
              letterSpacing: '0.06em',
              textTransform: 'none',
              transition: 'border-color 0.2s ease',
              boxSizing: 'border-box',
              marginBottom: 12,
            }}
            onKeyDown={e => { if (e.key === 'Enter' && !isInvalid) { const code = matchedCreator ? matchedCreator.creatorCode : null; setSelectedCreatorCode(code); handleSaveCreator(code); } }}
          />

          {/* Feedback states */}
          {matchedCreator && (
            <div style={{
              padding: '12px 16px', marginBottom: 16,
              background: 'rgba(34,197,94,0.07)',
              border: '1px solid rgba(34,197,94,0.25)',
              borderRadius: 10,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>🎉</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, color: '#22c55e' }}>
                  {matchedCreator.discountPercentage}% off unlocked!
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>
                  Code valid · via {matchedCreator.creatorName}
                </div>
              </div>
            </div>
          )}

          {isInvalid && (
            <div style={{
              padding: '10px 14px', marginBottom: 16,
              background: 'rgba(248,113,113,0.07)',
              border: '1px solid rgba(248,113,113,0.2)',
              borderRadius: 10,
              fontFamily: 'var(--font-body)', fontSize: 12,
              color: '#f87171', textAlign: 'left',
            }}>
              Invalid code - double-check the spelling or leave it blank.
            </div>
          )}

          {/* Primary CTA */}
          <button
            onClick={() => {
              const code = matchedCreator ? matchedCreator.creatorCode : null;
              setSelectedCreatorCode(code);
              handleSaveCreator(code);
            }}
            disabled={isInvalid}
            className="btn-primary"
            style={{
              fontSize: 'var(--text-md)', padding: '14px 44px', width: '100%',
              opacity: isInvalid ? 0.4 : 1,
              cursor: isInvalid ? 'not-allowed' : 'pointer',
              marginBottom: 12,
            }}
          >
            {savingCreator ? 'Saving…' : matchedCreator ? `Apply ${matchedCreator.discountPercentage}% Discount →` : 'Continue →'}
          </button>

          {/* Skip */}
          {!matchedCreator && (
            <button
              onClick={() => {
                setSelectedCreatorCode(null);
                setCreatorSearch('');
                handleSaveCreator(null);
              }}
              disabled={savingCreator}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontSize: 12,
                color: 'var(--text-muted)', padding: '6px 0',
                letterSpacing: '0.02em',
              }}
            >
              Skip - I don&apos;t have a code
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── SCREEN 6 - Animated Glassy Pricing ────────────────────────
  if (step === 6) {
    // Build discount from the creator selected in step 5 (avoids DB round-trip lag)
    const selectedCreator = selectedCreatorCode
      ? creators.find(c => c.creatorCode.toLowerCase() === selectedCreatorCode.toLowerCase())
      : null;
    const creatorDiscount = selectedCreator
      ? { discountPercentage: selectedCreator.discountPercentage, creatorName: selectedCreator.creatorName }
      : null;
    return (
      <div data-theme="light" style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <AnimatedGlassyPricing
          isMobile={isMobile}
          onSelectPlan={handlePlanSelect}
          userName={nameInput || userName}
          creatorDiscount={creatorDiscount}
        />
      </div>
    );
  }

  // ── SCREEN 7 - Loading / Setup ─────────────────────────────
  if (step === 7) return (
    <div
      data-theme="light"
      style={{
        position: 'fixed', inset: 0,
        background: '#FFFFFF',
        colorScheme: 'light',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        zIndex: 1000,
        overflow: 'hidden',
      }}
    >
      {/* Subtle accent blobs */}
      <div style={{
        position: 'absolute', top: '-15%', right: '-5%',
        width: 360, height: 360, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,129,247,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Blue ring spinner */}
        <div style={{
          margin: '0 auto 28px',
          width: 40, height: 40,
          borderRadius: '50%',
          border: '2.5px solid var(--bg-elevated)',
          borderTopColor: 'var(--brand-blue)',
          animation: 'spin360 0.8s linear infinite',
        }} />

        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: isMobile ? 22 : 28,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          fontWeight: 700,
          marginBottom: 24,
          animation: 'fadeIn 600ms ease-out both',
        }}>
          {(nameInput || userName) ? `Hold tight, ${(nameInput || userName).split(' ')[0]}` : 'Hold tight'}
        </div>

        {LOADING_LINES.map((line, i) => (
          <div
            key={i}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: isMobile ? 14 : 15,
              color: loadingLine > i
                ? 'var(--text-primary)'
                : loadingLine === i
                ? 'var(--text-secondary)'
                : 'var(--text-disabled)',
              marginBottom: 10,
              transition: 'color 500ms ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            {loadingLine > i && (
              <span style={{
                color: 'var(--brand-green)',
                animation: 'checkBounce 0.4s ease both',
                fontWeight: 700,
              }}>✓</span>
            )}
            {loadingLine === i && (
              <span style={{
                display: 'inline-block',
                width: 10, height: 10,
                borderRadius: '50%',
                border: '1.5px solid var(--bg-elevated)',
                borderTopColor: 'var(--brand-blue)',
                animation: 'spin360 0.6s linear infinite',
              }} />
            )}
            {line}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{
        position: 'absolute', bottom: 60,
        width: 240, height: 2,
        background: 'var(--bg-elevated)',
        borderRadius: 2, overflow: 'hidden', zIndex: 1,
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, var(--brand-blue), var(--brand-green))',
          animation: 'progressFill 3s cubic-bezier(0.4,0,0.2,1) forwards',
        }} />
      </div>

      <div style={{
        position: 'absolute', bottom: 28,
        fontFamily: 'var(--font-body)',
        fontSize: 11,
        fontWeight: 400,
        color: 'var(--text-muted)',
        letterSpacing: '0.04em',
        zIndex: 1,
        opacity: 0.6,
      }}>
        Your academic edge, loading...
      </div>
    </div>
  );

  // ── SCREEN 8 - Vapour Text Welcome ─────────────────────────
  if (step === 8) return (
    <div
      data-theme="light"
      style={{
        position: 'fixed', inset: 0,
        background: '#FFFFFF',
        colorScheme: 'light',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '20px',
        zIndex: 1000,
      }}
    >
      {/* PADH.AI logo mark */}
      <img 
        src="/logo_nobg.png" 
        alt="PADH.AI"
        style={{
          width: 52, height: 52,
          borderRadius: 14,
          opacity: 0,
          animation: 'fadeIn 0.6s ease-out 0.3s forwards',
          boxShadow: '0 8px 24px rgba(45,129,247,0.18)',
          objectFit: "contain",
        }}
      />

      {/* Welcome message - simple fade-in instead of VapourText */}
      <div style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: isMobile ? 30 : 48,
        color: 'var(--text-primary)',
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        textAlign: 'center',
        opacity: 0,
        animation: 'fadeIn 0.8s ease-out 0.7s forwards',
        padding: '0 24px',
      }}>
        Welcome to PADH.AI
      </div>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '13px',
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        opacity: 0,
        animation: 'fadeIn 0.6s ease-out 1.4s forwards',
        margin: 0,
        fontWeight: 500,
      }}>
        CBSE Class 10 &middot; Board Prep
      </p>
    </div>
  );

  return null;
}
