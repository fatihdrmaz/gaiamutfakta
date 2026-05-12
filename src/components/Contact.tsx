import Image from "next/image";
import { INSTAGRAM_LEDGER_URL, InstagramQr } from "./InstagramQr";

const BOTANICAL_CONTACT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAWzlsHnzW-AJdZoDFg4Phg7wfKExn2eqBgJjhnhWDjr69IgCZ7122aVvfAHGKgn4EPnO3zlek2KwrIBJrCsFqBxxwTcRQ3L7p5yfin3qMlOAFY-GlS8QYnzciexWAdcTpwnhSKwF3EOM3U2hjUUQR4jo5j9CNWPKgtXPikN1vk45tFriFr6s8_KTpF_RO71dNSGDDO8PDnxHwjOuO5Rrga-cjS1ovZmPRPssM32mxzarcvUmPrKXi2WGezRxnRDn24biUM49xkPXE";

export default function Contact() {
  return (
    <section className="px-6 md:px-24 py-24 bg-surface-container-low overflow-hidden relative">
      {/* Botanical Peeking Element */}
      <div className="absolute top-0 right-0 w-64 opacity-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2">
        <Image
          src={BOTANICAL_CONTACT}
          alt=""
          width={256}
          height={256}
          className="w-full h-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h4 className="font-label text-xs uppercase tracking-[0.3em] text-outline">
              Mutfağımıza bekleriz
            </h4>
            <p className="font-headline text-4xl leading-snug">
              Mebusan Yokuşu 26/B,
              <br />
              Beyoğlu - İstanbul
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-label text-xs uppercase tracking-[0.3em] text-outline">
              Bizi takip edin
            </h4>
            <a
              className="font-headline italic text-3xl text-primary hover:opacity-70 transition-opacity block underline decoration-primary/20 underline-offset-8"
              href={INSTAGRAM_LEDGER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              @gaiamutfakta
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-12 bg-surface-container rounded-full aspect-square max-w-md mx-auto border border-outline-variant/20 shadow-inner">
          <div className="p-6 bg-white rounded-xl shadow-lg mb-6 group cursor-pointer overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center justify-center">
              <InstagramQr />
            </div>
          </div>
          <p className="font-label text-xs uppercase tracking-widest text-outline text-center">
            Instagram’daki güncel
            <br />
            paylaşımlarımız için tarayın
          </p>
        </div>
      </div>
    </section>
  );
}
