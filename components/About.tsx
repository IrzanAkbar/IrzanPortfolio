"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Trophy } from "lucide-react";

const About = memo(function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "tween" as const, duration: 0.4 }
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 px-6 max-w-6xl mx-auto overflow-hidden relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        {/* Left Column — Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "tween", duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <span className="font-mono text-xs text-text-muted mb-4 tracking-[0.4em]">
            {"// CREW_MANIFEST"}
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-light italic mb-8">
            About
          </h2>
          <div className="space-y-6 text-text-muted leading-relaxed font-light">
            <p>
              Halo, saya Andi Irzan Akbar Hasanuddin — dipanggil Zann. Developer muda dari Indonesia yang tertarik pada web development dan kecerdasan buatan.
            </p>
            <p>
              Meski masih di bangku SMP, saya sudah membangun proyek nyata yang menggabungkan kreativitas, logika, dan teknologi modern — mulai dari AI tools, chatbot, hingga Telegram bot dengan pemrosesan gambar dan audio.
            </p>
            <p>
              Saya percaya konsistensi dan rasa ingin tahu adalah kunci untuk berkembang. Saya mungkin masih di awal perjalanan, tapi saya serius dalam membangun hal-hal yang bermakna.
            </p>
            <div className="flex flex-wrap items-center gap-3 py-2">
              <div className="group relative inline-flex items-center gap-3 px-3 py-1.5 bg-[#0D223B]/60 border border-accent/20 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_15px_rgba(56,189,248,0.1)]">
                <Trophy size={14} className="text-accent" />
                <span className="font-mono text-xs text-text-primary whitespace-nowrap">Peserta Kompetisi Matematika</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <div className="h-px w-32 bg-border-ocean/40" />
            <span className="font-mono text-[10px] text-text-muted tracking-widest opacity-60">
              — 050M
            </span>
          </div>
        </motion.div>

        {/* Right Column — Skills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "tween", duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-xs text-text-muted mb-4 block tracking-[0.4em]">
            {"// SYSTEM_CAPABILITIES"}
          </span>
          
          <div className="space-y-10">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4">
                  {group.category}
                </h3>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {group.items.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={tagVariants}
                      whileHover={{ scale: 1.05 }}
                      className="group relative flex items-center gap-2 px-3 py-1.5 bg-bg-card/40 border border-accent/20 rounded-none cursor-default transition-all duration-300 hover:border-accent/60"
                    >
                      <span className="w-0 h-0 group-hover:w-1.5 group-hover:h-1.5 bg-accent rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-text-primary group-hover:text-accent transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
            
            {/* Currently Learning Subsection */}
            <div className="pt-6 border-t border-border-ocean/20">
              <h3 className="font-mono text-xs text-text-muted uppercase tracking-[0.4em] mb-6">
                {"// ACTIVE_TRANSMISSIONS"}
              </h3>
              <div className="flex flex-wrap gap-4">
                {["Next.js", "React", "Advanced AI Integration"].map((item) => (
                  <div 
                    key={item} 
                    className="group relative flex items-center gap-3 px-3 py-1.5 border border-dashed border-accent/40 bg-accent/[0.03] transition-all hover:bg-accent/[0.08]"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_#38bdf8]" />
                    <span className="font-mono text-xs text-accent uppercase tracking-wider">{item}</span>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 bg-bg-surface border border-accent/20 px-2 py-1 text-[9px] font-mono whitespace-nowrap z-50 text-accent">
                      Currently in progress
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default About;
