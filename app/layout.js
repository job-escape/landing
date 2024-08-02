import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const calSans = localFont({
  src: "../fonts/CalSans-SemiBold.woff2",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JobEscape - Start freelancing",
  description: "Some description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          calSans.className,
          "text-foreground bg-background antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
