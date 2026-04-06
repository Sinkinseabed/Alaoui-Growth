import AnimatedHeading from "./AnimatedHeading";

export default function OurOffering() {
  const offeringCards = [
    {
      icon: "/images/offering_1.png",
      title: "Alaoui Audit",
      description:
        "We offer strategic advisory services to navigate the complexities of blockchain marketing, NFT growth, and Web3 strategies.",
    },
    {
      icon: "/images/offering_2.png",
      title: "Influencer Marketing",
      description:
        "We create targeted Web3 influencer marketing campaigns that amplify visibility, credibility, and user engagement.",
    },
    {
      icon: "/images/offering_3.png",
      title: "X Boost",
      description:
        "Boost follower growth and maximize campaign impact.",
    },
    {
      icon: "/images/offering_4.png",
      title: "Social Media Management",
      description:
        "We strategically manage your Web3 social media channels to drive engagement, awareness, and community growth.",
    },
    {
      icon: "/images/offering_5.png",
      title: "Investment / KOLs Round",
      description:
        "Structured investment in Web3 startups after institutional-grade due diligence.",
    },
    {
      icon: "/images/offering_6.png",
      title: "Partnership Management",
      description:
        "We establish strategic blockchain partnerships aligned with your project's long-term growth objectives.",
    },
    {
      icon: "/images/offering_7.png",
      title: "Design",
      description:
        "Our experienced design team delivers captivating visual identities, UI/UX, and marketing assets optimized for blockchain, NFT, and Web3 audiences.",
    },
    {
      icon: "/images/offering_8_new.png",
      title: "Development",
      description:
        "We provide technical expertise to build, launch, and scale blockchain-based projects, NFT platforms, and decentralized applications.",
    },
  ];

  return (
    <section className="offeringSection" id="services">
      <div className="offeringHeader">
        <AnimatedHeading className="offeringTitle" variant="up">OUR OFFERINGS</AnimatedHeading>
        <AnimatedHeading as="p" className="offeringSubTitle" variant="up" delayMs={120}>One stop solution for everything web3.0</AnimatedHeading>
      </div>

      <div className="offeringGrid">
        {offeringCards.map((card) => (
          <article key={card.title} className="offeringCard">
            <div className="offeringCardIcon">
              <img src={card.icon} alt={card.icon} />
            </div>
            <h3 className="offeringCardTitle">{card.title}</h3>
            <p className="offeringCardDescription">{card.description}</p>
          </article>
        ))}
      </div>

      <p className="offeringFooterText">GROW NEXT LEVEL WITH YOUR PROJECT</p>
    </section>
  );
}