// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import { QueryProvider } from "@/components/QueryProvider";

export const metadata: Metadata = {
  title: "ScalePadi",
  description: "No 1 Padi for Scaling any Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased lg:w-[1440px] lg:max-w-[1440px] lg:mx-auto w-screen`}
      >
        <QueryProvider>
          <Toaster richColors />
          <div className="flex flex-col">
            <Navbar />
            {children}
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}