import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';

const Experience = () => {
    return (
        <section id="experience" className="py-24 w-full bg-dark-bg relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <SectionHeading title="Experience" subtitle="// Where I've worked" />

                <div className="mt-16 space-y-12">
                    {portfolioData.experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline dot */}
                            <div className="hidden md:block absolute left-[3px] top-2 w-3 h-3 rounded-full bg-white border-2 border-dark-bg shadow-[0_0_0_4px_var(--color-dark-bg),0_0_0_6px_rgba(255,255,255,0.2)] z-10"></div>

                            {/* Timeline line */}
                            <div className="hidden md:block absolute left-[8px] top-6 bottom-[-48px] w-px bg-white/10 last:bg-transparent"></div>

                            <div className="md:ml-12 bg-card-bg border border-border-subtle rounded-xl p-8 hover:border-white/20 transition-colors group">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                                            {exp.role} <span className="text-gray-500 font-mono hidden md:inline-block">@ {exp.company}</span>
                                        </h3>
                                        <h4 className="text-lg text-gray-400 font-mono mt-1 md:hidden">
                                            {exp.company}
                                        </h4>
                                    </div>
                                    <span className="font-mono text-sm text-gray-500 whitespace-nowrap bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                        {exp.duration}
                                    </span>
                                </div>

                                <ul className="text-gray-400 leading-relaxed max-w-2xl bg-white/5 p-4 rounded-lg border-l-2 border-white/20 space-y-2 list-disc list-inside">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
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

export default Experience;
