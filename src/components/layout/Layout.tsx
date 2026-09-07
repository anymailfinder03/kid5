import { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useScrollToHash } from '@/hooks/useScrollToHash';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useScrollToHash();

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
