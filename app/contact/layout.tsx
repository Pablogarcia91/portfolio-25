import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Pablo García — product designer.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
