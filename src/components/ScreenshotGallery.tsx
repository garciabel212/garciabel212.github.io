import { Monitor } from 'lucide-react';
import { Reveal } from '@/components/motion';

interface Screenshot {
  src?: string;
  alt: string;
  caption?: string;
  todo?: boolean;
}

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
  columns?: 1 | 2;
}

export default function ScreenshotGallery({ screenshots, columns = 1 }: ScreenshotGalleryProps) {
  return (
    <div className={`grid gap-6 ${columns === 2 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
      {screenshots.map((shot, i) => (
        <Reveal
          key={i}
          delay={i * 0.08}
          className="group"
        >
          {/* Browser chrome frame */}
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-card bg-[#1C1C1E]">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#2C2C2E] border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
              </div>
              <div className="flex-1 mx-3">
                <div className="w-full max-w-xs mx-auto h-5 rounded bg-white/5 flex items-center px-3">
                  <span className="text-xs text-slate-600 truncate">{shot.alt}</span>
                </div>
              </div>
            </div>

            {/* Screenshot area */}
            {shot.src && !shot.todo ? (
              <img
                src={shot.src}
                alt={shot.alt}
                className="w-full object-cover"
                loading="lazy"
              />
            ) : (
              /* Placeholder */
              <div className="relative w-full bg-gradient-to-br from-surface-elevated to-navy-800 flex flex-col items-center justify-center min-h-52 gap-4 p-8">
                <div className="w-16 h-16 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                  <Monitor size={28} className="text-accent-blue/60" />
                </div>
                <div className="text-center">
                  <p className="text-slate-400 font-medium text-sm">{shot.alt}</p>
                  <p className="text-slate-600 text-xs mt-1">
                    Interface View / Workflow Diagram
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Caption */}
          {shot.caption && (
            <p className="mt-2 text-xs text-slate-500 text-center">{shot.caption}</p>
          )}
        </Reveal>
      ))}
    </div>
  );
}
