"use client";

import React, { useState } from "react";
import { HiMail, HiChatAlt, HiPaperAirplane } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_ly2h5xv",
        "template_9124mie",
        formData,
        "OL-fSC3YgwqNm5ws2"
      );
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", project: "" });
    } catch {
      alert("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactCards = [
    {
      icon: <HiMail />,
      title: "Email",
      data: "chandrasekaranmca06@gmail.com",
      link: "mailto:chandrasekaranmca06@gmail.com",
      color: "#6366f1",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      data: "+91 6385555688",
      link: "https://wa.me/6385555688",
      color: "#25D366",
    },
    {
      icon: <HiChatAlt />,
      title: "Messenger",
      data: "Let's Connect",
      link: "https://web.whatsapp.com/",
      color: "#0084ff",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="text-gray-900 dark:text-white">Get In </span>
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">
            Let&apos;s work together on your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Cards */}
          <div className="space-y-4 sm:space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
            >
              Talk to me
            </motion.h3>
            
            {contactCards.map((card, i) => (
              <motion.a
                key={i}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, y: -6 }}
                className="flex items-center p-4 sm:p-6 card card-glass card-hover rounded-2xl transition-all duration-300 group"
              >
                <div 
                  className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-xl sm:text-2xl transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${card.color}20`, color: card.color }}
                >
                  {card.icon}
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {card.data}
                  </p>
                </div>
                <div 
                  className="ml-4 text-xs sm:text-sm font-medium text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-transform group-hover:scale-105"
                  style={{ backgroundColor: card.color }}
                >
                  Write Me
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Write me your project
            </h3>
            
            <form
              onSubmit={handleSubmit}
              className="card-glass p-6 sm:p-8 rounded-2xl space-y-4 sm:space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Insert your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 sm:p-4 rounded-xl border border-gray-200/40 dark:border-slate-700/40 bg-white/80 dark:bg-slate-800/80 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Insert your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 sm:p-4 rounded-xl border border-gray-200/40 dark:border-slate-700/40 bg-white/80 dark:bg-slate-800/80 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project
                </label>
                <textarea
                  name="project"
                  placeholder="Write your project details"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 sm:p-4 rounded-xl border border-gray-200/40 dark:border-slate-700/40 bg-white/80 dark:bg-slate-800/80 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all duration-300"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 sm:py-4 gradient-primary-btn rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
                <HiPaperAirplane className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;