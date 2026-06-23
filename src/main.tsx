import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import CaseStudyPage from './pages/CaseStudyPage.tsx';
import BrootUseCasePage from './pages/BrootUseCasePage.tsx';
import RisenMatchConceptPage from './pages/RisenMatchConceptPage.tsx';
import RisenMatchRoadmapPage from './pages/RisenMatchRoadmapPage.tsx';
import { LanguageProvider } from './lib/i18n.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/concepts/risen-match/roadmap" element={<RisenMatchRoadmapPage />} />
          <Route path="/concepts/risen-match" element={<RisenMatchConceptPage />} />
          <Route path="/case-studies/broot-crm-sync" element={<BrootUseCasePage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
