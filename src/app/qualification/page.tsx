"use client";

import React, { useState } from "react";
import { HiAcademicCap, HiBriefcase, HiCalendar } from "react-icons/hi";
import { motion } from "framer-motion";
import Container from "@/components/Container";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");

  const educationData = [
    {
      title: "Master of Computer Applications (MCA)",
      subtitle: "Pope John Paul II College of Education, Puducherry",
      date: "2021 - 2023",
      color: "#6366f1",
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      subtitle: "Rajiv Gandhi Arts and Science College, Puducherry",
      date: "2018 - 2021",
      color: "#4ecdc4",
    },
  ];

  const experienceData = [
    {
      title: "Software Engineer",
      subtitle: "Novac Technology Solutions, Chennai",
      date: "Aug 2025 - Present",
      color: "#6366f1",
    },
    {
      title: "Junior Engineer",
      subtitle: "HEPL - Hema's Enterprises Pvt Ltd, Cuddalore",
      date: "Dec 2023 - Jul 2025",
      color: "#ff6b6b",
    },
    {
      title: "Trainee Developer",
      subtitle: "Askan Technologies, Puducherry",
      date: "Mar 2023 - Aug 2023",
      color: "#4ecdc4",
    },
  ];

  const TimelineItem = ({ data }: { data: typeof educationData }) => (
    <div className="relative">
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8"
        >
          {/* Timeline Dot */}
          <div className="relative flex-shrink-0">
            <div
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white shadow-lg"
              style={{ backgroundColor: item.color }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-80" />
            </div>
            {index < data.length - 1 && (
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-16 sm:h-20 bg-gray-300 dark:bg-gray-600" />
            )}
          </div>

          {/* Content Card */}
          <div className="flex-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/20 dark:border-gray-700/20 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300">
            <h5 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {item.title}
            </h5>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3">
              {item.subtitle}
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium" style={{ color: item.color }}>
              <HiCalendar className="w-4 h-4" />
              <span>{item.date}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="qualification" className="py-12 sm:py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">
            My Education & Work Experience
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          <motion.button
            onClick={() => setActiveTab("education")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 text-sm sm:text-base ${
              activeTab === "education"
                ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg"
                : "bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20"
            }`}
          >
            <HiAcademicCap className="w-4 h-4 sm:w-5 sm:h-5" />
            Education
          </motion.button>

          <motion.button
            onClick={() => setActiveTab("experience")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 text-sm sm:text-base ${
              activeTab === "experience"
                ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg"
                : "bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20"
            }`}
          >
            <HiBriefcase className="w-4 h-4 sm:w-5 sm:h-5" />
            Experience
          </motion.button>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {activeTab === "education" && <TimelineItem data={educationData} />}
          {activeTab === "experience" && <TimelineItem data={experienceData} />}
        </div>
      </Container>
    </section>
  );
};

export default Qualification;