import React, { useRef, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSelector from '../ui/LanguageSelector';
import SocialIcon from '../ui/SocialIcon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const [emailCopied, setEmailCopied] = useState(false);
  const copyFeedbackTimeoutRef = useRef<number | null>(null);
  const contactEmail = 'contact@aetherswisskite.ch';

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setEmailCopied(true);

      if (copyFeedbackTimeoutRef.current) {
        window.clearTimeout(copyFeedbackTimeoutRef.current);
      }

      copyFeedbackTimeoutRef.current = window.setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Unable to copy contact email:', error);
    }
  };

  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://youtu.be/DNMRI-zWwSU?feature=share',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/reel/DGyQEk8OGNs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/%C3%A6ther-swiss-kite',
    },
  ];

  const quickLinks = [
    { href: '/', label: t('footer.home') },
    { href: '/news', label: t('footer.news') },
    { href: '/events', label: t('footer.events') },
    { href: '/join', label: t('footer.join') },
    { href: '/team', label: t('footer.theTeam') },
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
                  src="/images/logorectangle.png"
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
                  <a
                    href="/documents/statutes.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-nav-link"
                  >
                    {t('footer.statutes')}
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
                href={`mailto:${contactEmail}`}
                className="footer-email"
                onClick={handleEmailClick}
                title={t('footer.emailAction')}
              >
                {contactEmail}
              </a>
              <p className={`footer-email-feedback ${emailCopied ? 'is-visible' : ''}`}>
                {t('footer.emailCopied')}
              </p>

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
                      <SocialIcon name={social.name} className="footer-social-icon" />
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
