'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const row1 = [1, 2, 3, 4, 5];
const row2 = [6, 7, 8, 9, 10];

function MarqueeRow({ items, reverse = false, isMobile = false, duration = 40 }: { items: number[], reverse?: boolean, isMobile?: boolean, duration?: number }) {
  // Height should be relatively small so the wide images fit nicely
  const cardHeight = isMobile ? 80 : 120;
  // Based on aspect ratio ~5.3, width will be ~ 424px mobile, 636px desktop
  const cardWidth = isMobile ? 424 : 636;

  return (
    <div
      style={{
        display: 'flex',
        gap: isMobile ? '16px' : '24px',
        width: 'max-content',
        animation: `scroll-horizontal ${duration}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
        paddingLeft: isMobile ? '8px' : '12px',
        paddingRight: isMobile ? '8px' : '12px',
      }}
    >
      {[...items, ...items, ...items].map((id, index) => (
        <div
          key={`${id}-${index}`}
          style={{
            height: cardHeight,
            width: cardWidth,
            flexShrink: 0,
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)',
            position: 'relative',
            backgroundColor: '#ffffff',
          }}
        >
          <Image
            src={`/landing/student-voices/comment-${id}.jpeg`}
            alt={`Student Voice ${id}`}
            fill
            sizes="(max-width: 768px) 424px, 636px"
            style={{ objectFit: 'contain', backgroundColor: '#fff' }}
            unoptimized={true}
          />
        </div>
      ))}
    </div>
  );
}

export default function ShuffleCards({
  onContinue,
  isMobile = false,
}: {
  onContinue: () => void;
  isMobile?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#F0F4F8',
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333% - ${isMobile ? 5 : 8}px)); }
        }
      `}} />
      
      {/* Fixed Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          position: 'absolute',
          top: isMobile ? '40px' : '60px',
          left: 0,
          right: 0,
          textAlign: 'center',
          zIndex: 20,
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? '24px' : '36px',
            fontWeight: 800,
            color: '#1A1A1A',
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          Trusted by Top Scorers
        </h2>
        <p
          style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#666',
            marginTop: '8px',
            maxWidth: '300px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Join thousands of students upgrading their board prep.
        </p>
      </motion.div>

      {/* Horizontal Marquee Wrapper */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '16px' : '24px',
        width: '100vw',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        marginTop: isMobile ? '20px' : '0px',
      }}>
        <MarqueeRow items={row1} isMobile={isMobile} duration={46} />
        <MarqueeRow items={row2} reverse isMobile={isMobile} duration={52} />
      </div>

      {/* Fixed Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: isMobile ? '40px' : '60px',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          zIndex: 20,
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          style={{
            padding: isMobile ? '16px 40px' : '18px 56px',
            background: 'linear-gradient(135deg, #1A1A1A 0%, #333 100%)',
            color: 'white',
            fontSize: isMobile ? '16px' : '18px',
            fontWeight: 600,
            borderRadius: '999px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          Continue to Checkout
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
