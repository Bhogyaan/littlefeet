import { Hero } from '../components/home/Hero';
import { INKProgramSection } from '../sections/INKProgramSection';
import { WhyUsSection } from '../sections/WhyUsSection';
import { CalendarSection } from '../sections/CalendarSection';
import { EventsSection } from '../sections/EventsSection';
import { motion } from 'framer-motion';

export const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <WhyUsSection />
            <INKProgramSection />
            <CalendarSection />
            <EventsSection />

            {/* CTA Banner */}
            <section className="py-20 bg-fantasy-purple relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold font-fredoka mb-6">
                        Caring Kids with Love & Passion
                    </h2>
                    <p className="text-lg font-nunito opacity-90">
                        Your Satisfaction &lt;─&gt; Our Success
                    </p>
                </div>
            </section>
        </motion.div>
    );
};
