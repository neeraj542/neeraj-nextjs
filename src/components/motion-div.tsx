"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface MotionDivProps {
  children: ReactNode; // Changed from ReactElement | string to ReactNode for broader compatibility
  delayOffset?: number;
  className?: string;
  initialY?: number;
  opacity?: number;
}

export default function MotionDiv({
  children,
  delayOffset = 0,
  className,
  initialY = 100,
  opacity = 0,
}: MotionDivProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative flex items-center justify-center", className)}
      initial={{ y: initialY, opacity: opacity }}
      animate={controls}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        delay: delayOffset,
      }}
    >
      {children}
    </motion.div>
  );
}
