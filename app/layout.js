import { LanguageProvider } from '@/lib/useTranslation';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://ascal.eu"),
  title: 'ASCA Luxembourg',
  description: 'Supporting vulnerable children',
  verification: {
    google: 'DnnyJTlJyFSVptkSPw_qgWD4hM8y8s_HXSv1hLioMwM',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
        
      </body>
    </html>
  );
}
