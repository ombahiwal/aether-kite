import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate } from 'react-router-dom';
import NavComponent from '../layout/NavComponent';
import Footer from '../layout/Footer';
import ThreadsCanvas from '../features/ThreadsCanvas';
import { useLanguage } from '../../context/LanguageContext';
import { getContent, getContentfulLocale, type ContentItem } from '../../api/contentful';
import {
  normalizeEventItem,
  sortEventsByDateDesc,
  groupEventsByYear,
  type NormalizedEventItem,
} from '../../utils/events';
import '../../styles/events.css';

const EVENTS_CONTENT_TYPE = 'eventsTimeline';

let gsapRegistered = false;
const ensureGsapPlugins = () => {
  if (!gsapRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    gsapRegistered = true;
  }
};

const EventsPage: React.FC = () => {
  ensureGsapPlugins();

  const { t, language } = useLanguage();
  const [events, setEvents] = useState<NormalizedEventItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return true;
    }
    return window.matchMedia('(min-width: 992px)').matches;
  });
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  const setItemRef = useCallback((el: HTMLDivElement | null, index: number) => {
    itemRefs.current[index] = el;
  }, []);

  useEffect(() => {
    itemRefs.current = [];
  }, [events.length]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(min-width: 992px)');
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const locale = getContentfulLocale(language);
        const data = await getContent(EVENTS_CONTENT_TYPE, locale);
        const normalized = data
          .filter((item: ContentItem) => item.contentType === EVENTS_CONTENT_TYPE)
          .map(normalizeEventItem);

        const sorted = sortEventsByDateDesc(normalized);
        setEvents(sorted);
        setActiveIndex(0);
      } catch (err) {
        console.error('Error loading events timeline:', err);
        setError(t('eventsPage.error'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [language, t]);

  useEffect(() => {
    if (!events.length) {
      return undefined;
    }

    const triggers = itemRefs.current.map((element, index) => {
      if (!element) return null;
      return ScrollTrigger.create({
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });

    return () => {
      triggers.forEach((trigger) => trigger?.kill());
    };
  }, [events]);

  useEffect(() => {
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeEvent = events[activeIndex];

  const renderHighlightCard = (extraClass?: string) => {
    if (!activeEvent) {
      return null;
    }

    const className = ['events-sticky-card', extraClass].filter(Boolean).join(' ');

    return (
      <div className={className}>
        <p className="events-current-label">{t('eventsPage.currentHighlight')}</p>
        <div className="events-current-date">
          <span className="events-current-md">{activeEvent.dateParts.monthDay}</span>
          <span className="events-current-year">{activeEvent.dateParts.year}</span>
        </div>
        <h2 className="events-current-title">{activeEvent.title}</h2>
        {activeEvent.summary && <p className="events-current-summary">{activeEvent.summary}</p>}
        {activeEvent.image && (
          <div className="events-current-image">
            <img src={activeEvent.image} alt={activeEvent.title} />
          </div>
        )}
      </div>
    );
  };

  const eventsByYear = useMemo(() => groupEventsByYear(events), [events]);
  const orderedYears = useMemo(
    () => Object.keys(eventsByYear).sort((a, b) => b.localeCompare(a)),
    [eventsByYear],
  );

  const renderBody = () => {
    if (isLoading) {
      return (
        <div className="events-loader">
          <Spinner animation="border" role="status" />
        </div>
      );
    }

    if (error) {
      return <p className="events-error">{error}</p>;
    }

    if (!events.length) {
      return <p className="events-error">{t('eventsPage.empty')}</p>;
    }

    const desktopHighlightCard = renderHighlightCard('events-sticky-card--desktop');
    const mobileHighlightCard = renderHighlightCard('events-sticky-card--mobile');

    return (
      <Row className="events-layout" ref={timelineRef}>
        {isDesktop && desktopHighlightCard && (
          <Col xs={12} lg={4} className="events-sticky">
            {desktopHighlightCard}
          </Col>
        )}

        {!isDesktop && mobileHighlightCard && (
          <Col xs={12} className="events-mobile-highlight">
            {mobileHighlightCard}
          </Col>
        )}

        <Col xs={12} lg={isDesktop ? 8 : 12} className="events-timeline">
          <div className="events-timeline-line" />
          <div className="events-timeline-spacer" />
          {orderedYears.map((year) => (
            <div key={year} className="events-year-group">
              <div className="events-year-header">
                <span className="events-year-dot" />
                <span className="events-year-label">{year}</span>
              </div>
              {eventsByYear[year].map((event) => {
                const index = events.findIndex((item) => item.id === event.id);
                const detailPath = `/events/${event.slug || event.id}`;
                return (
                  <div
                    key={event.id}
                    ref={(el) => setItemRef(el, index)}
                    className={`event-card ${index === activeIndex ? 'is-active' : ''}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate(detailPath)}
                    onKeyDown={(evt) => {
                      if (evt.key === 'Enter' || evt.key === ' ') {
                        evt.preventDefault();
                        navigate(detailPath);
                      }
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <div className="event-card-date-large" aria-hidden="true">
                      <span className="event-card-date-large-md">{event.dateParts.monthDay}</span>
                      <span className="event-card-date-large-divider">/</span>
                      <span className="event-card-date-large-year">{event.dateParts.year}</span>
                    </div>
                    <div className="event-card-date">
                      <span className="event-card-md">{event.dateParts.monthDay}</span>
                      <span className="event-card-year">{event.dateParts.year}</span>
                    </div>
                    <div className="event-card-content">
                      <h3 className="event-card-title">{event.title}</h3>
                      {event.summary && <p className="event-card-summary">{event.summary}</p>}
                      <Link to={detailPath} className="event-card-link" onClick={(evt) => evt.stopPropagation()}>
                        {t('eventsPage.readMore')} →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
          <div className="events-timeline-spacer" />
        </Col>
      </Row>
    );
  };

  return (
    <div className="events-page">
      <div style={{ height: '300px', position: 'relative' }}>
        <ThreadsCanvas />
      </div>
      <Container fluid>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <NavComponent className="mb-4" />
          </Col>
        </Row>
      </Container>
      <section className="events-hero">
        <Container fluid>
          <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
              <p className="events-hero-kicker">{t('eventsPage.kicker')}</p>
              <h1 className="events-hero-title">{t('eventsPage.title')}</h1>
              <p className="events-hero-copy">{t('eventsPage.subtitle')}</p>
            </Col>
          </Row>
        </Container>
      </section>
      <Container fluid className="events-content">
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>{renderBody()}</Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default EventsPage;
