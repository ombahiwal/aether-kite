import React, { useState, useEffect } from "react";


const Header: React.FC = (home: boolean) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const offset = window.scrollY;
      setIsSticky(offset > (home ? window.innerHeight + 250 : 400)); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${isSticky ? "sticky" : ""}`}>
      <div className="header-content">
        <div className="logo"></div>
        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
