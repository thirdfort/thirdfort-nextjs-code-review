"use client";
import ThemeRegistry from "./ThemeRegistry";
import AppLayout from "./Layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeRegistry>
      <AppLayout>{children}</AppLayout>
    </ThemeRegistry>
  );
}
