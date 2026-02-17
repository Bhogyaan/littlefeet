import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart, Facebook, Instagram, Twitter, PhoneCallIcon } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-cloud-blue pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-12 h-12 md:w-22 md:h-22 flex-shrink-0">
                                <img src="/assets/imgs/Little-feet-logo.png" alt="Little Feet Creche Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-2xl md:text-3xl font-bold font-fredoka tracking-tight text-magic-pink leading-none whitespace-nowrap">
                                    Little Feet <span className="text-active-blue">Creche</span>
                                </span>
                                <span className="text-[0.65rem] md:text-xs font-nunito font-bold text-medium-gray tracking-wide">
                                    Caring Kids with Love & <span className="text-base leading-none">🧸</span> Passion
                                </span>
                            </div>
                        </Link>
                        <p className="text-medium-gray font-nunito leading-relaxed text-sm">
                            A Home Away from Home for your little ones in Salem.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-fredoka text-lg font-bold text-dark-gray mb-4">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-medium-gray hover:text-sky-blue transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-medium-gray hover:text-sky-blue transition-colors">About Us</Link></li>
                            <li><Link to="/gallery" className="text-medium-gray hover:text-sky-blue transition-colors">Moment Gallery</Link></li>
                            <li><Link to="/enroll" className="text-medium-gray hover:text-sky-blue transition-colors">Admission Connect</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-fredoka text-lg font-bold text-dark-gray mb-4">Contact Us</h4>
                        <ul className="space-y-3 font-nunito text-medium-gray">
                            <li className="flex items-center gap-3">
                                <PhoneCallIcon size={18} className="text-apple-green mt-1" />

                                <div className="flex flex-col">

                                    <span>+91 427 3595271</span>
                                    <span>+91 6381318593 </span>
                                </div>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-sky-blue" />
                                <span>devaranipadma@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-candy-pink shrink-0" />
                                <span>#624 1st Floor, Marimuthu Gounder St, Vanniyar Nagar, Salem</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    {/* <div>
                        <h4 className="font-fredoka text-lg font-bold text-dark-gray mb-4">Follow Little Feet Creche</h4>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-medium-gray hover:text-fantasy-purple hover:shadow-md transition-all"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div> */}
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-medium-gray font-nunito">
                    <p className="text-medium-gray font-nunito">
                        &copy; {new Date().getFullYear()} Little Feet Creche. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
