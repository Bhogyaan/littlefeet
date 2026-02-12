import { GallerySection } from '../sections/GallerySection';
import { motion } from 'framer-motion';

export const GalleryPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <GallerySection />
        </motion.div>
    );
};
