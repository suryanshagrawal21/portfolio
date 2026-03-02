import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';

const About = () => {
    return (
        <section id="about" className="py-24 w-full bg-[#030303] relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <SectionHeading title="About Me" subtitle="// Get to know me" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    {/* Detailed Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-gray-400 space-y-6 text-lg leading-relaxed"
                    >
                        <p className="text-xl font-medium">{portfolioData.personalInfo.aboutPara1}</p>

                        <div className="pt-6 border-t border-white/10 mt-8">
                            <h3 className="text-white font-mono text-xl mb-4">Current Focus</h3>
                            <ul className="space-y-3 font-mono text-sm">
                                {portfolioData.personalInfo.focus.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="text-white/30 truncate">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Education Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card-bg border border-border-subtle rounded-xl p-8 backdrop-blur-sm"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="text-gray-500">🎓</span> Education
                        </h3>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                            {portfolioData.education.map((edu, index) => (
                                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-dark-bg bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
                                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-white/5 border border-white/10 p-4 rounded shadow-lg backdrop-blur-sm transition-transform hover:-translate-y-1">
                                        <div className="flex flex-col mb-1">
                                            <span className="font-mono text-xs text-gray-400 mb-1">{edu.duration}</span>
                                            <h4 className="font-bold text-white text-lg leading-tight">{edu.degree}</h4>
                                        </div>
                                        {edu.field && <p className="text-sm font-medium text-gray-300 mt-1">{edu.field}</p>}
                                        <p className="text-sm text-gray-500 mt-2">{edu.institution}</p>
                                        <p className="text-xs font-mono text-gray-400 mt-3 p-2 bg-dark-bg/50 rounded inline-block">{edu.grade}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
