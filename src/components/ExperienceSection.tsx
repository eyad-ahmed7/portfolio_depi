"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, Award, Calendar, Sparkles, MapPin, CheckCircle2, ChevronRight, Maximize2 } from "lucide-react";
import { INVOLVEMENTS } from "@/data/portfolioData";

interface ExperienceSectionProps {
  onOpenCertificate?: (src: string, title: string) => void;
}

export default function ExperienceSection({ onOpenCertificate }: ExperienceSectionProps) {
  const [selectedImg, setSelectedImg] = useState<{ src: string; title: string } | null>(null);

  const handleImageClick = (src: string, title: string) => {
    if (onOpenCertificate) {
      onOpenCertificate(src, title);
    } else {
      setSelectedImg({ src, title });
    }
  };

  return (
    <section id="involvement" className="py-24 bg-[#0a0c10] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-mineral mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-mineral" />
              <span>Section 03 · Involvement &amp; Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Growth Through <br />
              <span className="font-serif italic font-normal text-slate-300">
                Organizations, Teams &amp; Events.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md font-light leading-relaxed">
            No fake corporate titles. Real student branch leadership,
            communication pipelines, event staging, and hackathon logistics.
          </p>
        </div>

        {/* Narrative Involvements Grid */}
        <div className="space-y-16">
          {INVOLVEMENTS.map((item, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={item.id}
                className="bg-surface-100 border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Left Column: Organization Story */}
                  <div
                    className={`${
                      item.image ? "lg:col-span-6" : "lg:col-span-12"
                    } ${isReversed && item.image ? "lg:order-2" : "lg:order-1"} flex flex-col justify-between`}
                  >
                    <div>
                      {/* Meta info */}
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-3">
                        <span className="text-mineral font-semibold uppercase tracking-wider">
                          {item.organization}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1 text-slate-300">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {item.role}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 font-light mt-3 leading-relaxed">
                        {item.summary}
                      </p>

                      {/* Detail Bullets */}
                      <div className="mt-6 space-y-2.5">
                        {item.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light">
                            <CheckCircle2 className="w-4 h-4 text-mineral shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applied Capabilities */}
                    <div className="mt-8 pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                      {item.skillsApplied.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Real Documentary Photograph / Certificate */}
                  {item.image && (
                    <div
                      className={`lg:col-span-6 ${
                        isReversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative group rounded-2xl overflow-hidden bg-slate-900 border border-white/[0.12] shadow-2xl">
                        
                        <div className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden"
                          onClick={() => handleImageClick(item.image!, item.caption || item.organization)}
                        >
                          <Image
                            src={item.image}
                            alt={item.imageAlt || item.organization}
                            fill
                            sizes="(max-width: 1024px) 100vw, 550px"
                            className="object-cover object-center filter contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                          />
                          
                          {/* Hover expansion overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-black/70 border border-white/20 text-white text-xs font-mono px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                              <Maximize2 className="w-3.5 h-3.5" />
                              View High Resolution
                            </span>
                          </div>
                        </div>

                        {/* Documentary Caption */}
                        {item.caption && (
                          <div className="p-3 bg-[#131720] border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <span className="truncate mr-2">{item.caption}</span>
                            <span className="text-mineral font-sans shrink-0 text-[10px]">
                              VERIFIED ARCHIVE
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
