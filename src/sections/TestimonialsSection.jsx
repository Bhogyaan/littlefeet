import { motion } from 'framer-motion';
import { Quote, Star, Heart } from 'lucide-react';

const testimonials = [
    {
        quote: "Little Feet crèche has been a blessing for our family. My daughter loves going there every day, and I can see how much she's grown in confidence and creativity.",
        parent: "Priya Sharma",
        childAge: "4 years old",
        color: "magic-pink"
    },
    {
        quote: "As a working mother, finding a safe and nurturing environment was my top priority. The staff here treats my son like their own, and the daily updates give me peace of mind.",
        parent: "Lakshmi Venkat",
        childAge: "3 years old",
        color: "fantasy-purple"
    },
    {
        quote: "The INK program is wonderful! My twins are learning so much through play, and they come home excited to share their stories. This is truly a home away from home.",
        parent: "Anjali Reddy",
        childAge: "5 years old (twins)",
        color: "active-blue"
    },
    {
        quote: "I appreciate the flexibility and care provided here. My mother needed support with babysitting, and Little Feet crèche has been the perfect solution for our family.",
        parent: "Divya Krishnan",
        childAge: "7 years old",
        color: "apple-green"
    }
];

export const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-16 md:py-20 bg-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-candy-pink/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-sky-blue/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-full text-magic-pink font-nunito font-semibold text-sm mb-6 shadow-sm"
                    >
                        <Heart size={16} fill="currentColor" />
                        <span>Parent Testimonials</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-fredoka text-dark-gray leading-tight mb-4"
                    >
                        Trusted by <span className="text-magic-pink">Families</span> in Salem
                    </motion.h2>

                    <p className="text-lg md:text-xl text-medium-gray font-nunito leading-relaxed max-w-3xl mx-auto">
                        Hear from parents who have found their village at Little Feet crèche.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* Quote icon background */}
                            <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Quote size={80} className="text-dark-gray" />
                            </div>

                            <div className="relative z-10">
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className="text-sunshine-yellow"
                                            fill="currentColor"
                                        />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-base md:text-lg text-medium-gray font-nunito leading-relaxed mb-6 italic">
                                    "{testimonial.quote}"
                                </p>

                                {/* Parent info */}
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-full bg-${testimonial.color}/10 flex items-center justify-center flex-shrink-0`}>
                                        <Heart size={20} className={`text-${testimonial.color}`} fill="currentColor" />
                                    </div>
                                    <div>
                                        <p className="font-bold font-fredoka text-dark-gray text-lg">
                                            {testimonial.parent}
                                        </p>
                                        <p className="text-sm text-medium-gray font-nunito">
                                            Parent of {testimonial.childAge}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-16 text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-magic-pink/10 via-fantasy-purple/10 to-active-blue/10 rounded-3xl px-8 py-6 border border-fantasy-purple/20">
                        <p className="text-xl md:text-2xl font-fredoka font-bold text-dark-gray mb-2">
                            Join Our Happy Family! 🧸
                        </p>
                        <p className="text-base md:text-lg text-medium-gray font-nunito">
                            Your satisfaction ↔ Our success
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
