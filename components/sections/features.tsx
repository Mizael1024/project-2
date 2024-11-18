import { Globe2, Wifi, Satellite } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Cobertura Global",
    description: "Conectividade em qualquer lugar do planeta"
  },
  {
    icon: Wifi,
    title: "Alta Velocidade",
    description: "Downloads rápidos e baixa latência"
  },
  {
    icon: Satellite,
    title: "Tecnologia Avançada",
    description: "Rede de satélites de última geração"
  }
];

export function Features() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 
                     hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1"
        >
          <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
            {feature.title}
          </h3>
          <p className="text-sm sm:text-base text-white/80">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}