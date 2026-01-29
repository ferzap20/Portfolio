import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useContent } from './hooks/useContent';

import HomePage from './pages/HomePage';
import IATestsPage from './pages/IATestsPage';
import ProcessPage from './pages/ProcessPage';
import ManagementPage from './pages/ManagementPage';
import ResearchPage from './pages/ResearchPage';
import BrandPage from './pages/BrandPage';
import CaseDetailPage from './pages/CaseDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const { content } = useContent();

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {content && <Header name={content.site.name} />}

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ia-tests" element={<IATestsPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/brand" element={<BrandPage />} />
            <Route path="/case/:slug" element={<CaseDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {content && (
          <Footer
            email={content.site.email}
            linkedin={content.site.linkedin}
            github={content.site.github}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
