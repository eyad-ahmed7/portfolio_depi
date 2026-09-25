import Image from "next/image";
import { Compass, Camera, Mountain, Sun, Wind, MapPin } from "lucide-react";

export default function OutdoorInterlude() {
  return (
    <section className="py-24 bg-[#08090d] border-t border-b border-white/[0.06] relative overflow-hidden">
      {/* Subtle organic gradient backdrop */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-teal-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Visual Pause Headline */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-mineral mb-3">
            <Mountain className="w-3.5 h-3.5 text-mineral" />
            <span>Visual Interlude · Beyond the Screen</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Some problems are solved at a keyboard. <br />
            <span className="font-serif italic font-normal text-slate-300">
              Others untangle on a mountain ridge.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-light">
            I travel, camp in the desert, and take photos because engineering is
            better when grounded in real experience. Stepping away from the IDE
            creates clarity that hours of staring at a cursor cannot replicate.
          </p>
        </div>

        {/* Editorial Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Panoramic Image Frame */}
          <div className="lg:col-span-8">
            <div className="relative group rounded-3xl overflow-hidden bg-slate-900 border border-white/[0.12] shadow-2xl">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/assets/personal_photo.jpeg"
                  alt="Scenic Sinai mountain and turquoise fjord landscape in Egypt"
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover object-[center_35%] filter contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Bottom Overlay Story */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-mineral-light mb-1">
                      <MapPin className="w-3.5 h-3.5 text-mineral" />
                      <span>Sinai Peninsula · Gulf of Aqaba Coast</span>
                    </div>
                    <p className="text-sm font-serif italic text-white max-w-md">
                      &ldquo;Where steep granite meets crystalline blue water.&rdquo;
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-3 text-[11px] font-mono text-slate-400 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
                    <Camera className="w-3.5 h-3.5 text-slate-400" />
                    <span>FIELD DISPATCH · 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Editorial Notes */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            <div className="bg-surface-100 border border-white/[0.08] p-6 rounded-2xl">
              <div className="flex items-center gap-3 text-white mb-2">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-mineral">
                  <Wind className="w-4 h-4" />
                </div>
                <h4 className="text-base font-semibold">Camping &amp; Trekking</h4>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Navigating rugged trails across Sinai and Egyptian oases. Living
                out of a backpack reinforces simplicity, resourcefulness, and
                staying calm when variables shift unexpectedly.
              </p>
            </div>

            <div className="bg-surface-100 border border-white/[0.08] p-6 rounded-2xl">
              <div className="flex items-center gap-3 text-white mb-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300">
                  <Camera className="w-4 h-4" />
                </div>
                <h4 className="text-base font-semibold">Framing &amp; Photography</h4>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Observing light, color balance, and spatial geometry in natural
                settings directly sharpens how I evaluate visual hierarchy and
                interface aesthetics.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-dashed border-white/[0.1] text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>EXPLORATION MINDSET</span>
              <span className="text-slate-300">ENDLESS HORIZON</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
