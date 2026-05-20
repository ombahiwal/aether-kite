import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSelector from "../ui/LanguageSelector";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const isHomePage = location.pathname === "/";

    const handleScroll = (): void => {
      if (!isHomePage) {
        setIsVisible(true);
        return;
      }

      const threshold = window.innerHeight * 0.85;
      setIsVisible(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const { t } = useLanguage();
  const recruitmentUrl = "https://go.epfl.ch/ask_recrutement";

  const handleContactNavigation = () => {
    setIsMobileMenuOpen(false);
    const contactPath = "/#contact";

    if (location.pathname !== "/") {
      navigate(contactPath);
      return;
    }

    const contactSection = document.getElementById("contact");
    if (!contactSection) {
      navigate(contactPath);
      return;
    }

    const headerOffset = 110;
    const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = Math.max(elementPosition - headerOffset, 0);

    window.scrollTo({
      top: scrollPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { href: "/", label: t("nav.home"), hash: "" },
    { href: "/news", label: t("nav.news"), hash: "" },
    { href: "/events", label: t("nav.events"), hash: "" },
    { href: "/join", label: t("nav.join"), hash: "" },
    { href: "/team", label: t("nav.team"), hash: "" },
    { href: recruitmentUrl, label: t("nav.recruitment"), hash: "", external: true },
    { href: "/#contact", label: t("nav.getInTouch"), hash: "#contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname === href || location.pathname.startsWith(href);
  };

  return (
    <header
      ref={headerRef}
      className={`site-header sticky ${isVisible ? "is-visible" : "is-hidden"} ${
        isMobileMenuOpen ? "mobile-menu-open" : ""
      }`}
    >
      <Container fluid>
        <div className="header-content">
          <Link to="/" className="header-logo">
            <img
              src="/images/aetherlogo-black-text.png"
              alt="Æther Swiss Kite"
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-links-desktop">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                link.external || link.href.endsWith('.pdf') ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    {link.label}
                  </a>
                ) : (
                  link.hash ? (
                    <button
                      key={link.href}
                      type="button"
                      className="nav-link nav-link-button"
                      onClick={handleContactNavigation}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`nav-link ${active ? "active" : ""}`}
                    >
                      {link.label}
                    </Link>
                  )
                )
              );
            })}
          </nav>

          <div className="header-actions">
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-links-mobile ${isMobileMenuOpen ? "open" : ""}`}>
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              link.external || link.href.endsWith('.pdf') ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                link.hash ? (
                  <button
                    key={link.href}
                    type="button"
                    className="nav-link nav-link-button"
                    onClick={handleContactNavigation}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`nav-link ${active ? "active" : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )
            );
          })}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
