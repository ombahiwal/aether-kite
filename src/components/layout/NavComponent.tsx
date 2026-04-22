import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

interface NavProps {
  className?: string;
}

interface NavLinkItem {
  href: string;
  label: string;
  isActive?: (path: string) => boolean;
}

const Nav: React.FC<NavProps> = ({ className = "" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const links: NavLinkItem[] = [
    
    {
      href: "/news",
      label: t("nav.news"),
      isActive: (path) => path === "/news" || path.startsWith("/news/"),
    },
    {
      href: "/events",
      label: t("nav.events"),
      isActive: (path) => path === "/events" || path.startsWith("/events/"),
    },
    { href: "/join", label: t("nav.join") },
    { href: "/team", label: t("nav.team") },
    { href: "/#contact", label: t("nav.getInTouch") },
    
  ];

  const handleContactNavigation = () => {
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

  return (
  <nav className={`nav-comp ${className}`}>
      {links.map((link) => {
        const isActive = link.isActive
          ? link.isActive(location.pathname)
          : location.pathname === link.href;
        return (
          <p key={link.href} className="text-left text-section-heading">
            {link.href === "/#contact" ? (
              <button
                type="button"
                onClick={handleContactNavigation}
                className="large-link clean-link text-section-heading nav-link-button-large"
              >
                {link.label}
              </button>
            ) : (
              <Link
                to={link.href}
                className={`large-link clean-link text-section-heading ${
                  isActive ? "nav-active-link" : ""
                }`}
              >
                {link.label}
              </Link>
            )}
          </p>
        );
      })}
    </nav>
  );
};

export default Nav;
