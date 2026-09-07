import { type ReactNode } from 'react';
import { Sparkles } from 'lucide-react';

interface PageBannerProps {
  title: ReactNode;
  badge?: string;
  subtitle?: string;
}

export default function PageBanner({
  title,
  badge,
  subtitle,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-sky-100">
      {/* Soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-16 h-[280px] w-[280px] rounded-[63%_37%_54%_46%_/_55%_48%_52%_45%] bg-sky-200/50 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/3 h-[240px] w-[240px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-blush-200/30 blur-2xl"
      />

      <div className="container-page relative py-16 lg:py-20">
        {badge && (
          <span className="inline-flex items-center gap-2 rounded-full bg-blush-200/70 px-4 py-1.5 font-body text-sm font-semibold text-blush-600">
            <Sparkles className="h-4 w-4" strokeWidth={2.25} />
            {badge}
          </span>
        )}

        <h1 className="mt-5 font-heading text-3xl font-extrabold leading-[1.12] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-600 lg:text-lg">
            {subtitle}
          </p>
        )}
      </div>

      {/* Soft wave divider */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-10 w-full text-cream-100 sm:h-14"
      >
        <path
          d="M0 40 C 240 80, 480 0, 720 30 C 960 60, 1200 20, 1440 45 L 1440 80 L 0 80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
