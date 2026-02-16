import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Sparkles, Smile, Shield, Activity, Clock, Heart, Star, Sun, Crown, Feather } from 'lucide-react';

const features = [
    {
        icon: Sparkles,
        title: "Rules-free Zone",
        desc: "Care for kids is gentle and free — like baby birds in a nest.",
        color: "text-magic-pink",
        bg: "bg-white",
        border: "border-gray-100",
        shadow: "hover:shadow-xl hover:shadow-magic-pink/10"
    },
    {
        icon: Smile,
        title: "Happiness First",
        desc: "A happy child is a learning child. Joy is our priority.",
        color: "text-sunshine-yellow",
        bg: "bg-white",
        border: "border-gray-100",
        shadow: "hover:shadow-xl hover:shadow-sunshine-yellow/10"
    },
    {
        icon: Shield,
        title: "Safe & Secure",
        desc: "CCTV surveillance and child-proof environments for peace of mind.",
        color: "text-apple-green",
        bg: "bg-white",
        border: "border-gray-100",
        shadow: "hover:shadow-xl hover:shadow-apple-green/10"
    },
    {
        icon: Activity,
        title: "Active Learning",
        desc: "Learning through play, exploration, and natural curiosity.",
        color: "text-active-blue",
        bg: "bg-white",
        border: "border-gray-100",
        shadow: "hover:shadow-xl hover:shadow-active-blue/10"
    },
    {
        icon: Clock,
        title: "Flexible Hours",
        desc: "Supporting working parents with convenient timings that suit your schedule.",
        color: "text-fantasy-purple",
        bg: "bg-white",
        border: "border-gray-100",
        shadow: "hover:shadow-xl hover:shadow-fantasy-purple/10"
    },
    {
        icon: Heart,
        title: "Loving Care",
        desc: "A home away from home where every child is cherished.",
        color: "text-candy-pink",
        bg: "bg-white",
        border: "border-gray-100",
        shadow: "hover:shadow-xl hover:shadow-candy-pink/10"
    }
];

export const WhyUsSection = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <section id="why-us" className="relative bg-cloud-blue/10 overflow-hidden pb-24 md:pb-32">
            {/* Banner Image - Only show on Home page */}
            {isHomePage && (
                <div className="w-full h-72 md:h-96 relative">
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-cloud-blue/10 to-transparent z-10" />
                    <img
                        src="/assets/imgs/BannerImage2.jpg"
                        alt="Why Us Banner"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-block bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-lg"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold font-fredoka text-dark-gray">
                                Why <span className="text-magic-pink">Little Feet?</span>
                            </h2>
                        </motion.div>
                    </div>
                </div>
            )}

            <div className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 ${!isHomePage ? 'pt-20 md:pt-28' : 'mt-16 md:mt-24'}`}>

                {/* Vision & Mission - Clean Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 text-center max-w-4xl mx-auto mb-24 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-fantasy-purple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                        <span className="text-fantasy-purple font-nunito font-bold tracking-widest uppercase text-sm mb-4 block">Our Core Purpose</span>
                        <h3 className="text-2xl md:text-4xl font-bold font-fredoka text-dark-gray leading-tight mb-8">
                            "To empower children by <span className="text-magic-pink px-2 bg-magic-pink/5 rounded-lg">preserving and nurturing</span> their inner child."
                        </h3>
                        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
                            <div className="flex items-center justify-center gap-3 text-medium-gray font-nunito font-semibold">
                                <span className="w-10 h-10 rounded-full bg-sunshine-yellow/10 flex items-center justify-center text-sunshine-yellow"><Sparkles size={20} /></span>
                                Vision
                            </div>
                            <div className="flex items-center justify-center gap-3 text-medium-gray font-nunito font-semibold">
                                <span className="w-10 h-10 rounded-full bg-apple-green/10 flex items-center justify-center text-apple-green"><Feather size={20} /></span>
                                Mission
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Main content - Approach */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
                    {/* Left column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl md:text-5xl font-bold font-fredoka text-dark-gray leading-tight">
                            Our Unique <span className="text-fantasy-purple decoration-wavy underline decoration-magic-pink/30">Approach</span>
                        </h3>
                        <div className="space-y-6 text-lg text-medium-gray font-nunito leading-relaxed">
                            <p>
                                Life isn’t just about using the whole box of crayons.
                                It’s about deeply experiencing <span className="text-magic-pink font-bold">colour pencils, water colours, oil paints</span> and different brushes too.
                            </p>
                            <div className="bg-white p-6 rounded-2xl border-l-4 border-fantasy-purple shadow-sm">
                                <p className="font-bold text-fantasy-purple text-xl font-fredoka italic">
                                    "An amazing art of life emerges only with abundant choices and no ground rules."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-fantasy-purple/10 rounded-[2.5rem] transform rotate-3" />
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative z-10">
                            <img
                                src="/assets/imgs/Colours Image.png"
                                alt="Colours and creativity"
                                loading="lazy"
                                className="w-full h-auto object-cover aspect-[4/3]"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Features Grid - Clean & Uniform */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold font-fredoka text-dark-gray">Why Parents Choose Us</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-[2rem] bg-white border border-gray-100 ${feature.shadow} transition-all duration-300 group`}
                        >
                            <div className={`w-14 h-14 ${feature.bg} ${feature.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon size={28} />
                            </div>
                            <h4 className="text-xl font-bold font-fredoka text-dark-gray mb-3">
                                {feature.title}
                            </h4>
                            <p className="text-medium-gray font-nunito leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};