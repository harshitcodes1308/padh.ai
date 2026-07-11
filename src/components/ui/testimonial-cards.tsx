'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const allImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ShuffleCards({
  onContinue,
  isMobile = false,
}: {
  onContinue: () => void;
  isMobile?: boolean;
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'transparent',
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-50% - 12px)); }
        }
        .v-marquee-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
          animation: scroll-vertical 40s linear infinite;
          padding-top: 24px;
          padding-bottom: 24px;
        }
        .v-marquee-container:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Header Overlay - Fixed at top */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: isMobile ? '32px 16px 40px' : '48px 32px 60px',
          background: 'linear-gradient(to bottom, rgba(240,244,248,1) 30%, rgba(240,244,248,0) 100%)',
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

      {/* Vertical Scrolling Marquee Area */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          maskImage: 'linear-gradient(to bottom, transparent 5%, black 20%, black 80%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 5%, black 20%, black 80%, transparent 95%)',
        }}
      >
        <div className="v-marquee-container" style={{ width: '100%', maxWidth: '600px', padding: '0 16px' }}>
          {[...allImages, ...allImages].map((id, index) => (
            <div
              key={`${id}-${index}`}
              style={{
                width: '100%',
                // Use a padding-bottom hack to maintain aspect ratio, or just next/image intrinsic sizing
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0,0,0,0.05)',
                display: 'flex'
              }}
            >
              {/* Since we know they are roughly 1280x240 (~5.33 ratio), let's use next/image responsive layout */}
              <Image
                src={`/landing/student-voices/comment-${id}.jpeg`}
                alt={`Student Voice ${id}`}
                width={1280}
                height={240}
                sizes="(max-width: 600px) 100vw, 600px"
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                unoptimized={true}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button Overlay - Fixed at bottom */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: isMobile ? '40px 16px 32px' : '60px 32px 48px',
          background: 'linear-gradient(to top, rgba(240,244,248,1) 30%, rgba(240,244,248,0) 100%)',
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
    </div>
  );
}
