"use client";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-gray-900 text-white px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Serene AI. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Built with ❤️ for you.
          </p>
        </div>
      </div>
    </footer>
  );
};
