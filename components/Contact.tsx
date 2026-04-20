"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Contact = memo(function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 max-w-6xl mx-auto relative overflow-hidden flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center z-10"
      >
        <span className="font-mono text-xs text-text-muted mb-4 block tracking-[0.4em]">
          {"// ESTABLISH_CONNECTION"}
        </span>
        <h2 className="font-serif text-5xl md:text-7xl font-light italic mb-6">
          Let&apos;s Work Together
        </h2>
        <p className="font-mono text-sm text-text-muted tracking-widest max-w-md mx-auto mb-20 opacity-80">
          Open for freelance & collaboration
        </p>

        {/* Sonar Circle Animation (CSS only) */}
        <div className="relative w-80 h-80 flex items-center justify-center mb-20 pointer-events-none">
          <div className="absolute inset-0 border border-accent/15 rounded-full" style={{ animation: "sonarPulse 4s linear infinite 0s", willChange: "transform, opacity" }} />
          <div className="absolute inset-0 border border-accent/15 rounded-full" style={{ animation: "sonarPulse 4s linear infinite 0.8s", willChange: "transform, opacity" }} />
          <div className="absolute inset-0 border border-accent/15 rounded-full" style={{ animation: "sonarPulse 4s linear infinite 1.6s", willChange: "transform, opacity" }} />
          
          <div className="pointer-events-auto">
            <a 
              href="mailto:hello@adrian.abyss" 
              className="font-serif text-3xl md:text-4xl text-accent hover:text-white transition-all underline decoration-accent/20 underline-offset-8"
            >
              hello@adrian.abyss
            </a>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex justify-center gap-6 mb-32">
          <SocialLink href="https://github.com" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
        </div>
      </motion.div>

      <footer className="w-full pt-10 border-t border-border-ocean/20 opacity-40">
        <div className="font-mono text-[10px] text-text-muted text-center tracking-[0.4em]">
          {"// DEPTH: 750M — ALL SYSTEMS NOMINAL"}
        </div>
      </footer>
    </section>
  );
});

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-4 bg-[#0A1E35]/40 backdrop-blur-sm border border-[#0E2D4A] flex items-center justify-center text-text-muted hover:text-accent hover:border-accent hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}

export default Contact;
