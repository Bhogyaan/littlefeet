import { motion } from 'framer-motion';
import { Camera, Maximize2 } from 'lucide-react';

const galleryImages = [
    { src: "/assets/imgs/1 set of Kids Image1.png", title: "Creative Minds" },
    { src: "/assets/imgs/1 set of Kids Image2.png", title: "Happy Hearts" },
    { src: "/assets/imgs/2 set of Kids Image1.png", title: "Team Spirit" },
    { src: "/assets/imgs/2 set of Kids Image2.png", title: "Quiet Moments" },
    { src: "/assets/imgs/Colours Image.png", title: "Rainbow Discovery" },
    { src: "/assets/imgs/BannerImage5.jpg", title: "Inside View" }
];

export const GallerySection = () => {
    return (
        <section id="gallery" className="py-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-10">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-apple-green/10 rounded-2xl text-apple-green mb-6">
                        <Camera size={24} />
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-fredoka text-dark-gray mb-4">
                        Our Magical <span className="text-apple-green">Moments</span>
                    </h2>
                    <p className="text-base md:text-lg text-medium-gray font-nunito max-w-2xl mx-auto">
                        Take a peek into the daily lives of our little dreamers and the adventures they embark upon at <span className="text-apple-green font-bold">Little Feet Creche</span>.
                    </p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
                    {galleryImages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer"
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <div className="flex justify-between items-center text-white">
                                    <p className="font-fredoka font-bold text-lg">{item.title}</p>
                                    <Maximize2 size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
