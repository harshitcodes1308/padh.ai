'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const row1 = [1, 2, 3, 4, 5];
const row2 = [6, 7, 8, 9, 10];

function MarqueeRow({ items, reverse = false, isMobile = false }: { items: number[], reverse?: boolean, isMobile?: boolean }) {
  const cardWidth = isMobile ? 220 : 300;
  const cardHeight = isMobile ? 320 : 420;

  return (
    <div
      style={{
        display: 'flex',
        gap: isMobile ? '16px' : '24px',
        width: 'max-content',
        animation: `scroll 30s linear infinite ${reverse ? 'reverse' : 'normal'}`,
        paddingLeft: isMobile ? '8px' : '12px',
        paddingRight: isMobile ? '8px' : '12px',
      }}
    >
      {[...items, ...items].map((id, index) => (
        <div
          key={`${id}-${index}`}
          style={{
            width: cardWidth,
            height: cardHeight,
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
            sizes="(max-width: 768px) 220px, 300px"
            style={{ objectFit: 'cover' }}
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
        padding: isMobile ? '20px 0' : '40px 0',
        overflow: 'hidden',
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - ${isMobile ? 8 : 12}px)); }
        }
      `}} />
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '16px' : '24px',
        width: '100vw',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}>
        <MarqueeRow items={row1} isMobile={isMobile} />
        <MarqueeRow items={row2} reverse isMobile={isMobile} />
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onContinue}
        style={{
          marginTop: isMobile ? '32px' : '48px',
          padding: isMobile ? '14px 40px' : '16px 56px',
          background: 'linear-gradient(135deg, #1A1A1A 0%, #333 100%)',
          color: 'white',
          fontSize: isMobile ? '16px' : '18px',
          fontWeight: 600,
          borderRadius: '999px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          zIndex: 10,
        }}
      >
        Continue to Checkout →
      </motion.button>
    </motion.div>
  );
}
