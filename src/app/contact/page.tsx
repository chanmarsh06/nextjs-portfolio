'use client';

import React, { useState } from 'react';
import { HiMail, HiChatAlt, HiPaperAirplane } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Container from '@/components/Container';
import { fadeInUp, staggerContainer, staggerItem, hoverScale } from '@/utils/animations';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_ly2h5xv',
        'template_9124mie',
        formData,
        'OL-fSC3YgwqNm5ws2'
      );
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', project: '' });
    } catch {
      alert('Failed to send message. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactCards = [
    {
      icon: <HiMail className="w-6 h-6" />,
      title: 'Email',
      data: 'chandrasekaranmca06@gmail.com',
      link: 'mailto:chandrasekaranmca06@gmail.com',
      color: '#6366f1',
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: 'WhatsApp',
      data: '+91 6385555688',
      link: 'https://wa.me/6385555688',
      color: '#25D366',
    },
    {
      icon: <HiChatAlt className="w-6 h-6" />,
      title: 'Messenger',
      data: "Let's Connect",
      link: 'https://web.whatsapp.com/',
      color: '#0084ff',
    },
  ];

  return (
    <section className="py-16 lg:py-20">
      <Container>
        <motion.div
          {...fadeInUp(0)}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Get In </span>
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Let&apos;s work together on your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="space-y-6">
            <motion.h3
              {...fadeInUp(0.2)}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Talk to me
            </motion.h3>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactCards.map((card, i) => (
                <motion.a
                  key={i}
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg transition-all duration-300 group"
                >
                  <div 
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${card.color}20`, color: card.color }}
                  >
                    {card.icon}
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {card.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {card.data}
                    </p>
                  </div>
                  <div 
                    className="ml-4 text-sm font-medium text-white px-4 py-2 rounded-full transition-transform group-hover:scale-105"
                    style={{ backgroundColor: card.color }}
                  >
                    Write Me
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            {...fadeInUp(0.4)}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Write me your project
            </h3>
            
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  name="project"
                  placeholder="Tell me about your project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all duration-300"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={loading}
                {...hoverScale}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <HiPaperAirplane className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}