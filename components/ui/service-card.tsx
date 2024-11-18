import { cn } from "@/lib/utils";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

export function ServiceCard({ title, description, imageSrc, className }: ServiceCardProps) {
  return (
    <div className={cn("relative group overflow-hidden rounded-xl", className)}>
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={300}
        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>
      </div>
    </div>
  );
}