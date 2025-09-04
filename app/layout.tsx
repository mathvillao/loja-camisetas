import type { Metadata } from "next";
import "./globals.css";
import { Inter, Bebas_Neue, Rajdhani } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const rajdhani = Rajdhani({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-raj" });

export const metadata: Metadata = {
  title: "Matchday Premium",
  description: "E-commerce de camisetas de futebol — novas e retrô",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${bebas.variable} ${rajdhani.variable} font-sans`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-40 backdrop-blur bg-bg/70 border-b border-white/5">
            <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
              <div className="font-display text-2xl tracking-wide">MATCHDAY</div>
              <nav className="text-text/80 text-sm">
                lançamentos • retrô • clubes
              </nav>
            </div>
          </header>

          {/* Conteúdo */}
          <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-white/5 text-text/60 text-sm py-6 text-center">
            © {new Date().getFullYear()} Matchday
          </footer>
        </div>
      </body>
    </html>
  );
}

