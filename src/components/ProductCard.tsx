import Image from "next/image";
import type { Product } from "@/data/products";

const seriesStyles = {
  violet: {
    badge: "bg-tertiary-fixed text-on-tertiary-fixed",
    glow: "bg-tertiary-fixed-dim/20",
  },
  earth: {
    badge: "bg-secondary-fixed text-on-secondary-fixed",
    glow: "bg-secondary-fixed/30",
  },
  solar: {
    badge: "bg-primary-fixed text-on-primary-fixed",
    glow: "bg-primary-fixed/20",
  },
  crimson: {
    badge: "bg-secondary-container/20 text-secondary",
    glow: "bg-error-container/20",
  },
};

interface ProductCardProps {
  product: Product;
  reversed?: boolean;
}

export default function ProductCard({ product, reversed }: ProductCardProps) {
  const style = seriesStyles[product.seriesColor];

  const imageBlock = (
    <div className="relative group">
      <div
        className={`absolute inset-0 ${style.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}
      />
      <Image
        src={product.image}
        alt={product.imageAlt}
        width={600}
        height={600}
        className="rounded-xl w-full aspect-square object-cover shadow-xl grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
      />
    </div>
  );

  const contentBlock = (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div
          className={`inline-block px-4 py-1 ${style.badge} rounded-full font-label text-xs tracking-widest uppercase`}
        >
          {product.series}
        </div>
      </div>
      <h3 className="font-headline text-6xl text-on-surface italic">
        {product.name}
      </h3>
      <p className="font-headline text-xl text-outline italic leading-relaxed">
        {product.description}
      </p>
      <div className="space-y-4">
        <p className="font-label text-xs uppercase tracking-widest text-outline">
          İçerik
        </p>
        <p className="text-on-surface-variant leading-loose">
          {product.ingredients}
        </p>
      </div>
      <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
        <p className="font-label text-xs uppercase tracking-widest text-primary mb-2">
          Önerilen Sos Karışımı
        </p>
        <p className="italic text-on-surface">{product.sauce}</p>
      </div>
    </div>
  );

  return (
    <div
      id={product.id}
      className="scroll-mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
    >
      {reversed ? (
        <>
          <div className="order-2 md:order-1">{contentBlock}</div>
          <div className="order-1 md:order-2">{imageBlock}</div>
        </>
      ) : (
        <>
          {imageBlock}
          {contentBlock}
        </>
      )}
    </div>
  );
}
