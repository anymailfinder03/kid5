import { type CSSProperties } from 'react';
import { Sparkles, MapPin, Phone, Navigation } from 'lucide-react';

const cardShape: CSSProperties = {
  borderRadius: '32px 48px 28px 40px / 40px 28px 44px 32px',
};

const mapShape: CSSProperties = {
  borderRadius: '48px 32px 44px 28px / 36px 48px 30px 42px',
};

const DIRECTIONS_URL = 'https://maps.app.goo.gl/TxTkZXakFPhpyW2D8';

export default function Contact() {
  return (
    <section
      id="lien-he"
      className="relative overflow-hidden bg-cream-100 py-20 lg:py-28"
    >
      {/* Soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-16 h-[300px] w-[300px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-sky-200/25 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-20 h-[280px] w-[280px] rounded-[46%_54%_58%_42%_/_54%_46%_54%_46%] bg-blush-200/25 blur-2xl"
      />

      <div className="container-page relative">
        {/* Section header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-200/70 px-4 py-1.5 font-body text-sm font-semibold text-sky-700">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              Ghé thăm ILE
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Đến với{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                ILE Phước Vĩnh An
                <svg
                  aria-hidden
                  viewBox="0 0 220 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-blush-400"
                >
                  <path
                    d="M2 8 C 60 2, 160 2, 218 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>
          <p className="max-w-sm font-body text-base leading-relaxed text-ink-600 lg:text-right">
            Dễ dàng tìm đường đến trung tâm — đội ngũ ILE luôn sẵn sàng chào đón
            phụ huynh và các con.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left: contact info card */}
          <div className="lg:col-span-5">
            <div
              className="relative flex h-full w-full min-w-0 max-w-[520px] flex-col overflow-hidden bg-cream-50 p-10 shadow-card ring-1 ring-ink-300/20 md:p-12 lg:min-w-[360px] lg:p-14"
              style={cardShape}
            >
              {/* Subtle dot pattern accent */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-sky-200/30 blur-xl"
              />

              <div className="relative">
                <h3 className="font-heading text-xl font-extrabold leading-tight text-ink-900 lg:text-2xl">
                  Trung tâm Ngoại Ngữ ILE Phước Vĩnh An
                </h3>

                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-sky-200/70 text-sky-700">
                      <MapPin className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                    <p className="font-body text-base leading-relaxed text-ink-700">
                      121/4 Trần Văn Chẩm, Ấp 3, Xã Phước Vĩnh An, Huyện Củ Chi,
                      TP.HCM
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-blush-200/70 text-blush-600">
                      <Phone className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                    <a
                      href="tel:0123456789"
                      className="font-body text-lg font-bold leading-relaxed text-ink-900 transition-colors duration-200 hover:text-sky-700"
                    >
                      0123 456 789
                    </a>
                  </li>
                </ul>

                <div className="mt-10">
                  <a
                    href={DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost group w-full sm:w-auto"
                  >
                    <Navigation
                      className="h-5 w-5 transition-transform duration-300 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2.25}
                    />
                    Chỉ đường
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: embedded map */}
          <div className="lg:col-span-7">
            <div
              className="h-[400px] overflow-hidden bg-cream-50 p-3 shadow-card ring-1 ring-ink-300/20 lg:h-full lg:min-h-[480px]"
              style={mapShape}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5054.163660543381!2d106.5173822!3d10.974742699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b2ca74c651c59%3A0x12b6063f8fa67606!2zMTIxIFRy4bqnbiBWxINuIENo4bqpbSwgQ-G7pyBDaGksIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1788767112762!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '28px 20px 24px 16px / 22px 28px 16px 24px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Bản đồ — Trung tâm Ngoại Ngữ ILE Phước Vĩnh An"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Soft wave divider */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="mt-16 block h-12 w-full text-cream-100 sm:h-16"
      >
        <path
          d="M0 40 C 240 80, 480 0, 720 30 C 960 60, 1200 20, 1440 45 L 1440 80 L 0 80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
