import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '../ui/Button';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Events', href: '/events' },
    { name: 'About', href: '/about' },
    { name: 'Enroll', href: '/enroll' },
    { name: 'FAQ', href: '/faq' },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm rounded-b-xl border-b border-cloud-blue/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-12 h-12 md:w-18 md:h-19 flex-shrink-0">
                            <img src="/assets/imgs/Little-feet-logo.png" alt="Little Feet crèche Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-2xl md:text-3xl font-bold font-fredoka tracking-tight text-magic-pink leading-none">
                                Little Feet <span className="text-active-blue">Crèche</span>
                            </span>
                            <span className="text-[0.65rem] md:text-xs font-nunito font-bold text-medium-gray tracking-wide">
                                Caring Kids with Love & <span className="text-base leading-none">🧸</span> Passion
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`font-nunito font-semibold transition-colors ${location.pathname === link.href ? 'text-magic-pink' : 'text-medium-gray hover:text-sky-blue'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* <Link to="/enroll">
                            <Button size="sm">Register Now</Button>
                        </Link> */}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-dark-gray hover:text-sky-blue p-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white border-b border-cloud-blue"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-lg font-nunito font-semibold ${location.pathname === link.href ? 'text-magic-pink' : 'text-medium-gray hover:text-sky-blue'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {/* <Link to="/enroll" onClick={() => setIsOpen(false)}>
                                <Button className="w-full">Register Now</Button>
                            </Link> */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
