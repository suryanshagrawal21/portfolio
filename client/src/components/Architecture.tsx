import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';

const Architecture = () => {
    // Animation definition for SVG path drawing
    const draw: any = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 }
                }
            };
        }
    };

    return (
        <section id="architecture" className="py-24 w-full bg-[#050505] relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <SectionHeading title="System Architecture" subtitle="// High-level Full Stack Flow" />

                <div className="mt-16 w-full flex flex-col items-center justify-center p-8 bg-card-bg border border-white/10 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

                    <p className="text-gray-400 text-center max-w-2xl mb-12 relative z-10 text-sm md:text-base leading-relaxed">
                        A typical representation of how I structure scalable web applications. The client tier interacts seamlessly with robust APIs, which orchestrate complex business logic and database interactions.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl relative z-10 gap-8 md:gap-0">
                        {/* Node: Client */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center bg-dark-bg/80 backdrop-blur border border-white/10 p-6 rounded-xl w-48 shadow-2xl relative z-20"
                        >
                            <i className="fab fa-react text-4xl text-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"></i>
                            <h4 className="text-white font-bold font-mono">Frontend Client</h4>
                            <p className="text-xs text-gray-500 mt-2 text-center">React, Tailwind, Framer</p>
                        </motion.div>

                        {/* Connector 1 */}
                        <div className="hidden md:flex flex-grow h-24 items-center justify-center relative w-full">
                            <svg className="absolute w-full h-full overflow-visible" preserveAspectRatio="none">
                                <motion.line
                                    x1="5%" y1="50%" x2="95%" y2="50%"
                                    stroke="url(#gradient-blue)" strokeWidth="2"
                                    strokeDasharray="5,5"
                                    custom={0}
                                    variants={draw}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                />
                                <defs>
                                    <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                                        <stop offset="100%" stopColor="rgba(59,130,246,0.5)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.5 }}
                                className="bg-[#050505] text-xs font-mono text-gray-500 px-3 py-1 border border-white/5 rounded-full z-10"
                            >JSON / REST
                            </motion.span>
                        </div>

                        {/* Node: Backend API */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col items-center bg-dark-bg/80 backdrop-blur border border-blue-500/30 p-8 rounded-full w-56 h-56 justify-center shadow-[0_0_30px_rgba(59,130,246,0.1)] relative z-20"
                        >
                            <i className="fab fa-node-js text-5xl text-green-500 mb-3 drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]"></i>
                            <h4 className="text-white font-bold font-mono">Backend API</h4>
                            <p className="text-xs text-gray-500 mt-2 text-center">Node, Express, Python</p>
                        </motion.div>

                        {/* Connector 2 */}
                        <div className="hidden md:flex flex-grow h-24 items-center justify-center relative w-full">
                            <svg className="absolute w-full h-full overflow-visible" preserveAspectRatio="none">
                                <motion.line
                                    x1="5%" y1="50%" x2="95%" y2="50%"
                                    stroke="url(#gradient-purple)" strokeWidth="2"
                                    custom={1}
                                    variants={draw}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                />
                                <defs>
                                    <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
                                        <stop offset="100%" stopColor="rgba(168,85,247,0.5)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 2.0 }}
                                className="bg-[#050505] text-xs font-mono text-gray-500 px-3 py-1 border border-white/5 rounded-full z-10"
                            >Queries
                            </motion.span>
                        </div>

                        {/* Node: Database */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col items-center bg-dark-bg/80 backdrop-blur border border-white/10 p-6 rounded-xl w-48 shadow-2xl relative z-20"
                        >
                            <i className="fas fa-database text-4xl text-purple-400 mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]"></i>
                            <h4 className="text-white font-bold font-mono">Database Layer</h4>
                            <p className="text-xs text-gray-500 mt-2 text-center">MongoDB, PGSQL</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Architecture;
