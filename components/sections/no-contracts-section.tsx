import { FileText, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function NoContractsSection() {
  const features = [
    {
      title: "Flexibilidade Total",
      description: "Cancele a qualquer momento sem multas",
      icon: Check,
      positive: true
    },
    {
      title: "Sem Burocracia",
      description: "Processo simples e transparente",
      icon: Check,
      positive: true
    },
    {
      title: "Contratos Longos",
      description: "Sem compromissos extensos",
      icon: X,
      positive: false
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#0B1120] to-black py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          {/* Background Accent */}
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-blue-600/20 to-purple-600/20 -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-4">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Sem Contratos,<br />Mais Liberdade
              </h2>
              
              <p className="text-lg text-white/80 leading-relaxed">
                Com a Starlink, o acordo é justo para ambas as partes. Os termos e preços podem passar por reajustes conforme necessário, e você tem total liberdade para cancelar quando quiser.
              </p>
            </div>

            {/* Right Content - Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-4 p-6 rounded-2xl transition-all duration-300",
                    "bg-white/5 hover:bg-white/10 border border-white/10",
                    feature.positive ? "hover:border-blue-500/50" : "hover:border-red-500/50"
                  )}
                >
                  <div className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-xl",
                    feature.positive ? "bg-blue-500/20" : "bg-red-500/20"
                  )}>
                    <feature.icon className={cn(
                      "w-6 h-6",
                      feature.positive ? "text-blue-400" : "text-red-400"
                    )} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}