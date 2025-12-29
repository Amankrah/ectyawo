import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

// Replace the Inter font with Playfair Display and Source Sans Pro
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ectsyawo.com'),
  title: {
    default: "Etornam C. Tsyawo | Food Systems Expert & Speaker",
    template: "%s | Etornam C. Tsyawo"
  },
  description: "Food Systems Research Engineer specializing in consumer food systems, nutrient optimization, and sustainable food practices. Expert speaker on food systems transformation, evidence-based nutrition, and consumer food empowerment.",
  keywords: [
    "food systems expert",
    "food science researcher",
    "nutrition speaker",
    "sustainable food systems",
    "food systems transformation",
    "consumer food empowerment",
    "evidence-based nutrition",
    "food safety expert",
    "agricultural innovation",
    "food security consultant",
    "keynote speaker food systems",
    "food systems research",
    "environmental nutrition",
    "food processing optimization",
    "personalized nutrition"
  ],
  authors: [{ name: "Etornam C. Tsyawo" }],
  creator: "Etornam C. Tsyawo",
  publisher: "Etornam C. Tsyawo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ectsyawo.com",
    siteName: "Etornam C. Tsyawo",
    title: "Etornam C. Tsyawo | Food Systems Expert & Speaker",
    description: "Food Systems Research Engineer specializing in consumer food systems, nutrient optimization, and sustainable food practices. Expert speaker on food systems transformation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Etornam C. Tsyawo - Food Systems Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etornam C. Tsyawo | Food Systems Expert & Speaker",
    description: "Food Systems Research Engineer specializing in consumer food systems, nutrient optimization, and sustainable food practices.",
    images: ["/og-image.jpg"],
    creator: "@etornamtsyawo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "7IzGUML1cOpcZGOm-jIbprqtGUV2mKfEjpgyYcLs7WU",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Etornam C. Tsyawo",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8281146123471277"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
