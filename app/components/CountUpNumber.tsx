"use client";

import { useEffect, useState } from "react";

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
  const [value, setValue] = useState(0);

  useEffect(() => {
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
  }, [target, durationMs]);

  return <span className={className}>{`${value}${suffix}`}</span>;
}
