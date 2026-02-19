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
            <INKProgramSection />
            <WhyUsSection />
            <CalendarSection />
            <EventsSection />

            {/* CTA Banner */}
            <section className="py-20 bg-fantasy-purple relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
                    <div className="inline-flex flex-col gap-1 md:gap-2 bg-white/15 backdrop-blur-md px-4 md:px-10 py-4 md:py-5 rounded-full border border-white/20 text-[10px] md:text-base font-bold tracking-widest uppercase shadow-xl mt-4 whitespace-nowrap">
                        <div className="grid grid-cols-[1fr_auto_1fr] gap-2 md:gap-3 items-center w-full text-white">
                            <span className="text-right">Your Satisfaction</span>
                            <span>↔</span>
                            <span className="text-left">Our Success</span>
                        </div>
                        <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center w-full text-sunshine-yellow">
                            <span className="text-right">Your Success</span>
                            <span>↔</span>
                            <span className="text-left">Our Satisfaction</span>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};
