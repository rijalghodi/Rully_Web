import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';

import { theme } from '../../mantine';

const font = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

export const metadata: Metadata = {
  title: {
    default: 'Rully - Koreksi Lembar Jawaban dengan AI',
    template: '%s | Rully',
  },
  description:
    'Rully adalah solusi canggih untuk penilaian lembar jawaban pilihan ganda yang didukung oleh kecerdasan buatan. Dirancang untuk efisiensi dan akurasi, Rully mempermudah proses penilaian ujian dalam berbagai skala dan format.',
  openGraph: {
    title: 'Rully - Koreksi Lembar Jawaban dengan AI',
    description:
      'Rully adalah solusi canggih untuk penilaian lembar jawaban pilihan ganda yang didukung oleh kecerdasan buatan. Dirancang untuk efisiensi dan akurasi, Rully mempermudah proses penilaian ujian dalam berbagai skala dan format.',
    url: process.env.NEXT_PUBLIC_DEPLOY_LINK,
    siteName: 'Rully - Koreksi Lembar Jawaban dengan AI',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DEPLOY_LINK}/thumbnail.png`,
        alt: 'Rully - Koreksi Lembar Jawaban dengan AI',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID ?? ''} />
      <body className={font.className}>
        <MantineProvider
          theme={{ ...theme, fontFamily: font.style.fontFamily }}
        >
          <Notifications position="top-center" />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
