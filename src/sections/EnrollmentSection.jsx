import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const EnrollmentSection = () => {
    return (
        <section id="contact" className="py-12 md:py-16 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="rounded-3xl shadow-xl border border-gray-100/50 overflow-hidden bg-gradient-to-br from-cloud-blue/10 to-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center p-6 md:p-10 lg:p-12">
                        {/* Left - Content */}
                        <div className="space-y-6 md:space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold font-fredoka text-dark-gray leading-tight">
                                Book a Visit for a <br />
                                <span className="text-magic-pink">Tour / Trial Day</span>
                            </h2>

                            <p className="text-lg md:text-xl text-medium-gray font-nunito leading-relaxed">
                                Easy paperwork via mobile. Come join the <span className="text-fantasy-purple font-bold">Little Feet crèche</span> family in Salem.
                            </p>

                            <div className="space-y-6 md:space-y-8">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-sky-blue shadow-sm flex-shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold font-fredoka text-dark-gray text-lg mb-1">Little Feet crèche</h4>
                                        <p className="text-base md:text-lg text-dark-gray font-nunito leading-relaxed">
                                            #624, First Floor, Marimuthu Gounder Street, <br />
                                            Vanniyar Nagar, Salem, <br />
                                            TAMIL NADU, INDIA PIN-636004
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-apple-green shadow-sm flex-shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <p className="text-base md:text-lg text-dark-gray font-nunito leading-relaxed">
                                        Landline: <span className="font-bold">+91 427 3595271</span> <br />
                                        Mobile: <span className="font-bold">6381318593</span>
                                    </p>
                                </div>

                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-magic-pink shadow-sm flex-shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <p className="text-base md:text-lg text-dark-gray font-nunito">
                                        devaranipadma@gmail.com
                                    </p>
                                </div>
                            </div>

                            {/* <Button
                                size="lg"
                                className="magic-gradient-pink text-white w-full sm:w-auto px-8 py-5 rounded-3xl text-base md:text-lg shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-3"
                            >
                                Schedule Your Visit <ArrowRight size={20} />
                            </Button> */}
                        </div>

                        {/* Right - Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                            <img
                                src="/assets/imgs/BannerImage 1.jpg"
                                alt="Tour and visit our facility"
                                loading="lazy"
                                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[5/4]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/85 backdrop-blur-sm px-6 py-4 rounded-2xl text-center shadow-sm">
                                <p className="font-fredoka font-bold text-dark-gray text-base md:text-lg">
                                    Open Mon–Sat <br /> 8:00 AM – 7:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Inside views gallery */}
                    <div className="p-6 md:p-10 lg:p-12 border-t border-gray-100">
                        <div className="flex items-center gap-4 mb-6 md:mb-8">
                            <div className="h-1 flex-grow bg-gradient-to-r from-transparent via-active-blue/20 to-transparent" />
                            <h3 className="font-fredoka text-xl md:text-2xl text-dark-gray text-center px-4">Inside Little Feet crèche</h3>
                            <div className="h-1 flex-grow bg-gradient-to-r from-active-blue/20 via-active-blue/20 to-transparent" />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div
                                    key={i}
                                    className="rounded-3xl overflow-hidden shadow-md aspect-square border-4 border-white group"
                                >
                                    <img
                                        src={`/assets/imgs/img-${i}.png`}
                                        alt={`crèche interior view ${i}`}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};