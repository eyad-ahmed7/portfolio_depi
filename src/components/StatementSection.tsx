import { Compass, Users, Cpu, Flame } from "lucide-react";

export default function StatementSection() {
  const pillars = [
    {
      num: "01",
      icon: Cpu,
      title: "Building & Experimenting",
      subtitle: "Learning through running code",
      body: "I don't just read manuals; I write scripts, test terminal tools, manipulate arrays, and break things to see how they tick. C memory layouts, Python data structures, and automation pipelines are my current playgrounds.",
      badge: "Hands-on",
    },
    {
      num: "02",
      icon: Flame,
      title: "Curiosity Over Pretense",
      subtitle: "Acknowledging early days",
      body: "I am early in my engineering degree. I make no claim to be a 10-year veteran. My superpower right now is rapid synthesis, genuine curiosity, and asking the questions that uncover better ways to build.",
      badge: "Potential",
    },
    {
      num: "03",
      icon: Users,
      title: "People & Shared Energy",
      subtitle: "Not coding in a dark room",
      body: "Engineering is fundamentally collaborative. From organizing 50+ team hackathons at GDG EUI to coordinating campus communications at The Exchange and IEEE, I thrive when working alongside ambitious peers.",
      badge: "Community",
    },
    {
      num: "04",
      icon: Compass,
      title: "The Physical World",
      subtitle: "Field notes & open air",
      body: "Technology is a lens, not a cage. Camping in Sinai, traveling across Egyptian landscapes, and shooting photography give me perspective, resilience, and balance outside of the IDE.",
      badge: "Exploration",
    },
  ];

  return (
    <section id="philosophy" className="py-24 border-t border-b border-white/[0.06] bg-[#0c0e14] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-mineral mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-mineral" />
              <span>Section 01 · Perspective</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Balancing Code with <br />
              <span className="font-serif italic font-normal text-slate-300">
                Curiosity, People &amp; Horizons.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md font-light leading-relaxed">
            Technology is central to my ambition, but it gains meaning through
            human collaboration and real-world exploration.
          </p>
        </div>

        {/* 4 Pillars Grid — Editorial Asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.07] hover:border-mineral/30 p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-slate-400 group-hover:text-mineral transition-colors">
                      {pillar.num}
                    </span>
                    <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-mineral/10 border border-mineral/20 flex items-center justify-center text-mineral mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-mineral-light transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1 mb-4">
                    {pillar.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {pillar.body}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-mineral transition-colors" />
                  <span>EYAD EL BOHY · CORE TRAIT</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
