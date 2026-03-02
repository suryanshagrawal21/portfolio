import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { portfolioData } from '../data/portfolioData';
import { Link } from 'react-scroll';
import { Button } from './ui/Button';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[75vh] w-full flex items-center justify-center overflow-hidden pt-32 pb-20">

            {/* Subtle Developer-Focused Background */}
            <div className="absolute inset-0 z-0 bg-dark-bg">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            </div>

            <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-start justify-center max-w-5xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-gray-400 font-mono text-sm md:text-base mb-4 tracking-wide">
                        Hi, my name is
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative"
                >
                    <div className="absolute -inset-8 bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-3xl -z-10 rounded-full"></div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-2 relative z-10 drop-shadow-lg">
                        {portfolioData.personalInfo.name}.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="h-20 md:h-24 mb-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-400 tracking-tight">
                        {' '}
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                3000,
                                'Software Engineer',
                                3000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-white"
                        />
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="max-w-xl mb-10 text-gray-400 text-lg leading-relaxed"
                >
                    <p>{portfolioData.personalInfo.aboutPara1}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="flex flex-wrap gap-4"
                >
                    <Link to="projects" smooth={true} duration={500} offset={-80}>
                        <Button variant="primary">View My Work</Button>
                    </Link>
                    <Button variant="outline" asChild>
                        <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                            Download Resume
                        </a>
                    </Button>
                </motion.div>

            </div>

        </section>
    );
};

export default Hero;
