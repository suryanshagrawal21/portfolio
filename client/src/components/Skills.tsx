import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';

const Skills = () => {
    return (
        <section id="skills" className="py-24 w-full bg-dark-bg relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <SectionHeading title="Technical Ecosystem" subtitle="// Tools & Technologies I use" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    {/* Bento Box 1: Frontend (Span 2 columns on lg) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-all"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 blur-xl group-hover:opacity-20 transition-opacity">
                            <div className="w-32 h-32 rounded-full bg-blue-500/30"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">
                            {portfolioData.skillsData[0].title}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {portfolioData.skillsData[0].skills.map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-2 bg-dark-bg border border-white/10 px-5 py-3 rounded-xl hover:-translate-y-1 transition-transform cursor-default shadow-lg">
                                    <i className={`${skill.icon} text-lg text-blue-400`}></i>
                                    <span className="font-mono text-gray-200">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bento Box 2: Backend */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="col-span-1 bg-gradient-to-bl from-white/5 to-transparent border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-all"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">
                            {portfolioData.skillsData[1].title}
                        </h3>
                        <div className="flex flex-col gap-4">
                            {portfolioData.skillsData[1].skills.map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-dark-bg/50 border border-white/5 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"><i className={`${skill.icon} text-green-400`}></i></div>
                                    <span className="font-mono text-gray-300">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bento Box 3: Database */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1 bg-card-bg border border-white/10 rounded-3xl p-8 group hover:border-white/20 transition-all"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">
                            {portfolioData.skillsData[2].title}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {portfolioData.skillsData[2].skills.map((skill, idx) => (
                                <div key={idx} className="flex flex-col items-center justify-center gap-2 bg-dark-bg border border-white/5 p-4 rounded-xl hover:bg-white/5 transition-colors text-center">
                                    <i className={`${skill.icon} text-2xl text-purple-400 mb-2`}></i>
                                    <span className="font-mono text-sm text-gray-400">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bento Box 4: Tooling (Span 2 columns on lg) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-tr from-white/5 to-transparent border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-all"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">
                            {portfolioData.skillsData[3].title}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {portfolioData.skillsData[3].skills.map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-4 rounded-xl hover:-translate-y-1 transition-transform shadow-lg">
                                    <i className={`${skill.icon} text-xl text-orange-400`}></i>
                                    <span className="font-mono font-bold text-gray-200">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
