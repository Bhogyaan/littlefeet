import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Sparkles, Heart, Star, ShieldCheck, Palette, Users, BookOpen, Pencil, Map } from 'lucide-react';

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
    "Role play", "Messy play", "Builder's Corner", "Words & Signs", "Rock & Roll"
];

export const CalendarSection = () => {
    return (
        <section id="calendar" className="py-20 md:py-28 bg-gradient-to-b from-cloud-blue/10 to-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full text-active-blue font-nunito font-bold text-base shadow-sm mb-6">
                        <CalendarIcon size={20} className="text-magic-pink" />
                        <span>Every Day is Magical</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-fredoka text-dark-gray leading-tight mb-6">
                        No two days are the same.<br />
                        <span className="text-magic-pink">No day feels boring.</span>
                    </h2>

                    <p className="text-lg sm:text-xl text-medium-gray font-nunito max-w-3xl mx-auto leading-relaxed">
                        Carefully planned months, weeks, and days — filled with age-appropriate activities that spark joy and prepare children for learning.
                    </p>
                </div>

                {/* Activities Highlights Section */}
                <div className="mb-16 md:mb-20">
                    <h3 className="text-3xl font-bold font-fredoka text-dark-gray mb-8 flex items-center justify-center md:justify-start gap-3">
                        <Sparkles className="text-sunshine-yellow" size={32} />
                        Activity Highlights
                    </h3>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                        {activitiesList.map((act, i) => (
                            <div
                                key={i}
                                className="bg-purple-700 px-5 py-3 rounded-xl shadow-sm text-center font-nunito font-semibold text-white hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap"
                            >
                                {act}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Themed Days Section */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold font-fredoka text-dark-gray mb-8 text-center md:text-left">
                        Our Special Themed Days
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 mb-10">
                        {themedDays.map((td, i) => (
                            <div
                                key={i}
                                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-active-blue hover:shadow-md transition-all group"
                            >
                                <div className={`${td.color} mb-3 flex justify-center group-hover:scale-110 transition-transform`}>
                                    <td.icon size={26} strokeWidth={2} />
                                </div>
                                <p className="font-semibold font-fredoka text-dark-gray text-sm text-center leading-snug">
                                    {td.day}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center md:text-left font-bold text-fantasy-purple text-xl font-fredoka">
                        We are proud to be the stepping stone toward their bright future.
                    </p>
                </div>
            </div>
        </section>
    );
};