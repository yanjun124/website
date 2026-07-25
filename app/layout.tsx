import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") || incoming.get("host") || "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  return {
    metadataBase,
    title: "晏君 · 雕塑作品集",
    description: "河北美术学院雕塑系学生晏君的个人作品与简历网站。",
    openGraph: {
      title: "晏君 · 雕塑作品集",
      description: "以形体触摸空间——雕塑作品与个人简历。",
      images: [{ url: "/og.png", width: 1747, height: 909, alt: "晏君雕塑作品集" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "晏君 · 雕塑作品集",
      description: "以形体触摸空间——雕塑作品与个人简历。",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
