import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Research Assistant",
            company: "Rochester Institute of Technology",
            period: "Apr 2025 - Present",
            location: "Rochester, NY",
            bullets: [
                "Designed and deployed a full-stack distributed federated learning platform that enables privacy-preserving model training across 10+ simulated clients without centralizing sensitive data",
                "Built a scalable Java/Spring Boot backend with secure REST APIs capable of orchestrating 100+ concurrent training sessions simultaneously",
                "Revolutionized deployment workflows by automating server-side setup on AWS EC2, slashing environment configuration time from several hours to under 2 minutes",
                "Engineered a stateless JWT-based authentication layer that secures all API endpoints while boosting authenticated request response times by 40%",
                "Implemented enterprise-grade resiliency patterns and security best practices to ensure high availability and data protection throughout the training lifecycle"
            ]
        },
        {
            role: "Software Engineer",
            company: "Tata Consultancy Services",
            period: "Jul 2021 - Jul 2024 (3 years)",
            location: "India",
            bullets: [
                "Led a 4-person development team through a complete frontend transformation, migrating a legacy CRM system from jQuery to ReactJS and achieving a 150% performance improvement",
                "Designed and developed 5+ enterprise dashboards for a major telecom client, increasing order tracking efficiency by 30% and resolving 50+ UI/UX issues to enhance user satisfaction",
                "Architected and optimized SQL-based data pipelines for a customer relationship management platform processing 1,000+ daily interactions with improved data accuracy",
                "Accelerated overall project delivery by 35% by leveraging full-stack expertise (React, Node.js, Java) and championing Agile development methodologies",
                "Collaborated with cross-functional teams to deliver secure, cloud-deployed applications while maintaining coding best practices and system reliability"
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
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