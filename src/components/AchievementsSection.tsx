"use client";

import { useState } from "react";
import Image from "next/image";
import { Trophy, Award, BookOpen, Compass, Download, Maximize2, CheckCircle2 } from "lucide-react";
import { ACHIEVEMENTS, PERSONAL_INFO } from "@/data/portfolioData";
import CertificateModal from "./CertificateModal";

export default function AchievementsSection() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
    pdfDownloadSrc?: string;
  }>({
    isOpen: false,
    imageSrc: "",
    title: "",
  });

  const deansList = ACHIEVEMENTS.find((a) => a.id === "deans-list");
  const hackathon = ACHIEVEMENTS.find((a) => a.id === "hackathon-1st");
  const mckinsey = ACHIEVEMENTS.find((a) => a.id === "mckinsey-forward");

  const openCertificate = (
    imageSrc: string,
    title: string,
    pdfDownloadSrc?: string
  ) => {
    setModalState({
      isOpen: true,
      imageSrc,
      title,
      pdfDownloadSrc,
    });
  };

  return (
    <section id="milestones" className="py-24 bg-[#0c0e14] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-mineral mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-mineral" />
              <span>Section 05 · Milestones &amp; Proof</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Tangible Milestones <br />
              <span className="font-serif italic font-normal text-slate-300">
                and Academic Honors.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md font-light leading-relaxed">
            Every honor listed is verified by formal documentation and verifiable
            competition standings. No synthetic accolades.
          </p>
        </div>

        {/* Feature Spotlight: Dean's List Certificate of Academic Excellence */}
        {deansList && (
          <div className="mb-14 bg-surface-100 border border-white/[0.1] rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Academic Story */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                    <span className="text-amber-400 font-semibold">{deansList.tag}</span>
                    <span>·</span>
                    <span>FACULTY OF ENGINEERING</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    {deansList.title}
                  </h3>
                  <p className="font-serif italic text-lg sm:text-xl text-amber-200/90 mt-1">
                    {deansList.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed font-light">
                    {deansList.summary}
                  </p>

                  {/* Academic Metrics Pill */}
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/[0.08]">
                    <div className="bg-black/30 p-3 rounded-xl border border-white/[0.05]">
                      <p className="text-[11px] font-mono uppercase text-slate-400">
                        Fall 2025 Semester
                      </p>
                      <p className="text-2xl font-bold text-amber-300 font-mono mt-1">
                        3.93 <span className="text-xs text-slate-400 font-sans">GPA</span>
                      </p>
                      <p className="text-[10px] text-slate-400">Dean&apos;s Honor Roll</p>
                    </div>

                    <div className="bg-black/30 p-3 rounded-xl border border-white/[0.05]">
                      <p className="text-[11px] font-mono uppercase text-slate-400">
                        Cumulative Record
                      </p>
                      <p className="text-2xl font-bold text-mineral font-mono mt-1">
                        3.85 <span className="text-xs text-slate-400 font-sans">GPA</span>
                      </p>
                      <p className="text-[10px] text-slate-400">Scale of 4.0</p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="mt-8 pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() =>
                      openCertificate(
                        deansList.assetPath || "/assets/Dean's_list_fall25-achievments.png",
                        deansList.title,
                        "/assets/Dean's_list_fall25-achievments.pdf"
                      )
                    }
                    className="inline-flex items-center gap-2 bg-mineral text-black text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-mineral-light transition-all"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Inspect Certificate</span>
                  </button>

                  <a
                    href="/assets/Dean's_list_fall25-achievments.pdf"
                    download
                    className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.1] transition-all"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-400" />
                    <span>Download Original PDF</span>
                  </a>
                </div>
              </div>

              {/* Right Column: High-Res Certificate Interactive Preview */}
              <div className="lg:col-span-6">
                <div
                  onClick={() =>
                    openCertificate(
                      deansList.assetPath || "/assets/Dean's_list_fall25-achievments.png",
                      deansList.title,
                      "/assets/Dean's_list_fall25-achievments.pdf"
                    )
                  }
                  className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.15] shadow-2xl p-2 transition-transform duration-300 hover:scale-[1.01]"
                >
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black/60">
                    <Image
                      src={deansList.assetPath || "/assets/Dean's_list_fall25-achievments.png"}
                      alt="Dean's List Certificate of Academic Excellence - Eyad Ahmed Elbohy"
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-contain filter contrast-[1.02]"
                    />
                    
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-black/75 border border-white/20 text-white text-xs font-mono px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                        <Maximize2 className="w-3.5 h-3.5 text-mineral" />
                        Click to enlarge certificate
                      </span>
                    </div>
                  </div>

                  <div className="px-3 pt-2.5 pb-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Dean: Prof. Ashraf Mahran</span>
                    <span className="text-amber-400">15 February 2026</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Secondary Milestone Cards: Hackathon 1st & McKinsey Forward & GDG Recognition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Hackathon Card */}
          {hackathon && (
            <div className="bg-surface-100 border border-white/[0.08] p-6 sm:p-7 rounded-3xl shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase text-amber-400 font-semibold">
                    {hackathon.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{hackathon.date}</span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300 mb-4">
                  <Trophy className="w-5 h-5" />
                </div>

                <h4 className="text-lg font-bold text-white">
                  {hackathon.title}
                </h4>
                <p className="text-xs font-mono text-slate-400 mt-1 mb-3">
                  {hackathon.organization}
                </p>

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {hackathon.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.05] text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>PROJECT: KEHEILAN</span>
                <span className="text-amber-300">TOP HONORS</span>
              </div>
            </div>
          )}

          {/* McKinsey Forward Card */}
          {mckinsey && (
            <div className="bg-surface-100 border border-white/[0.08] p-6 sm:p-7 rounded-3xl shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase text-teal-400 font-semibold">
                    {mckinsey.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{mckinsey.date}</span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 mb-4">
                  <Award className="w-5 h-5" />
                </div>

                <h4 className="text-lg font-bold text-white">
                  {mckinsey.title}
                </h4>
                <p className="text-xs font-mono text-slate-400 mt-1 mb-3">
                  {mckinsey.organization}
                </p>

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {mckinsey.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.05] text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>DIGITAL MINDSET</span>
                <span className="text-mineral-light">SELECTED PARTICIPANT</span>
              </div>
            </div>
          )}

          {/* GDG Certificate Quick Inspection Card */}
          <div className="bg-surface-100 border border-white/[0.08] p-6 sm:p-7 rounded-3xl shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold">
                  RECOGNITION
                </span>
                <span className="text-xs font-mono text-slate-400">May 2026</span>
              </div>

              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 mb-4">
                <BookOpen className="w-5 h-5" />
              </div>

              <h4 className="text-lg font-bold text-white">
                GDG EUI 2025–2026 Term Award
              </h4>
              <p className="text-xs font-mono text-slate-400 mt-1 mb-3">
                Google Developer Groups on Campus EUI
              </p>

              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Awarded official certificate acknowledging valuable contributions
                to developer community events, logistics, and student hackathons.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between">
              <button
                onClick={() =>
                  openCertificate(
                    "/assets/GDG_25-26-experrience.jpg",
                    "Certificate of Appreciation — GDG EUI 2025-2026"
                  )
                }
                className="text-[11px] font-mono text-mineral hover:underline flex items-center gap-1"
              >
                <span>View Certificate</span>
                <Maximize2 className="w-3 h-3" />
              </button>
              <span className="text-[10px] font-mono text-slate-400">VERIFIED</span>
            </div>
          </div>

        </div>

      </div>

      {/* Global Certificate Modal */}
      <CertificateModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        imageSrc={modalState.imageSrc}
        title={modalState.title}
        pdfDownloadSrc={modalState.pdfDownloadSrc}
      />
    </section>
  );
}
