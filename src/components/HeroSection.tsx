import Image from "next/image";
import { ArrowDown, ArrowUpRight, Compass, Sparkles, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden bg-grid-pattern">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Information & Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Coordinates / Status Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mineral opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mineral"></span>
              </span>
              <span>CAIRO, EG</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">30.0444° N, 31.2357° E</span>
              <span className="text-slate-600">·</span>
              <span className="text-mineral-light font-medium">EUI &apos;30</span>
            </div>

            {/* Editorial Heading */}
            <div className="space-y-2 mb-6">
              <p className="text-sm font-mono uppercase tracking-widest text-mineral font-semibold">
                Personal Notebook &amp; Portfolio
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                Eyad <br className="hidden sm:inline" />
                <span className="font-serif italic font-normal text-slate-300">
                  El Bohy.
                </span>
              </h1>
            </div>

            {/* Core Manifesto Quote */}
            <div className="relative pl-5 border-l-2 border-mineral/50 my-2">
              <p className="font-serif text-2xl sm:text-3xl text-slate-200 italic leading-snug">
                &ldquo;I like figuring things out.&rdquo;
              </p>
            </div>

            {/* Honest Narrative Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mt-5 leading-relaxed font-light">
              I am a Computer Engineering student at{" "}
              <span className="text-white font-medium">
                Egypt University of Informatics (EUI)
              </span>
              . I am early in my university journey—exploring data systems, Python
              scripting, low-level C, and practical automation.
            </p>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3 leading-relaxed">
              Rather than pretending to have decades of client work, I focus on
              honest potential: experimenting, building tools, organizing
              hackathons, and seeing how far curiosity can take me.
            </p>

            {/* Verified Facts / Academic Standing */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  Degree
                </p>
                <p className="text-sm font-semibold text-slate-200 mt-0.5">
                  B.E. Comp. Eng.
                </p>
                <p className="text-[11px] text-slate-400">Class of 2030</p>
              </div>

              <div>
                <p className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  Cumulative GPA
                </p>
                <p className="text-sm font-semibold text-mineral mt-0.5 font-mono">
                  3.85 <span className="text-[11px] text-slate-400 font-sans">/ 4.0</span>
                </p>
                <p className="text-[11px] text-slate-400">Fall &apos;25: 3.93</p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  Hackathon Honor
                </p>
                <p className="text-sm font-semibold text-amber-300 mt-0.5">
                  1st of 53 Teams
                </p>
                <p className="text-[11px] text-slate-400">GDG AI Sprint &apos;26</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-mineral text-[#042f2e] font-semibold text-sm px-6 py-3 rounded-full hover:bg-mineral-light transition-all shadow-lg shadow-mineral/20 active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#involvement"
                className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.1] text-slate-200 hover:text-white hover:bg-white/[0.1] font-medium text-sm px-5 py-3 rounded-full transition-all"
              >
                <span>Campus &amp; Events</span>
              </a>

              <a
                href={PERSONAL_INFO.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white px-3 py-2 transition-colors"
              >
                <span>github.com/eyad-ahmed7</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

          </div>

          {/* Right Column: Asymmetric Editorial Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Outer decorative card frame with tape / editorial feel */}
              <div className="relative rounded-2xl overflow-hidden bg-surface-100 border border-white/[0.12] p-2.5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                
                {/* Photo container */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/assets/personal_photo.jpeg"
                    alt="Eyad El Bohy standing at an overlook in Sinai, Egypt"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-center filter contrast-[1.02] brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Caption overlay on photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-mineral-light tracking-wide uppercase">
                      <MapPin className="w-3.5 h-3.5 text-mineral" />
                      <span>Sinai Peninsula, Egypt</span>
                    </div>
                    <p className="text-xs text-slate-200 mt-1 font-light">
                      Field Notes: Where desert mountains meet the sea.
                    </p>
                  </div>
                </div>

                {/* Editorial metadata strip below photo */}
                <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/[0.05] mt-2">
                  <span className="flex items-center gap-1">
                    <Compass className="w-3 h-3 text-slate-500" />
                    ARCHIVE · 2026
                  </span>
                  <span className="text-slate-300">EXPLORER &amp; BUILDER</span>
                </div>
              </div>

              {/* Floating pill badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#0a0c10]/95 border border-white/[0.15] backdrop-blur-md rounded-xl p-3 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Core Philosophy
                  </p>
                  <p className="text-xs font-semibold text-slate-200">
                    Tech + People + Exploration
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
