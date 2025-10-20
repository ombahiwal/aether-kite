import React from "react";
import { Link } from "react-router-dom";
interface NavProps {
  className?: string;
}

const Nav: React.FC<NavProps> = ({ className = "" }) => {
  const links = [
    { href: "/join", label: "JOIN" },
    { href: "/team", label: "THE TEAM" },
    { href: "/#contact", label: "GET IN TOUCH" },
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
