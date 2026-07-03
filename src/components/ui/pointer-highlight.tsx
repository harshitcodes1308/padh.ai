"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function PointerHighlight({
  children,
  rectangleClassName,
  pointerClassName,
  containerClassName,
}: {
  children: React.ReactNode;
  rectangleClassName?: string;
  pointerClassName?: string;
  containerClassName?: string;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <span
      className={cn("relative inline-block", containerClassName)}
      style={{ position: "relative", display: "inline-block", width: "max-content" }}
      ref={containerRef}
    >
      {children}
      {dimensions.width > 0 && dimensions.height > 0 && (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 0 }}
        >
          <motion.div
            className={cn(
              "absolute border border-blue-500/50 bg-blue-500/10 dark:border-blue-400/50 dark:bg-blue-400/10",
              rectangleClassName,
            )}
            style={{ position: "absolute", top: 0, left: 0, borderRadius: "2px" }}
            initial={{
              width: 0,
              height: 0,
              opacity: 0,
            }}
            animate={{
              width: [0, 0, dimensions.width, dimensions.width, dimensions.width, 0],
              height: [0, 0, dimensions.height, dimensions.height, dimensions.height, 0],
              opacity: [0, 0, 1, 1, 0, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              times: [0, 0.15, 0.45, 0.75, 0.9, 1.0],
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="pointer-events-none absolute"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 1, 0, 0],
              x: [0, 0, dimensions.width + 4, dimensions.width + 4, dimensions.width + 4, 0],
              y: [0, 0, dimensions.height + 4, dimensions.height + 4, dimensions.height + 4, 0],
            }}
            style={{
              position: "absolute", 
              top: 0,
              left: 0,
              pointerEvents: "none",
              rotate: -90,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              times: [0, 0.15, 0.45, 0.75, 0.9, 1.0],
              ease: "easeInOut",
            }}
          >
            <Pointer
              className={cn("h-5 w-5 text-blue-500 dark:text-blue-400", pointerClassName)}
            />
          </motion.div>
        </div>
      )}
    </span>
  );
}

const Pointer = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
    </svg>
  );
};
