import { EnrollmentSection } from '../sections/EnrollmentSection';
import { motion } from 'framer-motion';

export const EnrollPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <EnrollmentSection />
        </motion.div>
    );
};
