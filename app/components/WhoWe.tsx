const partnerLogos = [
  { name: "Wave", mark: "◉", bg: "whoWeLogoA" },
  { name: "1inch", mark: "1\"", bg: "whoWeLogoB" },
  { name: "Tee", mark: "T", bg: "whoWeLogoC" },
  { name: "Dots", mark: "⋮⋮", bg: "whoWeLogoD" },
  { name: "Pixel", mark: "▣", bg: "whoWeLogoE" },
  { name: "Target", mark: "◌", bg: "whoWeLogoF" },
  { name: "World Liberty", mark: "🕊", bg: "whoWeLogoG" },
  { name: "Smile", mark: "☻", bg: "whoWeLogoH" },
  { name: "Sphere", mark: "◓", bg: "whoWeLogoI" },
  { name: "Pulse", mark: "◍", bg: "whoWeLogoJ" },
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
        WE HELP WEB3 BRANDS DEFINE THEIR POSITIONING, REACH THE RIGHT AUDIENCE,
        AND CREATE THE MOMENTUM NEEDED TO GROW. EVEN MEMECOINS BUILT FOR
        MAINSTREAM PARABOLIC GROWTH.
      </p>

      <div className="whoWeGrid">
        {partnerLogos.map((logo) => (
          <article
            key={logo.name}
            className={`whoWeLogoCard ${logo.bg}`}
            aria-label={logo.name}
            title={logo.name}
          >
            <span className="whoWeLogoMark">{logo.mark}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
