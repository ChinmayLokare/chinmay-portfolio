import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowRight } from 'lucide-react';
// Import your image
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                    {/* LEFT COLUMN: Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex-1 text-center lg:text-left"
                    >
                        <motion.p variants={itemVariants} className="text-primary font-mono mb-4 text-lg">
                            Hi, my name is
                        </motion.p>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl font-bold mb-4 text-slate-100 tracking-tight"
                        >
                            Chinmay Lokare
                        </motion.h1>

                        <motion.h2
                            variants={itemVariants}
                            className="text-2xl md:text-3xl font-semibold mb-6 text-slate-400"
                        >
                            MS Computer Science @ RIT <br className="hidden md:block" />
                            <span className="text-slate-300">Aspiring SDE / MLE</span>
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-slate-400 max-w-xl mb-10 text-lg leading-relaxed"
                        >
                            Building intelligent systems with distributed computing and machine learning.
                            I specialize in scaling ML models and developing robust backend architectures.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                            <a href="#projects" className="flex items-center gap-2 bg-primary hover:bg-blue-500 text-dark font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-slate-700 text-slate-100 hover:border-primary py-3 px-8 rounded-lg transition-all duration-300 hover:bg-primary/5">
                                Download Resume <FileText size={18} />
                            </a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-6 text-slate-400">
                            <a href="https://github.com/ChinmayLokare"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors hover:scale-110 transform duration-200"
                            >
                                <Github size={30}
                                />
                            </a>
                            <a href="https://linkedin.com/in/chinmaylokare" target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                                <Linkedin size={30} />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT COLUMN: Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex-1 flex justify-center lg:justify-end"
                    >
                        <div className="relative group">
                            {/* Decorative background element */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                            <div className="relative">
                                <img
                                    src={profileImg}
                                    alt="Chinmay Lokare"
                                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-slate-800 shadow-2xl hover:grayscale-0 transition-all duration-500"
                                />
                                {/* Modern corner accents */}
                                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-l-4 border-b-4 border-primary rounded-bl-2xl"></div>
                                <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-primary rounded-tr-2xl"></div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;