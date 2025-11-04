import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSelector from '../ui/LanguageSelector';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://youtu.be/DNMRI-zWwSU?feature=share',
      icon: '/icons/youtube.svg',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/reel/DGyQEk8OGNs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=',
      icon: '/icons/instagram.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/%C3%A6ther-swiss-kite',
      icon: '/icons/linkedin.svg',
    },
  ];

  const quickLinks = [
    { href: '/', label: t('footer.home') },
    { href: '/team', label: t('footer.theTeam') },
    { href: '/join', label: t('footer.join') },
  ];

  return (
    <footer className="site-footer">
      <Container fluid>
        <div className="footer-content">
          {/* Main Footer Section */}
          <Row className="footer-main">
            {/* Brand Column */}
            <Col xs={12} md={4} lg={3} className="footer-brand">
              <Link to="/" className="footer-logo">
                <img
                  src="/images/logo.png"
                  alt="Æther Swiss Kite"
                  className="footer-logo-image"
                />
              </Link>
              <p className="footer-tagline">
                {t('footer.tagline')}
              </p>
            </Col>

            {/* Quick Links Column */}
            <Col xs={12} md={4} lg={3} className="footer-links">
              <ul className="footer-nav-list">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="footer-nav-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="/#contact" className="footer-nav-link">
                    {t('footer.getInTouch')}
                  </a>
                </li>
              </ul>
            </Col>

            {/* Contact Column */}
            <Col xs={12} md={4} lg={6} className="footer-contact">
              <h3 className="footer-heading">{t('footer.heading')}</h3>
              <p className="footer-text">
                {t('footer.description')}
              </p>
              <a
                href="mailto:contact@aetherswisskite.ch"
                className="footer-email"
              >
                contact@aetherswisskite.ch
              </a>

              {/* Social Media */}
              <div className="footer-social">
                <span className="footer-social-label">{t('footer.followUs')}</span>
                <div className="footer-social-icons">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-link"
                      aria-label={`Visit our ${social.name} page`}
                    >
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="footer-social-icon"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Footer Bottom */}
          <Row>
            <Col xs={12}>
              <div className="footer-bottom">
                <p className="footer-copyright">
                  © {currentYear} Æther Swiss Kite. {t('footer.allRightsReserved')}
                </p>
                <div className="footer-bottom-right">
                  <LanguageSelector />
                  <p className="footer-legal">
                    <a href="#" className="footer-legal-link">
                      {t('footer.privacyPolicy')}
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;