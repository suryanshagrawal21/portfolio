import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Mail, Linkedin, Github, Copy, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [copied, setCopied] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    const copyEmail = () => {
        navigator.clipboard.writeText(portfolioData.personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 w-full bg-[#050505] relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <SectionHeading title="Get In Touch" subtitle="// Let's connect" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-6">Let's build something together</h3>
                        <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                            I'm currently looking for new software development opportunities.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div
                                className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors group"
                                onClick={copyEmail}
                            >
                                <div className="flex items-center gap-4">
                                    <Mail className="text-gray-400 group-hover:text-white transition-colors" />
                                    <span className="text-gray-300 font-mono">{portfolioData.personalInfo.email}</span>
                                </div>
                                {copied ? <CheckCircle2 className="text-green-400" size={18} /> : <Copy className="text-gray-500 group-hover:text-white transition-colors" size={18} />}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={portfolioData.personalInfo.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all text-gray-400 hover:text-white"
                                >
                                    <Linkedin />
                                </a>
                                <a
                                    href={portfolioData.personalInfo.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all text-gray-400 hover:text-white"
                                >
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card-bg border border-border-subtle p-8 rounded-xl backdrop-blur-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-dark-bg border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-dark-bg border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-dark-bg border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-colors resize-none"
                                    placeholder="Hello Suryansh, I'd like to talk about..."
                                />
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full relative overflow-hidden"
                                disabled={status === 'submitting' || status === 'success'}
                            >
                                {status === 'idle' && 'Send Message'}
                                {status === 'submitting' && 'Sending...'}
                                {status === 'success' && 'Message Sent!'}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
