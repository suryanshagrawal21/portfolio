import { motion } from 'framer-motion';

const MetricsStrip = () => {
    const metrics = [
        { label: "Data Structures & Algorithms", value: "Active Problem Solver", icon: "fas fa-code", link: "https://leetcode.com/u/suryanshagrawal21/" },
        { label: "Version Control & Open Source", value: "Consistent Contributor", icon: "fab fa-github", link: "https://github.com/suryanshagrawal21" },
        { label: "End-to-End Applications", value: "Full Stack Architect", icon: "fas fa-layer-group", link: null },
    ];

    return (
        <section className="w-full bg-dark-bg border-y border-white/5 relative z-20 py-8">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-around gap-8">
                {metrics.map((metric, index) => {
                    const CardContent = (
                        <div className="flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors shrink-0">
                                <i className={`${metric.icon} text-xl text-blue-400`}></i>
                            </div>
                            <div>
                                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{metric.value}</h4>
                                <p className="text-xs sm:text-sm font-mono text-gray-500 uppercase tracking-wider">{metric.label}</p>
                            </div>
                        </div>
                    );

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            {metric.link ? (
                                <a href={metric.link} target="_blank" rel="noreferrer" className="block">
                                    {CardContent}
                                </a>
                            ) : (
                                CardContent
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default MetricsStrip;
