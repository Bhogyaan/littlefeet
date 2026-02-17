import { motion } from 'framer-motion';
import { Baby, Users, GraduationCap, Sparkles, Heart, BookOpen } from 'lucide-react';

const programs = [
    {
        icon: Baby,
        title: "Toddlers",
        ageRange: "2-3 Years",
        description: "Early exploration and sensory play in a nurturing environment. Building confidence through gentle activities.",
        color: "text-candy-pink",
        bg: "bg-candy-pink/10",
        border: "border-candy-pink/20",
        shadow: "hover:shadow-candy-pink/20"
    },
    {
        icon: Users,
        title: "Preschool",
        ageRange: "3-5 Years",
        description: "Creative learning and social skills development. Play-based curriculum fostering curiosity and friendship.",
        color: "text-fantasy-purple",
        bg: "bg-fantasy-purple/10",
        border: "border-fantasy-purple/20",
        shadow: "hover:shadow-fantasy-purple/20"
    },
    {
        icon: GraduationCap,
        title: "School Age",
        ageRange: "6-9 Years",
        description: "Homework support and after-school activities. Structured learning with creative expression and outdoor play.",
        color: "text-active-blue",
        bg: "bg-active-blue/10",
        border: "border-active-blue/20",
        shadow: "hover:shadow-active-blue/20"
    }
];

export const ProgramsSection = () => {
    return (
        <section id="programs" className="py-16 md:py-20 bg-gradient-to-b from-white to-cloud-blue/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-magic-pink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-fantasy-purple font-nunito font-semibold text-sm mb-6 shadow-sm border border-fantasy-purple/20"
                    >
                        <Sparkles size={16} className="text-sunshine-yellow" fill="currentColor" />
                        <span>Our Programs</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-fredoka text-dark-gray leading-tight mb-4"
                    >
                        Perfect Program for Every <span className="text-magic-pink">Age</span>
                    </motion.h2>

                    <p className="text-lg md:text-xl text-medium-gray font-nunito leading-relaxed max-w-3xl mx-auto">
                        From curious toddlers to energetic school-goers, we have the right environment for your child's growth.
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group bg-white rounded-[2.5rem] p-8 md:p-10 border-2 ${program.border} ${program.shadow} hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                        >
                            {/* Background decoration */}
                            <div className={`absolute top-0 right-0 w-32 h-32 ${program.bg} rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/2`} />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`w-16 h-16 ${program.bg} ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <program.icon size={32} />
                                </div>

                                {/* Age Badge */}
                                <div className={`inline-flex items-center gap-2 px-3 py-1 ${program.bg} rounded-full mb-4`}>
                                    <Heart size={14} className={program.color} fill="currentColor" />
                                    <span className={`text-sm font-bold font-nunito ${program.color}`}>
                                        {program.ageRange}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold font-fredoka text-dark-gray mb-4">
                                    {program.title}
                                </h3>

                                {/* Description */}
                                <p className="text-base md:text-lg text-medium-gray font-nunito leading-relaxed">
                                    {program.description}
                                </p>

                                {/* Decorative element */}
                                <div className="mt-6 flex items-center gap-2">
                                    <BookOpen size={18} className={program.color} />
                                    <span className={`text-sm font-semibold ${program.color}`}>
                                        Age-appropriate curriculum
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 md:mt-16"
                >
                    <p className="text-lg md:text-xl text-medium-gray font-nunito mb-4">
                        Not sure which program is right for your child?
                    </p>
                    <p className="text-base text-active-blue font-nunito font-semibold">
                        Contact us for a personalized consultation! 📞
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
