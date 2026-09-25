"use client";

import { useState } from "react";
import { Trophy, Cpu, Mic, Mail, ShieldAlert, CheckCircle2, Workflow, ArrowRight } from "lucide-react";
import { FEATURED_PROJECT } from "@/data/portfolioData";

export default function FeaturedProjectSection() {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "my-role">("overview");

  return (
    <section id="featured-project" className="py-24 bg-[#0a0c10] relative overflow-hidden">
      {/* Decorative background grid and gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-mineral/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-mineral">
            <span className="w-1.5 h-1.5 rounded-full bg-mineral animate-pulse" />
            <span>Anchor Project · Hackathon Spotlight</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono font-medium">
            <Trophy className="w-3.5 h-3.5" />
            <span>1st Place of 53 Teams · GDG AI Sprint 2026</span>
          </div>
        </div>

        {/* Main Editorial Case Study Box */}
        <div className="bg-surface-100 border border-white/[0.1] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                  <span>GDG ON CAMPUS EUI</span>
                  <span>·</span>
                  <span>MAY 2026</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  {FEATURED_PROJECT.title}
                </h3>
                <p className="font-serif italic text-xl sm:text-2xl text-mineral mt-2">
                  {FEATURED_PROJECT.tagline}
                </p>

                <p className="text-sm sm:text-base text-slate-300 mt-5 leading-relaxed font-light">
                  {FEATURED_PROJECT.description}
                </p>

                {/* Tab Navigation for Depth */}
                <div className="flex items-center gap-2 border-b border-white/[0.08] mt-8 pb-3">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === "overview"
                        ? "bg-mineral text-black font-semibold"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    System Features
                  </button>
                  <button
                    onClick={() => setActiveTab("my-role")}
                    className={`text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === "my-role"
                        ? "bg-mineral text-black font-semibold"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    My Specific Role
                  </button>
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === "architecture"
                        ? "bg-mineral text-black font-semibold"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    Workflow Pipeline
                  </button>
                </div>

                {/* Dynamic Tab Body */}
                <div className="mt-6 min-h-[170px]">
                  {activeTab === "overview" && (
                    <ul className="space-y-3">
                      {FEATURED_PROJECT.highlights?.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light">
                          <CheckCircle2 className="w-4 h-4 text-mineral shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === "my-role" && (
                    <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-light bg-black/30 p-4 rounded-xl border border-white/[0.05]">
                      <p className="font-medium text-white">
                        Honest Contribution Transparency:
                      </p>
                      <p>
                        This was an interdisciplinary team effort. I did not build the entire platform alone.
                      </p>
                      <p>
                        My contributions centered on:
                      </p>
                      <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                        <li>
                          <strong>Ideation &amp; Team Coordination:</strong> Structuring the pitch narrative, problem framing, and viability criteria.
                        </li>
                        <li>
                          <strong>n8n AI Email Automation:</strong> Engineered the automated communication component triggering real-time investor briefs when deal viability metrics updated.
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeTab === "architecture" && (
                    <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-light bg-black/30 p-4 rounded-xl border border-white/[0.05]">
                      <p className="font-mono text-[11px] text-mineral uppercase">
                        Data &amp; Communication Pipeline
                      </p>
                      <p>
                        1. Egyptian farmer records Arabic voice note regarding irrigation / harvest status.
                      </p>
                      <p>
                        2. Voice-to-text pipeline transcribes Arabic audio and flags revenue/harvest anomaly markers.
                      </p>
                      <p>
                        3. Risk classification scores the deal and routes updates through our n8n webhook.
                      </p>
                      <p>
                        4. n8n triggers tailored email summaries to fractional investors.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <p className="text-[11px] font-mono uppercase text-slate-400 mb-2.5">
                  Core Technologies &amp; Methods
                </p>
                <div className="flex flex-wrap gap-2">
                  {FEATURED_PROJECT.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Blueprint Visualizer (Intentional Media Design) */}
            <div className="lg:col-span-6 flex flex-col">
              
              {/* Intentional Blueprint / Diagram Container */}
              <div className="relative rounded-2xl bg-[#07090d] border border-white/[0.12] p-5 sm:p-7 overflow-hidden shadow-inner">
                
                {/* Header of diagram */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-mineral" />
                    <span className="text-xs font-mono uppercase text-white tracking-wider">
                      Keheilan System Topology
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-mineral/15 text-mineral-light border border-mineral/30">
                    CONCEPT ARCHITECTURE
                  </span>
                </div>

                {/* Visual Pipeline Nodes */}
                <div className="space-y-4">
                  
                  {/* Step 1: Field Data */}
                  <div className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.06] p-3.5 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Mic className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-white">
                          Farmer Field Ingestion
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                          Arabic Voice
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 font-light">
                        Local dialect voice-to-text updates on crops, soil conditions &amp; yields
                      </p>
                    </div>
                  </div>

                  {/* Downward connector */}
                  <div className="flex justify-center -my-1 text-slate-600">
                    <span className="text-xs font-mono">↓</span>
                  </div>

                  {/* Step 2: Scoring Engine */}
                  <div className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.06] p-3.5 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-mineral shrink-0">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-white">
                          Deal Scoring &amp; Risk Profiling
                        </span>
                        <span className="text-[10px] font-mono text-mineral bg-teal-950/60 px-1.5 py-0.5 rounded">
                          Anomaly AI
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 font-light">
                        Automated viability verification and yield disruption anomaly checks
                      </p>
                    </div>
                  </div>

                  {/* Downward connector */}
                  <div className="flex justify-center -my-1 text-slate-600">
                    <span className="text-xs font-mono">↓</span>
                  </div>

                  {/* Step 3: Eyad's Component (n8n Automation) */}
                  <div className="relative flex items-center gap-4 bg-teal-950/20 border-2 border-mineral/40 p-4 rounded-xl shadow-lg shadow-mineral/5">
                    <div className="absolute -top-2.5 right-3 bg-mineral text-black text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Eyad&apos;s Engineering Focus
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-mineral/20 border border-mineral/50 flex items-center justify-center text-mineral-light shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-white">
                          n8n Automated Dispatch
                        </span>
                        <span className="text-[10px] font-mono text-mineral bg-mineral/10 px-1.5 py-0.5 rounded">
                          Webhooks &amp; LLM
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-0.5 font-light">
                        Real-time AI email generator delivering updates to fractional backers
                      </p>
                    </div>
                  </div>

                </div>

                {/* Intentional Media Note (Rule 2: Missing media designed intentionally) */}
                <div className="mt-6 pt-4 border-t border-dashed border-white/[0.1] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>STATUS: HACKATHON PROTOTYPE</span>
                  <span className="text-slate-300">53 TEAMS COMPETED</span>
                </div>
              </div>

              {/* Caption */}
              <p className="text-[11px] font-mono text-slate-400 mt-3 text-center">
                Visualizing the multi-stage architecture developed during the 48-hour sprint.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
