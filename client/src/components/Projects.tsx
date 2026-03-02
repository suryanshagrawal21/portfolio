import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-24 w-full bg-[#080808] relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <SectionHeading title="Featured Case Studies" subtitle="// Engineering deep-dives" />

                <div className="mt-16 space-y-24">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Project Image Area (Mac OSX Mockup Style) */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                <div className="relative bg-card-bg border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                                    {/* Mockup Header */}
                                    <div className="h-8 bg-black/40 border-b border-white/10 flex items-center px-4 gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                    </div>

                                    {project.imageUrl ? (
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="h-64 sm:h-80 w-full bg-[#111] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent"></div>
                                            <h4 className="font-mono text-2xl font-bold text-white/30 z-10">{project.title}</h4>
                                            <p className="font-mono text-sm text-gray-600 mt-4 z-10">&lt; Architecture Preview /&gt;</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Project Content Area */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                <div className="mb-6 border-b border-white/10 pb-6">
                                    <p className="font-mono text-gray-500 text-sm mb-2 uppercase tracking-widest">{project.role}</p>
                                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                                        {project.title}
                                    </h3>

                                    <div className="flex gap-4">
                                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded border border-white/10 hover:bg-white/10">
                                            <Github size={16} /> Source Code
                                        </a>
                                        {project.liveLink !== "#" && (
                                            <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded border border-white/10 hover:bg-white/10">
                                                <ExternalLink size={16} /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-dark-bg/50 border border-white/5 rounded-lg p-5">
                                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <span className="text-red-400/80">◬</span> The Problem
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                                    </div>

                                    <div className="bg-dark-bg/50 border border-white/5 rounded-lg p-5">
                                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <span className="text-blue-400/80">⌘</span> Architecture
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{project.architecture}</p>
                                    </div>

                                    <div className="bg-dark-bg/50 border border-white/5 rounded-lg p-5">
                                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <span className="text-green-400/80">📈</span> Engineering Impact
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{project.impact}</p>
                                    </div>
                                </div>

                                <ul className="flex flex-wrap gap-3 mt-8 font-mono text-xs text-gray-300">
                                    {project.tags.map((tag, tagIndex) => (
                                        <li key={tagIndex} className="px-3 py-1.5 bg-white/10 rounded-full border border-white/5">
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
