import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Star, User, Shield, Clock } from 'lucide-react';

const faqs = [
    {
        question: "What should be the Age Group of children to enroll?",
        answer: "The age group for enrollment is 2 – 9 years.",
        icon: User,
        color: "text-magic-pink"
    },
    {
        question: "Do you enroll Specially-abled or Physically-challenged or Additionally-cared child?",
        answer: "No, we do not enroll children with these specific medical requirements at this time.",
        icon: Shield,
        color: "text-sky-blue"
    },
    {
        question: "What is the Timings of Creche?",
        answer: "We are open from 8am to 7pm, Monday through Saturday. We are closed on Sundays.",
        icon: Clock,
        color: "text-apple-green"
    },
    {
        question: "Do you provide Guidance for School Homework?",
        answer: "None, except for handwriting guidance.",
        icon: HelpCircle,
        color: "text-fantasy-purple"
    },
    {
        question: "What is the Fee Structure?",
        answer: "The fee depends on the specific time slot chosen and the age of the kid.",
        icon: HelpCircle,
        color: "text-active-blue"
    },
    {
        question: "Do you serve food/snacks at premises?",
        answer: "No, we do not serve food or snacks. Parents are requested to provide them.",
        icon: User,
        color: "text-candy-pink"
    }
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="rules" className="py-24 md:py-32 bg-white relative overflow-hidden">

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-magic-pink/10 rounded-3xl text-magic-pink mb-8 shadow-sm">
                        <HelpCircle size={32} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-fredoka text-dark-gray mb-6">
                        Curiosity Meets <span className="text-fantasy-purple">Clarity</span>
                    </h2>
                    <p className="text-xl text-medium-gray font-nunito leading-relaxed mb-12 max-w-2xl mx-auto">
                        Everything you need to know about starting your child's magical journey with us.
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`rounded-[2.5rem] border-2 transition-all duration-300 overflow-hidden ${openIndex === i
                                ? 'border-active-blue bg-cloud-blue shadow-punchy'
                                : 'border-gray-100 hover:border-fantasy-purple/20 bg-white'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                className="w-full p-8 text-left flex justify-between items-center gap-6"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`${faq.color} p-2 bg-white rounded-xl shadow-sm`}>
                                        <faq.icon size={20} />
                                    </div>
                                    <span className={`font-bold font-fredoka text-xl transition-colors ${openIndex === i ? 'text-active-blue' : 'text-dark-gray'}`}>
                                        {faq.question}
                                    </span>
                                </div>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                                    className={`${openIndex === i ? 'text-active-blue' : 'text-medium-gray'}`}
                                >
                                    <ChevronDown size={24} strokeWidth={3} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-8 pt-0 text-lg text-medium-gray font-nunito leading-relaxed border-t border-active-blue/10">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-32 max-w-5xl mx-auto">
                    <div className="flex items-center gap-6 mb-16">
                        <div className="h-0.5 flex-grow bg-gradient-to-r from-transparent to-active-blue/20" />
                        <h3 className="text-center font-fredoka text-3xl text-dark-gray px-4">Inside View of Creche</h3>
                        <div className="h-0.5 flex-grow bg-gradient-to-l from-transparent to-active-blue/20" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-0">
                        {[5, 2, 4].map((i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="magic-gradient-purple p-1 rounded-[3rem] shadow-punchy"
                            >
                                <div className="relative group rounded-[2.9rem] overflow-hidden border-[8px] border-white">
                                    <img
                                        src={`/assets/imgs/BannerImage${i === 1 ? ' 1' : i}.jpg`}
                                        alt={`Inside view ${i}`}
                                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-magic-gradient-purple opacity-20" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
