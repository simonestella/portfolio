"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const ringX = useSpring(x, { damping: 22, stiffness: 280, mass: 0.5 });
  const ringY = useSpring(y, { damping: 22, stiffness: 280, mass: 0.5 });

  useEffect(() => {
    setMounted(true);
    const fine = window.matchMedia("(pointer: fine)").matches;
    setIsFinePointer(fine);
    if (!fine) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);
      const target = e.target as Element;
      setIsPointer(!!target.closest("a, button, [role='button'], label, summary"));
    };
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [x, y]);

  if (!mounted || !isFinePointer) return null;

  return (
    <>
      {/* Dot — exact position */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full bg-[var(--apple-blue)]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: isVisible ? 1 : 0,
          width: isPointer ? 8 : 5,
          height: isPointer ? 8 : 5,
          scale: isPointer ? 1.1 : 1,
        }}
        transition={{ duration: 0.12 }}
      />
      {/* Ring — spring lag */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full transition-colors duration-150"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: "var(--apple-blue)",
          borderWidth: "1.5px",
          borderStyle: "solid",
          backgroundColor: isPointer ? "rgba(0, 113, 227, 0.08)" : "transparent",
        }}
        animate={{
          opacity: isVisible ? 0.65 : 0,
          width: isPointer ? 44 : 28,
          height: isPointer ? 44 : 28,
        }}
        transition={{ duration: 0.18 }}
      />
    </>
  );
}
