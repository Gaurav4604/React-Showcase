import "./globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
import { Container } from "@mui/material";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "Newsletter Sign-up",
  applicationName: "Newsletter Sign-up App",
  authors: [
    {
      name: "Gaurav Singh",
      url: "https://iamgaurav.dev",
    },
  ],
  colorScheme: "normal",
  creator: "Gaurav Singh",
  keywords: ["newsletter-sign-up", "frontendmentor", "nextjs"],
  description:
    "A newsletter application developed using nextjs, based on design by frontendmentor challenge",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
