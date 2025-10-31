import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useLanguage } from "../context/LanguageContext";

interface HeaderProps {
  isHome?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHome = false }) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      const offset = window.scrollY;
      const threshold = isHome ? window.innerHeight * 0.7 : 100;
      setIsSticky(offset > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

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

  const navLinks = [
    { href: "/", label: t("nav.home"), hash: "" },
    { href: "/team", label: t("nav.team"), hash: "" },
    { href: "/join", label: t("nav.join"), hash: "" },
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
      className={`site-header ${isSticky ? "sticky" : ""} ${
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
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link ${active ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

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
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link ${active ? "active" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
