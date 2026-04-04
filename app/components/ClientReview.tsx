"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const reviews = [
  {
    text:
      "They joined us when momentum was fading and we were getting hit with FUD attacks. Within days they repositioned our narrative, activated their KOL network, and the chart moved. We went from overlooked to one of the most talked about projects on CT that week.",
    client: "Team Alephium",
  },
  {
    text:
      "The team understood our on-chain story immediately and helped us communicate it in language our community actually cared about. Engagement, sentiment, and volume all lifted within a single campaign cycle.",
    client: "Core Contributors, DeFi Protocol",
  },
  {
    text:
      "From concept to launch, they engineered a narrative that made our token impossible to ignore. The campaign felt native to CT culture while still being on-brand and compliant.",
    client: "Founding Team, Ecosystem Project",
  },
];

export default function ClientReview() {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = reviews.length;
  const progress = ((activeIndex + 1) / total) * 100;

  return (
    <section className="clientReviewSection" aria-labelledby="client-review-title">
      <div className="clientReview-inner">
        <header className="clientReview-header">
          <h2 id="client-review-title" className="clientReview-title">
            <span className="clientReview-titleSans">CLIENT&apos;S</span>
            <span className="clientReview-titleSerif">
              REVIEWS ABOUT
              <br />
              OUR WORK
            </span>
          </h2>
        </header>

        <div className="clientReview-stack">
          <div className="clientReview-card clientReview-cardShadow clientReview-cardShadowBack" />
          <div className="clientReview-card clientReview-cardShadow" />

          <Swiper
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            slidesPerView={1}
            speed={420}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            navigation={{
              prevEl: ".clientReview-arrowBtn--prev",
              nextEl: ".clientReview-arrowBtn--next",
            }}
            pagination={false}
            className="clientReview-swiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.client}>
                <article className="clientReview-card clientReview-cardMain">
                  <div className="clientReview-cardQuoteMark clientReview-cardQuoteMark--left">
                    &ldquo;
                  </div>
                  <p className="clientReview-text">{review.text}</p>
                  <div className="clientReview-footer">
                    <div className="clientReview-client">
                      <img
                        src="/images/slider-icon.png"
                        alt={review.client}
                        className="clientReview-avatar"
                      />
                      <span className="clientReview-clientName">{review.client}</span>
                    </div>
                    <div className="clientReview-cardQuoteMark clientReview-cardQuoteMark--right">
                      &rdquo;
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
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
            >
              <span className="clientReview-arrowIcon">&#8592;</span>
            </button>
            <button
              type="button"
              className="clientReview-arrowBtn clientReview-arrowBtn--next"
              aria-label="Next review"
            >
              <span className="clientReview-arrowIcon">&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

