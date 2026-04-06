"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import AnimatedHeading from "./AnimatedHeading";

const reviews = [
  {
    text:
      "They joined us when momentum was fading and we were getting hit with FUD attacks. Within days they repositioned our narrative, activated their KOL network, and the chart moved. We went from overlooked to one of the most talked about projects on CT that week.",
    client: "Team Alephium",
    avatar: "/images/review_avatar_2.png",
  },
  {
    text:
      "For almost a year, we were stuck at 2k followers on X. They improved our content strategy and amplified reach through their network. Within weeks, we grew past 10K+",
    client: "David McDaniel, Coindepo",
    avatar: "/images/review_avatar_1.png",
  },
  {
    text:
      "We hired them right before our token launch and it was the best decision we made. They coordinated KOLs and built hype. Within days we closed listings with top exchanges.",
    client: "Team Quack AI",
    avatar: "/images/review_avatar_3.png",
  },
  {
    text:
      "They understood exactly how to push our memecoin narrative and bring it to the right audience. As soon the market started recognizing the story, the chart went parabolic within days.",
    client: "Anonymous, Memecoin",
    avatar: "/images/review_avatar_4.png",
  },
];

export default function ClientReview() {
  const baseOrder = useMemo(() => reviews.map((_, index) => index), []);
  const [cardOrder, setCardOrder] = useState(baseOrder);
  const [flyDirection, setFlyDirection] = useState<"next" | "prev" | null>(null);
  const [exitingIndex, setExitingIndex] = useState<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const activeIndex = cardOrder[0];
  const total = reviews.length;
  const progress = ((activeIndex + 1) / total) * 100;

  const triggerSlide = (direction: "next" | "prev") => {
    if (flyDirection) {
      return;
    }

    const outgoingIndex = cardOrder[0];
    setFlyDirection(direction);
    setExitingIndex(outgoingIndex);

    setCardOrder((prev) => {
      const updated = [...prev];
      if (direction === "next") {
        const first = updated.shift();
        if (first !== undefined) {
          updated.push(first);
        }
      } else {
        const last = updated.pop();
        if (last !== undefined) {
          updated.unshift(last);
        }
      }
      return updated;
    });

    timeoutRef.current = window.setTimeout(() => {
      setExitingIndex(null);
      setFlyDirection(null);
    }, 620);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const topReview = reviews[cardOrder[0]];
  const middleReview = reviews[cardOrder[1]];
  const backReview = reviews[cardOrder[2]];
  const exitingReview = exitingIndex !== null ? reviews[exitingIndex] : null;

  const renderCard = (
    review: (typeof reviews)[number],
    className: string,
    isMain = false
  ) => (
    <article className={className}>
      <div className="clientReview-cardQuoteMark clientReview-cardQuoteMark--left">&ldquo;</div>
      <p className="clientReview-text">{review.text}</p>
      <div className="clientReview-footer">
        <div className="clientReview-client">
          <img src={review.avatar} alt={review.client} className="clientReview-avatar" />
          <span className="clientReview-clientName">{review.client}</span>
        </div>
        <div className="clientReview-cardQuoteMark clientReview-cardQuoteMark--right">
          &rdquo;
        </div>
      </div>
      {!isMain ? <div className="clientReview-cardOverlay" aria-hidden="true" /> : null}
    </article>
  );

  return (
    <section className="clientReviewSection" aria-labelledby="client-review-title">
      <div className="clientReview-inner">
        <header className="clientReview-header">
          <AnimatedHeading as="h2" id="client-review-title" className="clientReview-title" variant="up">
            <span className="clientReview-titleSans">CLIENT&apos;S</span>
            <span className="clientReview-titleSerif">
              REVIEWS ABOUT
              <br />
              OUR WORK
            </span>
          </AnimatedHeading>
        </header>

        <div className={`clientReview-stack${flyDirection ? " is-animating" : ""}`}>
          {renderCard(
            backReview,
            "clientReview-card clientReview-cardStackItem clientReview-cardStackItem--back"
          )}
          {renderCard(
            middleReview,
            "clientReview-card clientReview-cardStackItem clientReview-cardStackItem--middle"
          )}
          {renderCard(
            topReview,
            "clientReview-card clientReview-cardStackItem clientReview-cardStackItem--top",
            true
          )}
          {exitingReview
            ? renderCard(
                exitingReview,
                `clientReview-card clientReview-cardStackItem clientReview-cardStackItem--ghost clientReview-cardStackItem--fly-${flyDirection}`
              )
            : null}
        </div>

        <div className="clientReview-controls">
          <div className="clientReview-progress">
            <div className="clientReview-progressTrack">
              <div
                className="clientReview-progressBar"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="clientReview-dots" aria-hidden="true">
              {reviews.map((_, index) => (
                <span
                  key={index}
                  className={
                    "clientReview-dot" +
                    (index === activeIndex ? " clientReview-dot--active" : "")
                  }
                />
              ))}
            </div>
          </div>
          <div className="clientReview-arrows">
            <button
              type="button"
              className="clientReview-arrowBtn clientReview-arrowBtn--prev"
              aria-label="Previous review"
              onClick={() => triggerSlide("prev")}
            >
              <span className="clientReview-arrowIcon">&#8592;</span>
            </button>
            <button
              type="button"
              className="clientReview-arrowBtn clientReview-arrowBtn--next"
              aria-label="Next review"
              onClick={() => triggerSlide("next")}
            >
              <span className="clientReview-arrowIcon">&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

