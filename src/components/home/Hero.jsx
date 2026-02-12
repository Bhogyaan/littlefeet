import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Button } from '../ui/Button';
import { Heart, ShieldCheck } from 'lucide-react';
import wavingHand from '../../../public/assets/anis/Wavey Birdie.json';

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-12 md:pt-28 md:pb-20 overflow-hidden bg-gradient-to-br from-white via-cloud-blue/10 to-white">
      {/* Background subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Optional background birdie - uncomment if you want it */}
        {/* <div className="absolute top-8 md:top-12 left-6 md:left-12 w-40 md:w-56 opacity-35 pointer-events-none">
          <Lottie animationData={waveybirdie} loop autoplay speed={0.7} />
        </div> */}

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

      <div className="mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left space-y-6 md:space-y-8"
          >
            {/* Tagline + Badge in one row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
              <p className="text-fantasy-purple font-fredoka text-base md:text-lg lg:text-xl font-medium animate-pulse whitespace-nowrap">
                Caring Kids with Love & Passion
              </p>

              <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm md:text-base font-medium shadow-sm whitespace-nowrap">
                <Heart size={18} className="text-pink-500" />
                Ages 2–9 • Salem
              </span>
            </div>

            {/* Headline with waving animation between "Hi" and "Moms & Grannies" */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-fredoka leading-tight text-dark-gray flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2">
              Hi
              <span className="inline-block w-12 h-12 md:w-16 md:h-16 -my-1">
                <Lottie animationData={wavingHand} loop autoplay speed={1.1} />
              </span>
              <span className="text-magic-pink">Moms & Grannies</span>
              <br className="sm:hidden" />
              with different Hats, <br />
              Want to extend your “My Time”?
            </h1>

            <p className="text-lg md:text-xl text-medium-gray font-nunito leading-relaxed max-w-xl mx-auto lg:mx-0">
              Looking for a place where your children feel loved and their{' '}
              <span className="font-bold text-active-blue">Little Dreams Grow</span>. <br />
              We welcome your kids to a <span className="font-bold text-fantasy-purple">Home Away from Home!</span>
            </p>

            <p className="text-base italic text-gray-600 max-w-xl mx-auto lg:mx-0">
              Grab this opportunity to truly know your kids!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="magic-gradient-pink text-white shadow-lg hover:scale-105 transition-all"
              >
                Book a Visit / Trial Day
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cloud-blue hover:bg-cloud-blue/10 transition-all"
              >
                Enquire Now
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-gray-600 pt-6">
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

          {/* Right - Image + Safety badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100/50">
              <img
                src="/assets/imgs/BannerImage 4.jpg"
                alt="Happy children at Little Feet Creche"
                className="w-full h-auto object-cover aspect-[4/3] md:aspect-[5/4]"
              />
            </div>

            {/* Safety badge */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white/95 backdrop-blur-sm p-4 md:p-5 rounded-2xl shadow-xl border border-gray-200 flex items-center gap-3">
              <ShieldCheck size={28} className="text-green-600" />
              <div>
                <h4 className="font-bold font-fredoka text-dark-gray text-sm md:text-base">
                  Safe & Secure
                </h4>
                <p className="text-green-600 text-xs md:text-sm">CCTV Monitored</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};