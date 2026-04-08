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
    I&apos;ve always been the person who wants to understand how things connect. I
    studied finance and accounting because I loved seeing how numbers could move across
    and shape an entire business. But after sitting in an audit room checking if things
    were accurate and complete, I realized I wanted to be on the side that builds things,
    not the side that checks them.
  </>,
  <>
    The funny part is, I didn&apos;t even know &ldquo;product manager&rdquo; was a real
    job. I was applying to data analyst roles when a recruiter told me my personality
    would be a better fit for PM. I had no idea what I was getting into, but I ended up
    spending the next six years in Bangkok building data and AI products (really enjoyed
    it actually!). I was also very lucky that I got to work on Typhoon, Thailand&apos;s
    first open-source large language model, where we made it accessible and available
    for everyone in the country. That project still makes me really proud.
  </>,
  <>
    Along the way, I never fully shook the insecurity of being the non-technical person
    in a room full of engineers. I spent years trying to narrow down that gap and I
    think I did a pretty good job (lol), but it still bugged me. So I decided to move to
    Seattle to pursue a master&apos;s in Information Science at the University of
    Washington, specializing in AI and data science, and here I am now!
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
