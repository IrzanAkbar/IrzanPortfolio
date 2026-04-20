"use client";

import React, { useEffect, useState, useRef, memo, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Typing Effect Hook
function useTypingEffect(words: string[], typeSpeed = 80, deleteSpeed = 40, pauseTime = 2000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (subIndex === words[index].length + 1 && !isDeleting) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words, typeSpeed, deleteSpeed, pauseTime]);

  return words[index].substring(0, subIndex);
}

const Hero = memo(function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Single useScroll instance with shared transforms
  const nameY = useTransform(scrollY, [0, 500], [0, -60]);
  const nameOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const depthValue = useTransform(scrollY, [0, 1000], [0, 25]);
  const [roundedDepth, setRoundedDepth] = useState(0);

  useEffect(() => {
    return depthValue.on("change", (latest) => {
      setRoundedDepth(Math.floor(latest));
    });
  }, [depthValue]);

  const words = useMemo(() => ["Web Developer", "Frontend Engineer", "AI App Builder"], []);
  const typingText = useTypingEffect(words);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween" as const,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-20">
      <div className="caustic-shimmer" />
      
      {/* Ambient Glow - CSS Only now */}
      <div 
        style={{ transform: "translate(-50%, -50%) translateZ(0)", willChange: "transform" }}
        className="absolute left-1/2 top-1/2 w-[600px] h-[200px] bg-[#0ea5e9]/[0.08] blur-[120px] rounded-[100%] pointer-events-none animate-glow-sequence"
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        layout={false}
        className="relative z-10"
      >
        {/* 1. Depth Marker */}
        <motion.div 
          variants={itemVariants} 
          layout={false}
          className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6"
          style={{ willChange: "transform" }}
        >
          {"// "}
          {roundedDepth.toString().padStart(3, "0")}
          {"M_DEEP_SEA_TRANSMISSION"}
        </motion.div>

        {/* 2. Name with Parallax */}
        <motion.div 
          style={{ y: nameY, opacity: nameOpacity, transform: "translateZ(0)", willChange: "transform" }}
          layout={false}
        >
          <motion.h1
            variants={itemVariants}
            layout={false}
            className="font-serif text-[clamp(4rem,10vw,8rem)] font-light tracking-tighter leading-[0.85] mb-8"
            style={{ willChange: "transform" }}
          >
            Adrian <br />
            <span className="italic font-normal text-accent pl-12">Sterling</span>
          </motion.h1>

          <motion.div 
            variants={itemVariants} 
            layout={false}
            className="h-px w-full bg-border-ocean/30 relative mb-8"
            style={{ willChange: "transform" }}
          >
            <div className="absolute left-0 -top-6 font-mono text-[10px] text-text-muted opacity-40">000M</div>
            <div className="absolute right-0 -top-6 font-mono text-[10px] text-text-muted opacity-40">999M</div>
          </motion.div>

          {/* 3. Typing Subtitle */}
          <motion.p
            variants={itemVariants}
            layout={false}
            className="font-mono text-sm text-text-muted mb-6 flex items-center gap-2 min-h-[1.5rem]"
            style={{ willChange: "transform" }}
          >
            {typingText}
            <span className="w-2 h-4 bg-accent animate-pulse inline-block" />
          </motion.p>
        </motion.div>

        {/* 4. Status Ping Row */}
        <motion.div 
          variants={itemVariants}
          layout={false}
          className="flex items-center gap-6 mb-12"
          style={{ willChange: "transform" }}
        >
          <div className="relative flex items-center justify-center w-6 h-6">
            <div className="absolute w-full h-full border border-accent/15 rounded-full animate-[ping_3s_infinite]" style={{ animationDelay: "0ms" }} />
            <div className="absolute w-full h-full border border-accent/15 rounded-full animate-[ping_3s_infinite]" style={{ animationDelay: "400ms" }} />
            <div className="absolute w-full h-full border border-accent/15 rounded-full animate-[ping_3s_infinite]" style={{ animationDelay: "800ms" }} />
            <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#38bdf8]" />
          </div>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7, type: "tween" }}
            className="font-mono text-xs text-text-muted"
          >
            Available for work
          </motion.span>
        </motion.div>

        {/* 5. CTA Button */}
        <motion.div variants={itemVariants} layout={false} style={{ willChange: "transform" }}>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 px-8 py-4 border border-accent/30 text-accent font-mono text-xs uppercase tracking-widest transition-all duration-300 relative group overflow-hidden hover:bg-accent/[0.08] hover:border-accent hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
            style={{ willChange: "transform" }}
          >
            <span className="relative z-10 transition-colors group-hover:text-white">Dive into Projects</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-accent transition-transform duration-300 -translate-x-full group-hover:translate-x-[-95%]" />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut", type: "tween" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        style={{ willChange: "transform" }}
      >
        <span className="font-mono text-[8px] uppercase tracking-widest text-text-muted">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
});

export default Hero;
