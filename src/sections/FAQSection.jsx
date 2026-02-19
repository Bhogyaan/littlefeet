import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "What should be the Age Group of children to enroll?",
        answer: "The age group for enrollment is 2 – 9 years.",
        color: "text-magic-pink"
    },
    {
        question: "Do you enroll Specially-abled or Physically-challenged or Additionally-cared child?",
        answer: "No, we do not enroll children with these specific medical requirements at this time.",
        color: "text-sky-blue"
    },
    {
        question: "What is the Timings of crèche?",
        answer: "We are open from 8am to 7pm, Monday through Saturday. We are closed on Sundays.",
        color: "text-apple-green"
    },
    {
        question: "Do you provide Guidance for School Homework?",
        answer: "None, except for handwriting guidance.",
        color: "text-fantasy-purple"
    },
    {
        question: "What is the Fee Structure?",
        answer: "The fee depends on the specific time slot chosen and the age of the kid.",
        color: "text-active-blue"
    },
    {
        question: "Do you serve food/snacks at premises?",
        answer: "No, we do not serve food or snacks. Parents are requested to provide them.",
        color: "text-candy-pink"
    }
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-12 md:py-16 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-magic-pink/10 rounded-3xl text-magic-pink mb-6 shadow-sm">
                        <HelpCircle size={24} />
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-fredoka text-dark-gray mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base md:text-lg text-medium-gray font-nunito leading-relaxed max-w-2xl mx-auto">
                        Clear answers to help you understand how we care for your child.
                    </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`rounded-[2rem] border transition-all duration-300 overflow-hidden ${openIndex === i ? 'border-active-blue bg-cloud-blue/30 shadow-md' : 'border-gray-200 hover:border-gray-300 bg-white'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                className="w-full p-5 md:p-6 text-left flex justify-between items-center gap-4 md:gap-6"
                            >
                                <span className={`font-bold font-fredoka text-base md:text-lg ${openIndex === i ? 'text-active-blue' : 'text-dark-gray'}`}>
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`${openIndex === i ? 'text-active-blue' : 'text-medium-gray'}`}
                                >
                                    <ChevronDown size={24} strokeWidth={2.5} />
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
                                        <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-medium-gray font-nunito leading-relaxed border-t border-gray-200">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Inside views */}
                <div className="mt-12 md:mt-16">
                    <div className="flex items-center gap-4 mb-6 md:mb-8">
                        <div className="h-1 flex-grow bg-gradient-to-r from-transparent via-active-blue/20 to-transparent" />
                        <h3 className="font-fredoka text-xl md:text-2xl text-dark-gray text-center px-4">Inside Little Feet crèche</h3>
                        <div className="h-1 flex-grow bg-gradient-to-r from-active-blue/20 via-active-blue/20 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[5, 2, 4].map((i) => (
                            <div
                                key={i}
                                className="rounded-3xl overflow-hidden shadow-md aspect-[4/3] border-4 border-white"
                            >
                                <img
                                    src={`/assets/imgs/img-${i}.png`}
                                    alt={`crèche interior ${i}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};