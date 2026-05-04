import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Database } from "lucide-react";
import s4Bg from "@/assets/home/s4-bg.svg";

const layers = [
  { label: "Layer 01", title: "Data Foundation",    desc: "Clean, governed, unified enterprise data." },
  { label: "Layer 02", title: "Predictive Insights", desc: "ML models uncover patterns, risks, and opportunities." },
  { label: "Layer 03", title: "Decision Logic",      desc: "AI converts insights into ranked, actionable decisions." },
  { label: "Layer 04", title: "Automated Action",    desc: "Workflows execute decisions. Feedback loops drive continuous learning." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const dotVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1, opacity: 1,
    transition: { delay: 0.5 + i * 0.28, duration: 0.45, ease: "backOut" },
  }),
};

const lineVariant = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.4, ease: "easeInOut" } },
};

const lineVariantY = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 1.4, ease: "easeInOut" } },
};

function MobileLayout({ inView }) {
  const containerRef = useRef(null);
  const cardRefs = useRef(layers.map(() => ({ current: null })));
  const [dotPositions, setDotPositions] = useState([]);

  useEffect(() => {
    const updatePositions = () => {
      if (!containerRef.current) return;
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const positions = cardRefs.current.map((ref) => {
        if (!ref.current) return 0;
        const rect = ref.current.getBoundingClientRect();
        return rect.top - containerTop + 10;
      });
      setDotPositions(positions);
    };
    const timer = setTimeout(updatePositions, 50);
    window.addEventListener("resize", updatePositions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updatePositions);
    };
  }, []);

  return (
    <div className="lg:hidden w-full flex flex-row gap-6">

      {/* Vertical timeline column */}
      <div className="relative" style={{ width: 24, flexShrink: 0 }} ref={containerRef}>
        <div
          className="absolute overflow-hidden"
          style={{ top: "-20px", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "2px" }}
        >
          <motion.div
            variants={lineVariantY}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute inset-0 origin-top"
            style={{
              background: "linear-gradient(180deg, #70B2DB, #9FD4FF, #70B2DB)",
              boxShadow: "0 0 10px rgba(112,178,219,0.7)",
              width: "2px",
            }}
          />
        </div>

        {dotPositions.map((top, i) => (
          <div
            key={`vdot-${i}`}
            className="absolute"
            style={{ top, left: "50%", transform: "translate(-50%, -50%)", width: 14, height: 14, zIndex: 1 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: "#70B2DB" }}
              animate={inView ? {
                scale: [1, 2.8, 1],
                opacity: [0.4, 0, 0.4],
                transition: { delay: 1.0 + i * 0.28, duration: 2.2, repeat: Infinity, ease: "easeOut" }
              } : {}}
            />
            <motion.div
              variants={dotVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="absolute inset-0 rounded-full"
              style={{
                backgroundColor: "#ffffff",
                border: "2px solid #70B2DB",
                boxShadow: "0 0 12px #70B2DBcc, 0 0 5px #70B2DB",
              }}
            />
          </div>
        ))}
      </div>

      {/* Cards column */}
      <div className="flex flex-col gap-6 flex-1">
        {layers.map((layer, i) => (
          <motion.div
            key={`mcard-${i}`}
            ref={(el) => { cardRefs.current[i] = { current: el }; }}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i + 3}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            style={{
              borderRadius: 14,
              padding: "18px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {/* Title first, then label */}
            <h3 style={{ 
              fontSize: 16, 
              fontWeight: 700, 
              color: "#70B2DB", 
              margin: 0,
              lineHeight: 1.3,
            }}>
              {layer.title}
            </h3>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 12px",
                borderRadius: 8,
                backgroundColor: "#1A2228",
                border: "1px solid rgba(112,178,219,0.22)",
                width: "fit-content",
                fontSize: 13,
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              <Database size={13} style={{ color: "#70B2DB" }} />
              {layer.label}
            </div>

            <p style={{ 
              fontSize: 14, 
              lineHeight: 1.65, 
              color: "rgba(255,255,255,0.55)", 
              margin: 0 
            }}>
              {layer.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function SectionFour() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden py-24"
      style={{ fontFamily: "'Public Sans', sans-serif" }}
    >
      {/* SVG Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${s4Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Glow blobs */}
      <motion.div
        className="absolute top-10 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(112,178,219,0.09)", filter: "blur(80px)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "rgba(112,178,219,0.07)", filter: "blur(70px)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center">

        {/* Badge */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0}
          className="mb-6 px-5 py-1.5 rounded-full text-sm tracking-widest"
          style={{
            border: "1px solid rgba(112,178,219,0.30)",
            color: "rgba(255,255,255,0.50)",
            background: "rgba(112,178,219,0.06)",
            letterSpacing: "0.15em",
          }}
        >
          The Framework
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={1}
          className="text-4xl md:text-5xl font-bold text-center leading-tight mb-4"
          style={{
            background: "linear-gradient(135deg, #5BA3D1 0%, #9FD4FF 60%, #70B2DB 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          The Architecture of Decision Intelligence.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={2}
          className="text-sm md:text-base text-center mb-16"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Four layers. Each one moves data closer to action.
        </motion.p>

        {/* ── DESKTOP layout ── */}
        <div className="hidden lg:block w-full">

          {/* Titles above line */}
          <div className="w-full grid grid-cols-4 gap-8 mb-6">
            {layers.map((layer, i) => (
              <motion.p
                key={`title-${i}`}
                variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                custom={i + 1}
                className="text-center text-base font-semibold"
                style={{ color: "#70B2DB", letterSpacing: "0.02em" }}
              >
                {layer.title}
              </motion.p>
            ))}
          </div>

          {/* Timeline row */}
          <div className="relative w-full mb-8" style={{ height: 40 }}>
            {/* Glowing line */}
            <div
              className="absolute top-1/2 -translate-y-1/2 overflow-hidden"
              style={{ left: "0%", right: "0%", height: "2px" }}
            >
              <motion.div
                variants={lineVariant} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="absolute inset-0 origin-left"
                style={{
                  background: "linear-gradient(90deg, #70B2DB, #9FD4FF, #70B2DB)",
                  boxShadow: "0 0 12px rgba(112,178,219,0.7), 0 0 4px rgba(112,178,219,0.9)",
                  height: "2px",
                }}
              />
            </div>

            {/* Nodes */}
            {[12.5, 37.5, 62.5, 87.5].map((pos, i) => (
              <div
                key={`dot-${i}`}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${pos}%`, width: 14, height: 14 }}
              >
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "#70B2DB" }}
                  animate={inView ? {
                    scale: [1, 2.8, 1],
                    opacity: [0.45, 0, 0.45],
                    transition: { delay: 1.0 + i * 0.28, duration: 2.2, repeat: Infinity, ease: "easeOut" }
                  } : {}}
                />
                {/* Core dot */}
                <motion.div
                  variants={dotVariant} initial="hidden"
                  animate={inView ? "visible" : "hidden"} custom={i}
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "2px solid #70B2DB",
                    boxShadow: "0 0 12px #70B2DBcc, 0 0 5px #70B2DB",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Cards below timeline — no border, no background */}
          <div className="w-full grid grid-cols-4 gap-6">
            {layers.map((layer, i) => (
              <motion.div
                key={`card-${i}`}
                variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                custom={i + 3}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25 },
                }}
                className="flex flex-col items-center text-center gap-4 min-w-0"
                style={{
                  borderRadius: 16,
                  padding: "24px 20px",
                }}
              >
                {/* Layer pill */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "7px 14px",
                    borderRadius: 8,
                    backgroundColor: "#1A2228",
                    border: "1px solid rgba(112,178,219,0.22)",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#ffffff",
                  }}
                >
                  <Database size={15} style={{ color: "#70B2DB" }} />
                  {layer.label}
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {layer.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── MOBILE layout ── */}
        <MobileLayout inView={inView} />

      </div>
    </section>
  );
}