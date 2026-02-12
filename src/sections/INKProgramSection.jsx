import { motion } from 'framer-motion';
import { Pencil, Star, MessageCircle, Activity, Heart, ShieldCheck, Eye, Sparkles } from 'lucide-react';

const activities = [
    { icon: Sparkles, title: "Creativity", desc: "Unlocking natural talents through free expression." },
    { icon: MessageCircle, title: "Morals", desc: "Building character and values through storytelling." },
    { icon: Activity, title: "Interactive Learning", desc: "Hands-on discovery of the world around them." },
    { icon: Heart, title: "Physical Activities", desc: "Nurturing healthy bodies and active minds." },
    { icon: Eye, title: "Self-Discovery", desc: "Helping children know who they are in real." }
];

const safetyValues = [
    { icon: ShieldCheck, label: "Safe & Secure", details: "Peace of mind for parents." },
    { icon: Sparkles, label: "Hygienic", details: "Clean and healthy environment." },
    { icon: Eye, label: "CCTV Monitored", details: "Transparent and visible care." }
];

export const INKProgramSection = () => {
    return (
        <section id="ink" className="py-24 md:py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-magic-pink font-bold tracking-widest uppercase text-sm mb-4 block animate-bounce">Magical Curriculum</span>
                    <h2 className="text-5xl md:text-7xl font-bold font-fredoka text-dark-gray mb-6">
                        The <span className="text-fantasy-purple">INK</span> <span className="text-magic-pink">Program</span>
                    </h2>
                    <p className="text-2xl text-medium-gray font-nunito max-w-3xl mx-auto leading-relaxed">
                        <span className="font-bold text-active-blue">Identity-Nurturing Knowledge</span> — A world designed to protect and grow their inner sparkle.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold font-fredoka text-dark-gray flex items-center gap-3">
                            Introducing <span className="px-4 py-1 magic-gradient-purple text-white rounded-xl rotate-2">INK</span> program:
                        </h3>
                        <p className="text-xl text-medium-gray font-nunito leading-relaxed font-bold text-fantasy-purple">
                            A Curriculum, Designed for Identity-Nurturing Knowledge
                        </p>
                        <p className="text-lg text-medium-gray font-nunito">
                            With Fun-filled hours @Safe, Secure & Hygiene premises.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                "Creative activities",
                                "Moral stories",
                                "Interactive learning",
                                "Physical exercises",
                                "And lot more..."
                            ].map((activity, i, arr) => (
                                <div
                                    key={i}
                                    className={`flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 ${i === arr.length - 1 ? 'sm:col-span-2 sm:max-w-[calc(50%-12px)] sm:mx-auto w-full' : ''
                                        }`}
                                >
                                    <div className="w-2 h-2 rounded-full bg-magic-pink" />
                                    <span className="font-nunito font-bold text-dark-gray">{activity}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="magic-gradient-purple p-1 rounded-[3.5rem] shadow-punchy">
                            <div className="bg-white p-10 md:p-14 rounded-[3.4rem] space-y-10">
                                <h3 className="text-3xl font-bold font-fredoka text-dark-gray mb-8">Trust & Safety</h3>
                                <div className="space-y-12">
                                    {safetyValues.map((val, i) => (
                                        <div key={i} className="flex gap-6 items-start group">
                                            <div className="bg-cloud-blue p-4 rounded-2xl text-fantasy-purple shadow-sm group-hover:scale-110 transition-transform">
                                                <val.icon size={36} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold font-fredoka text-dark-gray mb-2 group-hover:text-magic-pink transition-colors">{val.label}</h4>
                                                <p className="text-medium-gray font-nunito leading-relaxed text-lg">
                                                    {val.details}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mt-32">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-cloud-blue/30 p-10 md:p-14 rounded-[3rem] border-2 border-active-blue/5 flex flex-col justify-center space-y-8"
                            >
                                <p className="text-xl text-medium-gray font-nunito leading-relaxed italic border-l-4 border-magic-pink pl-6">
                                    "We love to take care of your children with patience and compassion, stand out professionally for the reliability and trustworthiness."
                                </p>
                                <p className="text-lg text-medium-gray font-nunito leading-relaxed">
                                    We are operating <span className="text-fantasy-purple font-bold">transparently</span> to give shoulder to shoulder support for <span className="text-active-blue font-bold">Moms</span> busy with Job, Homemaking, Studying, Socializing, Public Serving and for <span className="text-magic-pink font-bold">Grannies</span> struggling with prolonged babysitting.
                                </p>
                                <p className="text-2xl font-bold font-fredoka text-dark-gray magic-gradient-pink bg-clip-text text-transparent w-fit">
                                    Know your kids who they are in real!
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white p-10 md:p-14 rounded-[3rem] shadow-punchy border-2 border-active-blue/10 flex flex-col justify-center"
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-500">
                                        <ShieldCheck size={40} />
                                    </div>
                                    <h4 className="text-3xl font-bold font-fredoka text-dark-gray">Secured Facility</h4>
                                </div>
                                <p className="text-xl text-medium-gray font-nunito leading-relaxed">
                                    We are delighted to provide a secured facility for your Little Ones with every Day-In&Out monitored by <span className="text-active-blue font-bold">CCTV</span> at our Creche.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
