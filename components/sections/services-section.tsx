import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="w-full bg-[#0B1120] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ServiceCard
            title="RESIDENCIAL"
            description="Conecte-se em casa"
            imageSrc="https://images.unsplash.com/photo-1629451642031-417018e27f53?q=80&w=2070&auto=format&fit=crop"
          />
          <ServiceCard
            title="VIAGEM"
            description="Conecte-se durante a viagem"
            imageSrc="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
          />
          <ServiceCard
            title="EMBARCAÇÕES"
            description="Conecte-se em alto-mar"
            imageSrc="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2072&auto=format&fit=crop"
          />
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            STARLINK PARA EMPRESAS E USUÁRIOS AVANÇADOS
          </h2>
          <p className="text-white/80 mb-8">
            INTERNET ESTÁVEL E DE ALTA VELOCIDADE, PROJETADA PARA MANTER AS EMPRESAS CONECTADAS.
          </p>
          <Button 
            variant="outline" 
            className="bg-transparent text-white border-white/20 hover:bg-white/10"
          >
            SAIBA MAIS <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}