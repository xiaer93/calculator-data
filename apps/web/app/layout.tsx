import type { Metadata } from 'next';
import '@orange-calculator/ui/styles.css';

export const metadata: Metadata = {
  title: 'Orange Calculator - AI-Enhanced Universal Calculator',
  description: '254+ calculators with AI assistance. BMI, mortgage, loan, and more.',
  keywords: ['calculator', 'BMI', 'mortgage', 'loan', 'AI'],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
