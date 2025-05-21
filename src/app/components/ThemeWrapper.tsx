"use client";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/app/styles/GlobalStyle";
import theme from "@/app/styles/theme";
import { Toaster } from "react-hot-toast";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Toaster position="top-right" />
      {children}
    </ThemeProvider>
  );
}
