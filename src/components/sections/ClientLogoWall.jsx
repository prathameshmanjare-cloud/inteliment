import { useState } from "react";
import TrustBar from "@/components/sections/TrustBar";

const rowA = [
  "HSB", "Volkswagen", "Siemens", "Nvidia", "Deloitte", "KPMG", "Singtel",
  "Maruti Suzuki", "Deutsche Bank", "DBS Singapore", "Westpac", "L&T",
  "Reliance", "TATA AIA", "HSBC"
];

const rowB = [
  "J&J", "Alfa Laval", "Seagate", "Hitachi", "UBS", "ADP", "Bajaj",
  "NSE India", "EY", "Tata Communications", "AMP", "Optus", "BMC",
  "Holcim", "J&J", "NSE India"
];

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

      <div
        className="flex w-max"
        style={{
          gap: "8px",
          animation: `${reverse ? "scrollRight" : "scrollLeft"} 35s linear infinite`,
        }}
      >
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="shrink-0 inline-flex items-center whitespace-nowrap cursor-default transition-all duration-200"
            style={{
              padding: "clamp(4px, 1vw, 6px) clamp(10px, 2vw, 16px)",
              borderRadius: "999px",
              fontSize: "clamp(11px, 2vw, 14px)",
              fontWeight: 500,
              background: "#EFF6FA",
              border: "1.5px solid #94C6E4",
              color: "#374151",
              fontFamily: "'Public Sans', sans-serif",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#5aafd4";
              e.currentTarget.style.color = "#1a6a96";
              e.currentTarget.style.background = "#daeef8";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "#94C6E4";
              e.currentTarget.style.color = "#374151";
              e.currentTarget.style.background = "#EFF6FA";
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ClientLogoWall() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-rows:hover > * > div {
          animation-play-state: paused !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-rows > * > div {
            animation: none !important;
          }
        }

        /* Responsive border-radius for top corners */
        .client-section {
          border-radius: 32px 32px 0 0;
        }
        @media (min-width: 640px) {
          .client-section {
            border-radius: 48px 48px 0 0;
          }
        }
        @media (min-width: 1024px) {
          .client-section {
            border-radius: 60px 60px 0 0;
          }
        }

        /* TrustBar wrapper responsive margin */
        .trustbar-wrapper {
          margin-top: 32px;
          margin-left: clamp(12px, 4vw, 80px);
          margin-right: clamp(12px, 4vw, 80px);
        }
        @media (min-width: 640px) {
          .trustbar-wrapper {
            margin-top: 40px;
          }
        }
        @media (min-width: 1024px) {
          .trustbar-wrapper {
            margin-top: 48px;
          }
        }
      `}</style>

      <section
        className="client-section bg-white overflow-hidden w-full"
        style={{
          fontFamily: "'Public Sans', sans-serif",
          paddingTop: "clamp(32px, 6vw, 56px)",
          paddingBottom: "clamp(32px, 6vw, 56px)",
        }}
      >
        {/* Header */}
        <div
          style={{
            maxWidth: "672px",
            margin: "0 auto",
            padding: "0 clamp(16px, 4vw, 24px)",
            textAlign: "center",
            marginBottom: "clamp(24px, 4vw, 40px)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "clamp(11px, 1.5vw, 14px)",
              fontWeight: 500,
              borderRadius: "999px",
              padding: "6px clamp(12px, 2vw, 16px)",
              marginBottom: "clamp(12px, 2vw, 20px)",
              background: "#E5E5E5",
              border: "1.5px solid #d1d5db",
              color: "#4b5563",
              fontFamily: "'Public Sans', sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Trust &amp; Scale
          </span>

          <h2
            style={{
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontSize: "clamp(22px, 4vw, 42px)",
              color: "#495057",
              fontFamily: "'Public Sans', sans-serif",
              margin: 0,
              whiteSpace:"nowrap",
            }}
          >
            Trusted by 100+ Enterprises Globally
          </h2>
        </div>

        {/* Marquee rows */}
        <div
          className="marquee-rows"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(6px, 1vw, 10px)",
          }}
        >
          <MarqueeRow items={rowA} />
          <MarqueeRow items={rowB} reverse />
        </div>

        {/* Technology Partners */}
        <div className="trustbar-wrapper">
          <TrustBar />
        </div>
      </section>
    </>
  );
}