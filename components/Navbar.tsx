"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLenis } from "lenis/react";

const navLinks = [
  { id: "01", name: "About", href: "#about" },
  { id: "02", name: "Projects", href: "#projects" },
  { id: "03", name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleScroll = (href: string) => {
    setIsOpen(false);
    lenis?.scrollTo(href, { offset: -80 });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-border-ocean/20">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            lenis?.scrollTo(0);
          }}
          className="font-serif text-2xl font-light italic tracking-tighter text-text-primary border-b border-accent/40 hover:text-accent transition-all"
        >
          A.S
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted hover:text-accent transition-colors relative group"
            >
              <span className="text-[10px] opacity-40 mr-1">{link.id}</span>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none group"
          style={isOpen ? { position: 'absolute', top: '1.5rem', right: '1.5rem' } : {}}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span 
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
            className="w-6 h-[1px] bg-accent group-hover:bg-white transition-colors"
          />
          <motion.span 
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-6 h-[1px] bg-accent group-hover:bg-white transition-colors"
          />
          <motion.span 
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
            className="w-6 h-[1px] bg-accent group-hover:bg-white transition-colors"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg-base/98 backdrop-blur-xl z-50 flex flex-col items-center justify-center p-6"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="flex flex-col gap-12 text-center"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="group"
                  >
                    <span className="block font-mono text-sm text-accent mb-2 opacity-40">
                      {link.id} —
                    </span>
                    <span className="font-serif text-5xl md:text-6xl italic text-text-primary hover:text-accent transition-all leading-tight">
                      {link.name}
                    </span>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
