import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Heart, Award, Users, Sparkles, Quote, Baby, GraduationCap, Briefcase } from 'lucide-react';

export const FounderStory = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <section id="about" className={`relative bg-white overflow-hidden ${!isHomePage ? 'py-12 md:py-10' : ''}`}>
            {/* Banner Image - Only show on Home page */}
            {isHomePage && (
                <div className="w-full h-64 md:h-80 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
                    <img
                        src="/assets/imgs/BannerImage 1.jpg"
                        alt="Founder Banner"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            <div className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 ${!isHomePage ? '' : '-mt-20'}`}>
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full text-active-blue font-nunito font-semibold text-sm mb-6 shadow-sm border border-white"
                    >
                        <Heart size={16} className="text-magic-pink" fill="currentColor" />
                        <span>The Heart Behind Little Feet</span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-fredoka text-dark-gray leading-tight mb-4">
                        Meet Our Founder
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-magic-pink to-fantasy-purple rounded-full mx-auto" />
                </div>

                {/* Main Profile Area */}
                <div className="max-w-4xl mx-auto mb-16 md:mb-20">
                    {/* Bio & Credentials */}
                    <div className="space-y-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl md:text-4xl font-bold font-fredoka text-fantasy-purple mb-3">
                                Devarani Ramachandran
                            </h3>
                            <p className="text-lg md:text-xl text-medium-gray font-nunito leading-relaxed mb-4">
                                A multifaceted soul: <span className="text-dark-gray font-semibold">IT Professional, Working Mother, and Holistic Healer.</span>
                            </p>
                            <p className="text-base md:text-lg text-medium-gray font-nunito leading-relaxed">
                                With a Mathematics degree from <strong className="text-fantasy-purple">Sri Sarada College For Women</strong> and over two decades in the corporate IT world, Devarani combines structural thinking with deep emotional intelligence. She is trained in Foot Reflexology (Acupressure) and Pranic Healing, bringing a holistic approach to child care.
                            </p>
                        </motion.div>

                        {/* Story Chapters */}
                        <div className="grid md:grid-cols-2 gap-6 text-left">
                            <motion.div
                                className="bg-cloud-blue/30 p-8 rounded-3xl border border-cloud-blue relative overflow-hidden"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, delay: 0.2 }}
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Briefcase size={120} />
                                </div>
                                <h4 className="flex items-center gap-3 text-xl font-bold font-fredoka text-dark-gray mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-active-blue text-white text-sm">1</span>
                                    Her Journey
                                </h4>
                                <p className="text-medium-gray font-nunito leading-relaxed relative z-10">
                                    As a working mother herself, she walked the tightrope between career ambitions and family responsibilities. She knows the guilt, the rush, and the profound need for a support system—because she lived it. This creche is her way of paying forward the support she once received.
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-pink-50 p-8 rounded-3xl border border-pink-100 relative overflow-hidden"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, delay: 0.3 }}
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Heart size={120} />
                                </div>
                                <h4 className="flex items-center gap-3 text-xl font-bold font-fredoka text-dark-gray mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-magic-pink text-white text-sm">2</span>
                                    The Inspiration
                                </h4>
                                <p className="text-medium-gray font-nunito leading-relaxed relative z-10">
                                    Little Feet Creche is a tribute to the "Village" that raised her children—her mother, teachers, and the kind women who stepped in when needed. It’s built on gratitude and designed to be that village for you.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Closing Hero Quote */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-fantasy-purple to-active-blue rounded-[2.5rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-punchy">
                        <Quote className="absolute top-8 left-8 text-white/20" size={64} />
                        <Quote className="absolute bottom-8 right-8 text-white/20 rotate-180" size={64} />

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold font-fredoka mb-4 leading-snug">
                                "Every woman has the strength to grow. We exist to support that growth."
                            </h3>
                            <p className="text-lg md:text-xl font-nunito opacity-90 mb-6 max-w-3xl mx-auto">
                                Little Feet Creche is not just a facility; it's a promise—to support striving mothers and nurture the emotional balance of every child.
                            </p>
                            <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30 text-sm font-semibold tracking-wide uppercase">
                                Your Satisfaction ↔ Our Success
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};