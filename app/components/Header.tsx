import Image from "next/image";

export default function Header() {
  return (
    <header className="landingHeader">
      <div className="landingBrand">
        <span className="landingBrandIcon">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={80}
            height={80}
          />
        </span>
      </div>
      <div className="menu-icon mobile">
        <img src="/images/humberger.png" />
      </div>
      <nav className="landingNav">
        <a href="#services" className="landingNavLink">
          Services
        </a>
        <a href="#team" className="landingNavLink">
          Team
        </a>
        <a href="#results" className="landingNavLink">
          Results
        </a>
        <a href="#faq" className="landingNavLink">
          FAQs
        </a>
      </nav>
      <a type="button" className="landingChatBtn" href="https://t.me/alaoui_capital">
        Start Live Chat
      </a>
    </header>
  );
}