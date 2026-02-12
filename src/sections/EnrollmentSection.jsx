import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, QrCode, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const EnrollmentSection = () => {
    return (
        <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background sparkle */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] magic-gradient-purple opacity-[0.03] rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="magic-gradient-purple p-1.5 rounded-[4.5rem] shadow-punchy overflow-hidden">
                    <div className="bg-cloud-blue/50 rounded-[4rem] p-8 md:p-16 lg:p-20 border border-white/50 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-7">
                                <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-punchy border-2 border-active-blue/10 relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h2 className="text-4xl md:text-5xl font-bold font-fredoka text-dark-gray mb-6 leading-tight">
                                            Book a Visit to Have a <br /> <span className="text-magic-pink">Tour / Trial Day</span>
                                        </h2>
                                        <p className="text-xl text-medium-gray font-nunito mb-10 leading-relaxed max-w-lg">
                                            Easy Paperwork at Mobile. Join the <span className="text-fantasy-purple font-bold">Little Feet Creche</span> family in Salem.
                                        </p>

                                        <div className="space-y-8 mb-10">
                                            {/* Address */}
                                            <div className="flex items-start gap-6 group">
                                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-sky-blue shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                                    <MapPin size={28} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold font-fredoka text-dark-gray text-lg mb-1">Little Feet Creche</h4>
                                                    <p className="text-lg text-dark-gray font-nunito leading-relaxed">
                                                        #624, First Floor, Marimuthu Gounder Street, <br />
                                                        Vanniyar Nagar, Salem, <br />
                                                        TAMIL NADU, INDIA PIN-636004
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Phone/Landline */}
                                            <div className="flex items-center gap-6 group">
                                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-apple-green shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                                    <Phone size={28} />
                                                </div>
                                                <div>
                                                    <p className="text-lg text-dark-gray font-nunito leading-relaxed">
                                                        Landline: <span className="font-bold">+91 427 3595271</span> <br />
                                                        Mobile: <span className="font-bold">6381318593</span>
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Email */}
                                            <div className="flex items-center gap-6 group">
                                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-magic-pink shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                                    <Mail size={28} />
                                                </div>
                                                <p className="text-lg text-dark-gray font-nunito">devaranipadma@gmail.com</p>
                                            </div>
                                        </div>

                                        <Button size="lg" className="magic-gradient-pink text-white w-full sm:w-auto px-12 py-7 rounded-3xl text-xl shadow-punchy hover:scale-105 transition-transform flex items-center justify-center gap-4 group">
                                            Schedule Your Visit <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5 relative">
                                <div className="relative group rounded-[4rem] overflow-hidden shadow-punchy border-[12px] border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <img
                                        src="/assets/imgs/BannerImage 1.jpg"
                                        alt="Tour our facility"
                                        className="w-full h-[500px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-magic-gradient-purple opacity-20" />
                                </div>
                                {/* Floating badge */}
                                <div className="absolute -bottom-6 -left-6 bg-sunshine-yellow p-6 rounded-3xl shadow-lg -rotate-6 hidden md:block">
                                    <p className="font-bold font-fredoka text-dark-gray text-xl leading-tight text-center">
                                        Open Mon-Sat <br /> 8am - 7pm
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-32">
                            <div className="flex items-center gap-6 mb-16">
                                <div className="h-1 flex-grow bg-gradient-to-r from-transparent via-active-blue/20 to-transparent" />
                                <h3 className="font-fredoka text-3xl text-dark-gray text-center px-8">Inside Little Feet Creche</h3>
                                <div className="h-1 flex-grow bg-gradient-to-r from-active-blue/20 via-active-blue/20 to-transparent" />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="rounded-3xl overflow-hidden shadow-md aspect-square border-8 border-white group relative">
                                        <img
                                            src={`/assets/imgs/BannerImage${i === 1 ? ' 1' : i}.jpg`}
                                            alt={`Banner ${i}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-active-blue/0 group-hover:bg-active-blue/10 transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
