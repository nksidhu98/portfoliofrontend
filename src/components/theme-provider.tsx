"use client";

import * as React from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    document.documentElement.classList.toggle(
      "dark",
      storedTheme === "dark",
    );
    document.documentElement.classList.remove("light");
  }, []);

  return children;
}
