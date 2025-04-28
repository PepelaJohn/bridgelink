import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "BridgeLink Digital",
  description: "Gateway to the future of digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
