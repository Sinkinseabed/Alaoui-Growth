"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQs" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

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

      <button
        type="button"
        className="menu-icon mobile landingMenuToggle"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <img src="/images/humberger.png" alt="" width={28} height={28} />
      </button>

      <nav className="landingNav" aria-label="Main">
        {navLinks.map(({ href, label }) => (
          <a key={href} href={href} className="landingNavLink">
            {label}
          </a>
        ))}
      </nav>

      <a
        className="landingChatBtn"
        href="https://t.me/alaoui_capital"
        target="_blank"
        rel="noopener noreferrer"
      >
        Start Live Chat
      </a>

      <div
        className={`landingMobileNavBackdrop${menuOpen ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <div
        id="mobile-nav"
        className={`landingMobileNav${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="landingMobileNavHeader">
          <span className="landingMobileNavTitle">Menu</span>
          <button
            type="button"
            className="landingMobileNavClose"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>
        <nav className="landingMobileNavInner" aria-label="Mobile">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="landingMobileNavLink"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          className="landingMobileNavCta"
          href="https://t.me/alaoui_capital"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Start Live Chat
        </a>
      </div>
    </header>
  );
}
