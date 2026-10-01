import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { activeThemeName, activeThemeStyle } from "@/theme";

import "./globals.css";

const title = "Dariel Avila | Backend Engineer, APIs, DevOps & AWS";
const description =
  "Dariel Avila is a backend-focused software engineer and Advanced App Engineering Sr. Analyst building reliable APIs, AWS cloud systems, and deployment workflows.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Dariel Avila",
  },
  description,
  applicationName: "Dariel Avila Portfolio",
  keywords: [
    "Dariel Avila",
    "Backend Engineer",
    "Software Engineer",
    "API Developer",
    "AWS Engineer",
    "DevOps Engineer",
    "Software Engineer Philippines",
    "Node.js",
    "TypeScript",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "AWS EC2",
    "Elastic Beanstalk",
    "AWS CodePipeline",
    "AWS CloudFormation",
  ],
  authors: [{ name: "Dariel Avila", url: "https://www.linkedin.com/in/darielavila" }],
  creator: "Dariel Avila",
  publisher: "Dariel Avila",
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    title,
    description,
    siteName: "Dariel Avila Portfolio",
    locale: "en_PH",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme={activeThemeName}
      style={activeThemeStyle}
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
