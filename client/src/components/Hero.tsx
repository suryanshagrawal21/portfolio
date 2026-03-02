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

            <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl">

                {/* Text Content */}
                <div className="flex flex-col items-start justify-center max-w-2xl w-full lg:w-3/5 order-2 lg:order-1">

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-mono text-xs sm:text-sm mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available for Internship / Full-Time
                    </motion.div>

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

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full sm:w-2/3 lg:w-2/5 order-1 lg:order-2 flex justify-center lg:justify-end relative"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-transparent">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-full -z-10 animate-pulse"></div>
                        <img
                            src="/assets/images/suryansh main.jpeg"
                            alt="Suryansh Agrawal - Software Engineer"
                            className="w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl shadow-black grayscale hover:grayscale-0 transition-all duration-700 aspect-square"
                        />

                        {/* Decorative floating elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4px_4px] rounded-full slow-spin"></div>
                    </div>
                </motion.div>

            </div>

        </section>
    );
};

export default Hero;
