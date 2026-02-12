import { FAQSection } from '../sections/FAQSection';
import { motion } from 'framer-motion';

export const FAQPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <FAQSection />
        </motion.div>
    );
};
