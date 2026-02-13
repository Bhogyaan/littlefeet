import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Activity, Heart, ShieldCheck, Eye } from 'lucide-react';

const activities = [
    "Creative activities",
    "Moral stories",
    "Interactive learning",
    "Physical exercises",
    "And lot more..."
];

const safetyValues = [
    { icon: ShieldCheck, label: "Safe & Secure", details: "Peace of mind for parents." },
    { icon: Sparkles, label: "Hygienic", details: "Clean and healthy environment." },
    { icon: Eye, label: "CCTV Monitored", details: "Transparent and visible care." }
];

export const INKProgramSection = () => {
    return (
        <section id="ink" className="py-20 md:py-8 bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="text-center mb-14 md:mb-20">
                    <span className="inline-block text-magic-pink font-bold tracking-wider uppercase text-sm mb-4">
                        Our Special Curriculum
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-fredoka text-dark-gray mb-6">
                        The <span className="text-fantasy-purple">INK</span> Program
                    </h2>
                    <p className="text-lg sm:text-xl text-medium-gray font-nunito max-w-3xl mx-auto leading-relaxed">
                        <span className="font-semibold text-active-blue">Identity-Nurturing Knowledge</span> —  
                        A joyful space where every child’s inner sparkle is protected and nurtured.
                    </p>
                </div>

                {/* Main content - two columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left column - Text + list */}
                    <div className="space-y-10 md:space-y-12">
                        <div>
                            <h3 className="text-3xl font-bold font-fredoka text-dark-gray mb-6">
                                Introducing the <span className="text-fantasy-purple">INK</span> Program
                            </h3>
                            <p className="text-xl font-semibold text-fantasy-purple mb-4">
                                A Curriculum Designed for Identity-Nurturing Knowledge
                            </p>
                            <p className="text-lg text-medium-gray font-nunito leading-relaxed">
                                Fun-filled hours in safe, secure, and hygienic surroundings.
                            </p>
                        </div>

                        {/* Activities list */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {activities.map((activity, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-gray-100"
                                >
                                    <div className="w-3 h-3 rounded-full bg-magic-pink flex-shrink-0" />
                                    <span className="font-medium font-nunito text-dark-gray text-base">{activity}</span>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {safetyValues.map((val, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center"
                                >
                                    <div className="flex justify-center mb-4">
                                        <div className="w-14 h-14 bg-cloud-blue/30 rounded-xl flex items-center justify-center text-fantasy-purple">
                                            <val.icon size={28} />
                                        </div>
                                    </div>
                                    <h4 className="font-bold font-fredoka text-dark-gray mb-2">{val.label}</h4>
                                    <p className="text-sm text-medium-gray font-nunito">{val.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column - Safety + image */}
                    <div className="space-y-10 mt-10 md:space-y-12">
                        {/* Safety cards */}
                        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {safetyValues.map((val, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center"
                                >
                                    <div className="flex justify-center mb-4">
                                        <div className="w-14 h-14 bg-cloud-blue/30 rounded-xl flex items-center justify-center text-fantasy-purple">
                                            <val.icon size={28} />
                                        </div>
                                    </div>
                                    <h4 className="font-bold font-fredoka text-dark-gray mb-2">{val.label}</h4>
                                    <p className="text-sm text-medium-gray font-nunito">{val.details}</p>
                                </div>
                            ))}
                        </div> */}

                        {/* Image with subtle overlay */}
                        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                            <img
                                src="/assets/imgs/INK-Image.webp" 
                                alt="Children exploring in INK program"
                                loading="lazy"
                                className="w-full h-auto object-cover aspect-[5/5]"
                            />
                        </div>
                    </div>
                </div>

                {/* Closing quote - centered, elegant */}
                <div className="mt-16 md:mt-14 text-center max-w-4xl mx-auto">
                    <blockquote className="text-xl md:text-2xl italic font-nunito text-medium-gray leading-relaxed border-l-4 border-magic-pink pl-6 py-2">
                        "We care for your children with patience and compassion, standing out for reliability and trust."
                    </blockquote>
                    <p className="mt-4 text-lg font-semibold text-fantasy-purple">
                        Transparent support for busy moms and grannies — helping every child discover who they truly are.
                    </p>
                </div>
            </div>
        </section>
    );
};