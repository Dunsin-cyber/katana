import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
// import { Toaster } from "react-hot-toast";
import WalletProvider from "@/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Katana",
  description: "first fractionalized assets purchaser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <Provider>
        <WalletProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {/* <Toaster /> */}
            {children}
          </body>
        </WalletProvider>
      </Provider>
    </html>
  );
}
