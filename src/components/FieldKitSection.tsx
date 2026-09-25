import { Code2, Database, Workflow, PenTool, GraduationCap, Sparkles } from "lucide-react";
import { SKILL_CATEGORIES, EXPLORATION_DOMAINS, PERSONAL_INFO } from "@/data/portfolioData";

export default function FieldKitSection() {
  const iconMap: Record<string, any> = {
    "Languages & Core": Code2,
    "Data & Analysis": Database,
    "Automation & Workflows": Workflow,
    "Communication & Office": PenTool,
  };

  return (
    <section id="workbench" className="py-24 bg-[#0a0c10] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-mineral mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-mineral" />
              <span>Section 04 · Technical Workbench</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Tools, Methods &amp; <br />
              <span className="font-serif italic font-normal text-slate-300">
                Curiosity Vectors.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md font-light leading-relaxed">
            No synthetic 90% skill meters. An honest catalog of languages I code in,
            libraries I wrangle data with, and horizons I am currently exploring.
          </p>
        </div>

        {/* Exploration Horizons Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-mineral" />
              Active Technical Exploration Vectors
            </h3>
            <span className="text-[11px] font-mono text-slate-400">
              LEARNING IN PROGRESS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXPLORATION_DOMAINS.map((domain) => (
              <div
                key={domain.domain}
                className="bg-surface-100 border border-white/[0.07] hover:border-mineral/30 p-5 rounded-2xl transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-white group-hover:text-mineral-light transition-colors">
                    {domain.domain}
                  </h4>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-mineral/10 text-mineral-light border border-mineral/20">
                    {domain.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Tool Categorization Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = iconMap[category.name] || Code2;
            const isAutomation = category.name.includes("Automation");

            return (
              <div
                key={category.name}
                className="bg-surface-100 border border-white/[0.08] p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-mineral/10 border border-mineral/20 flex items-center justify-center text-mineral">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {category.name}
                      </h4>
                      <p className="text-xs font-mono text-slate-400">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3.5">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="bg-white/[0.02] border border-white/[0.05] p-3 rounded-xl flex items-start justify-between gap-4"
                      >
                        <div>
                          <p className="text-xs font-semibold text-white">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-slate-400 font-light mt-0.5">
                            {item.note}
                          </p>
                        </div>
                        {item.name === "n8n" && (
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 shrink-0 border border-white/[0.08]">
                            TARGETED USAGE
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>PRACTICED &amp; DEPLOYED</span>
                  <span className="text-slate-300">AUTHENTIC USE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Coursework Foundation at EUI */}
        <div className="bg-surface-100 border border-white/[0.08] p-6 sm:p-8 rounded-3xl shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">
                  Academic Rigor &amp; EUI Engineering Foundation
                </h4>
                <p className="text-xs font-mono text-slate-400">
                  Egypt University of Informatics · Faculty of Engineering
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 text-xs font-mono text-slate-300">
              <span className="text-mineral font-semibold">Cumulative GPA: 3.85</span>
              <span>·</span>
              <span>Fall &apos;25: 3.93</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-mono uppercase text-slate-400 mb-3 tracking-wider">
              Completed &amp; Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2.5">
              {PERSONAL_INFO.coursework.map((course) => (
                <div
                  key={course}
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-slate-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
