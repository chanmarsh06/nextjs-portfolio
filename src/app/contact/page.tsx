"use client";

import React, { useState, useEffect } from "react";
import { HiMail, HiChatAlt, HiPaperAirplane } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });

  useEffect(() => setIsVisible(true), []);

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
      color: colors.primary,
      gradient: colors.gradient.primary,
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      data: "6385555688",
      link: "https://wa.me/6385555688",
      color: "#25D366",
      gradient: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
    },
    {
      icon: <HiChatAlt />,
      title: "Messenger",
      data: "6385555688",
      link: "https://web.whatsapp.com/",
      color: "#0084ff",
      gradient: "linear-gradient(135deg, #0084ff 0%, #0066cc 100%)",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: colors.gradient.background }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: colors.text }}>
            Get In Touch
          </h2>
          <p className="text-lg" style={{ color: colors.textSecondary }}>
            Contact Me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="flex flex-col gap-6">
            {contactCards.map((card, i) => (
              <a
                key={i}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center p-6 rounded-2xl shadow-lg transform transition-all hover:-translate-y-2 hover:scale-105"
                style={{
                  background: colors.gradient.card,
                  border: `1px solid ${card.color}30`,
                  boxShadow: `0 8px 25px ${card.color}20`,
                }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-2xl"
                     style={{ background: `${card.color}20`, color: card.color }}>
                  {card.icon}
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="font-semibold" style={{ color: colors.text }}>{card.title}</h4>
                  <p className="text-sm" style={{ color: colors.textSecondary }}>{card.data}</p>
                </div>
                <div className="ml-4 text-sm font-medium text-white px-4 py-2 rounded-full"
                     style={{ background: card.color }}>
                  Write Me
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl flex flex-col gap-6"
            style={{ background: colors.gradient.card }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-4 rounded-xl border border-gray-300/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-4 rounded-xl border border-gray-300/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="project"
              placeholder="Your Project"
              value={formData.project}
              onChange={handleChange}
              required
              rows={5}
              className="p-4 rounded-xl border border-gray-300/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Send Message <HiPaperAirplane className="text-lg" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
