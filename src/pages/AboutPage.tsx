import PageBanner from '@/components/shared/PageBanner';

export default function AboutPage() {
  return (
    <>
      <PageBanner
        badge="Về chúng tôi"
        title="Giới thiệu ILE"
        subtitle="Hành trình kiên định với sứ mệnh mang tiếng Anh đến gần hơn với trẻ em Việt Nam."
      />
      <div className="container-page py-20">
        <p className="font-body text-ink-600">
          Nội dung trang Giới thiệu sẽ được xây dựng ở giai đoạn tiếp theo.
        </p>
      </div>
    </>
  );
}
