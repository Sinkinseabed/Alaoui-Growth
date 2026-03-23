import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import OurOffering from "./components/OurOffering";
import WhoWe from "./components/WhoWe";

export default function Home() {
  return (
    <main className="landingPage">
      <div className="landingBgGlow" />
      <div className="landingBgNoise" />

      <div className="landingContainer">
        <Header />

        <section className="landingHero">
          <div className="landingLeftContent">
            <h1 className="landingTitle">
              TURN ATTENTION
              <br />
              INTO{" "}
              <span className="landingLiquidity">
                LIQUIDITY
              </span>
            </h1>

            <p className="landingSubtitle">
              Web3 growth engine to turn attention into viral growth
            </p>

            <button type="button" className="landingCta">
              Connect With Us
            </button>
          </div>

          <aside className="landingPartners">
            <p className="landingPartnersTitle">
              OUR PARTNERS
            </p>
            <div className="landingPartnersGrid">
              {["∞", "◐", "◍", "S", "△", "◈"].map((logo) => (
                <div key={logo} className="landingPartnerLogo">
                  {logo}
                </div>
              ))}
            </div>
            <p className="landingPartnersFooter">
              AND MANY MORE...
            </p>
          </aside>
        </section>

        <div className="landingStatsWrap">
          <div className="landingStats">
            <p>
              <span className="landingStatValue">100M+</span>{" "}
              <span className="landingStatLabel">SOCIAL MEDIA IMPRESSIONS</span>
            </p>
            <p>
              <span className="landingStatValue">50+</span>{" "}
              <span className="landingStatLabel">STRATEGIC PARTNERS</span>
            </p>
            <p>
              <span className="landingStatValue">5+</span>{" "}
              <span className="landingStatLabel">YEARS OF WEB 3.0 EXPERIENCE</span>
            </p>
          </div>

          <div className="landingScrollArea">
            <div className="landingArrow">↓</div>
            <p className="landingScrollText">Scroll To Explore</p>
          </div>
        </div>

        <div className="landingWaves">
          <svg viewBox="0 0 1440 300" className="landingWavesSvg">
            <path
              d="M0 170 C200 130, 360 220, 540 180 C720 140, 860 210, 1040 170 C1180 140, 1320 200, 1440 165"
              fill="none"
              stroke="rgba(216,193,143,0.35)"
              strokeWidth="1.5"
            />
            <path
              d="M0 230 C240 180, 380 260, 560 225 C720 195, 900 260, 1080 230 C1240 205, 1360 240, 1440 225"
              fill="none"
              stroke="rgba(216,193,143,0.25)"
              strokeWidth="1.2"
            />
          </svg>
        </div>

        <OurOffering />
        <WhoWe />
        <AboutUs />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
