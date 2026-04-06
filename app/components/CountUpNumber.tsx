"use client";

import { useEffect, useRef, useState } from "react";

type CountUpNumberProps = {
  target: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

export default function CountUpNumber({
  target,
  suffix = "",
  durationMs = 2200,
  className,
}: CountUpNumberProps) {
  const valueRef = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    if (shouldStart) {
      return;
    }

    const isMobile = window.matchMedia("(max-width: 600px)").matches;

    if (!isMobile) {
      setShouldStart(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setShouldStart(true);
      return;
    }

    const element = valueRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldStart(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.45,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [shouldStart]);

  useEffect(() => {
    if (!shouldStart) {
      return;
    }

    let animationFrameId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(target * easedProgress);
      setValue(nextValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrameId);
  }, [shouldStart, target, durationMs]);

  return (
    <span ref={valueRef} className={className}>
      {`${value}${suffix}`}
    </span>
  );
}
