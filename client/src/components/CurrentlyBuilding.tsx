import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const CurrentlyBuilding = () => {
    return (
        <section className="py-16 w-full bg-dark-bg relative z-10">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card-bg border border-blue-500/20 rounded-xl p-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-dark-bg border border-white/10 flex items-center justify-center shadow-lg">
                            <Terminal className="text-blue-400" size={32} />
                        </div>

                        <div className="flex-grow text-center md:text-left">
                            <h3 className="text-xl font-bold text-white mb-2 font-mono flex items-center justify-center md:justify-start gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                                Currently Building
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center md:justify-start mt-4">
                                <div className="bg-dark-bg/50 px-4 py-2 rounded border border-white/5">
                                    <span className="text-gray-400 text-sm block mb-1">Project 01</span>
                                    <strong className="text-white">AI Interview Platform</strong>
                                </div>
                                <div className="bg-dark-bg/50 px-4 py-2 rounded border border-white/5">
                                    <span className="text-gray-400 text-sm block mb-1">Project 02</span>
                                    <strong className="text-white">Portfolio Headless CMS</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CurrentlyBuilding;
