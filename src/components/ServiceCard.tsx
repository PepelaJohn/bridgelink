// File: components/ServiceCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

type ServiceProps = {
  service: {
    icon: string;
    title: string;
    description: string;
  };
};

const ServiceCard = ({ service }: ServiceProps) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5 }}
    >
      <div className="text-center mb-4">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600 text-2xl">
          {service.icon}
        </span>
      </div>
      <h4 className="text-xl font-semibold mb-3 text-center">{service.title}</h4>
      <p className="text-gray-600 text-center">{service.description}</p>
      <div className="text-center mt-6">
        <motion.a 
          href="#" 
          className="text-teal-600 font-medium inline-flex items-center"
          whileHover={{ x: 5 }}
        >
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;