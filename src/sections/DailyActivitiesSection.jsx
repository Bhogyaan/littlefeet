import { motion } from 'framer-motion';
import { Palette, Music, BookOpen, Sun, Utensils, Heart, Smile, TreePine } from 'lucide-react';

const activities = [
    {
        icon: Palette,
        title: "Art & Creativity",
        description: "Painting, drawing, and crafts to express imagination",
        color: "text-magic-pink",
        bg: "bg-magic-pink/10",
        border: "border-magic-pink/20"
    },
    {
        icon: Music,
        title: "Music & Movement",
        description: "Songs, dance, and rhythm activities for coordination",
        color: "text-fantasy-purple",
        bg: "bg-fantasy-purple/10",
        border: "border-fantasy-purple/20"
    },
    {
        icon: BookOpen,
        title: "Storytelling",
        description: "Interactive stories that spark curiosity and language skills",
        color: "text-active-blue",
        bg: "bg-active-blue/10",
        border: "border-active-blue/20"
    },
    {
        icon: TreePine,
        title: "Outdoor Play",
        description: "Fresh air, nature exploration, and physical activities",
        color: "text-apple-green",
        bg: "bg-apple-green/10",
        border: "border-apple-green/20"
    },
    {
        icon: Smile,
        title: "Play-Based Learning",
        description: "Learning through fun, hands-on exploration",
        color: "text-sunshine-yellow",
        bg: "bg-sunshine-yellow/10",
        border: "border-sunshine-yellow/20"
    },
    {
        icon: Utensils,
        title: "Healthy Snacks",
        description: "Nutritious meals and snacks (parent-provided)",
        color: "text-sky-blue",
        bg: "bg-sky-blue/10",
        border: "border-sky-blue/20"
    },
    {
        icon: Sun,
        title: "Sensory Activities",
        description: "Tactile experiences for cognitive development",
        color: "text-candy-pink",
        bg: "bg-candy-pink/10",
        border: "border-candy-pink/20"
    },
    {
        icon: Heart,
        title: "Social Skills",
        description: "Building friendships and emotional intelligence",
        color: "text-magic-pink",
        bg: "bg-magic-pink/10",
        border: "border-magic-pink/20"
    }
];

export const DailyActivitiesSection = () => {
    return (
        <section id="activities" className="py-16 md:py-20 bg-gradient-to-b from-cloud-blue/20 to-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-sunshine-yellow/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-fantasy-purple/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sunshine-yellow font-nunito font-semibold text-sm mb-6 shadow-sm border border-sunshine-yellow/20"
                    >
                        <Sun size={16} fill="currentColor" />
                        <span>Daily Activities</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-fredoka text-dark-gray leading-tight mb-4"
                    >
                        Every Day is a New <span className="text-sunshine-yellow">Adventure</span>
                    </motion.h2>

                    <p className="text-lg md:text-xl text-medium-gray font-nunito leading-relaxed max-w-3xl mx-auto">
                        Our carefully designed daily activities nurture creativity, curiosity, and confidence in every child.
                    </p>
                </div>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className={`group bg-white rounded-3xl p-6 md:p-8 border-2 ${activity.border} hover:shadow-xl transition-all duration-300 text-center`}
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 mx-auto ${activity.bg} ${activity.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <activity.icon size={28} />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-bold font-fredoka text-dark-gray mb-3">
                                {activity.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm md:text-base text-medium-gray font-nunito leading-relaxed">
                                {activity.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-16 bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100 text-center max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Heart size={24} className="text-magic-pink" fill="currentColor" />
                        <h3 className="text-2xl md:text-3xl font-bold font-fredoka text-dark-gray">
                            Learning Through Play
                        </h3>
                        <Heart size={24} className="text-magic-pink" fill="currentColor" />
                    </div>
                    <p className="text-base md:text-lg text-medium-gray font-nunito leading-relaxed">
                        We believe that <span className="font-bold text-fantasy-purple">happy children are learning children</span>. Every activity is designed to be joyful, engaging, and developmentally appropriate for each age group.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
