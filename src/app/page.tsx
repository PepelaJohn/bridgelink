'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import PortfolioGrid from '../components/PortfolioGrid';
import ContactForm from '../components/ContactForm';
import HeroSection from '@/components/HeroSection';
//  --color-primaryOrange: #f38031;
// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Service card data
const services = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Intuitive interfaces and engaging user experiences that keep visitors coming back for more."
  },
  {
    icon: "</>",
    title: "Web Development",
    description: "Custom-built websites that perfectly match your brand identity and business goals."
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Mobile-first designs that look great on any device, from phones to desktops."
  },
  {
    icon: "📊",
    title: "Strategy & Analytics",
    description: "Data-driven strategies to grow your audience and measure campaign success."
  },
  {
    icon: "👥",
    title: "Social Media Management",
    description: "Consistent posting, community engagement, and brand growth across platforms."
  },
  {
    icon: "✏️",
    title: "Content Creation",
    description: "Eye-catching visuals and compelling copy that drive engagement and conversions."
  }
];

// CSS Custom Properties
// .container-pattern {
//   width: 100%;
//   height: 100%;
//   background-color: #313131; /* fallback */
//   background-image:
//     radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0),
//     linear-gradient(to right, #f38031, #f57e28, #ff8b3d);
//   background-size: 30px 30px, cover;
//   background-position: -5px -5px, center;
// }
//
// .container-pattern-white {
//   width: 100%;
//   height: 100%;
//   background-color: #ffffff; /* fallback */
//   background-image:
//     radial-gradient(rgba(243, 128, 49, 0.1) 2px, transparent 0);
//   background-size: 30px 30px;
//   background-position: -5px -5px;
// }

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection></HeroSection>

      {/* Services Section */}
      <section id="services" className="py-20 text-black container-pattern-white bg-white">
        <div className="cont mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-gray-900 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive online
            </p>
          </motion.div>
          
          {/* Website Design Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-10 text-orange-600">Website Design</h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.slice(0, 3).map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </motion.div>
          </div>
          
          {/* Social Media Marketing Services */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-10 text-orange-600">Social Media Marketing</h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.slice(3, 6).map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioGrid></PortfolioGrid>

     {/* Contact Section */}
<section id="contact" className="py-10 bg-gradient-to-b from-gray-50 to-gray-100 relative text-black">
  <div className="cont mx-auto">
  
    
    <div className="flex flex-col  min-[660px]:rounded-lg overflow-hidden shadow-lg md:flex-row">
      <motion.div
        className="bg-gray-100 bg-opacity-90 text-gray-900 p-8 md:w-1/3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
        <p className="mb-8 text-black">
          Fill out the form and our team will get back to you within 24 hours.
        </p>
        
        <div className="mb-8 flex items-start">
          <div className="mr-4 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <div>
            <h4 className="text-gray-700 text-sm font-medium mb-1">Email</h4>
            <p className="text-gray-400">info@bridgedigital.com</p>
          </div>
        </div>
        
        <div className="mb-8 flex items-start">
          <div className="mr-4 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div>
            <h4 className="text-gray-700 text-sm font-medium mb-1">Phone</h4>
            <p className="text-gray-400">(555) 123-4567</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-4 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="text-gray-700 text-sm font-medium mb-1">Address</h4>
            <p className="text-gray-400">123 Digital Avenue, Tech City, CA 94123</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="bg-white  p-0 md:p-8 md:w-2/3"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ContactForm />
      </motion.div>
    </div>
  </div>
</section>
    </Layout>
  );
}