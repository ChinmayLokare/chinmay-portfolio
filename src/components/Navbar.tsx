import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-lg shadow-xl border-b border-slate-800 py-3' : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                    <div className="text-2xl font-bold tracking-tighter text-white">
                        <span className="text-primary">CL</span>
                    </div>
                </a>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === link.href.slice(1) ? 'text-primary' : 'text-slate-300'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300 focus:outline-none" aria-label="Toggle Menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-dark/95 z-[-1] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'
                }`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-semibold text-slate-200 hover:text-primary"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;