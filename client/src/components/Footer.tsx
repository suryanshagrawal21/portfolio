import { Github, Linkedin, Mail, MapPin, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    return (
        <footer className="w-full bg-[#030303] py-12 border-t border-white/10 z-20 relative">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Branding & Location */}
                <div className="flex flex-col items-center md:items-start opacity-70 hover:opacity-100 transition-opacity">
                    <p className="text-xl font-bold font-mono text-white mb-2 tracking-tighter">
                        <span className="text-blue-500">&lt;</span>
                        {portfolioData.personalInfo.name.split(' ')[0]}
                        <span className="text-purple-500">/&gt;</span>
                    </p>
                    <p className="text-gray-400 font-mono text-sm flex items-center gap-2">
                        <MapPin size={14} className="text-red-400" /> SRM Institute of Science & Technology
                    </p>
                </div>

                {/* Professional Links */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-sm">
                        <Github size={18} /> GitHub
                    </a>
                    <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors font-mono text-sm">
                        <Linkedin size={18} /> LinkedIn
                    </a>
                    <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors font-mono text-sm">
                        <Mail size={18} /> Email
                    </a>
                    <a href="/assets/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors font-mono text-sm">
                        <FileText size={18} /> Resume
                    </a>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl mt-12 pt-6 border-t border-white/5 text-center flex flex-col items-center justify-center">
                <p className="text-gray-500 font-mono text-xs opacity-50">
                    &copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}. Architected with React & Tailwind.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
