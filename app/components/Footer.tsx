const navLinks = [
  { label: "SERVICES", href: "#services" },
  { label: "TEAM", href: "#team" },
  { label: "RESULTS", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="footerSection">
      <div className="footerInner">
        <div className="footerBrand">
          <div className="footerLogoMark" aria-hidden="true">
            <img src="/images/logo.png" />
          </div>
          <div className="footerBrandText">
            <p className="footerBrandName">Alaoui Growth</p>
            <p className="footerBrandTagline">ONE STOP SOLUTION FOR EVERYTHING WEB3.0</p>
          </div>
        </div>

        <div className="footerNav">
          <p className="footerNavTitle">Navigation</p>
          <nav className="footerNavLinks" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="footerNavLink">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footerSocial">
          <a className="footerSocialBtn" href="#" aria-label="X">
            <img src="/images/social_1.png" />
          </a>
          <a className="footerSocialBtn" href="#" aria-label="Telegram">
                        <img src="/images/social_2.png" />

          </a>
        </div>
      </div>

      <div className="footerBottom">
        <p className="footerBottomText">
          Alaoui Growth © 2026, All rights reserved{" "}
          <span className="footerBottomSep">|</span> Terms and Conditions{" "}
          <span className="footerBottomSep">|</span> Privacy Policy{" "}
          <span className="footerBottomSep">|</span>
        </p>
      </div>
    </footer>
  );
}

