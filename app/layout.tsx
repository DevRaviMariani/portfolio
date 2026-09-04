import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const title = "Ravi Mariani | Desenvolvedor de Software";
const description = "Portfólio de Ravi Mariani, desenvolvedor de software com atuação em aplicações web, sistemas e exploração de soluções com Inteligência Artificial.";
export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title,
  description,
  alternates: { canonical: "./" },
  applicationName: "Portfólio Ravi Mariani",
  authors: [{ name: "Ravi Mariani", url: "https://github.com/DevRaviMariani" }],
  keywords: ["Ravi Mariani", "desenvolvedor de software", "desenvolvimento web", "PHP", "WordPress", "Salvador", "inteligência artificial"],
  openGraph: { type: "website", locale: "pt_BR", title, description, siteName: "Ravi Mariani" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
