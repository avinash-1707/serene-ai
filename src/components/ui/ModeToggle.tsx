"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (mounted) {
      console.log("🚀 resolvedTheme:", resolvedTheme);
      console.log(
        "🧠 document class:",
        document.documentElement.classList.value
      );
    }
  }, [resolvedTheme, mounted]);

  if (!mounted) {
    return (
      <div
        className="h-10 w-10 rounded-md border border-input"
        aria-hidden="true"
      />
    );
  }

  function handleToggle() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <Button
      size="icon"
      onClick={handleToggle}
      className="z-50 border-none bg-transparent hover:bg-transparent dark:text-neutral-500 dark:hover:text-neutral-300 text-neutral-600 hover:text-neutral-800"
    >
      {resolvedTheme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
