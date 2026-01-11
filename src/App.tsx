import React, { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Components that load immediately
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Footer from './components/Footer';

// 2. Lazy load the rest to improve performance
// NOTE: Make sure you removed the "import About from..." lines at the top
const About = React.lazy(() => import('./sections/About'));
const Skills = React.lazy(() => import('./sections/Skills'));
const Projects = React.lazy(() => import('./sections/Projects'));
const Experience = React.lazy(() => import('./sections/Experience'));
const Contact = React.lazy(() => import('./sections/Contact'));

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-dark min-h-screen selection:bg-primary/30 selection:text-primary">
            <AnimatePresence>
                {isLoading ? (
                    <motion.div
                        key="loader"
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-dark flex items-center justify-center"
                    >
                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Navbar />
                        <main className="overflow-hidden">
                            <div id="home"><Hero /></div>
                            <Suspense fallback={<div className="h-20" />}>
                                <About />
                                <Experience />
                                <Skills />
                                <Projects />
                                <Contact />
                            </Suspense>
                        </main>
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;