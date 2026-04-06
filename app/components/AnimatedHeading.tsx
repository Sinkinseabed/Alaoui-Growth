"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type HeadingVariant = "up" | "left" | "right";
type HeadingTag = "h1" | "h2" | "h3" | "p";

type AnimatedHeadingProps = {
  as?: HeadingTag;
  className?: string;
  children: ReactNode;
  variant?: HeadingVariant;
  delayMs?: number;
  id?: string;
};

export default function AnimatedHeading({
  as: Tag = "h2",
  className = "",
  children,
  variant = "up",
  delayMs = 0,
  id,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement | HTMLParagraphElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const animationClass =
    variant === "left"
      ? "animatedHeading--left"
      : variant === "right"
      ? "animatedHeading--right"
      : "animatedHeading--up";

  return (
    <Tag
      ref={ref}
      id={id}
      className={`animatedHeading ${animationClass} ${
        isVisible ? "animatedHeading--visible" : ""
      } ${className}`.trim()}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </Tag>
  );
}
