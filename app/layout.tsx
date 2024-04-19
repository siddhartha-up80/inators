import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inators | Innovative Projects and Web Solutions",
  description:
    "Inators Fusion provides innovative projects and web solutions. We are constantly working on new and innovative projects. We are always ready to help you. Reach us at inatorsfusion@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="wuKkVFD1dhs31EjQNk81yBbw-temshhMPPc8JGAUC94"
        />
      </head>
      <body className={inter.className}>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
