import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'StreamShare - Video Streaming & Photo Sharing Platform',
  description: 'The ultimate platform for video streaming and photo sharing. Connect with creators, discover amazing content, and share your creativity with the world.',
  keywords: ['video streaming', 'photo sharing', 'content creation', 'social media'],
  authors: [{ name: 'StreamShare Team' }],
  openGraph: {
    title: 'StreamShare - Video Streaming & Photo Sharing Platform',
    description: 'Share your moments, stream your stories',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
