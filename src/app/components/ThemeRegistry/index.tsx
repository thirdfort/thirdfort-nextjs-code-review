"use client";
import * as React from "react";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import "./theme-variables.css";

export default function ThemeRegistry({ children }: React.PropsWithChildren) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "joy" }}>
      {children}
    </NextAppDirEmotionCacheProvider>
  );
}
