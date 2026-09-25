"use client";

import { useState } from "react";
import Image from "next/image";
import { FolderGit2, BarChart2, Terminal, Code2, ExternalLink, Sparkles, CheckCircle, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";

export default function ProjectsSection() {
  const [activeCodeView, setActiveCodeView] = useState<"c-exam" | "utilities">("c-exam");

  const fileOrganizer = PROJECTS.find((p) => p.id === "smart-file-organizer");
  const edaProject = PROJECTS.find((p) => p.id === "eda-practice");
  const cProject = PROJECTS.find((p) => p.id === "c-exam-management");
  const gradeManager = PROJECTS.find((p) => p.id === "student-grade-manager");
  const expenseTracker = PROJECTS.find((p) => p.id === "personal-expense-tracker");

  return (
    <section id="projects" className="py-24 bg-[#0c0e14] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-mineral mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-mineral" />
              <span>Section 02 · Projects &amp; Experiments</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Things I Have Actually <br />
              <span className="font-serif italic font-normal text-slate-300">
                Built and Explored.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md font-light leading-relaxed">
            Honest learning projects, filesystem tools, academic systems, and
            data cleaning scripts. No exaggerated commercial claims.
          </p>
        </div>

        {/* PROJECT 1: Smart File Organizer (Editorial 2-Column with Real Screenshot) */}
        {fileOrganizer && (
          <div className="mb-20 bg-surface-100 border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Project narrative */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                    <span className="text-mineral font-semibold">{fileOrganizer.category}</span>
                    <span>·</span>
                    <span>PYTHON STANDARD LIB</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    {fileOrganizer.title}
                  </h3>
                  <p className="text-sm font-mono text-slate-300 mt-1 mb-4">
                    {fileOrganizer.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                    {fileOrganizer.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {fileOrganizer.highlights?.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                        <CheckCircle className="w-4 h-4 text-mineral shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {fileOrganizer.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Real VSCode Screenshot with High Fidelity Frame */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden bg-[#181a1f] border border-white/[0.12] shadow-2xl">
                  {/* Mock Window Top Bar */}
                  <div className="bg-[#21252b] px-4 py-2.5 flex items-center justify-between border-b border-white/[0.05]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="text-xs font-mono text-slate-400 ml-2">
                        file_organizer.py — VS Code
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      Actual Source Capture
                    </span>
                  </div>

                  {/* Image Render */}
                  <div className="relative aspect-[16/10] w-full bg-[#181a1f]">
                    <Image
                      src={fileOrganizer.image || "/assets/file_organizer-ss-projects.jpg"}
                      alt={fileOrganizer.imageAlt || "Python script code"}
                      fill
                      sizes="(max-width: 1024px) 100vw, 650px"
                      className="object-cover object-top filter contrast-[1.02]"
                    />
                  </div>

                  <div className="px-4 py-2 bg-[#1b1e24] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>pathlib.Path · os.walk · shutil.move</span>
                    <span className="text-slate-300">Clean Recursive Logic</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PROJECT 2: Data / EDA Practice (Reversed Layout with Real Matplotlib Scatterplot) */}
        {edaProject && (
          <div className="mb-20 bg-surface-100 border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Real Matplotlib Scatterplot Screenshot */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden bg-[#1e222b] border border-white/[0.12] shadow-2xl">
                  {/* Notebook header */}
                  <div className="bg-[#282c34] px-4 py-2.5 flex items-center justify-between border-b border-white/[0.05]">
                    <div className="flex items-center gap-2">
                      <BarChart2 className="w-4 h-4 text-mineral" />
                      <span className="text-xs font-mono text-slate-300">
                        eda_notebook.ipynb · Matplotlib Scatter
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      Host Count vs. Listing Price
                    </span>
                  </div>

                  {/* Scatterplot Image */}
                  <div className="relative aspect-[16/10] w-full bg-[#1e222b]">
                    <Image
                      src={edaProject.image || "/assets/airbnb-scatterplot-ss-projects.jpg"}
                      alt={edaProject.imageAlt || "Scatter plot output"}
                      fill
                      sizes="(max-width: 1024px) 100vw, 650px"
                      className="object-contain bg-white/5 p-2"
                    />
                  </div>

                  <div className="px-4 py-2 bg-[#21252b] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>df_filtered.plot(kind=&quot;scatter&quot;)</span>
                    <span className="text-mineral-light">Distribution Analysis</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Analytical Description */}
              <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                    <span className="text-mineral font-semibold">{edaProject.category}</span>
                    <span>·</span>
                    <span>LEARNING PRACTICE</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    {edaProject.title}
                  </h3>
                  <p className="text-sm font-mono text-slate-300 mt-1 mb-4">
                    {edaProject.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                    {edaProject.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {edaProject.highlights?.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                        <CheckCircle className="w-4 h-4 text-mineral shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {edaProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PROJECT 3 & UTILITIES: C Exam Management System & Python Utilities (Editorial Terminal Pairing) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* C Exam Management (Academic Programming Terminal Frame) */}
          {cProject && (
            <div className="lg:col-span-7 bg-surface-100 border border-white/[0.08] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="text-amber-400 font-semibold">{cProject.category}</span>
                    <span>·</span>
                    <span>EUI CURRICULUM</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.06]">
                    LOW-LEVEL MEMORY &amp; FILE I/O
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {cProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1 mb-4">
                  {cProject.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {cProject.description}
                </p>

                {/* Intentional Media: Terminal Emulation showcasing real C architecture */}
                <div className="rounded-xl overflow-hidden bg-[#07090d] border border-white/[0.1] font-mono text-xs p-4 text-slate-300 shadow-inner">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.06] text-[11px] text-slate-400">
                    <span>exam_system.c — struct &amp; pointer flow</span>
                    <span className="text-emerald-400">GCC compiled</span>
                  </div>
                  <pre className="text-[11px] text-slate-300 overflow-x-auto leading-relaxed">
{`typedef struct {
    int student_id;
    char name[64];
    float exam_score;
    int seat_assignment;
} ExamRecord;

void persist_record(FILE *fp, ExamRecord *rec) {
    fwrite(rec, sizeof(ExamRecord), 1, fp);
}`}
                  </pre>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                {cProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Compact Utilities (Grade Manager & Expense Tracker) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Student Grade Manager Card */}
            {gradeManager && (
              <div className="bg-surface-100 border border-white/[0.08] rounded-3xl p-6 sm:p-7 flex flex-col justify-between flex-1 shadow-lg hover:border-mineral/30 transition-all">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="text-mineral">{gradeManager.category}</span>
                    <span>PYTHON CLI</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {gradeManager.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 mb-3">
                    {gradeManager.tagline}
                  </p>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {gradeManager.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Weighted Scales · Terminal Menu</span>
                  <span className="text-slate-300">Python 3</span>
                </div>
              </div>
            )}

            {/* Personal Expense Tracker Card */}
            {expenseTracker && (
              <div className="bg-surface-100 border border-white/[0.08] rounded-3xl p-6 sm:p-7 flex flex-col justify-between flex-1 shadow-lg hover:border-mineral/30 transition-all">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="text-mineral">{expenseTracker.category}</span>
                    <span>PERSISTENCE</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {expenseTracker.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 mb-3">
                    {expenseTracker.tagline}
                  </p>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {expenseTracker.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>CSV Logging · Monthly Rollups</span>
                  <span className="text-slate-300">Python 3</span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
