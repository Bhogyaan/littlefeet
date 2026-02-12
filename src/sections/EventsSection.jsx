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
                if (data) {
                    setEvents(data);
                } else {
                    // Fallback static data if Strapi is not running
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
                setError("Could not load events.");
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <section id="events" className="py-16 bg-cloud-blue overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
                    <div className="magic-gradient-purple p-1 rounded-[3.5rem] shadow-punchy">
                        <div className="bg-white p-10 md:p-14 rounded-[3.4rem] space-y-10">
                            <h3 className="text-3xl font-bold font-fredoka text-dark-gray mb-8">Special Occasions</h3>
                            <div className="space-y-12">
                                <p className="text-lg text-medium-gray font-nunito leading-relaxed">
                                    At <span className="text-fantasy-purple font-bold">Little Feet Creche</span>, we open our doors for fun evenings and weekends. Events specifically designed for parents, relatives, and friends to participate in their child's magical journey.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Button variant="outline" className="hidden md:flex items-center gap-2">
                        View Full Calendar <ArrowRight size={18} />
                    </Button>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <Loader2 className="animate-spin text-sky-blue" size={48} />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border-b-8 border-sky-blue"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={event.image?.url ? `http://localhost:1337${event.image.url}` : event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold font-nunito text-sky-blue uppercase tracking-wider">
                                        {event.category || 'Event'}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-2 text-medium-gray text-sm font-bold mb-3">
                                        <CalendarIcon size={16} className="text-fantasy-purple" />
                                        <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold font-fredoka text-dark-gray mb-3 group-hover:text-sky-blue transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-medium-gray font-nunito leading-relaxed mb-6 line-clamp-2">
                                        {event.description}
                                    </p>
                                    <Button variant="ghost" className="p-0 hover:bg-transparent text-sky-blue font-bold flex items-center gap-2">
                                        Learn More <ArrowRight size={16} />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                <div className="mt-12 md:hidden">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        View Full Calendar <ArrowRight size={18} />
                    </Button>
                </div>
            </div>
        </section>
    );
};
