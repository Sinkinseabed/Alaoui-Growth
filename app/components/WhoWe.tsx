import path from "path";

const partnerLogos = [
  { name: "Wave", path: "/images/worked_1.png", bg: "whoWeLogoA" },
  { name: "1inch", path: "/images/worked_2.png", bg: "whoWeLogoB" },
  { name: "Tee", path: "/images/worked_3.png", bg: "whoWeLogoC" },
  { name: "Dots", path: "/images/worked_4.png", bg: "whoWeLogoD" },
  { name: "Pixel", path: "/images/worked_5.png", bg: "whoWeLogoE" },
  { name: "Target", path: "/images/worked_6.png", bg: "whoWeLogoF" },
  { name: "World Liberty", path: "/images/worked_7.png", bg: "whoWeLogoG" },
  { name: "Smile", path: "/images/worked_8.png", bg: "whoWeLogoH" },
  { name: "Sphere", path: "/images/worked_9.png", bg: "whoWeLogoI" },
  { name: "Pulse", path: "/images/worked_10.png", bg: "whoWeLogoJ" },
];

export default function WhoWe() {
  return (
    <section className="whoWeSection" id="results">
      <h2 className="whoWeTitle">
        WHO WE HAVE
        <br />
        <span className="whoWeTitleAccent">WORKED WITH</span>
      </h2>

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
              <img src={logo.path} alt={logo.name}/>
          </article>
        ))}
      </div>
    </section>
  );
}
