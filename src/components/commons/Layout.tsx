import { ReactNode } from "react";
import Header from "./Header";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "500",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={jetBrainsMono.className}>
      <Header />
      {children}
    </div>
  );
}
