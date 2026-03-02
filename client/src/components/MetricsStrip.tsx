import { motion } from 'framer-motion';

const MetricsStrip = () => {
    const metrics = [
        { label: "LeetCode Problems", value: "300+", icon: "fas fa-code" },
        { label: "GitHub Contributions", value: "1000+", icon: "fab fa-github" },
        { label: "Full Stack Projects", value: "5+", icon: "fas fa-layer-group" },
    ];

    return (
        <section className="w-full bg-dark-bg border-y border-white/5 relative z-20 py-8">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-around gap-8">
                {metrics.map((metric, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex items-center gap-4 group"
                    >
                        <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                            <i className={`${metric.icon} text-xl text-blue-400`}></i>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-white tracking-tight">{metric.value}</h4>
                            <p className="text-sm font-mono text-gray-500 uppercase tracking-wider">{metric.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MetricsStrip;
