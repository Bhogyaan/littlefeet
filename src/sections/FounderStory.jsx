import { motion } from 'framer-motion';
import { Heart, Award, Users, Sparkles, Quote } from 'lucide-react';

export const FounderStory = () => {
    return (
        <section id="about" className="py-2 md:py-2 bg-gradient-to-b from-white to-cloud-blue/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-1 md:mb-2">
                    <div className="inline-flex items-center gap-3 px-4 py-3 bg-white rounded-full text-fantasy-purple font-nunito font-bold text-base shadow-sm mb-6">
                        <Heart size={20} className="text-magic-pink" fill="currentColor" />
                        <span>The Heart Behind Little Feet Creche</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-fredoka text-dark-gray leading-tight mb-">
                        Meet Our Founder
                    </h2>
                </div>

                {/* Founder Intro Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12 mb-12 md:mb-16"
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                        {/* Compact Photo */}
                        <div className="flex-shrink-0">
                            <div className="relative">
                                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-4 ring-fantasy-purple/10">
                                    <img
                                        src="/assets/imgs/2 set of Kids Image2.png"
                                        alt="Founder Devarani Ramachandran"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-fantasy-purple to-magic-pink text-white rounded-full p-3 shadow-lg">
                                    <Heart size={20} fill="currentColor" />
                                </div>
                            </div>
                        </div>

                        {/* Name & Title */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-3xl md:text-4xl font-bold font-fredoka text-fantasy-purple mb-2">
                                Devarani Ramachandran
                            </h3>
                            <p className="text-lg md:text-xl font-semibold font-nunito text-medium-gray mb-6">
                                Founder & Director
                            </p>
                            
                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center p-4 bg-fantasy-purple/5 rounded-xl">
                                    <p className="text-2xl font-bold font-fredoka text-fantasy-purple">20+</p>
                                    <p className="text-xs font-nunito text-medium-gray">Years in IT</p>
                                </div>
                                <div className="text-center p-4 bg-apple-green/5 rounded-xl">
                                    <p className="text-2xl font-bold font-fredoka text-apple-green">2</p>
                                    <p className="text-xs font-nunito text-medium-gray">Daughters</p>
                                </div>
                                <div className="text-center p-4 bg-magic-pink/5 rounded-xl">
                                    <p className="text-2xl font-bold font-fredoka text-magic-pink">∞</p>
                                    <p className="text-xs font-nunito text-medium-gray">Dedication</p>
                                </div>
                            </div>

                            <p className="text-base md:text-lg text-medium-gray font-nunito leading-relaxed">
                                IT professional, working mother, and holistic healer dedicated to nurturing the next generation while supporting striving parents.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {/* Expertise Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-gradient-to-br from-fantasy-purple/10 to-magic-pink/10 p-6 rounded-2xl border border-fantasy-purple/20"
                    >
                        <Award className="text-fantasy-purple mb-4" size={32} />
                        <h4 className="font-bold font-fredoka text-dark-gray text-xl mb-3">Professional Excellence</h4>
                        <p className="text-medium-gray font-nunito text-sm leading-relaxed">
                            Mathematics graduate from Sri Sarada College For Women with over two decades of IT industry experience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-br from-sunshine-yellow/10 to-apple-green/10 p-6 rounded-2xl border border-apple-green/20"
                    >
                        <Users className="text-apple-green mb-4" size={32} />
                        <h4 className="font-bold font-fredoka text-dark-gray text-xl mb-3">Lived Experience</h4>
                        <p className="text-medium-gray font-nunito text-sm leading-relaxed">
                            Working mother who balanced career, studies, and raising two daughters—she truly understands the juggle.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-gradient-to-br from-magic-pink/10 to-candy-pink/10 p-6 rounded-2xl border border-magic-pink/20"
                    >
                        <Sparkles className="text-magic-pink mb-4" size={32} />
                        <h4 className="font-bold font-fredoka text-dark-gray text-xl mb-3">Holistic Care</h4>
                        <p className="text-medium-gray font-nunito text-sm leading-relaxed">
                            Trained in Foot Reflexology (Acupressure) and Pranic Healing to nurture children's complete well-being.
                        </p>
                    </motion.div>
                </div>

                {/* Story Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold font-fredoka text-dark-gray text-2xl mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-fantasy-purple rounded-full"></span>
                                Her Journey
                            </h3>
                            <p className="text-base text-medium-gray font-nunito leading-relaxed">
                                As a working mother, Devarani carries deep gratitude for the friends, mentors, and family who supported her journey. She understands the delicate balance between career ambitions and family responsibilities—because she's lived it.
                            </p>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold font-fredoka text-dark-gray text-2xl mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-apple-green rounded-full"></span>
                                The Inspiration
                            </h3>
                            <p className="text-base text-medium-gray font-nunito leading-relaxed">
                                This creche is a heartfelt tribute to her mother, school principal, teachers, and the loving women who cared for her children—helping with babysitting, cooking, cleaning, and shopping when she needed it most.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="bg-gradient-to-br from-fantasy-purple/5 to-magic-pink/5 p-6 md:p-8 rounded-2xl border-2 border-fantasy-purple/20">
                            <Quote className="text-fantasy-purple mb-4" size={32} />
                            <p className="text-xl md:text-2xl font-bold font-fredoka text-fantasy-purple mb-4 leading-snug">
                                "Every woman has the strength to grow."
                            </p>
                            <p className="text-base text-dark-gray font-nunito leading-relaxed">
                                Little Feet Creche exists to support striving mothers while nurturing the emotional balance of every child. Children will cherish the gentle touch of care and grow into a bright future with ease and joy.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-fantasy-purple to-magic-pink p-6 md:p-8 rounded-2xl shadow-lg text-white">
                            <h3 className="text-2xl md:text-3xl font-bold font-fredoka mb-3 text-center flex items-center justify-center gap-3">
                                S <span className="text-white/90">↔</span> S
                            </h3>
                            <p className="text-base md:text-lg font-nunito font-semibold text-center">
                                Your Satisfaction is our Success & vice versa.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};