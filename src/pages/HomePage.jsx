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

            {/* CTA Section - The Promise */}
            <section className="py-10 bg-cloud-blue/50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-block px-4  rounded-full bg-magic-pink/10 text-magic-pink font-fredoka text-sm font-bold tracking-widest uppercase mb-4">
                            Our Philosophy
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold font-fredoka text-dark-gray leading-tight mb-6">
                            Where Happy Childhoods <br className="hidden md:block" />
                            <span className="text-active-blue">Become Bright Futures</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center justify-center p-4 md:p-8 bg-white rounded-3xl shadow-punchy border border-cloud-blue">
                            {/* Left Side */}
                            <div className="space-y-3 md:pr-12 md:border-r border-cloud-blue">
                                <p className="text-medium-gray font-nunito uppercase tracking-tighter text-[10px] font-extrabold opacity-60">
                                    The Parent's Choice
                                </p>
                                <div className="flex flex-col items-center justify-center">
                                    <span className="text-2xl md:text-3xl font-fredoka font-bold text-fantasy-purple italic">Your Satisfaction</span>
                                    <span className="text-magic-pink text-2xl">↔</span>
                                    <span className="text-2xl md:text-3xl font-fredoka font-bold text-magic-pink italic">Our Success</span>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="space-y-3 md:pl-12">
                                <p className="text-medium-gray font-nunito uppercase tracking-tighter text-[10px] font-extrabold opacity-60">
                                    Our Commitment
                                </p>
                                <div className="flex flex-col items-center justify-center">
                                    <span className="text-2xl md:text-3xl font-fredoka font-bold text-magic-pink italic">Your Success</span>
                                    <span className="text-fantasy-purple text-2xl">↔</span>
                                    <span className="text-2xl md:text-3xl font-fredoka font-bold text-fantasy-purple italic">Our Satisfaction</span>
                                </div>
                            </div>
                        </div>

                        <p className="mt-8 text-lg text-medium-gray font-nunito max-w-2xl mx-auto leading-relaxed">
                            Looking for a place where your child feels loved and safe? Join our family in Salem and let their little dreams grow.
                        </p>
                    </motion.div>
                </div>

                {/* Subtle background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-magic-pink/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-active-blue/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            </section>
        </motion.div>
    );
};
