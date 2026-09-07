import PageBanner from '@/components/shared/PageBanner';

interface ProgramDetailPageProps {
  programKey: string;
}

const programMeta: Record<string, { badge: string; title: string; subtitle: string }> = {
  'mam-non': {
    badge: '3–5 tuổi',
    title: 'Tiếng Anh Mầm non',
    subtitle: 'Học qua vui chơi — khơi dậy niềm yêu thích tiếng Anh từ sớm.',
  },
  'thieu-nhi': {
    badge: '6–10 tuổi',
    title: 'Tiếng Anh Thiếu nhi',
    subtitle: 'Giao tiếp vui vẻ — xây nền tảng ngôn ngữ vững chắc.',
  },
  'thieu-nien': {
    badge: '11–15 tuổi',
    title: 'Tiếng Anh Thiếu niên',
    subtitle: 'Tăng tốc tiếng Anh — chuẩn bị hành trang cho những bước nhảy vọt.',
  },
};

export default function ProgramDetailPage({ programKey }: ProgramDetailPageProps) {
  const meta = programMeta[programKey] ?? {
    badge: 'Chương trình',
    title: 'Chương trình học',
    subtitle: '',
  };

  return (
    <>
      <PageBanner badge={meta.badge} title={meta.title} subtitle={meta.subtitle} />
      <div className="container-page py-20">
        <p className="font-body text-ink-600">
          Nội dung chi tiết chương trình sẽ được xây dựng ở giai đoạn tiếp theo.
        </p>
      </div>
    </>
  );
}
