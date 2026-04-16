import Image from "next/image";
import { ChevronDown } from "lucide-react";

// Ahşap masa üzerinde salata kaseleri ve yeşillikler. Müşteri kendi
// fotoğrafını sağladığında buradaki URL değiştirilecek.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=2400&q=80";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Ahşap masa üzerinde yeşilliklerle hazırlanmış salata kaseleri"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Tonal overlay — tasarım sistemine uygun sıcak tonda koyulaştırma */}
        <div className="absolute inset-0 bg-gradient-to-b from-on-surface/40 via-on-surface/30 to-on-surface/60" />
      </div>

      {/* Foreground text */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="font-headline italic text-3xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg">
          Yeryüzü Tanrıçası&rsquo;nın mutfağından,
          <br />
          <span className="text-primary-fixed">toprağın en saf lezzetleri.</span>
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/80" />
      </div>
    </section>
  );
}
