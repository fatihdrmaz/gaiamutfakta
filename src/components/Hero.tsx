import Image from "next/image";
import { ChevronDown } from "lucide-react";

const BOTANICAL_LEFT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD1RE2fyv90pwRmeXAa0JH7QVVpYEVpQI8fxqUinKkoHVBNVqjgP8Q7nOENkjz5i1fEJptqA9IoMiLmb5hejD_GdagcoWGTEUkJCOrkPbfz_EhT4xCtjsdmWjCzu1kZynB44Hgrn6bDq-49soCQEmNr2yhrNiNtDZa1NQ3yTb5C3MRAxZiJiJJ0UTAi0bwEg2repCAv91tvpOPTCZs27_cRKWLroDJrIn6-_uYcKckTIylGj7slLtIEkh6bBTI9ZmScsxX3zP-Zxug";

const BOTANICAL_RIGHT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCCDnsyiC8dzwTramUJUqsNDZzlvkj4zjG3W-4lz1KCTQyvrpALHND_BxrJWYYEJNQvcHffbMBAZcZnd8T6UsgvY0LGnge_tiF3cQTr4bfnPvliwrFixe-_jQ1p6bPckatSEZ14Pp1ZUgWg1DbOkn6rfCRQUfCvDWWmjSSmqT1waui0M2UXIBQfZ6FPCM9qUREg-x5ydhJ9xihKnFN_2VcNqFdlMhsAUmPQCrMC5q5FNoa_d-ITj4BMhU6F3cyTTd8fdV4oXdRGyRo";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-32 px-6 relative overflow-hidden">
      {/* Decorative Botanical Elements */}
      <div className="absolute -top-12 -left-20 w-96 opacity-20 pointer-events-none">
        <Image
          src={BOTANICAL_LEFT}
          alt=""
          width={384}
          height={384}
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-20 -right-20 w-80 opacity-20 pointer-events-none rotate-12">
        <Image
          src={BOTANICAL_RIGHT}
          alt=""
          width={320}
          height={320}
          className="w-full h-auto"
        />
      </div>

      <div className="text-center z-10 max-w-4xl">
        <span className="font-label text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
          Artisanal Botanical Kitchen
        </span>
        <h1 className="font-headline text-7xl md:text-9xl text-on-surface leading-[0.9] mb-8 font-extrabold tracking-tighter">
          Gaia Mutfak
        </h1>
        <p className="font-headline italic text-3xl md:text-4xl text-outline mb-12">
          Doğanın Tadı, Mutfağınızda
        </p>
        <div className="w-16 h-[2px] bg-primary mx-auto mb-16 opacity-30" />
        <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Tarladan tabağa, her bir içerik özenle seçilmiş, mevsimin en taze
          çiçekleri ve otlarıyla harmanlanmış bir hikaye anlatıyor.
        </p>
      </div>

      <div className="mt-24 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
}
