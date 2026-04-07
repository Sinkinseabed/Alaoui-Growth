"use client";

import { useState } from "react";
import AnimatedHeading from "./AnimatedHeading";

const faqItems = [
  {
    question: "How does working with Alaoui Growth actually work?",
    answer:
      "It starts with strategy where we learn about your project, goals and current traction. If it's a fit, we put together a tailored growth plan. Once aligned, we deal within 24 hours.",
  },
  {
    question: "How does the X-boost service work?",
    answer:
      "We amplify your content through a network of active Web3 accounts. No bots, no coordinated like-farms. We identify your highest potential and time it for the best reach to get it in front of the right crypto audiences. The result is as organic as possible, we can start a campaign based on your current followers to make it grow steadily over days or weeks.",
  },
  {
    question: "Can you help before Token Generation Event (TGE)?",
    answer:
      "Pre-TGE is where the REAL leverage is. We help you build narrative momentum and KOL relationships before launch. A strong waitlist and content means your TGE sells itself.",
  },
  {
    question: "Stance on KOL marketing, is it still worth it?",
    answer:
      "Blind KOL blasts and farmers are dead.\n\nWe work with TOP KOLs who have real pull and only promote projects they truly understand. Co written threads, spaces and strong ecosystem positioning.",
  },
  {
    question: "Do you handle FUD and narrative attacks?",
    answer:
      "Speed and substance. We develop a crisis playbook BEFORE you even need it. Pre-approved responses, transparent communication and a network of credible voices who can validate your project publicly.\n\nWhen FUD hits, you won't be scrambling.",
  },
  {
    question: "What types of projects do you turn down?",
    answer:
      "We are selective. We don't accept any form of KOL farming, standard pump and dump tokens or projects under <$100K market cap. Our reputation is our product so we only work with clients who are genuine experts in their field.\n\nIt has to be a WIN WIN for both sides.",
  },
  {
    question: "What does it cost to work with you?",
    answer:
      "Pricing depends on the scope and stage of your project. We offer custom packages for projects, up to fullscale growth operations for established protocols.\n\nWe don't publish fixed rates because we don't believe in one size fits-all approach. We'll give you a transparent breakdown based on what YOU need. We accept both stablecoins and tokens as payment, with the right terms.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faqSection" id="faq" aria-labelledby="faq-heading">
      <AnimatedHeading className="faqTitle" variant="left">FAQ</AnimatedHeading>
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
                aria-hidden={!isOpen}
                className={`faqAccordionPanel${isOpen ? " faqAccordionPanel--open" : ""}`}
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
