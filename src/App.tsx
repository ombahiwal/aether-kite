// src/App.tsx
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/theme.css'; // Import theme before Bootstrap to override variables
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/pages/Homepage';
import TeamPage from './components/pages/TeamPage';
import JoinPartnerPage from './components/pages/JoinPartnerPage';
import RoleDetailPage from './components/pages/RoleDetailPage';
import NewsPage from './components/pages/NewsPage';
import NewsDetailPage from './components/pages/NewsDetailPage';
import EventsPage from './components/pages/EventsPage';
import EventDetailPage from './components/pages/EventDetailPage';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/layout/Header';
import './styles/App.css';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const scrollToLocation = () => {
      if (!location.hash) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto',
        });
        return;
      }

      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);

      if (!element) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto',
        });
        return;
      }

      const headerOffset = 110;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = Math.max(elementPosition - headerOffset, 0);

      window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: 'smooth',
      });
    };

    const timeoutId = window.setTimeout(scrollToLocation, 120);
    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollManager />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/join-us" element={<JoinUsPage />} /> */}
          <Route path="/team" element={<TeamPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/join" element={<JoinPartnerPage />} />
          <Route path="/role/:id" element={<RoleDetailPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          
          {/* <Route path="/blog" element={<BlogListPage />} /> */}
          {/* <Route path="/blog/:slug" element={<BlogPostPage />} /> */}
          {/* fallback / 404 */}
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
