import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                <div className="flex gap-6 mb-4">
                    <a href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary"><Github size={20} /></a>
                    <a href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary"><Linkedin size={20} /></a>
                    <a href="mailto:chinmaylokare9@gemail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary"><Mail size={20} /></a>
                </div>
                <p className="text-slate-500 text-sm">
                    © 2025 Chinmay Lokare. Built with React & TypeScript
                </p>
            </div>
        </footer>
    );
};

export default Footer;