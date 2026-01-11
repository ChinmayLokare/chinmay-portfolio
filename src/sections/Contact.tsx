import SectionHeader from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const contactMethods = [
        {
            icon: <Mail size={32} />,
            label: "Email",
            value: "chinmaylokare9@gmail.com",
            href: "mailto:chinmaylokare9@gmail.com"
        },
        {
            icon: <Linkedin size={32} />,
            label: "LinkedIn",
            value: "Connect with me",
            href: "https://www.linkedin.com/in/chinmaylokare/"
        },
        {
            icon: <Github size={32} />,
            label: "GitHub",
            value: "Check out my code",
            href: "https://github.com/ChinmayLokare"
        }
    ];

    return (
        <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
            <Reveal>
                <div className="text-center mb-16">
                    <SectionHeader title="Get In Touch" />
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
                        I'm currently seeking **Summer 2026 SDE/MLE internship** opportunities.
                        Let's connect and discuss how I can contribute to your team.
                    </p>
                </div>
            </Reveal>

            {/* Increased gap and added padding to the top to prevent clipping during "lift" */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                {contactMethods.map((method, idx) => (
                    <Reveal key={idx} delay={idx * 0.1}>
                        <motion.a
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -10 }} // Lifts the card
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="group relative flex flex-col items-center justify-center p-8 h-64 bg-slate-900/40 border border-slate-800 rounded-2xl transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
                        >
                            {/* Icon Container */}
                            <div className="mb-4 p-4 bg-dark rounded-xl text-slate-400 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                                {method.icon}
                            </div>

                            <h3 className="text-slate-100 font-bold text-xl mb-1">{method.label}</h3>
                            <p className="text-slate-400 mb-6 text-center text-sm">{method.value}</p>

                            {/* Follow Link Text - Absolutely positioned at the bottom to prevent layout shift */}
                            <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                <span className="text-primary text-xs font-mono flex items-center gap-1">
                                    Follow link <ArrowUpRight size={14} />
                                </span>
                            </div>
                        </motion.a>
                    </Reveal>
                ))}
            </div>

            <Reveal delay={0.4}>
                <div className="mt-20 p-8 border border-dashed border-slate-800 rounded-2xl text-center">
                    <p className="text-slate-500 italic text-sm md:text-base">
                        Open to discussing opportunities in distributed systems, machine learning, and cloud computing.
                    </p>
                </div>
            </Reveal>
        </section>
    );
};

export default Contact;