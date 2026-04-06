import AnimatedHeading from "./AnimatedHeading";

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
          <AnimatedHeading as="p" className="footerNavTitle" variant="up">Navigation</AnimatedHeading>
          <nav className="footerNavLinks" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footerNavLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footerSocial">
          <a
            className="footerSocialBtn"
            href="https://x.com/alaouicapital"
            aria-label="X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/social_1.png" />
          </a>
          <a
            className="footerSocialBtn"
            href="https://t.me/alaoui_capital"
            aria-label="Telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
                        <img src="/images/social_2.png" />

          </a>
        </div>
      </div>

      <div className="footerBottom">
        <p className="footerBottomText">
          Alaoui Growth © 2026, All rights reserved
        </p>
      </div>
    </footer>
  );
}

