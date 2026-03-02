import React, { Suspense } from 'react';
import Hero from '../components/Hero';

// Lazy loading below-the-fold components for performance
const MetricsStrip = React.lazy(() => import('../components/MetricsStrip'));
const CurrentlyBuilding = React.lazy(() => import('../components/CurrentlyBuilding'));
const Architecture = React.lazy(() => import('../components/Architecture'));
const About = React.lazy(() => import('../components/About'));
const Skills = React.lazy(() => import('../components/Skills'));
const Projects = React.lazy(() => import('../components/Projects'));
const Experience = React.lazy(() => import('../components/Experience'));
const Contact = React.lazy(() => import('../components/Contact'));

const LoadingFallback = () => (
    <div className="w-full h-32 flex items-center justify-center bg-dark-bg">
        <div className="w-8 h-8 border-4 border-white/10 border-t-white rounded-full animate-spin"></div>
    </div>
);

const Home = () => {
    return (
        <main>
            <Hero />
            <Suspense fallback={<LoadingFallback />}>
                <MetricsStrip />
                <CurrentlyBuilding />
                <Projects />
                <Architecture />
                <Experience />
                <Skills />
                <About />
                <Contact />
            </Suspense>
        </main>
    );
};

export default Home;
