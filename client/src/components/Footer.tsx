import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    return (
        <footer className="w-full bg-dark-bg py-8 border-t border-white/10 text-center">
            <div className="container mx-auto px-6">
                <p className="text-gray-500 font-mono text-sm">
                    &copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
                </p>
                <p className="text-gray-600 font-mono text-xs mt-2">
                    Built with React, TypeScript & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
