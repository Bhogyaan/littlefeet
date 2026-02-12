import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Star, Heart, BookOpen, Map, Users, Sparkles, ShieldCheck, Pencil, Palette } from 'lucide-react';

const themedDays = [
    { day: "Gratitude Day", icon: Heart, color: "text-candy-pink" },
    { day: "Respect Day", icon: Star, color: "text-sunshine-yellow" },
    { day: "Appreciation Day", icon: ShieldCheck, color: "text-apple-green" },
    { day: "Self-Expression Day", icon: Palette, color: "text-fantasy-purple" },
    { day: "Forgiveness Day", icon: Heart, color: "text-magic-pink" },
    { day: "Helping Day", icon: Users, color: "text-sky-blue" },
    { day: "Story Telling Day", icon: BookOpen, color: "text-magic-pink" },
    { day: "Drawing Day", icon: Pencil, color: "text-fantasy-purple" },
    { day: "Writing Day", icon: Pencil, color: "text-apple-green" },
    { day: "Post-Office Day", icon: Map, color: "text-active-blue" },
    { day: "Bank Day", icon: Star, color: "text-sunshine-yellow" },
    { day: "Planets Day", icon: Sparkles, color: "text-fantasy-purple" },
    { day: "Pets Day", icon: Heart, color: "text-candy-pink" },
    { day: "Animals Day", icon: Map, color: "text-apple-green" },
    { day: "Vegetables Day", icon: Star, color: "text-apple-green" },
    { day: "Fruits Day", icon: Heart, color: "text-candy-pink" }
];

const activitiesList = [
    "Play dough", "Musical Statues", "Animal Yoga", "Flash card", "Dress up",
    "Role play", "Messy play", "Builder’s Corner", "Words & Signs", "Rock & Roll"
];

export const CalendarSection = () => {
    return (
        <section id="calendar" className="py-24 md:py-32 bg-cloud-blue overflow-hidden relative">
            {/* Background sparkle blobs */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-magic-pink/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full text-active-blue font-nunito font-bold text-base shadow-punchy mb-8">
                            <CalendarIcon size={20} className="text-magic-pink" />
                            <span>Magical Moments</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold font-fredoka text-dark-gray mb-6">
                            Here All 365 days are not the same. <br />
                            <span className="text-magic-pink">No day will be boredom.</span>
                        </h2>
                        <p className="text-xl text-medium-gray font-nunito mb-12 leading-relaxed">
                            We have cautiously and consciously designed our months/weeks/days for different activities suitable for the age group to get prepared for learning.
                        </p>

                        <div className="mb-16">
                            <h4 className="font-bold font-fredoka text-dark-gray text-2xl mb-8 flex items-center gap-3">
                                <Sparkles className="text-sunshine-yellow" size={24} />
                                Mind-blowing activities:
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {activitiesList.map((act, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 5 }}
                                        className="px-6 py-4 bg-white rounded-2xl shadow-sm border-l-4 border-active-blue font-nunito font-bold text-dark-gray hover:shadow-md transition-shadow"
                                    >
                                        {act}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                            {themedDays.map((td, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className={`bg-white p-6 rounded-2xl shadow-sm text-center border-b-4 border-transparent hover:border-active-blue transition-all group ${i % 2 === 0 ? 'mt-4' : 'mb-4'
                                        }`}
                                >
                                    <div className={`${td.color} mb-3 flex justify-center group-hover:scale-110 transition-transform`}>
                                        <td.icon size={24} />
                                    </div>
                                    <p className="font-bold font-fredoka text-dark-gray text-xs leading-tight">{td.day}</p>
                                </motion.div>
                            ))}
                        </div>
                        <p className="mt-12 font-bold text-fantasy-purple text-lg font-fredoka">
                            We are proud to become a stepping stone climb up to the goal of their Life.
                        </p>
                    </div>

                    <div className="magic-gradient-purple p-1 rounded-[3.5rem] shadow-punchy">
                        <div className="rounded-[3.4rem] overflow-hidden shadow-punchy border-[12px] border-white relative group">
                            <img
                                src="/assets/imgs/2 set of Kids Image1.png"
                                alt="Musical chair and fun activities"
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 w-24 h-24 bg-sunshine-yellow rounded-full flex items-center justify-center rotate-12 shadow-punchy z-10 group-hover:scale-110 transition-transform">
                                <p className="font-fredoka font-bold text-dark-gray text-center leading-tight text-lg">Fun <br /> Hub!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
