import type { Metadata } from 'next';

import './globals.css';

export const metadata = {
  title: 'My Homepage',
  description: 'A beautifully designed homepage using Next.js App Router.',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fdf0df]">{children}</body>
    </html>
  );
}
