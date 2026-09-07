import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { trialLink } from '@/lib/navigation';

interface Milestone {
  num: string;
  title: string;
  body: string;
  badgeClass: string;
  cardClass: string;
  shape: string;
  tilt: string;
  isFinal?: boolean;
}

const milestones: Milestone[] = [
  {
    num: '6',
    title: 'Khởi đầu',
    body: 'Con bắt đầu hành trình với nền tảng nghe – nói tự nhiên, làm quen với tiếng Anh qua trò chơi và câu chuyện, xây dựng sự tự tin đầu tiên.',
    badgeClass: 'bg-sky-300 text-ink-900',
    cardClass: 'bg-sky-100/70',
    shape: '58% 42% 48% 52% / 52% 58% 42% 48%',
    tilt: 'rotate-[-2deg]',
  },
  {
    num: '9–10',
    title: 'Bứt phá',
    body: 'Vốn từ vựng và ngữ pháp được mở rộng vững chắc, con giao tiếp tự nhiên hơn và bắt đầu tiếp cận tư duy phản biện bằng tiếng Anh.',
    badgeClass: 'bg-cream-300 text-ink-900',
    cardClass: 'bg-cream-50',
    shape: '42% 58% 52% 48% / 48% 42% 58% 52%',
    tilt: 'rotate-[1.5deg]',
  },
  {
    num: '12–13',
    title: 'Tăng tốc',
    body: 'Con rèn luyện các kỹ năng học thuật: viết luận, đọc hiểu chuyên sâu, thuyết trình — chuẩn bị nền tảng vững chắc cho các kỳ thi quốc tế.',
    badgeClass: 'bg-blush-200 text-ink-900',
    cardClass: 'bg-blush-100/60',
    shape: '52% 48% 58% 42% / 42% 52% 48% 58%',
    tilt: 'rotate-[-1.5deg]',
  },
  {
    num: '7 năm',
    title: 'Chinh phục',
    body: 'Con đạt IELTS 7.0+ sau 7 năm đồng hành — sẵn sàng cho các cơ hội học tập và môi trường quốc tế.',
    badgeClass: 'bg-blush-300 text-ink-900',
    cardClass: 'bg-blush-100/80',
    shape: '48% 52% 44% 56% / 56% 44% 56% 44%',
    tilt: 'rotate-[1deg]',
    isFinal: true,
  },
];

const CHARACTER =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166532/play-1.svg';

export default function LearningJourney() {
  return (
    <section className="relative overflow-hidden bg-cream-100 py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-[320px] w-[320px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-sky-200/30 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-10 h-[300px] w-[300px] rounded-[46%_54%_58%_42%_/_54%_46%_54%_46%] bg-blush-200/30 blur-2xl"
      />

      <div className="container-page relative">
        {/* Section header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blush-200/70 px-4 py-1.5 font-body text-sm font-semibold text-blush-600">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              Hành trình phát triển của con
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Lộ trình vàng{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                6–7–7
                <svg
                  aria-hidden
                  viewBox="0 0 160 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-blush-400"
                >
                  <path
                    d="M2 8 C 44 2, 116 2, 158 6"
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
            Từ 6 tuổi đến IELTS 7.0+ — một hành trình 7 năm, từng bước vững
            chắc.
          </p>
        </div>

        {/* ── Desktop: horizontal winding path ── */}
        <div className="relative mt-20 hidden lg:block">
          {/* Winding path line */}
          <svg
            aria-hidden
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M60 260 C 200 120, 360 120, 500 200 C 640 280, 760 280, 900 180 C 1020 100, 1100 120, 1160 80"
              fill="none"
              stroke="#8FCBDD"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="2 14"
            />
          </svg>

          <div className="relative grid grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <MilestoneStop
                key={m.title}
                milestone={m}
                index={i}
                above={i % 2 === 0}
              />
            ))}
          </div>

          {/* Small character walking along the path, between stops 2 and 3 */}
          <img
            src={CHARACTER}
            alt=""
            aria-hidden
            className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_6px_12px_rgba(31,42,55,0.12)]"
          />
        </div>

        {/* ── Mobile / tablet: vertical path ── */}
        <div className="relative mt-14 lg:hidden">
          {/* Vertical winding path line */}
          <svg
            aria-hidden
            viewBox="0 0 40 1600"
            preserveAspectRatio="none"
            className="absolute left-1/2 top-0 h-full w-10 -translate-x-1/2"
          >
            <path
              d="M20 40 C 36 200, 4 360, 20 520 C 36 680, 4 840, 20 1000 C 36 1160, 4 1320, 20 1480"
              fill="none"
              stroke="#8FCBDD"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="2 14"
            />
          </svg>

          <div className="relative flex flex-col gap-12">
            {milestones.map((m, i) => (
              <MilestoneStop
                key={m.title}
                milestone={m}
                index={i}
                above={false}
                mobile
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Link to={trialLink} className="btn-accent group">
            Bắt đầu hành trình của con
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
              strokeWidth={2.25}
            />
          </Link>
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

function MilestoneStop({
  milestone,
  index,
  above,
  mobile = false,
}: {
  milestone: Milestone;
  index: number;
  above: boolean;
  mobile?: boolean;
}) {
  return (
    <div
      className={[
        'relative flex flex-col items-center',
        mobile ? 'w-full' : above ? 'mt-0' : 'mt-24',
      ].join(' ')}
    >
      {/* Number badge — the visual anchor */}
      <div
        className={[
          'relative flex items-center justify-center shadow-card',
          milestone.isFinal ? 'h-24 w-28' : 'h-20 w-24',
          milestone.badgeClass,
          milestone.tilt,
        ].join(' ')}
        style={{
          borderRadius: '44% 56% 48% 52% / 58% 42% 58% 42%',
        }}
      >
        <span className="font-heading text-2xl font-extrabold tracking-tight lg:text-3xl">
          {milestone.num}
        </span>
        {milestone.isFinal && (
          <Star
            className="absolute -right-2 -top-2 h-6 w-6 fill-blush-400 text-blush-400"
            strokeWidth={1}
          />
        )}
      </div>

      {/* Small organic blob card with title + description */}
      <div
        className={[
          'mt-5 w-full p-5 shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card',
          milestone.cardClass,
          milestone.tilt,
        ].join(' ')}
        style={{ borderRadius: milestone.shape }}
      >
        <h3 className="font-heading text-lg font-extrabold leading-tight text-ink-900">
          {milestone.title}
        </h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-ink-600">
          {milestone.body}
        </p>
      </div>

      {/* Step index marker for accessibility order */}
      <span className="sr-only">Mốc {index + 1}</span>
    </div>
  );
}
