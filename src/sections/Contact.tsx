import SectionHeader from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const contactMethods = [
        {
            icon: <Mail className="text-primary" size={32} />,
            label: "Email",
            value: "chinmaylokare9@gmail.com",
            href: "mailto:chinmaylokare9@gmail.com"
        },
        {
            icon: <Linkedin className="text-primary" size={32} />,
            label: "LinkedIn",
            value: "Connect with me",
            href: "https://linkedin.com/in/yourprofile"
        },
        {
            icon: <Github className="text-primary" size={32} />,
            label: "GitHub",
            value: "Check out my code",
            href: "https://github.com/yourusername"
        }
    ];

    return (
        <section id="contact" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
            <Reveal>
                <div className="text-center mb-16">
                    <SectionHeader title="Get In Touch" />
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
                        I'm currently seeking **Summer 2026 SDE/MLE internship** opportunities.
                        Whether you have a question or just want to say hi, my inbox is always open!
                    </p>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactMethods.map((method, idx) => (
                    <Reveal key={idx} delay={idx * 0.1}>
                        <motion.a
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -10, rotate: -1 }}
                            className="flex flex-col items-center p-8 bg-slate-900/50 border border-slate-800 rounded-2xl group transition-all hover:border-primary/50"
                        >
                            <div className="mb-4 p-4 bg-dark rounded-full group-hover:scale-110 transition-transform">
                                {method.icon}
                            </div>
                            <h3 className="text-slate-100 font-bold text-xl mb-1">{method.label}</h3>
                            <p className="text-slate-400 mb-4">{method.value}</p>
                            <span className="text-primary text-sm font-mono flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                Follow link <ArrowUpRight size={14} />
                            </span>
                        </motion.a>
                    </Reveal>
                ))}
            </div>

            <Reveal delay={0.4}>
                <div className="mt-20 p-8 border border-dashed border-slate-800 rounded-2xl text-center">
                    <p className="text-slate-500 italic">
                        Open to discussing opportunities in distributed systems, machine learning, and cloud computing.
                    </p>
                </div>
            </Reveal>
        </section>
    );
};

export default Contact;