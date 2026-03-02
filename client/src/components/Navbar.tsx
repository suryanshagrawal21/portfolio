import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { X, Menu } from 'lucide-react';
import { cn } from './ui/Button';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12',
                isScrolled
                    ? 'bg-dark-bg/80 backdrop-blur-md border-b border-white/10 shadow-sm shadow-black/50'
                    : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-xl md:text-2xl font-bold tracking-tighter text-white cursor-pointer hover:text-gray-300 transition-colors"
                >
                    Suryansh.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="text-sm font-mono text-gray-400 cursor-pointer hover:text-white transition-colors capitalize relative group"
                            activeClass="text-white font-medium"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                    <a
                        href="/assets/resume.pdf"
                        className="px-4 py-2 text-sm font-mono border border-white text-white rounded hover:bg-white/10 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 py-6 px-6 flex flex-col gap-6 shadow-xl shadow-black">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="text-lg font-mono text-gray-400 cursor-pointer hover:text-white capitalize"
                            activeClass="text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/assets/resume.pdf"
                        className="w-full text-center px-4 py-3 mt-4 text-base font-mono border border-white text-white rounded hover:bg-white/10 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
