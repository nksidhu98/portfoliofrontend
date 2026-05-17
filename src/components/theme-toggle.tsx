"use client";

import { SunMoon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.classList.contains("dark") ? "light" : "dark";

    root.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <Button
      aria-label="Toggle color theme"
      title="Toggle color theme"
      variant="secondary"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 border-border/80 bg-background/80 shadow-none"
    >
      <SunMoon className="h-4 w-4" />
    </Button>
  );
}
