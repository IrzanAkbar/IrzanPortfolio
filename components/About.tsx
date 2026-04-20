"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

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
    <section id="about" className="py-24 md:py-32 px-6 max-w-6xl mx-auto overflow-hidden">
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
              I am a digital architect focused on building high-pressure, reliable systems that thrive in complex environments. My approach blends technical precision with cinematic aesthetics to create memorable, functional experiences.
            </p>
            <p>
              Rather than following the tide, I prefer to dive deep into technical challenges, ensuring that every line of code serves as a solid foundation for the user journey. Confident, driven, and perpetually curious.
            </p>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default About;
