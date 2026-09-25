"use client";

import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, MapPin, Sparkles, Send, MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contacts.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleComposeMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.contacts.email}?subject=${encodeURIComponent(
      subject || "Hello from Eyad's Portfolio"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0c10] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-mineral mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-mineral" />
              <span>Section 06 · Dispatch &amp; Connect</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Let&apos;s Build Together. <br />
              <span className="font-serif italic font-normal text-slate-300">
                Direct, Honest &amp; Transparent.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md font-light leading-relaxed">
            Interested in student hackathons, open source, data engineering discussions,
            or collaborative student initiatives? Reach out directly.
          </p>
        </div>

        {/* 2-Column Contact Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct verified channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Email Card */}
            <div className="bg-surface-100 border border-white/[0.1] p-6 sm:p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 text-white mb-4">
                <div className="w-10 h-10 rounded-xl bg-mineral/15 border border-mineral/30 flex items-center justify-center text-mineral">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400">
                    Primary Email
                  </p>
                  <p className="text-base font-bold text-white font-mono break-all">
                    {PERSONAL_INFO.contacts.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-mineral text-black text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-mineral-light transition-all active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.contacts.email}`}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
                  title="Open mail client"
                >
                  Open App
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface-100 border border-white/[0.08] hover:border-mineral/40 p-6 rounded-3xl transition-all shadow-lg flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:text-mineral group-hover:scale-105 transition-all font-mono font-bold text-sm">
                  GH
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400">
                    Version Control &amp; Code
                  </p>
                  <p className="text-sm font-semibold text-white group-hover:text-mineral-light transition-colors">
                    github.com/eyad-ahmed7
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-mineral transition-colors" />
            </a>

            {/* Location & University Badge */}
            <div className="bg-surface-100 border border-white/[0.06] p-6 rounded-3xl text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-mono">
                <MapPin className="w-4 h-4 text-mineral" />
                <span>Cairo, Egypt · Egypt University of Informatics</span>
              </div>
              <p className="text-slate-400 font-light text-[11px] leading-relaxed">
                Currently taking engineering coursework on campus and available
                for collaborative academic &amp; community events.
              </p>
            </div>

          </div>

          {/* Right Column: Direct Mailto Dispatcher (Completely transparent: opens default email client) */}
          <div className="lg:col-span-7">
            <div className="bg-surface-100 border border-white/[0.1] p-6 sm:p-8 rounded-3xl shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-mineral" />
                  <span className="text-xs font-mono uppercase text-white tracking-wider">
                    Quick Dispatcher
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.08]">
                  OPENS IN YOUR EMAIL CLIENT
                </span>
              </div>

              <form onSubmit={handleComposeMailto} className="space-y-4">
                <div>
                  <label htmlFor="subject-input" className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    id="subject-input"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Hackathon collaboration, Project query, or Hello"
                    className="w-full bg-[#0a0c10] border border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:border-mineral focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message-input" className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Message Body
                  </label>
                  <textarea
                    id="message-input"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a message here. Clicking dispatch will format it directly into your email client addressed to eyadar2007@gmail.com..."
                    className="w-full bg-[#0a0c10] border border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:border-mineral focus:outline-none transition-colors resize-none font-light"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-mineral text-black text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-xl hover:bg-mineral-light transition-all active:scale-[0.98] shadow-lg shadow-mineral/15"
                  >
                    <Send className="w-4 h-4" />
                    <span>Format &amp; Send via Email Client</span>
                  </button>
                  <p className="text-[11px] font-mono text-slate-400 mt-2 text-center">
                    Note: Transparent client trigger. No black-box backend or fake mail delivery simulation.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
