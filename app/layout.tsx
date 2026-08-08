import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Syno Pharma | Ethical, Evidence-Based Healthcare Solutions",
  description:
    "Syno Pharma Laboratories Pvt. Ltd. — trusted pharmaceutical partner in gastroenterology, hepatology and nutrition. Quality, ethics and patient care first.",
  authors: [{ name: "Syno Pharma Laboratories Private Limited" }],
  openGraph: {
    title: "Syno Pharma | Ethical, Evidence-Based Healthcare Solutions",
    description:
      "Syno Pharma Laboratories Pvt. Ltd. — trusted pharmaceutical partner in gastroenterology, hepatology and nutrition. Quality, ethics and patient care first.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
