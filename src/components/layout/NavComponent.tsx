import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

interface NavProps {
  className?: string;
}

const Nav: React.FC<NavProps> = ({ className = "" }) => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const links = [
    { href: "/join", label: t("nav.join") },
    { href: "/team", label: t("nav.team") },
    { href: "/#contact", label: t("nav.getInTouch") },
  ];

  return (
  <nav className={`nav-comp ${className}`}>
      {links.map((link) => {
        const isActive = location.pathname === link.href;
        return (
          <p key={link.href} className="text-left text-section-heading">
            <Link
              to={link.href}
              className={`large-link clean-link text-section-heading ${
                isActive ? "nav-active-link" : ""
              }`}
            >
              {link.label}
            </Link>
          </p>
        );
      })}
    </nav>
  );
};

export default Nav;
