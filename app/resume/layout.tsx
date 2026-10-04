import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balvinder's Resume",
  description: "Dev Resume",
};

// Only the root layout (app/layout.tsx) may render <html>/<body>. A nested
// layout that renders them again produces invalid markup and hydration
// mismatches, so this one just sets metadata and passes children through.
export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
