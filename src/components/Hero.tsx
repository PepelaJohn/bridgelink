//app/api/route.ts
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  // Define slide content with improved descriptions and headings
  const slides = [
    {
      id: 0,
      image: '/images/social-media.png',
      heading: "Social Media Marketing",
      description: "Strategic campaigns that boost engagement and drive meaningful conversions for your brand."
    },
    {
      id: 1,
      image: '/images/ui-ux.png',
      heading: "UI/UX Design",
      description: "Intuitive, beautiful interfaces that delight users and keep them coming back for more."
    },
    {
      id: 2,
      image: '/images/webdev.png',
      heading: "Web Development",
      description: "Custom, responsive websites built with modern technologies for optimal performance."
    },
    {
      id: 3,
      image: '/images/hero.jpg',
      heading: "Digital Strategy",
      description: "Comprehensive digital solutions tailored to achieve your unique business goals."
    }
  ];

  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-rotate slides every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 20000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
    exit: { opacity: 0, transition: { duration: 1 } }
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative bg-white text-white min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Full-screen background slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            className="absolute inset-0"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Image 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].heading}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 backdrop-blur-[2px]"></div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Progress indicators */}
      <div className="absolute top-8 right-8 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-amber-300 w-8" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="cont mx-auto px-4  sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center relative z-10">
        {/* Text Content */}
        <motion.div 
          className=" w-full mb-10 lg:mb-0 lg:pr-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
         
          
          
          
          {/* Current service highlight with animation */}
          <AnimatePresence mode="wait">
            <motion.div>
            <motion.div
              key={currentSlide*currentSlide+Math.random()}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={textVariants}
              className="lg:w-1/     w-full  mb-10 lg:mb-0 lg:pr-12"
            >
              <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight leading-tight  text-amber-300 ">
                {slides[currentSlide].heading}
              </h3>
              <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-xl">
                {slides[currentSlide].description}
              </p>
            </motion.div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
            <motion.a 
              href="#portfolio" 
              className="bg-white text-orange-600 px-4 py-3 rounded-lg font-medium transition duration-300 text-sm hover:shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial="hidden"
              animate="visible"
              exit={'exit'}
              variants={slideVariants}   
            >
              View Our Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="border-2 border-white text-white px-4 py-3 rounded-lg font-medium hover:bg-white/10 transition duration-300 text-sm flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
             initial="hidden"
             animate="visible"
             exit={'exit'}
             variants={slideVariants}
            >
              Get in Touch <span className="ml-1 text-amber-300">→</span> 
            </motion.a>
          </div>

           {/* Social proof */}
           <motion.div 
            className="flex items-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-300 to-orange-400 border-2 border-white flex items-center justify-center text-xs font-bold">
                  {i}
                </div>
              ))}
            </div>
            <p className="text-sm opacity-80">Trusted by 500+ businesses worldwide</p>
          </motion.div>
            </motion.div>
          </AnimatePresence>
          
       
          
         
        </motion.div>
        
       
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div 
          className="inline-block cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <p className="text-xs mb-2 uppercase tracking-widest">Scroll Down</p>
          <div className="w-full flex justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;