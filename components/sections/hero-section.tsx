"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Features } from "@/components/sections/features";

export function HeroSection() {
  const [cep, setCep] = useState("");

  const formatCEP = (value: string) => {
    const digits = value.replace(/\D/g, "");
    return digits.replace(/^(\d{5})(\d{3})?.*/, "$1-$2");
  };

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCEP(e.target.value);
    setCep(formatted);
  };

  return (
    <section className="relative min-h-[calc(100vh-1rem)] flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0B1120]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
        <div className="space-y-6 mb-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            <span className="inline-block mb-2 sm:mb-4">Internet Via Satélite</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Para Todo o Brasil
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Conecte-se em casa ou de qualquer lugar.
          </p>
        </div>

        <div className="w-full max-w-xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 mb-16 border border-white/10 shadow-2xl">
          <div className="flex flex-col space-y-4">
            <label className="flex items-center space-x-2 text-white text-sm font-medium mb-2">
              <MapPin className="w-4 h-4" />
              <span>Verifique a disponibilidade no seu endereço</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Digite seu CEP"
                className={cn(
                  "bg-black/30 border-white/10 text-white placeholder:text-white/50 text-base sm:text-lg h-12 sm:h-14",
                  "focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                )}
                value={cep}
                onChange={handleCEPChange}
                maxLength={9}
              />
              <Button 
                className="bg-white hover:bg-white/90 text-black h-12 sm:h-14 text-base sm:text-lg font-medium transition-colors whitespace-nowrap px-6 sm:px-8"
              >
                Pedir Agora
              </Button>
            </div>
          </div>
        </div>

        <Features />
      </div>
    </section>
  );
}