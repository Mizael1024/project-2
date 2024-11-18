"use client";

import { Satellite } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      "px-4 sm:px-6 py-4 backdrop-blur-md border-b",
      isScrolled 
        ? "bg-[#0B1120]/95 border-white/10" 
        : "bg-transparent border-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1 text-white">
          <Satellite className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-bold text-lg sm:text-xl">STARLINK</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm text-white/90">
          <a href="#residential" className="hover:text-white transition-colors">RESIDENCIAL</a>
          <a href="#travel" className="hover:text-white transition-colors">VIAGEM</a>
          <a href="#maritime" className="hover:text-white transition-colors">EMBARCAÇÕES</a>
          <a href="#personal" className="hover:text-white transition-colors">PESSOAL</a>
          <a href="#business" className="hover:text-white transition-colors">COMERCIAL</a>
        </div>

        <Button 
          variant="ghost" 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </Button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0B1120]/95 backdrop-blur-md border-b border-white/10 md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              <a href="#residential" className="text-white/90 hover:text-white transition-colors">RESIDENCIAL</a>
              <a href="#travel" className="text-white/90 hover:text-white transition-colors">VIAGEM</a>
              <a href="#maritime" className="text-white/90 hover:text-white transition-colors">EMBARCAÇÕES</a>
              <a href="#personal" className="text-white/90 hover:text-white transition-colors">PESSOAL</a>
              <a href="#business" className="text-white/90 hover:text-white transition-colors">COMERCIAL</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}