import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { Code2, Cpu, Cloud, Database, Wrench } from 'lucide-react';

const Skills = () => {
    const categories = [
        {
            title: "Languages",
            icon: <Code2 className="text-primary" size={24} />,
            skills: ["Java", "Python", "C#", "JavaScript", "TypeScript"]
        },
        {
            title: "Frameworks & Libs",
            icon: <Cpu className="text-primary" size={24} />,
            skills: ["Spring Boot", "React", "ASP.NET Core", "PyTorch", "TensorFlow", "Node.js"]
        },
        {
            title: "Cloud & DevOps",
            icon: <Cloud className="text-primary" size={24} />,
            skills: ["AWS (Lambda, EC2, Bedrock)", "Docker", "Kubernetes", "CI/CD"]
        },
        {
            title: "Databases",
            icon: <Database className="text-primary" size={24} />,
            skills: ["PostgreSQL", "MongoDB", "DynamoDB", "Pinecone"]
        },
        {
            title: "Tools & Tech",
            icon: <Wrench className="text-primary" size={24} />,
            skills: ["Git", "gRPC", "REST APIs", "Microservices", "Federated Learning", "RAG"]
        }
    ];

    // Animation variants for the category cards
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-24 bg-slate-900/30 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="Skills" />

                {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 bg-dark border border-slate-800 rounded-2xl hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-primary/5"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                                    {cat.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-100">{cat.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill, sIdx) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        // This creates the "stagger" effect for pills
                                        transition={{
                                            duration: 0.3,
                                            delay: (idx * 0.1) + (sIdx * 0.05)
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "rgba(56, 189, 248, 0.1)",
                                            borderColor: "rgba(56, 189, 248, 0.5)"
                                        }}
                                        className="px-4 py-1.5 bg-slate-800/50 text-slate-300 rounded-lg text-sm border border-slate-700 cursor-default transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;