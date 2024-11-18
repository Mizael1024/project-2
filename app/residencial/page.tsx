"use client";

import { Header } from "@/components/layout/header";
export default function ResidencialPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0B1120] pt-[104px]">
        <section className="relative w-full py-20 overflow-hidden"> 
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-30" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                STARLINK PARA RESIDÊNCIAS
              </h1>
              
              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  <span className="line-through text-gray-400">R$ 2.400</span>{' '}
                  <span className="text-white">R$ 1.400*</span>
                </p>
                <p className="text-lg sm:text-xl text-blue-400 font-medium">
                  OFERTA DE HARDWARE NO BRASIL
                </p>
                <p className="text-sm text-white/80">
                  OFERTA POR TEMPO LIMITADO
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-lg sm:text-xl text-white/90">
                  Internet de alta velocidade ilimitada R$ 184* por mês. 
                  Disponível onde quer que viva.
                </p>
                <p className="text-sm text-white/70">
                  Promoção válida até o fim do estoque. *Mais impostos e taxas adicionais.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}