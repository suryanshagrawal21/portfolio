import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy loading below-the-fold components for performance
const Architecture = React.lazy(() => import('./components/Architecture'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Experience = React.lazy(() => import('./components/Experience'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div className="w-full h-32 flex items-center justify-center bg-dark-bg">
    <div className="w-8 h-8 border-4 border-white/10 border-t-white rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-gray-200 selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <Architecture />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
