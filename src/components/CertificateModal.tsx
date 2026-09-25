"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Download, ExternalLink, Award } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  pdfDownloadSrc?: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  imageSrc,
  title,
  pdfDownloadSrc,
}: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#12151c] border border-white/[0.15] rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between bg-[#161a23]">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-mineral" />
            <h3 id="certificate-modal-title" className="text-sm font-semibold text-white truncate max-w-md">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {pdfDownloadSrc && (
              <a
                href={pdfDownloadSrc}
                download
                className="text-xs font-mono text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-mineral" />
                <span>Download PDF</span>
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close certificate modal"
              className="text-slate-400 hover:text-white p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Container */}
        <div className="relative max-h-[75vh] min-h-[300px] overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#0d0f14]">
          <div className="relative w-full max-w-3xl aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.1] shadow-2xl bg-black">
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 bg-[#161a23] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
          <span>OFFICIAL INSTITUTIONAL RECORD</span>
          <span className="text-slate-300">AUTHENTICATED CREDENTIAL</span>
        </div>
      </div>
    </div>
  );
}
