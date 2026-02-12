import { motion } from 'framer-motion';
import { Sparkles, Smile, Shield, Activity, Clock, Heart, Star } from 'lucide-react';

const features = [
    { icon: Sparkles, title: "Rules-free Zone", desc: "Care for kids is gentle and free — like baby birds in a nest.", color: "bg-pink-600" },
    { icon: Smile, title: "Bright & Airy Spaces", desc: "Comfortably furnished with age-appropriate toys and plenty of natural light.", color: "bg-sky-blue" },
    { icon: Shield, title: "Convertible Areas", desc: "Flexible spaces that adapt to each child's talents and interests.", color: "bg-apple-green" },
    { icon: Activity, title: "No Gadgets Zone", desc: "A space where natural abilities and creativity can truly shine.", color: "bg-pink-600" },
    { icon: Clock, title: "Thoughtful Schedule", desc: "Creative play that helps identify strengths and areas for growth.", color: "bg-sky-blue" },
    { icon: Heart, title: "Flexi-zone", desc: "Freedom to play, draw, paint, dance, or sing whenever they choose.", color: "bg-apple-green" },
    { icon: Star, title: "Nap Room", desc: "A calm, cozy space for rest and quiet time.", color: "bg-fantasy-purple" }
];

export const WhyUsSection = () => {
    return (
        <section id="why-us" className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold font-fredoka text-dark-gray mb-6">
                        Our <span className="text-magic-pink">Vision</span> & <span className="text-fantasy-purple">Mission</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-medium-gray font-nunito max-w-3xl mx-auto leading-relaxed font-bold">
                        To empower children by preserving and nurturing their inner child.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-24">
                    <div className="space-y-6 md:space-y-8">
                        <h3 className="text-2xl md:text-3xl font-bold font-fredoka text-dark-gray">Our Approach</h3>
                        <p className="text-base md:text-lg text-medium-gray font-nunito leading-relaxed">
                            Life isn’t just about using the whole box of crayons. <br />
                            It’s about trying <span className="text-magic-pink font-bold">colour pencils, water colours, oil paints</span> and different brushes too.
                        </p>
                        <p className="font-bold text-fantasy-purple text-lg md:text-xl font-fredoka italic">
                            "An amazing art of life emerges only with abundant choices and no ground rules."
                        </p>
                    </div>

                    <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                        <img
                            src="/assets/imgs/Colours Image.png"
                            alt="Colours and creativity"
                            loading="lazy"
                            className="w-full h-auto object-cover aspect-[5/4]"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-6 md:p-8 rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-fantasy-purple/30 group"
                        >
                            <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform shadow-sm`}>
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold font-fredoka text-dark-gray mb-3 group-hover:text-active-blue transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-base text-medium-gray font-nunito leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};