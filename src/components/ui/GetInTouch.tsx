import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SocialIcon from './SocialIcon';

const GetInTouch: React.FC = () => {
  const { t } = useLanguage();
  const [emailCopied, setEmailCopied] = useState(false);
  const copyFeedbackTimeoutRef = useRef<number | null>(null);
  const contactEmail = 'contact@aetherswisskite.ch';
  const recruitmentUrl = 'https://go.epfl.ch/ask_recrutement';

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
    { href: '/join', label: t('contactSection.primaryLink') },
    { href: '/team', label: t('contactSection.secondaryLink') },
    { href: '/news', label: t('contactSection.tertiaryLink') },
  ];

  useEffect(() => {
    return () => {
      if (copyFeedbackTimeoutRef.current) {
        window.clearTimeout(copyFeedbackTimeoutRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
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

  return (
    <section id="contact" className="contact-section">
      <Container fluid className="contact-section-shell">
        <Row className="contact-section-grid">
          <Col xs={12} lg={7} className="contact-section-copy">
            <p className="contact-section-kicker">{t('contactSection.kicker')}</p>
            <h2 className="contact-section-title">{t('contactSection.title')}</h2>
            <p className="contact-section-description">{t('contactSection.description')}</p>

            <div className="contact-section-actions">
              <a href={`mailto:${contactEmail}`} className="contact-primary-link">
                {contactEmail}
              </a>
              <button
                type="button"
                className="contact-secondary-button"
                onClick={handleCopyEmail}
                aria-label={t('contactSection.copyAction')}
              >
                {t('contactSection.copyAction')}
              </button>
            </div>

            <p className={`contact-copy-feedback ${emailCopied ? 'is-visible' : ''}`}>
              {t('contactSection.copyFeedback')}
            </p>
          </Col>

          <Col xs={12} lg={5}>
            <div className="contact-card">
              <p className="contact-card-label">{t('contactSection.cardLabel')}</p>
              <div className="contact-quick-links">
                <a
                  href={recruitmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-recruitment-link"
                >
                  <span className="contact-recruitment-eyebrow">
                    {t('contactSection.recruitmentEyebrow')}
                  </span>
                  <span className="contact-recruitment-title">
                    {t('contactSection.recruitmentTitle')}
                  </span>
                  <span className="contact-recruitment-description">
                    {t('contactSection.recruitmentDescription')}
                  </span>
                </a>
                {quickLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="contact-quick-link">
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="contact-social-block">
                <span className="contact-social-label">{t('footer.followUs')}</span>
                <div className="contact-social-icons">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      aria-label={`Visit our ${social.name} page`}
                    >
                      <SocialIcon name={social.name} className="contact-social-icon" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetInTouch;
