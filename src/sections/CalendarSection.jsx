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
    "Role play", "Messy play", "Builder’s Corner", "Words & Signs", "Rock & Roll"
];

export const CalendarSection = () => {
    return (
        <section id="calendar" className="py-20 md:py-28 bg-gradient-to-b from-cloud-blue/10 to-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="text-center mb-14 md:mb-20">
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

                {/* Two-column layout */}
                <div className="items-center flex flex-col md:flex-row gap-10 justify-center mb-5">
                    {/* Left - Text + activities + themed days */}
                    <div className="space-y-12 md:space-y-16">
                        <div>
                            <h3 className="text-3xl font-bold font-fredoka text-dark-gray mb-8 flex items-center gap-4">
                                <Sparkles className="text-sunshine-yellow" size={28} />
                                Highlights
                            </h3>

                            <div className="flex flex-wrap  gap-3 w-full p-0 m-0">
                                {activitiesList.map((act, i) => (
                                    <div
                                        key={i}
                                        className="bg-purple-700 p-3 rounded-xl shadow-sm border text-center border-gray-100 font-nunito font-medium text-white hover:shadow-md transition-shadow whitespace-nowrap "
                                    >
                                        {act}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* <div>
                            <h4 className="font-bold font-fredoka text-dark-gray text-2xl mb-8 text-center md:text-left">
                                Our Special Themed Days
                            </h4>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                                {themedDays.map((td, i) => (
                                    <div
                                        key={i}
                                        className="bg-white p-5 md:p-6 rounded-2xl shadow-sm text-center border-b-4 border-transparent hover:border-active-blue transition-all group"
                                    >
                                        <div className={`${td.color} mb-3 flex justify-center group-hover:scale-110 transition-transform`}>
                                            <td.icon size={24} />
                                        </div>
                                        <p className="font-bold font-fredoka text-dark-gray text-sm leading-tight">
                                            {td.day}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-10 text-center md:text-left font-bold text-fantasy-purple text-lg font-fredoka">
                                We are proud to be the stepping stone toward their bright future.
                            </p>
                        </div> */}
                    </div>

                    {/* Right - Focal image */}
                    {/* <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src="/assets/imgs/2 set of Kids Image1.png"
                            alt="Children enjoying group activities and fun games"
                            loading="lazy"
                            className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[5/4]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8 bg-white/85 backdrop-blur-md px-6 py-4 rounded-2xl text-center shadow-sm">
                            <p className="font-fredoka font-bold text-dark-gray text-lg md:text-xl">
                                Joyful Learning Every Day
                            </p>
                        </div>
                    </div> */}
                    
                </div>
                <div>
                            <h4 className="font-bold font-fredoka text-dark-gray text-2xl mb-8 text-center md:text-left">
                                Our Special Themed Days
                            </h4>

                            <div className="flex flex-wrap gap-9 w-full p-0 m-0 justify-center md:justify-start">
                                {themedDays.map((td, i) => (
                                    <div
                                        key={i}
                                        className="bg-white p-3 md:py-3 rounded-xl shadow-sm text-center border-b-4 border-transparent hover:border-active-blue transition-all group whitespace-nowrap flex items-center justify-center gap-3"
                                    >
                                        <div className={`${td.color}  flex justify-center group-hover:scale-110 transition-transform`}>
                                            <td.icon size={24} />
                                        </div>
                                        <p className="font-semibold font-fredoka text-dark-gray text-sm leading-tight">
                                            {td.day}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-10 text-center md:text-left font-bold text-fantasy-purple text-lg font-fredoka">
                                We are proud to be the stepping stone toward their bright future.
                            </p>
                        </div>
            </div>
        </section>
    );
};