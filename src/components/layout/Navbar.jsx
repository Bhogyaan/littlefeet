import { Link, useLocation  } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '../ui/Button';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Enroll', href: '/enroll' },
    { name: 'FAQ', href: '/faq' },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-12 h-12 magic-gradient-pink rounded-2xl flex items-center justify-center shadow-punchy rotate-6">
                            <Heart className="text-white w-7 h-7 fill-current" />
                        </div>
                        <span className="text-2xl font-bold font-fredoka tracking-tight text-dark-gray bg-clip-text">
                            Little Feet<span className="text-magic-pink">Creche</span>
                        </span>
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
                        <Link to="/enroll">
                            <Button size="sm">Register Now</Button>
                        </Link>
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
                            <Link to="/enroll" onClick={() => setIsOpen(false)}>
                                <Button className="w-full">Register Now</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
