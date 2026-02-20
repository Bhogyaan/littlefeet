import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Smile, Loader2, Megaphone } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const EventsSection = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        // Use static data directly
        setEvents([
            {
                id: 1,
                title: "Special Occasions & Icebreaking",
                description: "We are equally eager to have icebreaking sessions with you to hold on to your inner child along with your buddies.",
                date: "2026-03-20",
                category: "Community",
                image: "/assets/imgs/EventsImage1.png"
            },
            {
                id: 2,
                title: "Inspiring Speaker Sessions",
                description: "Fun evenings and weekends designed to spark curiosity and connection.",
                date: "2026-04-05",
                category: "Learning",
                image: "/assets/imgs/img-7.png"
            }
        ]);
        setLoading(false);
    }, []);

    // Removed error handling since we're using static data only

    return (
        <section id="events" className={`relative bg-white overflow-hidden pb-16 md:pb-20 ${!isHomePage ? 'pt-12 md:pt-16' : ''}`}>
            {/* Banner Image - Only show on Home page */}
            {isHomePage && (
                <div className="w-full h-64 md:h-80 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
                    <img
                        src="/assets/imgs/BannerImage 4.jpg"
                        alt="Events Banner"
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-fredoka text-dark-gray mb-2">
                            Memorable Events too
                        </h2>
                        <p className="text-base md:text-lg text-medium-gray font-nunito max-w-2xl mb-3">
                            Our space is opened up for parents/grandparents/relatives/friends with limited seats. We encourage attendees to have fun-filled evenings/ weekends/ special occasion.
                        </p>
                        <div className="text-base md:text-lg text-active-blue font-nunito font-semibold flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
                            <span>You can actively participate either as an admirer or inspirer.</span>
                            <span className="flex items-center gap-2 whitespace-nowrap">
                                <img
                                    src="/assets/imgs/1F60A.svg"
                                    alt="smile"
                                    className="w-8 h-8 md:w-9 md:h-9 object-contain"
                                />
                                Choice is Yours!
                            </span>
                        </div>
                    </div>
                    {/* <Button variant="outline" className="flex items-center gap-2 px-6 py-3 text-base font-medium">
                        View Full Calendar <ArrowRight size={18} />
                    </Button> */}
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <Loader2 className="animate-spin text-sky-blue" size={48} />
                    </div>
                ) : (
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {events.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-sky-blue/30"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={event.image?.url ? `http://localhost:1337${event.image.url}` : event.image}
                                            alt={event.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold font-nunito text-sky-blue uppercase tracking-wider">
                                            {event.category || 'Event'}
                                        </div>
                                    </div>
                                    <div className="p-5 md:p-6">
                                        <div className="flex items-center gap-2 text-medium-gray text-sm font-medium mb-3">
                                            <CalendarIcon size={16} className="text-fantasy-purple" />
                                            <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold font-fredoka text-dark-gray mb-3 group-hover:text-sky-blue transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-medium-gray font-nunito leading-relaxed mb-4 line-clamp-3">
                                            {event.description}
                                        </p>
                                        {/* <Button variant="ghost" className="p-0 hover:bg-transparent text-sky-blue font-medium flex items-center gap-2 text-sm">
                                            Learn More <ArrowRight size={16} />
                                        </Button> */}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="text-center pt-12 pb-4">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.2
                                        }
                                    }
                                }}
                                className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6 sm:px-10 py-5 sm:py-8 bg-fantasy-purple/5 rounded-3xl border-2 border-dashed border-fantasy-purple/20"
                            >
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.5 },
                                        visible: { opacity: 1, scale: 1 }
                                    }}
                                    animate={{
                                        rotate: [-10, 10, -10],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{
                                        rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                                        scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                                    }}
                                    className="bg-white p-3 rounded-full shadow-sm"
                                >
                                    <Megaphone size={32} className="text-fantasy-purple" />
                                </motion.div>

                                <div className="flex flex-wrap items-center justify-center gap-x-2">
                                    {"So Stay tuned for the announcements!".split(" ").map((word, i) => (
                                        <motion.span
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
                                                visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 150,
                                                damping: 12
                                            }}
                                            className="text-lg sm:text-xl md:text-2xl font-fredoka font-bold text-fantasy-purple"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};