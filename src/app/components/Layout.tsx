"use client";
import { css } from "@emotion/react";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css({
        display: "flex",
        width: "100vw",
        height: "100vh",
        padding: "1.5rem",
        backgroundColor: "var(--background-color)",
      })}
    >
      {children}
    </div>
  );
}
