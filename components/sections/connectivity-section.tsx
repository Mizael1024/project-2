import { Gamepad2, Video, Wifi, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export function ConnectivitySection() {
  const features = [
    {
      icon: Video,
      title: "Streaming & Chamadas",
      description: "Qualidade HD sem interrupções"
    },
    {
      icon: Gamepad2,
      title: "Jogos Online",
      description: "Baixa latência para gaming"
    },
    {
      icon: Briefcase,
      title: "Trabalho Remoto",
      description: "Conexão estável e segura"
    },
    {
      icon: Wifi,
      title: "Conectividade Total",
      description: "Mesmo em áreas remotas"
    }
  ];

  return (
    <section className="w-full bg-[#0B1120] py-32 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-pulse" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Conectividade Onde Você Menos Espera
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Streaming, chamadas de vídeo, jogos on-line, trabalho remoto e muito mais. 
            Agora isso é possível mesmo nos locais mais remotos, graças ao sistema de 
            internet mais avançado do mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group relative",
                "before:absolute before:inset-0 before:bg-gradient-to-b before:from-blue-500/0 before:to-blue-500/5 before:opacity-0 before:transition-opacity",
                "hover:before:opacity-100"
              )}
            >
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-blue-500/50 group-hover:translate-y-[-4px]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}