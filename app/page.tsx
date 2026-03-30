import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ControlLiquidity from "./components/ControlLiquidity";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import OurOffering from "./components/OurOffering";
import WhoWe from "./components/WhoWe";

export default function Home() {
  return (
    <main className="landingPage">
      <div className="landing-hero">

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


          </div>


        </section>
        <section className="landingStatsWrap-main">
          <div className="landing-info landing-info-left landingStatsWrap">
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

            

          </div>
          <div className="landing-info landing-info-middle">
              <button type="button" className="landingCta">
                Connect With Us
              </button>
              <div className="landingScrollArea">
                <div className="landingArrow"><img src="/images/arrow.png"/></div>
                <p className="landingScrollText">Scroll To Explore</p>
              </div>
            </div>
          <aside className="landing-info landing-info-right ">
            <div className="landingPartners">
            <p className="landingPartnersTitle">
              OUR PARTNERS
            </p>
            <div className="landingPartnersGrid">
                <div  className="landingPartnerLogo">
                  <img src={'/images/partner_1.png'} />
                </div>
                <div  className="landingPartnerLogo">
                  <img src={'/images/partner_2.png'} />
                </div>
                <div  className="landingPartnerLogo">
                  <img src={'/images/partner_3.png'} />
                </div>
                <div  className="landingPartnerLogo">
                  <img src={'/images/partner_4.png'} />
                </div>
                <div  className="landingPartnerLogo">
                  <img src={'/images/partner_5.png'} />
                </div>
                <div  className="landingPartnerLogo">
                  <img src={'/images/partner_6.png'} />
                </div>
            </div>
            <p className="landingPartnersFooter">
              And many more...
            </p>
            </div>
          </aside>
        </section>
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
        <ControlLiquidity />

        <Footer />
    </main>
  );
}
