"use client";

import { motion } from "framer-motion";
import { PLAYFAIR } from "@/lib/constants";

const blobData = [
  { style: { top: "-30px", right: "-20px", width: "130px", height: "130px", background: "#F0C8BA", opacity: 0.5, borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%" }, from: { x: 30, y: -20 } },
  { style: { top: "55%", left: "-25px", width: "90px", height: "90px", background: "#B8D4BF", opacity: 0.45, borderRadius: "40% 60% 45% 55% / 60% 40% 60% 40%" }, from: { x: -20, y: 0 } },
  { style: { bottom: "-18px", right: "15%", width: "60px", height: "60px", background: "#C9A96E", opacity: 0.4, borderRadius: "50% 50% 40% 60% / 40% 60% 40% 60%" }, from: { x: 0, y: 20 } },
  { style: { top: "20%", right: "8%", width: "45px", height: "45px", background: "#B8D4BF", opacity: 0.3, borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%" }, from: { x: 15, y: -10 } },
  { style: { bottom: "22%", left: "-16px", width: "50px", height: "50px", background: "#C9A96E", opacity: 0.35, borderRadius: "45% 55% 40% 60% / 55% 45% 60% 40%" }, from: { x: -15, y: 10 } },
  { style: { bottom: "-12px", right: "calc(15% + 70px)", width: "50px", height: "50px", background: "#F0C8BA", opacity: 0.35, borderRadius: "50% 40% 55% 45% / 40% 55% 45% 60%" }, from: { x: 10, y: 18 } },
];

const paragraphs = [
  <>
    I majored in finance and accounting in my undergrad at Chulalongkorn University.
    What I enjoyed most was the data part, like the records, how things connect, and
    seeing how things actually work. That curiosity and a love for hearing directly from
    users is what got me into product management.
  </>,
  <>
    I shifted careers right after graduation to be a junior PM at Sertis, a data and AI
    consulting firm, then went on to work in fintech, financial services, and AI infrastructure.
    I&apos;ve been in PM for 6+ years now. I later did my master&apos;s at the University of Washington
    in information management to strengthen the data and AI side of things in a more technical way.
  </>,
];

export default function AboutMeCard() {
  return (
    <section>
      <motion.div
        className="relative rounded-2xl px-8 py-10 md:px-12 md:py-12 overflow-visible"
        style={{
          backgroundColor: "rgba(253,250,247,0.45)",
          boxShadow: "0 8px 40px rgba(140,94,72,0.06), 0 2px 16px rgba(140,94,72,0.04)",
        }}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Blobs drift in from different directions */}
        {blobData.map((blob, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{ ...blob.style, zIndex: 0 }}
            initial={{ opacity: 0, x: blob.from.x, y: blob.from.y }}
            whileInView={{ opacity: blob.style.opacity as number, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.9,
              delay: 0.3 + i * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        ))}

        {/* Heading + text fade in together */}
        <motion.div
          className="relative"
          style={{ zIndex: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2
            className="text-text leading-tight mb-6"
            style={{ fontFamily: PLAYFAIR, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700 }}
          >
            About Me
          </h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted">
            {paragraphs.map((content, i) => (
              <p key={i}>{content}</p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
