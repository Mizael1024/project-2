"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Cable, Satellite, Download } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function InstallationSection() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      icon: Cable,
      title: "CONECTE OS CABOS",
      description: "Conecte sua Starlink à fonte de energia"
    },
    {
      number: 2,
      icon: Satellite,
      title: "APONTE PARA O CÉU",
      description: "Encontre o local ideal com visão desobstruída"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-black to-[#0B1120] py-32 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Conecte-se em
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 ml-3">
                  Poucos Minutos
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Instale a Starlink em apenas dois passos simples. As instruções funcionam em qualquer ordem.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={cn(
                    "group relative bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300",
                    "hover:bg-white/10 hover:border-blue-500/50 hover:transform hover:-translate-y-1",
                    activeStep === step.number && "border-blue-500/50 bg-white/10"
                  )}
                  onMouseEnter={() => setActiveStep(step.number)}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
                        "bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"
                      )}>
                        <step.icon className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl font-bold text-blue-400">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-white/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-white/80">
                A Starlink requer uma visão desobstruída do céu. Baixe o aplicativo Starlink para determinar o melhor local de instalação.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-blue-500/50 group"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:text-blue-400" />
                  ANDROID
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-blue-500/50 group"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:text-blue-400" />
                  iOS
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Video and Image */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <video
                className="w-full aspect-video object-cover"
                controls
                poster="/video-thumbnail.jpg"
              >
                <source
                  src="https://api.starlink.com/public-files/videos/base/Starlink_Standard_Quick_Start_Video.mp4"
                  type="video/mp4"
                />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/starlink-dish.png"
                alt="Starlink Dish"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}