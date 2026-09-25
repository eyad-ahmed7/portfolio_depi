import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0c10",
};

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Eyad El Bohy — Engineering Student & Curious Builder",
  description:
    "Personal editorial portfolio & engineering journal of Eyad El Bohy. Computer Engineering student at Egypt University of Informatics (EUI), exploring data systems, automation, and collaborative building.",
  keywords: [
    "Eyad El Bohy",
    "Computer Engineering",
    "Egypt University of Informatics",
    "EUI",
    "Cairo",
    "Data Engineering",
    "Python",
    "Automation",
  ],
  authors: [{ name: "Eyad El Bohy" }],
  creator: "Eyad El Bohy",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Eyad El Bohy — Engineering Student & Curious Builder",
    description:
      "Computer Engineering student at Egypt University of Informatics (EUI). Exploring data systems, Python, automation, and learning by building.",
    siteName: "Eyad El Bohy Portfolio",
    images: [
      {
        url: "/assets/personal_photo.jpeg",
        width: 1200,
        height: 1600,
        alt: "Eyad El Bohy overlooking the Sinai coastline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyad El Bohy — Engineering Student & Curious Builder",
    description:
      "Computer Engineering student at EUI exploring data systems, automation, and collaborative building.",
    images: ["/assets/personal_photo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>" />
      </head>
      <body className="min-h-screen bg-[#0a0c10] text-[#f1f5f9] antialiased selection:bg-mineral selection:text-[#042f2e]">
        {children}
      </body>
    </html>
  );
}
