import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
    return (
        <div className="mb-12 text-left">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {title}
                </h2>
                <div className="h-[1px] w-24 md:w-32 bg-gray-700 mt-2"></div>
            </motion.div>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-400 mt-4 text-sm md:text-base font-mono"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

export default SectionHeading;
