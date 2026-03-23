export default function OurOffering() {
  const offeringCards = [
    {
      icon: "✦",
      title: "Alaoui Audit",
      description:
        "We offer strategic advisory services to navigate the complexities of blockchain marketing and Web3 growth.",
    },
    {
      icon: "📣",
      title: "Influencer Marketing",
      description:
        "We create targeted Web3 influencer campaigns that build trust, visibility, and user engagement.",
    },
    {
      icon: "📈",
      title: "X Boost",
      description:
        "Boost follower growth and maximize campaign impact with high-performing X strategies.",
    },
    {
      icon: "◎",
      title: "Social Media Management",
      description:
        "End-to-end social media management focused on awareness, community, and conversions.",
    },
    {
      icon: "↗",
      title: "Investment / KOLs Round",
      description:
        "We structure investor and KOL rounds with strategic positioning and execution support.",
    },
    {
      icon: "🤝",
      title: "Partnership Management",
      description:
        "Build meaningful Web3 partnerships aligned with your project's long-term growth goals.",
    },
    {
      icon: "◫",
      title: "Design",
      description:
        "User-centric brand and product design crafted for modern Web3 communities and products.",
    },
    {
      icon: "</>",
      title: "Development",
      description:
        "Technical execution for landing pages, NFT flows, and growth-focused product experiences.",
    },
  ];

  return (
    <section className="offeringSection" id="services">
      <div className="offeringHeader">
        <h2 className="offeringTitle">OUR OFFERINGS</h2>
        <p className="offeringSubTitle">ONE STOP SOLUTION FOR EVERYTHING WEB3</p>
      </div>

      <div className="offeringGrid">
        {offeringCards.map((card) => (
          <article key={card.title} className="offeringCard">
            <div className="offeringCardIcon">{card.icon}</div>
            <h3 className="offeringCardTitle">{card.title}</h3>
            <p className="offeringCardDescription">{card.description}</p>
          </article>
        ))}
      </div>

      <p className="offeringFooterText">GROW NEXT LEVEL WITH YOUR PROJECT</p>
    </section>
  );
}