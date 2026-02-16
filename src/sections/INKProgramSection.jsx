import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { CheckCircle2, HeartHandshake, ShieldCheck, Sparkles, Star, Users, Heart } from 'lucide-react';

export const INKProgramSection = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <section id="ink" className={`relative bg-white overflow-hidden pb-24 md:pb-32 ${!isHomePage ? 'pt-20 md:pt-28' : ''}`}>
            {/* Banner Image - Only show on Home page */}
            {isHomePage && (
                <div className="w-full h-72 md:h-96 relative">
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10" />
                    <img
                        src="/assets/imgs/BannerImage5.jpg"
                        alt="INK Program Banner"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white/90 backdrop-blur-md px-10 py-5 rounded-full shadow-lg text-center"
                        >
                            <span className="text-magic-pink font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">
                                Our Special Curriculum
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold font-fredoka text-dark-gray">
                                The <span className="text-fantasy-purple">INK</span> Program
                            </h2>
                        </motion.div>
                    </div>
                </div>
            )}

            <div className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 ${!isHomePage ? '' : 'mt-12 md:mt-16'}`}>

                {/* Core Definition */}
                <div className="text-center max-w-4xl mx-auto mb-20 md:mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-fredoka font-medium text-dark-gray leading-relaxed"
                    >
                        A Curriculum, Designed for <br className="hidden md:block" />
                        <span className="font-bold text-active-blue decoration-wavy underline decoration-magic-pink/30">Identity-Nurturing Knowledge</span>
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        {/* Highlights */}
                        <div className="bg-cloud-blue/5 p-8 rounded-[2rem] border border-cloud-blue/20">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white rounded-xl shadow-sm text-active-blue">
                                    <ShieldCheck size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-dark-gray">Fun-filled hours @</h3>
                            </div>
                            <p className="font-fredoka text-2xl md:text-3xl text-magic-pink leading-tight">
                                Safe, Secure & Hygiene premises
                            </p>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg text-medium-gray font-nunito leading-relaxed">
                                Under this program they are free to act & to get them spark thro’
                            </p>

                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    { text: "Creative activities", icon: Sparkles, color: "text-fantasy-purple" },
                                    { text: "Moral stories", icon: HeartHandshake, color: "text-sunshine-yellow" },
                                    { text: "Interactive learning", icon: Users, color: "text-active-blue" },
                                    { text: "Physical exercises", icon: Activity, color: "text-apple-green" }, // Imported Activity below
                                    { text: "And lot more….", icon: Star, color: "text-magic-pink" }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                                        <div className={`p-2 rounded-full bg-gray-50 ${item.color}`}>
                                            <item.icon size={20} />
                                        </div>
                                        <span className="text-lg font-bold text-dark-gray font-nunito">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right: Image & Additional Info */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative"
                        >
                            <img
                                src="/assets/imgs/INK-Image.webp"
                                alt="INK Program Activities"
                                className="w-full h-auto object-cover aspect-[4/3]"
                            />
                        </motion.div>

                        <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-16 bg-fantasy-purple/5 rounded-bl-[10rem] -mr-10 -mt-10 z-0"></div>
                            <div className="relative z-10 space-y-6">
                                <p className="text-medium-gray leading-relaxed font-nunito">
                                    We love to take care of your children with <strong className="text-fantasy-purple">patience and compassion</strong>, stand out professionally for the reliability and trustworthiness.
                                </p>
                                <hr className="border-gray-100" />
                                <p className="text-medium-gray leading-relaxed font-nunito">
                                    We provide shoulder to shoulder support for <strong className="text-active-blue">Moms</strong> busy with Job, Homemaking, Studying, or Socializing, and for <strong className="text-active-blue">Grannies</strong> struggling with prolonged babysitting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Area - Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center max-w-5xl mx-auto"
                >
                    <div className="p-8 md:p-12 bg-gradient-to-br from-active-blue to-fantasy-purple rounded-[2.5rem] shadow-xl text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-left space-y-4 flex-1">
                                <h3 className="text-2xl md:text-3xl font-fredoka font-bold leading-tight">
                                    Grab this opportunity to <br /> know who your kids really are!
                                </h3>
                                <p className="text-white/90 font-nunito text-lg">
                                    Every Day-In & Out monitored by CCTV for your peace of mind.
                                </p>
                            </div>
                            <div className="flex-shrink-0 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                <ShieldCheck size={48} className="text-white" />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

// Start of Activity Icon Import (Adding missing import)
import { Activity } from 'lucide-react';