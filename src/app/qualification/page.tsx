"use client";

import React, { useEffect, useState } from "react";
import { HiAcademicCap, HiBriefcase, HiCalendar } from "react-icons/hi";
import { useTheme } from "@/context/ThemeContext";

const Qualification = () => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");

  useEffect(() => setIsVisible(true), []);

  const educationData = [
    {
      title: "Master of Computer Applications (MCA)",
      subtitle: "Pope John Paul II College of Education, Puducherry",
      date: "2021 - 2023",
      color: colors.primary,
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
      color: colors.primary,
    },
    {
      title: "Junior Engineer",
      subtitle: "HEPL - Hema’s Enterprises Pvt Ltd, Cuddalore",
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
    <div style={{ position: "relative" }}>
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "16px",
            marginBottom: "32px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: `all 0.5s ease ${index * 0.2}s`,
          }}
        >
          {/* Dot */}
          <div
            style={{
              position: "relative",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: item.color,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "white",
                opacity: 0.8,
              }}
            />
          </div>

          {/* Card */}
          <div
            style={{
              background: colors.gradient.card,
              borderRadius: "16px",
              padding: "16px",
              flex: 1,
              boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
              borderLeft: `4px solid ${item.color}`,
            }}
          >
            <h5 style={{ margin: "0 0 8px 0", color: colors.text }}>
              {item.title}
            </h5>
            <p
              style={{
                margin: "0 0 12px 0",
                color: colors.textSecondary,
                fontSize: "14px",
              }}
            >
              {item.subtitle}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                fontWeight: "600",
                color: item.color,
              }}
            >
              <HiCalendar />
              <span>{item.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="qualification"
      style={{
        padding: "80px 0",
        background: colors.gradient.background,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 style={{ color: colors.text, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Qualification
        </h2>
        <p style={{ color: colors.textSecondary, fontSize: "18px" }}>
          My Education & Work Journey
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "40px" }}>
        <button
          onClick={() => setActiveTab("education")}
          style={{
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            background: activeTab === "education" ? colors.primary : `${colors.primary}20`,
            color: activeTab === "education" ? "#fff" : colors.text,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <HiAcademicCap /> Education
        </button>

        <button
          onClick={() => setActiveTab("experience")}
          style={{
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            background: activeTab === "experience" ? colors.primary : `${colors.primary}20`,
            color: activeTab === "experience" ? "#fff" : colors.text,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <HiBriefcase /> Experience
        </button>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {activeTab === "education" && <TimelineItem data={educationData} />}
        {activeTab === "experience" && <TimelineItem data={experienceData} />}
      </div>
    </section>
  );
};

export default Qualification;
