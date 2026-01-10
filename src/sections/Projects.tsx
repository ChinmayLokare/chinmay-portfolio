import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText } from 'lucide-react';
import devdocImg from '../assets/frontend-demo.png';
import { Reveal } from '../components/Reveal';

interface Project {
    title: string;
    desc: string;
    tech: string[];
    github: string;
    demo?: string;
    paper?: string;
    image: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-dark border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group"
    >
        <div className="h-48 bg-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-6">
            <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                        {t}
                    </span>
                ))}
            </div>

            <div className="flex gap-4">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium"
                >
                    <Github size={18} /> GitHub
                </a>
                {project.demo && (
                    <a href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium"
                    >
                        <ExternalLink size={18} /> Demo
                    </a>
                )}
                {(project.paper || project.title.includes("Paper")) && (
                    <a href={project.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium"
                    >
                        <FileText size={18} /> Paper
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects: Project[] = [
        {
            title: "DevDocBot - AI Search",
            desc: "AWS-native semantic search system for technical documentation using RAG architecture. Enables natural language queries with context-aware responses.",
            tech: ["Python", "AWS Lambda", "AWS Bedrock", "Pinecone", "RAG"],
            github: "https://github.com/ChinmayLokare/devdocbot",
            demo: "https://devdocbot.netlify.app/",
            image: devdocImg
        },
        {
            title: "Federated Learning Platform",
            desc: "Distributed system for NLP tasks. Achieved 85.71% accuracy on CommitmentBank dataset with privacy-preserving model training across nodes.",
            tech: ["Java", "Spring Boot", "PyTorch", "gRPC", "AWS EC2"],
            github: "#",
            paper: "#",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "RL Circuit Breaker",
            desc: "Adaptive circuit breaker for microservices using reinforcement learning. Achieved 88.9% success rate in extreme failure scenarios.",
            tech: ["Python", "RL", "Microservices", "Spring Boot"],
            github: "#",
            image: "https://images.unsplash.com/photo-1518433278985-359f1f0e2101?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section id="projects" className="py-24 max-w-7xl mx-auto px-6 lg:px-12 scroll-mt-20">
            <Reveal>
                <SectionHeader
                    title="Projects"
                    subtitle="A collection of systems I've built in distributed computing and AI."
                />
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, i) => (
                    <Reveal key={p.title} delay={i * 0.1}> {/* Stagger effect */}
                        <ProjectCard project={p} index={i} />
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Projects;