// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/theme.css'; // Import theme before Bootstrap to override variables
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/pages/Homepage';
import TeamPage from './components/pages/TeamPage';
import JoinPartnerPage from './components/pages/JoinPartnerPage';
import { LanguageProvider } from './context/LanguageContext';
import './styles/App.css';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/join-us" element={<JoinUsPage />} /> */}
          <Route path="/team" element={<TeamPage />} />
          <Route path="/join" element={<JoinPartnerPage />} />
          
          {/* <Route path="/blog" element={<BlogListPage />} /> */}
          {/* <Route path="/blog/:slug" element={<BlogPostPage />} /> */}
          {/* fallback / 404 */}
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
