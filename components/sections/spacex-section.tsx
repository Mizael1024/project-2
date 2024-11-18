import { Rocket, Orbit, Satellite, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export function SpaceXSection() {
  const achievements = [
    {
      icon: Rocket,
      stat: "200+",
      label: "Lançamentos bem-sucedidos"
    },
    {
      icon: Orbit,
      stat: "40.000+",
      label: "Satélites em órbita"
    },
    {
      icon: RotateCcw,
      stat: "100+",
      label: "Foguetes reutilizados"
    },
    {
      icon: Satellite,
      stat: "1M+",
      label: "Usuários ativos"
    }
  ];

  return (
    <section className="w-full bg-black py-32 relative overflow-hidden">
      {/* Animated constellation background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <img
                src="https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&q=80&w=1000"
                alt="SpaceX Rocket"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right side - Text and Stats */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Desenvolvida pela SpaceX
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Sendo a principal fornecedora mundial de serviços de lançamento (e a única a lançar foguetes reutilizáveis de classe orbital), a SpaceX tem profunda experiência tanto em espaçonaves como em operações em órbita.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white mb-1">
                        {item.stat}
                      </div>
                      <div className="text-sm text-white/70">
                        {item.label}
                      </div>
                    </div>
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