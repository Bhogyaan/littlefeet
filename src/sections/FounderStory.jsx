import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const FounderStory = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-cloud-blue/20 to-white overflow-hidden relative">
      {/* Background pattern - very subtle */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#7209B7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start lg:min-h-[900px]">
          {/* LEFT COLUMN - Images (capped height, centered on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start gap-6 md:gap-8 order-1 lg:order-none"
          >
            {/* Main image - constrained */}
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white relative z-10">
                <img
                  src="/assets/imgs/2 set of Kids Image2.png"
                  alt="Devarani Ramachandran with children"
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
              </div>
              {/* Secondary overlapping frame for variety */}
              <div className="absolute -bottom-12 -right-12 w-2/3 rounded-3xl overflow-hidden shadow-xl border-8 border-white hidden md:block z-20 rotate-3">
                <img
                  src="/assets/imgs/1 set of Kids Image2.png"
                  alt="Joyful moment"
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
            </div>

            {/* Decorative blob - only on desktop, non-intrusive */}
            <div className="absolute -bottom-20 -right-16 w-72 h-72 bg-sunshine-yellow rounded-full blur-3xl opacity-25 -z-10 hidden lg:block" />
          </motion.div>

          {/* RIGHT COLUMN - Text content (grows naturally but balanced) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-8 md:gap-10 text-center lg:text-left order-2 lg:order-none"
          >
            <div className="inline-flex items-center justify-center lg:justify-start gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-fantasy-purple font-nunito font-bold text-base shadow-md">
              <Heart size={20} className="text-magic-pink" />
              <span>The Heart Behind Little Feet Creche</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-fredoka text-dark-gray mb-8">
              Meet Our <span className="text-magic-pink">Founder</span>
            </h2>

            <div className="space-y-6 text-lg text-medium-gray font-nunito leading-relaxed">
              <p>
                The Founder of Little Feet Creche, <span className="text-magic-pink font-bold">Devarani Ramachandran</span>, daughter of Padma & Ramachandran, is an IT Professional with over 2 decades of experience.
              </p>
              <p>
                When Janarthanan became her life-partner, she was graduated in mathematics from Sri Sarada College For Women, Salem. She was fortunate to enjoy a roller-coaster ride filled with higher studies, work, and family commitment but always fastened her safety belt—nothing but the support from her entire family.
              </p>
              <p>
                She was a studying and working mom during the journey of raising 2 cute daughters. Being Grateful for all well-wishers, Respectful for all philosophers and Loveful for all friends, inspirers & challengers led her life in the right path.
              </p>
              <p>
                Apart from her career, she spent time for learning new things. Her consistent practice towards life skills, Foot reflexology (Acupressure) and Pranic Healing is outstanding.
              </p>
              <p>
                This great moment of making difference to others’ life happens in honouring her Mom at first, primary school Principal madam, all her teachers and all the cute ladies who were taking part of baby-sitting her children with so much care and love & who were helping at cooking, cleaning, shopping—this Creche is getting shaped.
              </p>
              <p className="font-bold text-fantasy-purple">
                Every Woman has bearers to grow. Her Creche will be very special to render support for striving, grooming Moms by taking care of the emotional balance of kids.
              </p>
              <p>
                Children will definitely cherish with a touch of her specialities to get moulded for a marvellous future in an easy-going manner.
              </p>
            </div>

            {/* S ↔ S block */}
            <div className="p-7 md:p-9 bg-gradient-to-br from-fantasy-purple to-magic-pink rounded-3xl shadow-xl text-white text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-fredoka mb-2 flex items-center justify-center gap-3">
                S <span className="text-2xl">&lt;→&gt;</span> S
              </h3>
              <p className="text-lg md:text-xl font-nunito italic">
                Your Satisfaction is our Success & vice versa.
              </p>
            </div>

            {/* S ↔ S block - Made more elegant and less loud */}
            <div className="mt-8 p-10 bg-cloud-blue rounded-[3rem] border-2 border-active-blue/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-magic-pink opacity-5 blur-3xl rounded-full" />
              <div className="relative z-10">
                <h3 className="text-4xl font-bold font-fredoka mb-4 text-center text-dark-gray flex items-center justify-center gap-4">
                  S <span className="text-active-blue text-3xl">↔</span> S
                </h3>
                <p className="text-2xl font-nunito font-bold text-center italic text-magic-pink">
                  Your Satisfaction is our Success <span className="text-dark-gray not-italic font-normal">& vice versa.</span>
                </p>
                <div className="mt-6 flex justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sunshine-yellow" />
                  <div className="w-2 h-2 rounded-full bg-apple-green" />
                  <div className="w-2 h-2 rounded-full bg-sky-blue" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};