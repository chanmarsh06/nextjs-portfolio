'use client';

import React, { useState } from "react";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";
import { HiOutlineCode, HiOutlineServer, HiOutlineDocumentText } from "react-icons/hi";
import { motion } from "framer-motion";
import Container from "@/components/Container";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

const services = [
  {
    id: 1,
    icon: <HiOutlineCode />,
    title: "Frontend Development",
    description: "Building scalable, high-performance web applications using React.js, TypeScript, and modern tools.",
    features: [
      "Develop reusable UI components with React.js & MUI",
      "Optimize rendering and state management with Redux Toolkit",
      "Integrate RESTful APIs using Axios and RTK Query",
      "Enhance performance through code-splitting and lazy loading",
      "Deploy production builds via CI/CD pipelines",
    ],
    color: "#4f46e5",
    gradient: "from-purple-400 via-pink-500 to-red-500",
  },
  {
    id: 2,
    icon: <HiOutlineServer />,
    title: "MERN Stack Development",
    description: "Full-stack capabilities with Node.js, Express.js, and MongoDB to deliver dynamic applications.",
    features: [
      "Design RESTful APIs with Express.js and MongoDB",
      "Implement JWT-based authentication and secure routes",
      "Build scalable, modular backend architecture",
      "Integrate frontend with backend seamlessly using Axios",
      "Deploy full-stack apps on cloud platforms",
    ],
    color: "#4ecdc4",
    gradient: "from-teal-400 to-cyan-600",
  },
  {
    id: 3,
    icon: <HiOutlineDocumentText />,
    title: "Project Highlights",
    description: "Developed multiple real-world applications including HRMS portals and Performance Management Systems.",
    features: [
      "Budgie HRMS Portal – Built role-based dashboards & chatbots",
      "Template Engines – Created reusable builders reducing dev time by 40%",
      "PMS Module – Automated multi-level reviews improving efficiency by 35%",
      "Ullamart E-Commerce – Designed responsive frontend improving UX by 25%",
      "Implemented RTK Query caching reducing API calls by 35%",
    ],
    color: "#ff6b6b",
    gradient: "from-red-400 to-yellow-400",
  },
];

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="text-gray-900 dark:text-white">What I </span>
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Do
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">
            MERN Stack Developer | Frontend Specialist | React Enthusiast
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-auto sm:h-80 text-center shadow-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} rounded-t-2xl`} />
              
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl p-3 sm:p-4 lg:p-5 rounded-full shadow-lg transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <motion.button
                onClick={() => openModal(service)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 sm:mt-6 inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                View More <HiArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full p-4 sm:p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
              
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div
                  className="p-2 sm:p-3 rounded-full text-xl sm:text-2xl"
                  style={{ backgroundColor: `${selectedService.color}20`, color: selectedService.color }}
                >
                  {selectedService.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                  {selectedService.title}
                </h3>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                {selectedService.description}
              </p>
              
              <ul className="space-y-2 sm:space-y-3">
                {selectedService.features.map((feat: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                    <HiCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </Container>
    </section>
  );
}