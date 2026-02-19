import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

import { Heart } from 'lucide-react';
import wavingHand from '../../../public/assets/anis/Wavey-Birdie.json';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-12 overflow-hidden bg-gradient-to-br from-white via-cloud-blue/10 to-white">
      {/* Background subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating bubbles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '-50%', opacity: [0, 0.35, 0] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, delay: i * 1.8 }}
            className="absolute w-5 h-5 md:w-6 md:h-6 rounded-full bg-active-blue/20"
            style={{ left: `${8 + i * 18}%`, bottom: '10%' }}
          />
        ))}
      </div>

      <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-4 flex flex-col justify-center"
          >
            {/* Tagline + Badge in one row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <p className="text-fantasy-purple font-fredoka text-sm md:text-base font-medium animate-pulse whitespace-nowrap">
                Caring Kids with Love & Passion
              </p>

              <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm md:text-base font-medium shadow-sm whitespace-nowrap">
                <Heart size={18} className="text-pink-500" />
                Ages 2–9 • Salem
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-fredoka leading-tight text-dark-gray flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2">
              Hi
              <span className="inline-block w-20 h-20 md:w-28 md:h-28 -my-2 md:-my-4 flex-shrink-0">
                <Lottie animationData={wavingHand} loop autoplay speed={1.1} />
              </span>
              <span className="text-magic-pink">Moms & Grannies</span>
              with different Hats, <br />
              Want to extend your <span className="text-active-blue">"My Time"</span>?
            </h1>

            <p className="text-lg md:text-xl text-medium-gray font-nunito leading-relaxed max-w-xl mx-auto lg:mx-0">
              Looking for a place where your children feel loved and their{' '}
              <span className="font-bold text-active-blue">Little Dreams Grow</span>. <br />
              We welcome your kids to a <span className="font-bold text-fantasy-purple">Home Away from Home!</span>
            </p>



            {/* Buttons */}


            {/* Trusted Text */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-gray-600 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?u=parent${i}`}
                    alt="parent"
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                  />
                ))}
              </div>
              <span>Trusted by many families in Salem</span>
            </div>
          </motion.div>

          {/* Right - Image Only */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              {/* Main Image */}
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/assets/imgs/img-7.png"
                  alt="Happy children at Little Feet crèche"
                  className="w-full h-auto object-cover max-h-[70vh]"
                />
              </div>

              {/* Optional Decoration behind image? Clean look requested, so omitting extras */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};