import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  // Primary orange color: #f38031



  
  return (
    <section className="bg-white  container-pattern text-white min-h-screen flex flex-col justify-center py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="cont mx-auto px-4  sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <motion.div 
          className="lg:w-1/2 w-full  mb-10 lg:mb-0 lg:pr-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight leading-tight">
            Elevate Your <span className="text-amber-200 inline-block">Digital Presence</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-xl">
            We create stunning websites and strategic social media campaigns that help your business connect with customers and grow online.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <motion.a 
              href="#portfolio" 
              className="bg-white text-orange-600 px-2 sm:px-4 h-8 justify-center flex items-center uppercase rounded-lg font-medium transition duration-300 text-sm hover:shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Our Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="border-2 border-white text-white px-2 sm:px-4 h-8 flex content-center rounded-lg font-medium hover:bg-white/10 transition duration-300 uppercase text-sm items-center gap-1 sm:gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch <span className="ml-1 text-amber-200">→</span>
            </motion.a>
          </div>
          
          {/* Social proof or trust badges for mobile (shows only on smaller screens) */}
          <div className="flex items-center gap-4 mt-8 lg:hidden">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-300 to-orange-400 border-2 border-white flex items-center justify-center text-xs font-bold">
                  {i}
                </div>
              ))}
            </div>
            <p className="text-xs sm:text-sm opacity-80">Trusted by 500+ businesses worldwide</p>
          </div>
        </motion.div>
        
        {/* Image container */}
        <motion.div 
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative rounded-xl backdrop-blur-sm">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image 
                src="/images/hero.jpg" 
                alt="Digital marketing workspace" 
                width={600} 
                height={400} 
                className="object-cover"
                layout="responsive"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent"></div>
            </div>
            
            {/* Floating UI elements for visual interest */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white/90 text-orange-600 px-3 py-2 rounded-lg text-sm font-medium hidden sm:flex items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Live Projects: 28+
            </motion.div>
           
          </div>
        </motion.div>
        
        {/* Social proof or trust badges for desktop */}
        <motion.div 
          className="hidden lg:flex absolute bottom-12 left-8 items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-300 to-orange-400 border-2 border-white flex items-center justify-center text-sm font-bold">
                {i}
              </div>
            ))}
          </div>
          <p className="text-sm opacity-80">Trusted by 500+ businesses worldwide</p>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="cont mx-auto text-center absolute bottom-4 left-[50%] -translate-X-[50%]  mt-8 sm:mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div 
          className="inline-block cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-full flex justify-center mt-2">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;