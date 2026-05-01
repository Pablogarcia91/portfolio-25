import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Full CV of Pablo García — experience, education, and languages.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
