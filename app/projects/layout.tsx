import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Side Projects",
  description: "Side projects and experiments built by Pablo García.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
