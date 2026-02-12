import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Star, Shield, Palette, Brain, Smile, Activity, Sparkles, Clock } from 'lucide-react';

const features = [
    {
        icon: Sparkles,
        title: "Rules-free Zone",
        desc: "Care for kids is not less than cute baby birds in the nest. A space to be free.",
        color: "bg-pink-600"
    },
    {
        icon: Smile,
        title: "Bright & Airy",
        desc: "Comfortably furnished area filled with age-appropriate toys and light.",
        color: "bg-sky-blue"
    },
    {
        icon: Shield,
        title: "Convertible Area",
        desc: "Different activities as per kids’ talents and capabilities. Adaptable spaces.",
        color: "bg-apple-green"
    },
    {
        icon: Activity,
        title: "Electronic Gadget Free",
        desc: "Space to showcase their natural ability without digital distractions.",
        color: "bg-pink-600"
    },
    {
        icon: Clock,
        title: "Well-equipped Schedule",
        desc: "Creative plays to identify strengths & weakness. Joyful pre-school & refreshing noons.",
        color: "bg-sky-blue"
    },
    {
        icon: Heart,
        title: "Flexi-zone",
        desc: "Play, draw, paint, dance, sing... at their choice anytime.",
        color: "bg-apple-green"
    },
    {
        icon: Star,
        title: "Nap Room",
        desc: "Comfortable space to rest and stay quiet when they need a recharge.",
        color: "bg-fantasy-purple"
    }
];

export const WhyUsSection = () => {
    return (
        <section id="ink" className="py-24 md:py-32 bg-white relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold font-fredoka text-dark-gray mb-6">
                        Our <span className="text-magic-pink">Vision</span> & <span className="text-fantasy-purple">Mission</span>
                    </h2>
                    <p className="text-2xl text-medium-gray font-nunito max-w-3xl mx-auto leading-relaxed font-bold">
                        To empower kids by holding on to their inner child.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold font-fredoka text-dark-gray">Strategies</h3>
                        <p className="text-xl text-medium-gray font-nunito leading-relaxed">
                            Life is not just using the whole box of crayons, <br />
                            Giving a try with <span className="text-magic-pink font-bold">colour pencils / water colours / oil paints</span> and different brushes too.
                        </p>
                        <p className="font-bold text-fantasy-purple text-xl font-fredoka">
                            "An amazing art of life emerges only with abundant choices and no ground rule."
                        </p>
                    </div>
                    <div className="p-1 rounded-[3.5rem] magic-gradient-purple shadow-punchy">
                        <div className="rounded-[3.4rem] overflow-hidden border-[10px] border-white">
                            <img src="/assets/imgs/Colours Image.png" alt="Colours of Life" className="w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-10 rounded-3xl bg-cloud-blue hover:bg-white hover:shadow-punchy transition-all duration-500 border-2 border-transparent hover:border-fantasy-purple/5 group relative overflow-hidden ${index === features.length - 1 ? 'lg:col-start-2' : ''
                                }`}
                        >
                            {/* Internal decorative glow */}
                            <div className={`absolute top-0 right-0 w-24 h-24 ${item.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />

                            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg`}>
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold font-fredoka text-dark-gray mb-4 group-hover:text-active-blue transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-lg text-medium-gray font-nunito leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
