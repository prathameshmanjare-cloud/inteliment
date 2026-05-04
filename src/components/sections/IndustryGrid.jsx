import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronLeft, ChevronRight,
  Shield, Landmark, Heart, Factory, TrendingUp,
  Zap, Radio, Truck, ShoppingCart, Cpu, PlayCircle, Car
} from "lucide-react";

const industries = [
  { slug: "insurance", title: "Insurance", diUseCase: "Detect and prevent claims fraud before it impacts payouts", icon: Shield },
  { slug: "healthcare", title: "Healthcare", diUseCase: "Predict patient risks early to improve outcomes and readmissions", icon: Heart },
  { slug: "energy", title: "Energy & Utilities", diUseCase: "Forecast demand accurately to optimize grid performance in real time", icon: Zap },
  { slug: "automotive", title: "Automotive", diUseCase: "Predict vehicle and supply chain disruptions before they impact production", icon: Car },
  { slug: "financial", title: "Financial Services", diUseCase: "Identify risk patterns early to protect transactions and ensure compliance", icon: TrendingUp },
  { slug: "logistics", title: "Logistics and Chain Supply", diUseCase: "Anticipate disruptions and delays before they impact delivery timelines", icon: Truck },
  { slug: "banking", title: "Banking", diUseCase: "Detect fraud in real time to prevent losses before they occur", icon: Landmark },
  { slug: "manufacturing", title: "Manufacturing", diUseCase: "Predict equipment failure before it causes production downtime", icon: Factory },
  { slug: "telecom", title: "Telecom", diUseCase: "Identify churn signals early to retain customers before revenue is lost", icon: Radio },
  { slug: "retail-ecommerce", title: "Retail & E-commerce", diUseCase: "Forecast demand precisely to optimize inventory and prevent stockouts", icon: ShoppingCart },
  { slug: "technology-saas", title: "Technology & SaaS", diUseCase: "Identify growth and churn signals early to maximize customer lifetime value.", icon: Cpu },
  { slug: "media-entertainment", title: "Media & Entertainment", diUseCase: "Predict audience preferences to maximize content engagement.", icon: PlayCircle },
];

function useCardsPerPage() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useState(() => {
    if (typeof window === "undefined") return;
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  });

  if (width < 640) return 2;
  if (width < 1024) return 4;
  return 6;
}

function useGridCols() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useState(() => {
    if (typeof window === "undefined") return;
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  });

  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

const leftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function IndustryGrid() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const cardsPerPage = useCardsPerPage();
  const gridCols = useGridCols();
  const totalPages = Math.ceil(industries.length / cardsPerPage);

  const visible = industries.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage);

  const goTo = (next) => {
    const clampedNext = Math.max(0, Math.min(totalPages - 1, next));
    setDirection(clampedNext > page ? 1 : -1);
    setPage(clampedNext);
  };

  useState(() => {
    if (page >= totalPages) setPage(0);
  });

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
    gap: "clamp(10px, 2vw, 16px)",
  };

  return (
    <section
      style={{
        minHeight: "clamp(500px, 70vh, 800px)",
        display: "flex",
        alignItems: "center",
        padding: "clamp(40px, 6vw, 80px) clamp(16px, 5vw, 48px) clamp(40px, 6vw, 80px) clamp(40px, 8vw, 100px)",
        background: "linear-gradient(to bottom, #ffffff 0%, #B0D3E9 100%)",
        fontFamily: "'Public Sans', sans-serif",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }

        @media (max-width: 1023px) {
          .industry-layout {
            flex-direction: column !important;
            gap: clamp(24px, 5vw, 40px) !important;
          }
          .industry-left {
            width: 100% !important;
            max-width: 100% !important;
            text-align: center;
          }
          .industry-left-inner {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .industry-heading {
            font-size: 16px !important;
          }
        }

        @media (max-width: 639px) {
          .industry-heading {
            font-size: 16px !important;
          }
          .industry-desc {
            font-size: 14px !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-start",
          gap: "clamp(24px, 4vw, 64px)",
        }}
        className="industry-layout"
      >
        {/* ── LEFT PANEL ── */}
        <motion.div
          className="industry-left"
          style={{ flexShrink: 0, width: "320px" }}
          variants={leftVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="industry-left-inner">
            <motion.span
              style={{
                display: "inline-block",
                border: "1px solid rgba(91,163,209,0.5)",
                borderRadius: "999px",
                padding: "4px 16px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#2a6fa8",
                letterSpacing: "0.04em",
                background: "rgba(255,255,255,0.5)",
                marginBottom: "28px",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              Industries
            </motion.span>

            <motion.h2
              className="industry-heading"
              style={{
                fontSize: "38px",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#111827",
                margin: "0 0 20px 0",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Decision Intelligence for Your Industry.
            </motion.h2>

            <motion.p
              className="industry-desc"
              style={{
                fontSize: "15px",
                color: "#4b5a6a",
                lineHeight: 1.65,
                margin: "0 0 36px 0",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Built on deep domain expertise across BFSI, Manufacturing, Automotive, Energy, Public Sector, and more.
            </motion.p>

            <motion.a
              href="/industries"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                fontWeight: 700,
                color: "#2a6fa8",
                textDecoration: "none",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover="hover"
            >
              View All Industries
              <motion.span
                variants={{ hover: { x: 4 } }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>

        {/* ── RIGHT GRID ── */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${page}-${cardsPerPage}`}
              style={gridStyle}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              exit={{ opacity: 0, x: direction * -40, transition: { duration: 0.25 } }}
            >
              {visible.map((industry, i) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={industry.slug}
                    onClick={() => window.location.href = `/industries/${industry.slug}`}
                    style={{
                      background: "white",
                      borderRadius: "16px",
                      padding: "clamp(16px, 3vw, 24px)",
                      border: "1px solid rgba(255,255,255,0.9)",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: "clamp(140px, 18vw, 168px)",
                      cursor: "pointer",
                    }}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 12px 36px rgba(40, 61, 87, 0.3)",
                      transition: { duration: 0.22, ease: "easeOut" },
                    }}
                  >
                    {/* Top row */}
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          background: "linear-gradient(135deg, rgba(91,163,209,0.2), rgba(91,163,209,0.1))",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={17} color="#5BA3D1" />
                      </div>

                      <motion.a
                        href={`/industries/${industry.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#5BA3D1",
                          opacity: 0.8,
                          textDecoration: "none",
                        }}
                        whileHover={{ opacity: 1 }}
                      >
                        Explore
                        <motion.span
                          style={{ display: "inline-block" }}
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ArrowRight size={12} />
                        </motion.span>
                      </motion.a>
                    </div>

                    {/* Body */}
                    <div style={{ marginTop: "16px" }}>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#111827",
                          marginBottom: "6px",
                          lineHeight: 1.3,
                        }}
                      >
                        {industry.title}
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#5a6a7a",
                          lineHeight: 1.55,
                        }}
                      >
                        {industry.diUseCase}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* ── PAGINATION ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "12px",
              marginTop: "28px",
            }}
          >
            <motion.button
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.7)",
                background: "#EAF4FA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: page === 0 ? "not-allowed" : "pointer",
                opacity: page === 0 ? 0.3 : 1,
                outline: "none",
              }}
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              whileHover={page !== 0 ? { scale: 1.1 } : {}}
              whileTap={page !== 0 ? { scale: 0.92 } : {}}
            >
              <ChevronLeft size={20} color="#5BA3D1" />
            </motion.button>

            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    height: "4px",
                    borderRadius: "999px",
                    cursor: "pointer",
                  }}
                  animate={{
                    width: i === page ? 28 : 16,
                    backgroundColor: i === page ? "#5BA3D1" : "rgba(91,163,209,0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>

            <motion.button
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.7)",
                background: "#EAF4FA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: page === totalPages - 1 ? "not-allowed" : "pointer",
                opacity: page === totalPages - 1 ? 0.3 : 1,
                outline: "none",
              }}
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages - 1}
              whileHover={page !== totalPages - 1 ? { scale: 1.1 } : {}}
              whileTap={page !== totalPages - 1 ? { scale: 0.92 } : {}}
            >
              <ChevronRight size={20} color="#5BA3D1" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}