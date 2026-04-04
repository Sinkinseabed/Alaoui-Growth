"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "How does working with Alaoui Growth actually work?",
    answer:
      "We align on your goals in a discovery phase, then combine narrative positioning, community activation, and campaign execution in a clear roadmap. You get regular reporting and iteration based on what the data and sentiment show.",
  },
  {
    question: "How does the X Boost service work?",
    answer:
      "X Boost focuses on amplifying your message on X through coordinated content, timing, and creator touchpoints so your narrative breaks through noise without feeling spammy.",
  },
  {
    question: "Can you help before Token Generation Event (TGE)?",
    answer:
      "Yes. Pre-TGE is often where narrative and community are set. We can help with positioning, teaser campaigns, and building anticipation so launch day has real momentum.",
  },
  {
    question: "Stance on KOL marketing, is it still worth it?",
    answer:
      "KOLs still move attention when chosen for fit and credibility—not follower count alone. We prioritize partners who understand your product and audience so endorsements feel authentic.",
  },
  {
    question: "Do you handle FUD and narrative attacks?",
    answer:
      "We help you respond with clear facts, consistent messaging, and coordinated comms so your community hears your voice first—not only reactive noise.",
  },
  {
    question: "What types of projects do you turn down?",
    answer:
      "We pass on projects that require misleading claims, pump-and-dump style promotion, or anything that doesn’t align with how we build sustainable attention.",
  },
  {
    question: "What does it cost to work with you?",
    answer:
      "Engagements vary by scope and timeline. After a short intro call we share a proposal with clear deliverables and pricing—no surprise fees buried in the fine print.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faqSection" id="faq" aria-labelledby="faq-heading">
      <h2 className="faqTitle">FAQ</h2>
      <p className="faqSubtitle">Frequently Asked Questions</p>

      <div className="faqAccordionList">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          return (
            <div
              key={item.question}
              className={`faqAccordionItem${isOpen ? " faqAccordionItem--open" : ""}`}
            >
              <button
                type="button"
                className="faqAccordionHeader"
                aria-expanded={isOpen}
                aria-controls={panelId}
                id={`faq-trigger-${index}`}
                onClick={() => toggle(index)}
              >
                <span className="faqAccordionQuestion">
                  Q. {item.question}
                </span>
                <span className="faqAccordionToggle" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={`faq-trigger-${index}`}
                className="faqAccordionPanel"
                hidden={!isOpen}
              >
                <div className="faqAccordionDivider" />
                <p className="faqAccordionAnswer">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
