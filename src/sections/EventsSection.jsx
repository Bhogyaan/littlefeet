import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, ArrowRight, Loader2 } from 'lucide-react';
import { getEvents } from '../api/strapi';
import { Button } from '../components/ui/Button';

export const EventsSection = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                const data = await getEvents();
                if (data && data.length > 0) {
                    setEvents(data);
                } else {
                    // Fallback static data
                    setEvents([
                        {
                            id: 1,
                            title: "Special Occasions & Icebreaking",
                            description: "Open space for parents and relatives to participate as admirer or inspirer.",
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
                            image: "/assets/imgs/BannerImage3.jpg"
                        }
                    ]);
                }
            } catch (err) {
                setError("Could not load events. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <section id="events" className="py-16 md:py-24 bg-gradient-to-b from-cloud-blue/30 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold font-fredoka text-dark-gray mb-3">
                            Special Occasions
                        </h2>
                        <p className="text-lg text-medium-gray font-nunito max-w-2xl">
                            We open our doors for fun evenings and weekends — events created for parents, relatives, and friends to join in the magical journey of childhood.
                        </p>
                    </div>
                    <Button variant="outline" className="flex items-center gap-2 px-6 py-3 text-base font-medium">
                        View Full Calendar <ArrowRight size={18} />
                    </Button>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <Loader2 className="animate-spin text-sky-blue" size={48} />
                    </div>
                ) : error ? (
                    <p className="text-center text-red-500 font-nunito py-12">{error}</p>
                ) : (
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
                                <div className="p-6 md:p-8">
                                    <div className="flex items-center gap-2 text-medium-gray text-sm font-medium mb-3">
                                        <CalendarIcon size={16} className="text-fantasy-purple" />
                                        <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold font-fredoka text-dark-gray mb-3 group-hover:text-sky-blue transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-base text-medium-gray font-nunito leading-relaxed mb-6 line-clamp-3">
                                        {event.description}
                                    </p>
                                    <Button variant="ghost" className="p-0 hover:bg-transparent text-sky-blue font-medium flex items-center gap-2 text-sm">
                                        Learn More <ArrowRight size={16} />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};