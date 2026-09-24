import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TrayProvider } from "@/components/tray/TrayProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "KulaKwaMacho | Eat with your eyes",
  description: "Kenyan food, questionable decisions, and absolutely no delivery fee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        <TrayProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </TrayProvider>
      </body>
    </html>
  );
}
