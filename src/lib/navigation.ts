export interface NavChild {
  label: string;
  to: string;
}

export interface NavItem {
  label: string;
  to: string;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  {
    label: 'GIỚI THIỆU',
    to: '/gioi-thieu',
    children: [
      { label: 'Tầm nhìn', to: '/gioi-thieu#tam-nhin' },
      { label: 'Sứ mệnh', to: '/gioi-thieu#su-menh' },
    ],
  },
  {
    label: 'CHƯƠNG TRÌNH HỌC',
    to: '/chuong-trinh-hoc',
    children: [
      { label: 'Tiếng Anh Mầm non (3-5 tuổi)', to: '/chuong-trinh-hoc/tieng-anh-mam-non-3-5-tuoi' },
      { label: 'Tiếng Anh Thiếu nhi (6-10 tuổi)', to: '/chuong-trinh-hoc/tieng-anh-tieu-hoc-6-10-tuoi' },
      { label: 'Tiếng Anh Thiếu niên (11-15 tuổi)', to: '/chuong-trinh-hoc/tieng-anh-thieu-nien-11-15-tuoi' },
    ],
  },
  { label: 'ĐỘI NGŨ', to: '/doi-ngu' },
  { label: 'KẾT QUẢ', to: '/ket-qua' },
  { label: 'HOẠT ĐỘNG', to: '/hoat-dong' },
  { label: 'LIÊN HỆ', to: '/lien-he' },
];

export const trialLink = '/dang-ky-hoc-thu';
