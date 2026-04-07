import AnimatedHeading from "./AnimatedHeading";

const partnerLogos = [
  { name: "Hyperliquid", path: "/images/worked_1.png", bg: "whoWeLogoA" },
  { name: "1inch", path: "/images/worked_2.png", bg: "whoWeLogoB" },
  { name: "Tutorial", path: "/images/worked_3.png", bg: "whoWeLogoC" },
  { name: "Fetch.ai", path: "/images/worked_4.png", bg: "whoWeLogoD" },
  { name: "Quack AI", path: "/images/worked_5.png", bg: "whoWeLogoE" },
  { name: "Defi App", path: "/images/worked_6.png", bg: "whoWeLogoF" },
  { name: "WLFI", path: "/images/worked_7.png", bg: "whoWeLogoG" },
  { name: "GiggleFund", path: "/images/worked_8.png", bg: "whoWeLogoH" },
  { name: "Plasma", path: "/images/worked_9.png", bg: "whoWeLogoI" },
  { name: "Theoriq", path: "/images/worked_10.png", bg: "whoWeLogoJ" },
];

export default function WhoWe() {
  return (
    <section className="whoWeSection" id="results">
      <div className="wrapper">
        <AnimatedHeading className="whoWeTitle" variant="left">
          WHO WE HAVE
          <br />
          <span className="whoWeTitleAccent">WORKED WITH</span>
        </AnimatedHeading>

        <p className="whoWeDescription">
          We help Web3 brands define their positioning, reach the right audience, and create the momentum needed to grow. Even memecoins built for mainstream parabolic growth.
        </p>

        <div className="whoWeGrid">
          {partnerLogos.map((logo) => (
            <article
              key={logo.name}
              className={`whoWeLogoCard`}
              aria-label={logo.name}
              title={logo.name}
            >
              <img src={logo.path} alt={logo.name} />
              <span className="whoWeLogoName">{logo.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
