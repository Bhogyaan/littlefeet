import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const FounderStory = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-cloud-blue/10 to-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left - Images */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6 md:gap-8 order-1 lg:order-none"
                    >
                        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                            <img
                                src="/assets/imgs/2 set of Kids Image2.png"
                                alt="Founder Devarani with children"
                                loading="lazy"
                                className="w-full h-auto object-cover aspect-[4/5]"
                            />
                        </div>

                        <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                            <img
                                src="/assets/imgs/1 set of Kids Image2.png"
                                alt="Joyful children at Little Feet Creche"
                                loading="lazy"
                                className="w-full h-auto object-cover aspect-square"
                            />
                        </div>
                    </motion.div>

                    {/* Right - Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="space-y-6 md:space-y-8 order-2 lg:order-none text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-fantasy-purple font-nunito font-bold text-base shadow-md mx-auto lg:mx-0">
                            <Heart size={20} className="text-magic-pink" />
                            <span>The Heart Behind Little Feet Creche</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold font-fredoka text-dark-gray">
                            Meet Our Founder <span className="text-fantasy-purple">Devarani Ramachandran</span>
                        </h2>

                        <div className="space-y-5 text-base md:text-lg text-medium-gray font-nunito leading-relaxed max-w-prose mx-auto lg:mx-0">
                            <p>
                                Devarani Ramachandran, daughter of Padma & Ramachandran, is an IT professional with over two decades of experience.
                            </p>
                            <p>
                                A Mathematics graduate from Sri Sarada College For Women, Salem, she married Janarthanan and balanced higher studies, work, and family life with the unwavering support of her loved ones.
                            </p>
                            <p>
                                As a studying and working mother of two daughters, she carries deep gratitude for all well-wishers, respect for philosophers, and love for friends, mentors, and challengers who shaped her journey.
                            </p>
                            <p>
                                Beyond her career, she has devoted herself to life skills, Foot Reflexology (Acupressure), and Pranic Healing. This creche is a tribute to her mother, her school principal, her teachers, and the loving women who cared for her children — helping with babysitting, cooking, cleaning, and shopping.
                            </p>
                            <p className="font-bold text-fantasy-purple">
                                Every woman has the strength to grow. Little Feet Creche exists to support striving mothers while nurturing the emotional balance of every child.
                            </p>
                            <p>
                                Children will cherish the gentle touch of her care and grow into a bright future with ease and joy.
                            </p>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-fantasy-purple to-magic-pink rounded-3xl shadow-lg text-white text-center">
                            <h3 className="text-3xl font-bold font-fredoka mb-3 flex items-center justify-center gap-4">
                                S <span className="text-2xl">&lt;→&gt;</span> S
                            </h3>
                            <p className="text-lg md:text-xl font-nunito italic">
                                Your Satisfaction is our Success & vice versa.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};