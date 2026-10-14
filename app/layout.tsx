import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Anand Rathi Wealth IFSC | GIFT City',
  description: "Anand Rathi Wealth IFSC Private Limited - GIFT City investment platform website built with Next.js and Tailwind CSS.",
  openGraph: {
    title: 'Anand Rathi Wealth IFSC | GIFT City',
    description: "Anand Rathi Wealth IFSC Private Limited - GIFT City investment platform website built with Next.js and Tailwind CSS.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anand Rathi Wealth IFSC | GIFT City',
    description: "Anand Rathi Wealth IFSC Private Limited - GIFT City investment platform website built with Next.js and Tailwind CSS.",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
