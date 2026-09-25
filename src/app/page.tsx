"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatementSection from "@/components/StatementSection";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import ProjectsSection from "@/components/ProjectsSection";
import OutdoorInterlude from "@/components/OutdoorInterlude";
import ExperienceSection from "@/components/ExperienceSection";
import FieldKitSection from "@/components/FieldKitSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CertificateModal from "@/components/CertificateModal";

export default function Home() {
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

  const handleOpenCertificate = (
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
    <main className="min-h-screen bg-[#0a0c10] text-slate-100 flex flex-col selection:bg-mineral selection:text-[#042f2e]">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Hero Section: Editorial portrait, manifesto & core identity */}
      <HeroSection />

      {/* Central Statement: "I like figuring things out" — 4 Pillars */}
      <StatementSection />

      {/* Featured Anchor Project: Keheilan (1st of 53 teams) & Architectural Flow */}
      <FeaturedProjectSection />

      {/* Authentic Projects: File Organizer, EDA Practice, C System, Python tools */}
      <ProjectsSection />

      {/* Visual Pause & Human Side: Photography, Sinai Mountains & Horizon */}
      <OutdoorInterlude />

      {/* Campus Involvement & Community: The Exchange, IEEE, GDG, TEDx */}
      <ExperienceSection onOpenCertificate={handleOpenCertificate} />

      {/* Technical Workbench: Languages, Data Tools, Coursework & Vectors */}
      <FieldKitSection />

      {/* Tangible Milestones: Dean's List Certificate & Competition Honors */}
      <AchievementsSection />

      {/* Direct Contact & Transparent Dispatch */}
      <ContactSection />

      {/* Footer Colophon */}
      <Footer />

      {/* Global High-Resolution Certificate Modal */}
      <CertificateModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        imageSrc={modalState.imageSrc}
        title={modalState.title}
        pdfDownloadSrc={modalState.pdfDownloadSrc}
      />
    </main>
  );
}
