import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile-2.jpg';

const About = () => {
    return (
        <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="About Me" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 space-y-6 text-slate-400 text-lg leading-relaxed"
                >
                    <p>
                        I'm a Computer Science graduate student at <span className="text-primary">Rochester Institute of Technology</span>,
                        graduating in May 2027. My journey into tech began with Electronics Engineering, but I discovered my passion
                        for software development and artificial intelligence during my 3 years as a Software Engineer at
                        <span className="text-slate-200 font-semibold"> Tata Consultancy Services</span>.
                    </p>
                    <p>
                        Currently, I work as a <span className="text-slate-200 font-semibold">Research Assistant</span> under Professor Haibo Yang,
                        developing distributed federated learning systems. My research focuses on privacy-preserving machine learning and
                        distributed computing, where I've built platforms that achieve state-of-the-art performance on NLP benchmarks.
                    </p>
                    <p>
                        I'm actively seeking <span className="text-slate-100 font-bold underline decoration-primary">Summer 2026 SDE/MLE internship</span> opportunities
                        where I can apply my expertise in distributed systems, machine learning, and cloud architecture to solve real-world problems.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group hidden md:block"
                >
                    <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 rounded-xl group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
                    <div className="relative bg-slate-800 rounded-xl overflow-hidden aspect-square">
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
                        {/* Replace with your image if desired, or keep as a stylish placeholder */}
                        <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-600 font-mono italic">
                            <img
                                src={profileImg}
                                alt="Chinmay Lokare"
                                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-slate-800 shadow-2xl hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;