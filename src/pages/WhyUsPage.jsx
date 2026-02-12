import { WhyUsSection } from '../sections/WhyUsSection';
import { motion } from 'framer-motion';

export const WhyUsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <WhyUsSection />
        </motion.div>
    );
};
