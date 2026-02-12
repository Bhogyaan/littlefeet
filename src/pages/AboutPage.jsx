import { FounderStory } from '../sections/FounderStory';
import { motion } from 'framer-motion';

export const AboutPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <FounderStory />
        </motion.div>
    );
};
