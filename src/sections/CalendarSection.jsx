import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Sparkles, Heart, Star, ShieldCheck, Palette, Users, BookOpen, Pencil, Map, Music, Dumbbell, Smile } from 'lucide-react';
import { useLocation } from 'react-router-dom';


const themedDays = [
    { day: "Gratitude Day", icon: Heart, color: "text-candy-pink", bg: "bg-candy-pink/10", border: "border-candy-pink/20" },
    { day: "Respect Day", icon: Star, color: "text-sunshine-yellow", bg: "bg-sunshine-yellow/10", border: "border-sunshine-yellow/20" },
    { day: "Appreciation Day", icon: ShieldCheck, color: "text-apple-green", bg: "bg-apple-green/10", border: "border-apple-green/20" },
    { day: "Self-Expression Day", icon: Palette, color: "text-fantasy-purple", bg: "bg-fantasy-purple/10", border: "border-fantasy-purple/20" },
    { day: "Forgiveness Day", icon: Heart, color: "text-magic-pink", bg: "bg-magic-pink/10", border: "border-magic-pink/20" },
    { day: "Helping Day", icon: Users, color: "text-sky-blue", bg: "bg-sky-blue/10", border: "border-sky-blue/20" },
    { day: "Story Telling Day", icon: BookOpen, color: "text-magic-pink", bg: "bg-magic-pink/10", border: "border-magic-pink/20" },
    { day: "Drawing Day", icon: Pencil, color: "text-fantasy-purple", bg: "bg-fantasy-purple/10", border: "border-fantasy-purple/20" },
    { day: "Writing Day", icon: Pencil, color: "text-apple-green", bg: "bg-apple-green/10", border: "border-apple-green/20" },
    { day: "Post-Office Day", icon: Map, color: "text-active-blue", bg: "bg-active-blue/10", border: "border-active-blue/20" },
    { day: "Bank Day", icon: Star, color: "text-sunshine-yellow", bg: "bg-sunshine-yellow/10", border: "border-sunshine-yellow/20" },
    { day: "Planets Day", icon: Sparkles, color: "text-fantasy-purple", bg: "bg-fantasy-purple/10", border: "border-fantasy-purple/20" },
    { day: "Pets Day", icon: Heart, color: "text-candy-pink", bg: "bg-candy-pink/10", border: "border-candy-pink/20" },
    { day: "Animals Day", icon: Map, color: "text-apple-green", bg: "bg-apple-green/10", border: "border-apple-green/20" },
    { day: "Vegetables Day", icon: Star, color: "text-apple-green", bg: "bg-apple-green/10", border: "border-apple-green/20" },
    { day: "Fruits Day", icon: Heart, color: "text-candy-pink", bg: "bg-candy-pink/10", border: "border-candy-pink/20" }
];

const activitiesList = [
    { name: "Play dough", icon: Smile },
    { name: "Musical Statues", icon: Music },
    { name: "Animal Yoga", icon: Dumbbell },
    { name: "Flash card", icon: Star },
    { name: "Dress up", icon: Users },
    { name: "Role play", icon: Users },
    { name: "Messy play", icon: Palette },
    { name: "Builder’s Corner", icon: ShieldCheck },
    { name: "Words & Signs", icon: BookOpen },
    { name: "Rock & Roll", icon: Music }
];

export const CalendarSection = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <section id="calendar" className={`relative bg-white overflow-hidden pb-16 md:pb-20 ${!isHomePage ? 'pt-12 md:pt-16' : ''}`}>
            {/* Banner Image - Only show on Home page */}
            {isHomePage && (
                <div className="w-full h-64 md:h-80 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
                    <img
                        src="/assets/imgs/BannerImage3.jpg"
                        alt="Calendar Banner"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            <div className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 ${!isHomePage ? '' : '-mt-10'}`}>
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full border border-gray-100 shadow-sm mb-6"
                    >
                        <CalendarIcon size={18} className="text-magic-pink" />
                        <span className="font-nunito font-bold text-active-blue text-sm md:text-base">Here All 365 days are not the same</span>
                    </motion.div>

                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-fredoka text-dark-gray leading-tight mb-4"
                    >
                        No day will be <span className="text-magic-pink relative">
                            boredom.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-sunshine-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.5" />
                            </svg>
                        </span>
                    </motion.h2>

                    <p className="text-lg sm:text-xl text-medium-gray font-nunito max-w-3xl mx-auto leading-relaxed">
                        We have cautiously and consciously designed our months/weeks/days for different activities suitable for the age group to get prepared for learning.
                    </p>
                </div>

                {/* Activities Highlights Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-2.5 bg-sunshine-yellow/20 rounded-2xl text-sunshine-yellow">
                            <Sparkles size={28} />
                        </div>
                        <h3 className="text-3xl font-bold font-fredoka text-dark-gray">
                            Follows some mind-blowing activities:
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {activitiesList.map((act, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-active-blue hover:shadow-md transition-all group flex flex-col items-center text-center gap-3"
                            >
                                <div className="p-3 bg-cloud-blue rounded-full text-active-blue group-hover:bg-active-blue group-hover:text-white transition-colors">
                                    <act.icon size={20} />
                                </div>
                                <span className="font-fredoka font-semibold text-dark-gray">{act.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Themed Days Section */}
                <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-magic-pink via-fantasy-purple to-active-blue" />

                    <h3 className="text-2xl font-bold font-fredoka text-dark-gray mb-8 text-center md:text-left">
                        Follows some attractive titles:
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
                        {themedDays.map((td, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className={`p-4 rounded-xl border ${td.bg} ${td.border} hover:scale-105 transition-transform cursor-default flex items-center gap-3`}
                            >
                                <div className={`${td.color}`}>
                                    <td.icon size={20} />
                                </div>
                                <p className="font-bold font-nunito text-dark-gray text-sm leading-snug">
                                    {td.day}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-fantasy-purple/5 rounded-2xl p-6 md:p-8 text-center">
                        <p className="font-bold text-fantasy-purple text-xl md:text-2xl font-fredoka">
                            "We are proud to become a stepping stone climb up to the goal of their Life."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};