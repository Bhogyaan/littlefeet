import { CalendarSection } from '../sections/CalendarSection';
import { EventsSection } from '../sections/EventsSection';
import { motion } from 'framer-motion';

export const EventsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <CalendarSection />
            <EventsSection />
        </motion.div>
    );
};
