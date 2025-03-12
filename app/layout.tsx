import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Skilliry",
  description: "Get Perfect solution for your problem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
