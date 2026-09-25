import Link from "next/link";
import { ArrowUp, Heart, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="py-16 bg-[#07080b] border-t border-white/[0.06] text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm tracking-tight">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-slate-600">/</span>
              <span className="font-serif italic font-normal text-slate-400">
                Personal Editorial Portfolio
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm font-light leading-relaxed">
              Undergraduate Computer Engineering student at Egypt University of Informatics (EUI).
              Driven by curiosity, building practical tools, and exploring the horizons of technology.
            </p>
            <p className="text-[11px] font-mono text-slate-400">
              DEPI Freelancing Learning &amp; Demo Project · 2026
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
              Index
            </p>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a href="#philosophy" className="hover:text-mineral transition-colors">
                  01. Philosophy &amp; Pillars
                </a>
              </li>
              <li>
                <a href="#featured-project" className="hover:text-mineral transition-colors">
                  02. Keheilan (1st of 53 Teams)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-mineral transition-colors">
                  03. Projects &amp; Code
                </a>
              </li>
              <li>
                <a href="#involvement" className="hover:text-mineral transition-colors">
                  04. Campus &amp; IEEE/GDG
                </a>
              </li>
              <li>
                <a href="#workbench" className="hover:text-mineral transition-colors">
                  05. Technical Workbench
                </a>
              </li>
              <li>
                <a href="#milestones" className="hover:text-mineral transition-colors">
                  06. Dean&apos;s List &amp; Proof
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Source Truth */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
              Academic Record
            </p>
            <div className="text-[11px] font-mono space-y-1 text-slate-400">
              <p>EUI Faculty of Engineering</p>
              <p>Cumulative GPA: <span className="text-mineral font-semibold">3.85 / 4.0</span></p>
              <p>Fall 2025 GPA: <span className="text-amber-300 font-semibold">3.93</span></p>
              <p>Expected Graduation: 2030</p>
              <p>Location: Cairo, Egypt</p>
            </div>
          </div>

        </div>

        {/* Colophon & Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed with authenticity &amp; precision.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
