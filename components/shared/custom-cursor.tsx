"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const ringX = useSpring(x, { damping: 22, stiffness: 280, mass: 0.5 });
  const ringY = useSpring(y, { damping: 22, stiffness: 280, mass: 0.5 });

  const dotOpacity = useMotionValue(0);
  const ringOpacity = useMotionValue(0);
  const dotWidth = useMotionValue(5);
  const dotHeight = useMotionValue(5);
  const dotScale = useMotionValue(1);
  const ringWidth = useMotionValue(28);
  const ringHeight = useMotionValue(28);
  const ringBg = useMotionValue("transparent");

  const rafRef = useRef<number | null>(null);
  const isPointerRef = useRef(false);

  useEffect(() => {
    if (!globalThis.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      dotOpacity.set(1);
      ringOpacity.set(0.65);

      // throttle the DOM traversal to once per frame
      if (rafRef.current !== null) return;
      const target = e.target as Element;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const nowPointer = !!target.closest("a, button, [role='button'], label, summary");
        if (nowPointer === isPointerRef.current) return;
        isPointerRef.current = nowPointer;
        animate(dotWidth, nowPointer ? 8 : 5, { duration: 0.12 });
        animate(dotHeight, nowPointer ? 8 : 5, { duration: 0.12 });
        animate(dotScale, nowPointer ? 1.1 : 1, { duration: 0.12 });
        animate(ringWidth, nowPointer ? 44 : 28, { duration: 0.18 });
        animate(ringHeight, nowPointer ? 44 : 28, { duration: 0.18 });
        ringBg.set(nowPointer ? "rgba(0, 113, 227, 0.08)" : "transparent");
      });
    };

    const onLeave = () => { dotOpacity.set(0); ringOpacity.set(0); };
    const onEnter = () => { dotOpacity.set(1); ringOpacity.set(0.65); };

    globalThis.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      globalThis.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [x, y, dotOpacity, ringOpacity, dotWidth, dotHeight, dotScale, ringWidth, ringHeight, ringBg]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full bg-[var(--apple-blue)]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: dotOpacity,
          width: dotWidth,
          height: dotHeight,
          scale: dotScale,
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: ringOpacity,
          width: ringWidth,
          height: ringHeight,
          backgroundColor: ringBg,
          borderColor: "var(--apple-blue)",
          borderWidth: "1.5px",
          borderStyle: "solid",
        }}
      />
    </>
  );
}
