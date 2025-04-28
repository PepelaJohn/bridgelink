// File: pages/index.tsx
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import PortfolioGrid from '../components/PortfolioGrid';
import ContactForm from '../components/ContactForm';
import HeroSection from '@/components/HeroSection';

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
    description: "Intuitive interfaces and engaging user experiences that keep visitors coming back."
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

export default function Home() {
  return (
    <Layout>
  

      {/* Hero Section */}
      <HeroSection></HeroSection>

      {/* Services Section */}
      <section id="services" className="py-20 text-black container-pattern-white bg--50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4 te">Our Services</h2>
            <p className="text-gray-900 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive online
            </p>
          </motion.div>
          
          {/* Website Design Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-10">Website Design</h3>
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
            <h3 className="text-2xl font-semibold text-center mb-10">Social Media Marketing</h3>
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
      <section id="contact" className="py-20 bg-gray-50 text-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="max-w-2xl mx-auto">
              Ready to elevate your digital presence? Reach out to discuss how we can help your business grow online.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div 
              className="bg-gradient-to-r from-[#173e69] via-[#297585]   to-[#57acc1] text-white p-8 rounded-lg md:w-1/3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-6 text-sm">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="mb-6">
                <h4 className="text-teal-300 text-sm mb-1">Email</h4>
                <p>info@bridgedigital.com</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-teal-300 text-sm mb-1">Phone</h4>
                <p>(555) 123-4567</p>
              </div>
              
              <div>
                <h4 className="text-teal-300 text-sm mb-1">Address</h4>
                <p>123 Digital Avenue, Tech City, CA 94123</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-2/3"
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