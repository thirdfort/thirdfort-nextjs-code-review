"use client";
import * as React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";

const theme = extendTheme({});

export default function ThemeRegistry({ children }: React.PropsWithChildren) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "joy" }}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
