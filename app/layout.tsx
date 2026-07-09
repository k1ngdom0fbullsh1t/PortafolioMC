import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Marcelo Corro — Ingeniero en Informática",
    template: "%s | Marcelo Corro",
  },
  description:
    "Ingeniero en Informática especializado en desarrollo Full Stack. Construyo productos digitales escalables con tecnologías modernas.",
  keywords: [
    "Ingeniero en Informática",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Marcelo Corro" }],
  creator: "Marcelo Corro",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://tuportafolio.vercel.app",
    title: "Marcelo Corro — Ingeniero en Informática",
    description:
      "Ingeniero en Informática especializado en desarrollo Full Stack. Construyo productos digitales escalables con tecnologías modernas.",
    siteName: "Marcelo Corro Portafolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcelo Corro — Ingeniero en Informática",
    description:
      "Ingeniero en Informática especializado en desarrollo Full Stack.",
    creator: "@tutwitter",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
