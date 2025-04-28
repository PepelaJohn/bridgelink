"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Portfolio items
const portfolioItems = [
  {
    id: 1,
    category: "All Projects",
    image: "/images/1.jpg",
    title: "Tech Manufacturing Dashboard",
    description: "A responsive dashboard for monitoring production efficiency.",
  },
  {
    id: 2,
    category: "Web Design",
    image: "/images/2.jpg",
    title: "E-commerce Development",
    description: "Custom online store with seamless checkout experience.",
  },
  {
    id: 3,
    category: "Social Media",
    image: "/images/3.jpg",
    title: "Code Portfolio",
    description: "Developer portfolio with custom code display.",
  },
  {
    id: 4,
    category: "Web Design",
    image: "/images/4.jpg",
    title: "Remote Collaboration Platform",
    description: "Tools for remote teams to work effectively together.",
  },
  {
    id: 5,
    category: "Social Media",
    image: "/images/5.jpg",
    title: "Product Launch Campaign",
    description:
      "Integrated marketing campaign that increased conversions by 45%.",
  },
  {
    id: 6,
    category: "Social Media",
    image: "/images/6.jpg",
    title: "Social Analytics Dashboard",
    description:
      "Real-time social media performance tracking across platforms.",
  },
];

const categories = ["All Projects", "Web Design", "Social Media"];

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  // Update filtered items when category changes
  useEffect(() => {
    const newFilteredItems =
      activeCategory === "All Projects"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory);

    setFilteredItems(newFilteredItems);
  }, [activeCategory]);

  return (
    <div id="portfolio" className="w-full bg-gray-100">
      <div className="container  mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl text-black sm:text-3xl md:text-4xl font-bold mb-4 bext-white inline-block">
            Our Portfolio
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Explore our latest work showcasing innovative designs and strategic
            digital solutions.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center relative bg-gray-200 w-fit mx-auto  sm:gap-4 mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Background bar for active category */}
          <span
            className="absolute bg-white w-[33.33%] top-0 bottom-0 transition-all duration-300"
            style={{
              left: `${
                (categories.indexOf(activeCategory) / categories.length) * 100
              }%`,
            }}
          ></span>
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-3  py-1.5 sm:px-4 sm:py-2 z-3 bg-transparent text-center  text-sm sm:text-base transition duration-300 text-black`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Count */}
        <motion.div
          layout
          className="text-sm text-gray-500 mb-6 text-center sm:text-left"
        >
          Showing {filteredItems.length} project
          {filteredItems.length !== 1 ? "s" : ""}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <PortfolioItem
                key={item.id}
                item={item}
                isHovering={isHovering === item.id}
                onHover={() => setIsHovering(item.id)}
                onHoverEnd={() => setIsHovering(null)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500">No projects found in this category.</p>
            <button
              onClick={() => setActiveCategory("All Projects")}
              className="mt-4 text-blue-600 hover:underline"
            >
              View all projects
            </button>
          </motion.div>
        )}

        {/* View More Button */}
        {filteredItems.length > 0 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4 } }}
          >
            <motion.button
              className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg shadow-sm hover:bg-gray-50 transition duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View More Projects
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

interface PortfolioItemProps {
  item: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  };
  isHovering: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
}

const PortfolioItem = ({
  item,
  isHovering,
  onHover,
  onHoverEnd,
}: PortfolioItemProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      layout
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 sm:h-56 md:h-64">
        <Image
          src={item.image}
          alt={item.title}
          fill={true}
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/80 backdrop-blur-sm text-xs px-2 py-1 rounded-full text-gray-800 font-medium">
            {item.category === "All Projects" ? "Featured" : item.category}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <motion.h3
          className="text-gray-800 text-lg sm:text-xl font-semibold group-hover:text-[#297585] transition-colors"
          layout
        >
          {item.title}
        </motion.h3>
        <motion.p
          className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base line-clamp-2"
          layout
        >
          {item.description}
        </motion.p>

        <motion.div className="flex justify-between items-center mt-4" layout>
          <motion.a
            href="#"
            className="inline-flex items-center text-sm font-medium text-[#173e69] hover:text-[#57acc1] transition-colors gap-1"
            whileHover={{ x: 3 }}
          >
            View Details
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>

          {/* Live Preview Button visible only on hover on larger screens */}
          <motion.a
            href="#"
            className="hidden sm:inline-flex items-center text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            Live Preview
            <svg
              className="w-3 h-3 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioGrid;
