import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/components/query-provider";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Sprintify",
  description: "Sprintify is an agile project management tool designed to help teams plan, track, and collaborate on tasks efficiently using sprints and kanban boards.",
  icons: {
    icon: [
      {
          url: "/logo_2.svg",
          href: "/logo_2.svg"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "antialiased min-h-screen")}
      >
      <QueryProvider>
        {children}
      </QueryProvider>
      </body>
    </html>
  );
}
