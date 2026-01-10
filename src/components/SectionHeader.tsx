import { motion } from 'framer-motion';

interface Props {
    title: string;
    subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: Props) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
    >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 flex items-center gap-4">
            {/* <span className="text-primary font-mono text-2xl">0{title === 'About Me' ? '1' : title === 'Skills' ? '2' : title === 'Projects' ? '3' : '4'}.</span> */}
            {title}
            <div className="h-[1px] bg-slate-700 flex-grow max-w-md hidden sm:block"></div>
        </h2>
        {subtitle && <p className="text-slate-400 mt-2 max-w-2xl">{subtitle}</p>}
    </motion.div>
);

export default SectionHeader;