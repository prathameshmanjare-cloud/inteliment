import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import s4bg from "../../assets/home/s4-bg.png";
import { Database } from "lucide-react";

const layers = [
  { label: "Layer 01", title: "Data Foundation", desc: "Clean, governed, unified  enterprise data." },
  { label: "Layer 02", title: "Predictive Insights", desc: "ML models uncover patterns, risks, and opportunities." },
  { label: "Layer 03", title: "Decision Logic", desc: "AI converts insights into ranked, actionable decisions." },
  { label: "Layer 04", title: "Automated Action", desc: "Workflows execute decisions. Feedback loops drive continuous learning." },
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

// ── Separate component so hooks are called at top level ──
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
    // Small delay to let DOM settle after mount
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
        {/* Vertical line */}
        <div
          className="absolute overflow-hidden"
          style={{
                  top:"-20px",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "2px",
                }}
        >
          <motion.div
            variants={lineVariantY}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute inset-0 origin-top"
            style={{ background: "#70B2DB", opacity: 0.85, width: "2px" }}
          />
        </div>

        {/* Dots */}
        {dotPositions.map((top, i) => (
          <div
            key={`vdot-${i}`}
            className="absolute"
            style={{ top, left: "50%", transform: "translate(-50%, -50%)", width: 12, height: 12, zIndex: 1 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: "#70B2DB" }}
              animate={inView ? { scale: [1, 2.6, 1], opacity: [0.5, 0, 0.5], transition: { delay: 1.0 + i * 0.28, duration: 2, repeat: Infinity, ease: "easeOut" } } : {}}
            />
            <motion.div
              variants={dotVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: "#ffffff", border: "2px solid #70B2DB", boxShadow: "0 0 10px #70B2DBcc, 0 0 4px #70B2DB" }}
            />
          </div>
        ))}
      </div>

      {/* Cards column */}
      <div className="flex flex-col gap-8 flex-1">
        {layers.map((layer, i) => (
          <motion.div
            key={`mcard-${i}`}
            ref={(el) => { cardRefs.current[i] = { current: el }; }}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i + 3}
            className="flex flex-col gap-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold text-white w-fit" style={{ backgroundColor: "#252D32" }}>
              <Database size={14} style={{ color: "#70B2DB" }} />
              {layer.label}
            </div>
            <h3 className="text-base font-semibold" style={{ color: "#5BA3D1" }}>{layer.title}</h3>
            <p className="text-white/55 text-sm leading-relaxed">{layer.desc}</p>
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
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={s4bg} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#0d1117]/80" />
      </div>

      {/* Glow blobs */}
      <motion.div
        className="absolute top-10 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#70B2DB" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#70B2DB" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center">

        {/* Badge */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0}
          className="mb-6 px-5 py-1.5 rounded-full border border-white/20 text-white/60 text['14px'] tracking-wide"
        >
          The Framework
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={1}
          className="text-4xl md:text-5xl font-bold text-center leading-tight mb-4"
          style={{ color: "#5BA3D1" }}
        >
          The Architecture of Decision Intelligence.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={2}
          className="text-white/60 text-base md:text-lg text-center mb-16"
        >
          Four layers. Each one moves data closer to action.
        </motion.p>

        {/* ── DESKTOP layout (≥ lg) ── */}
        <div className="hidden lg:block w-full">
          <div className="relative w-full h-10 mb-8">
            <div className="absolute top-1/2 -translate-y-1/2 overflow-hidden" style={{ left: "0%", right: "0%", height: "2px" }}>
              <motion.div
                variants={lineVariant} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="absolute inset-0 origin-left"
                style={{ background: "#70B2DB", opacity: 0.85, height: "2px" }}
              />
            </div>
            {[12.5, 37.5, 62.5, 87.5].map((pos, i) => (
              <div key={`dot-${i}`} className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2" style={{ left: `${pos}%`, width: 12, height: 12 }}>
                <motion.div
                  className="absolute inset-0 rounded-full" style={{ backgroundColor: "#70B2DB" }}
                  animate={inView ? { scale: [1, 2.6, 1], opacity: [0.5, 0, 0.5], transition: { delay: 1.0 + i * 0.28, duration: 2, repeat: Infinity, ease: "easeOut" } } : {}}
                />
                <motion.div
                  variants={dotVariant} initial="hidden" animate={inView ? "visible" : "hidden"} custom={i}
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "#ffffff", border: "2px solid #70B2DB", boxShadow: "0 0 10px #70B2DBcc, 0 0 4px #70B2DB" }}
                />
              </div>
            ))}
          </div>
          <div className="w-full grid grid-cols-4 gap-8">
            {layers.map((layer, i) => (
              <motion.div
                key={`card-${i}`} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                custom={i + 3} whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="flex flex-col items-center text-center gap-3 min-w-0"
              >
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md  font-semibold text-white" style={{ backgroundColor: "#252D32" ,fontSize:"16px" }}>
                  <Database size={16} style={{ color: "#70B2DB" }} />
                  {layer.label}
                </div>
                <h3 className="text-lg font-semibold" style={{ color: "#5BA3D1" }}>{layer.title}</h3>
                <p className="text-white/55 text['14px'] leading-relaxed">{layer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── MOBILE / TABLET layout (< lg) ── */}
        <MobileLayout inView={inView} />

      </div>
    </section>
  );
}