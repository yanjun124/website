import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://yanjun124.github.io/website";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "晏君 · 雕塑作品集",
  description: "河北美术学院雕塑系学生晏君的个人作品与简历网站。",
  openGraph: {
    title: "晏君 · 雕塑作品集",
    description: "以形体触摸空间——雕塑作品与个人简历。",
    url: siteUrl,
    images: [{ url: `${siteUrl}/og.png`, width: 1747, height: 909, alt: "晏君雕塑作品集" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "晏君 · 雕塑作品集",
    description: "以形体触摸空间——雕塑作品与个人简历。",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
