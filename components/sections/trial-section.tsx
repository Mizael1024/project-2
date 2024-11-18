"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function TrialSection() {
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
    <section className="w-full bg-black py-32 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/10 mb-4">
              <Clock className="w-10 h-10 text-blue-400" />
            </div>
            
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                30 DIAS DE TESTE
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Se o serviço não for satisfatório, devolva a Starlink para receber um reembolso integral.
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-4 text-white/80">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <span>Verifique a disponibilidade no seu endereço</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <div className="space-y-6">
              <Input
                type="text"
                placeholder="Digite seu CEP"
                className={cn(
                  "bg-black/30 border-white/10 text-white placeholder:text-white/50 text-lg h-14",
                  "focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                )}
                value={cep}
                onChange={handleCEPChange}
                maxLength={9}
              />
              
              <Button 
                className="w-full bg-white hover:bg-white/90 text-black h-14 text-lg font-medium transition-colors"
              >
                PEDIR AGORA <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="mt-8">
              <Button
                variant="link"
                className="text-white/70 hover:text-white flex items-center transition-colors"
              >
                VER MAPA DE DISPONIBILIDADE E VELOCIDADES <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}