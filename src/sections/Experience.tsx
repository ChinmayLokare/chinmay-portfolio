import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Research Assistant",
            company: "Rochester Institute of Technology",
            period: "Aug 2024 - Present",
            location: "Rochester, NY",
            bullets: [
                "Developing distributed federated learning platform using Java, Spring Boot, and AWS EC2",
                "Achieved 85.71% accuracy on CommitmentBank dataset, demonstrating effective privacy-preserving NLP",
                "Architected gRPC-based communication system for model parameter aggregation across nodes",
                "Optimized memory management and network protocols for efficient large-scale training"
            ]
        },
        {
            role: "Software Engineer",
            company: "Tata Consultancy Services",
            period: "Jul 2021 - Jul 2024 (3 years)",
            location: "India",
            bullets: [
                "Developed large-scale telecommunications systems serving millions of users",
                "Implemented microservices architecture using Java and Spring Boot framework",
                "Mentored newly onboarded associates on software development best practices",
                "Collaborated with cross-functional teams to deliver enterprise solutions"
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 max-w-7xl mx-auto px-4">
            <SectionHeader title="Experience" />
            <div className="space-y-12">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 border-l-2 border-slate-800"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-dark shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-100">{exp.role}</h3>
                                <div className="text-primary font-semibold flex items-center gap-2">
                                    <Briefcase size={16} /> {exp.company}
                                </div>
                            </div>
                            <div className="text-slate-400 text-sm space-y-1 md:text-right">
                                <div className="flex items-center md:justify-end gap-2"><Calendar size={14} /> {exp.period}</div>
                                <div className="flex items-center md:justify-end gap-2"><MapPin size={14} /> {exp.location}</div>
                            </div>
                        </div>

                        <ul className="space-y-3">
                            {exp.bullets.map((bullet, i) => (
                                <li key={i} className="text-slate-400 flex gap-3">
                                    <span className="text-primary mt-1.5 leading-none">▹</span>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;