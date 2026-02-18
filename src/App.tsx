import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useContent } from './hooks/useContent';

const HomePage = lazy(() => import('./pages/HomePage'));
const IATestsPage = lazy(() => import('./pages/IATestsPage'));
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const ManagementPage = lazy(() => import('./pages/ManagementPage'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));
const BrandPage = lazy(() => import('./pages/BrandPage'));
const CaseDetailPage = lazy(() => import('./pages/CaseDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  const { content } = useContent();

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

        <main style={{ flex: 1 }}>
          <Suspense fallback={<div style={{ padding: 'var(--space-4xl)', textAlign: 'center', color: 'var(--color-text-secondary)' }}>Loading...</div>}>
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
          </Suspense>
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
