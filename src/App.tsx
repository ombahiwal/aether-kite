// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/Homepage';
import TeamPage from './component/TeamPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import JoinPartnerPage from './component/JoinPartnerPage';
import { LanguageProvider } from './context/LanguageContext';

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
