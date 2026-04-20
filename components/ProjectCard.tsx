"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  href: string;
  status: "active" | "archived" | "wip";
}

const ProjectCard = memo(function ProjectCard({ id, title, description, tags, href, status }: ProjectCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      className="project-card-scan group relative bg-[#0A1E35]/40 backdrop-blur-sm border border-[#0E2D4A] p-6 rounded-none flex flex-col transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.08)] will-change-transform"
    >
      {/* 2. Crosshair + (Top Left) */}
      <div className="absolute top-2 left-2 w-3 h-3 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
        <div className="absolute w-full h-[1px] bg-accent" />
        <div className="absolute h-full w-[1px] bg-accent" />
      </div>

      {/* 1. Status Badge (Top Right) */}
      <div className="absolute top-4 right-4 px-2 py-0.5 border border-border-ocean bg-bg-base/50">
        <span className="font-mono text-[9px] uppercase tracking-widest text-accent group-hover:text-white transition-colors">
          {status}
        </span>
      </div>

      {/* 3. Project Title */}
      <h3 className="font-serif text-2xl font-semibold text-text-primary mb-3 mt-4 group-hover:text-accent transition-colors">
        {title}
      </h3>

      {/* 4. Description */}
      <p className="font-mono text-xs text-text-muted mb-6 line-clamp-3 leading-relaxed">
        {description}
      </p>

      {/* 5. Divider */}
      <div className="w-full h-px bg-[#0E2D4A] my-4" />

      {/* 6. Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2 py-1 bg-[#020B18]/60 border border-accent/30 font-mono text-[9px] uppercase tracking-wider text-text-muted hover:border-accent hover:text-accent transition-all"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 7. Bottom Row */}
      <div className="mt-auto flex justify-between items-center h-4">
        <a 
          href={href} 
          className="group/link flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent transition-colors"
        >
          VIEW PROJECT
          <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
        </a>
        <span className="font-mono text-[10px] text-text-muted opacity-40">
          {"// 00"}{id}
        </span>
      </div>
    </motion.div>
  );
});

export default ProjectCard;
