import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

// Lazy load the case study page
const ProjectCaseStudy = React.lazy(() => import('./pages/ProjectCaseStudy'));

const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center bg-dark-bg">
    <div className="w-8 h-8 border-4 border-white/10 border-t-white rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="bg-dark-bg min-h-screen text-gray-200 selection:bg-white/20 flex flex-col">
        <Navbar />

        <div className="flex-grow">
          <React.Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectCaseStudy />} />
            </Routes>
          </React.Suspense>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
