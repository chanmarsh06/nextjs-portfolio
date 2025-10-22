'use client';

import React, { useState, useEffect } from "react";
import { HiCode, HiServer, HiTemplate, HiArrowRight, HiCheckCircle } from "react-icons/hi";
import { HiOutlineCode, HiOutlineServer, HiOutlineDocumentText } from "react-icons/hi";


const services = [
  {
    id: 1,
    icon: <HiOutlineCode />,
    title: "Frontend Development (React.js)",
    description:
      "Building scalable, high-performance web applications using React.js, TypeScript, Redux Toolkit, and Vite. Experienced in responsive design, API integration, and performance optimization.",
    features: [
      "Develop reusable UI components with React.js & MUI",
      "Optimize rendering and state management with Redux Toolkit",
      "Integrate RESTful APIs using Axios and RTK Query",
      "Enhance performance through code-splitting and lazy loading",
      "Deploy production builds via CI/CD pipelines",
    ],
    color: "#4f46e5",
    gradient: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
  },
  {
    id: 2,
    icon: <HiOutlineServer />,
    title: "MERN Stack Development",
    description:
      "Expanding full-stack capabilities with Node.js, Express.js, and MongoDB to deliver dynamic, data-driven applications with secure backend APIs and optimized frontend performance.",
    features: [
      "Design RESTful APIs with Express.js and MongoDB",
      "Implement JWT-based authentication and secure routes",
      "Build scalable, modular backend architecture",
      "Integrate frontend with backend seamlessly using Axios",
      "Deploy full-stack apps on cloud (Render/Netlify/Vercel)",
    ],
    color: "#4ecdc4",
    gradient: "bg-gradient-to-r from-teal-400 to-cyan-600",
  },
  {
    id: 3,
    icon: <HiOutlineDocumentText />,
    title: "Project Highlights",
    description:
      "Developed and contributed to multiple real-world applications including HRMS portals, Template Engines, and Performance Management Systems using modern React.js ecosystem.",
    features: [
      "Budgie HRMS Portal – Built role-based dashboards & chatbots",
      "Template Engines – Created reusable letter/email builders reducing dev time by 40%",
      "PMS Module – Automated multi-level reviews improving efficiency by 35%",
      "Ullamart E-Commerce – Designed responsive React.js frontend improving UX by 25%",
      "Implemented RTK Query caching reducing API calls by 35%",
    ],
    color: "#ff6b6b",
    gradient: "bg-gradient-to-r from-red-400 to-yellow-400",
  },
];

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = (service: any) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
            What I Do
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            MERN Stack Developer | Frontend Specialist | React Enthusiast
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group rounded-2xl p-8 flex flex-col justify-between h-80 text-center shadow-lg transition-transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${service.gradient}`} />
              <div className="flex flex-col items-center gap-4">
                <div
                  className="text-5xl p-5 rounded-full mb-2 shadow-lg"
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{service.title}</h3>
              </div>
              <button
                onClick={() => openModal(service)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full hover:scale-105 transition-transform"
              >
                View More <HiArrowRight />
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && selectedService && (
          <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 overflow-auto p-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 text-2xl font-bold"
              >
                &times;
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="p-3 rounded-full"
                  style={{ backgroundColor: `${selectedService.color}20`, color: selectedService.color }}
                >
                  {selectedService.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{selectedService.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedService.description}</p>
              <ul className="space-y-2">
                {selectedService.features.map((feat: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                    <HiCheckCircle className="text-green-500" /> {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
