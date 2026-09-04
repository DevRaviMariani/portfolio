"use client";

import { useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 50, y: 50 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    setPosition({ x: ((event.clientX - bounds.left) / bounds.width) * 100, y: ((event.clientY - bounds.top) / bounds.height) * 100 });
  }

  return (
    <div ref={ref} onPointerMove={handlePointerMove} className="hero-visual" aria-hidden="true" style={{ "--pointer-x": `${position.x}%`, "--pointer-y": `${position.y}%` } as React.CSSProperties}>
      <div className="hero-grid" />
      <div className="hero-orbit hero-orbit-a" />
      <div className="hero-orbit hero-orbit-b" />
      <div className="hero-line hero-line-a" />
      <div className="hero-line hero-line-b" />
      <span className="hero-node node-a" />
      <span className="hero-node node-b" />
      <span className="hero-node node-c" />
      <strong>RM<span>.</span></strong>
      <p>software / systems / intelligence</p>
    </div>
  );
}
