'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineDocumentText,
  HiArrowRight,
  HiCheckCircle,
} from "react-icons/hi";
import Container from "@/components/Container";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: <HiOutlineCode />,
    title: "Frontend Development",
    description:
      "Performance-optimized, scalable, reusable UI development using React.js & Next.js.",
    features: [
      "Reusable UI component architecture",
      "State management using Redux Toolkit / RTK Query",
      "SEO-optimized pages with Next.js",
      "Pixel-perfect UI with Tailwind & MUI",
      "Code-splitting & lazy loading",
    ],
    gradient: "from-primary-500 via-secondary-500 to-accent-500",
  },
  {
    id: 2,
    icon: <HiOutlineServer />,
    title: "MERN Stack Development",
    description:
      "Full-stack development with Node.js + Express.js + MongoDB. End-to-end API development.",
    features: [
      "JWT authentication and protected routes",
      "REST APIs, DB modeling & architecture",
      "Reusable backend services",
      "Clean file structure & modularization",
      "Cloud Deployments (Vercel / Render)",
    ],
    gradient: "from-secondary-500 to-primary-500",
  },
  {
    id: 3,
    icon: <HiOutlineDocumentText />,
    title: "Project Highlights",
    description:
      "Built production-ready projects with real clients and enterprise-level teams.",
    features: [
      "E-commerce application (full MERN)",
      "Admin dashboards with analytics",
      "Portfolio builder components",
      "Performance tracking dashboards",
      "Reusable UI design system",
    ],
    gradient: "from-accent-500 to-primary-500",
  },
];

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Soft background glows */}
      <span className="absolute top-10 -left-10 w-64 h-64 blur-[120px] bg-primary-500/20 rounded-full" />
      <span className="absolute bottom-10 -right-10 w-72 h-72 blur-[140px] bg-secondary-500/20 rounded-full" />

      <Container>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="text-gray-900 dark:text-white">What I </span>
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-base sm:text-lg">
            Creating impactful digital solutions through clean code & thoughtful design.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="relative p-[1px] rounded-3xl bg-gradient-to-r opacity-90 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient border wrapper */}
              <div
                className={`rounded-3xl p-6 sm:p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl shadow-xl border border-white/10 hover:border-primary-500/40 transition`}
                onClick={() => setSelected(service)}
              >
                <div className="flex flex-col justify-between h-full gap-6 text-center">
                  {/* Icon */}
                  <div
                    className={`mx-auto p-4 rounded-full text-4xl shadow-xl bg-gradient-to-r ${service.gradient} text-white`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  <motion.button
                    whileHover={{ x: 6 }}
                    className="inline-flex justify-center items-center gap-2 text-sm font-medium text-primary-600 dark:text-secondary-400 hover:underline"
                  >
                    View Details <HiArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-white"
              >
                ×
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`text-3xl p-3 rounded-full bg-gradient-to-r ${selected.gradient} text-white`}
                >
                  {selected.icon}
                </span>
                <h3 className="text-2xl font-bold">{selected.title}</h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                {selected.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {selected.features.map((feat, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-2 text-gray-800 dark:text-gray-200"
                  >
                    <HiCheckCircle className="text-primary-500 w-5 h-5 mt-0.5" />
                    {feat}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
