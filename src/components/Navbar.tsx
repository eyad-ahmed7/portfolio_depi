"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Projects", href: "#projects" },
    { name: "Involvement", href: "#involvement" },
    { name: "Workbench", href: "#workbench" },
    { name: "Milestones", href: "#milestones" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0c10]/85 backdrop-blur-md border-b border-white/[0.06] py-3.5 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Name */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-full bg-mineral/15 border border-mineral/30 flex items-center justify-center text-mineral font-mono text-xs font-semibold group-hover:border-mineral group-hover:scale-105 transition-all">
            EB
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-white flex items-center gap-1.5">
              {PERSONAL_INFO.name}
              <span className="w-1.5 h-1.5 rounded-full bg-mineral animate-pulse" />
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              EUI &apos;30 · Cairo
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-2 py-1"
          >
            GitHub
            <ArrowUpRight className="w-3 h-3 text-slate-500" />
          </a>
          <a
            href="#contact"
            className="text-xs font-semibold bg-white text-black hover:bg-slate-200 px-4 py-2 rounded-full transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg bg-white/[0.05] border border-white/[0.08]"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0c10]/95 backdrop-blur-xl border-b border-white/[0.1] px-6 py-6 transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-mineral py-2 border-b border-white/[0.05] flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-slate-600">→</span>
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center justify-between p-2 rounded bg-white/[0.03]"
              >
                <span>github.com/eyad-ahmed7</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-xs font-semibold text-center bg-mineral text-black py-2.5 rounded-full hover:bg-mineral-light transition-all"
              >
                Get in touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
