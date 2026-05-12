import Image from "next/image";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_MAPS_QUERY,
  CONTACT_PHONE,
} from "@/data/contact";
import { INSTAGRAM_LEDGER_URL, InstagramQr } from "./InstagramQr";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_MAPS_QUERY)}`;

const BOTANICAL_CONTACT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAWzlsHnzW-AJdZoDFg4Phg7wfKExn2eqBgJjhnhWDjr69IgCZ7122aVvfAHGKgn4EPnO3zlek2KwrIBJrCsFqBxxwTcRQ3L7p5yfin3qMlOAFY-GlS8QYnzciexWAdcTpwnhSKwF3EOM3U2hjUUQR4jo5j9CNWPKgtXPikN1vk45tFriFr6s8_KTpF_RO71dNSGDDO8PDnxHwjOuO5Rrga-cjS1ovZmPRPssM32mxzarcvUmPrKXi2WGezRxnRDn24biUM49xkPXE";

export default function Contact() {
  return (
    <section
      id="iletisim"
      className="px-6 md:px-24 py-24 bg-surface-container-low overflow-hidden relative"
    >
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

      <div className="max-w-7xl mx-auto mb-16 md:mb-20">
        <p className="font-label text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center md:text-left">
          İletişim
        </p>
        <h2 className="font-headline text-4xl md:text-5xl text-center md:text-left">
          İletişim bilgileri
        </h2>
        <div className="w-16 h-[2px] bg-primary mt-8 opacity-30 mx-auto md:mx-0" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h4 className="font-label text-xs uppercase tracking-[0.3em] text-outline">
              Mutfağımıza bekleriz
            </h4>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-headline text-4xl leading-snug text-on-surface hover:text-primary transition-colors block"
            >
              {CONTACT_ADDRESS.line1}
              <br />
              {CONTACT_ADDRESS.line2}
            </a>
          </div>
          {CONTACT_PHONE ? (
            <div className="space-y-4">
              <h4 className="font-label text-xs uppercase tracking-[0.3em] text-outline">
                Telefon
              </h4>
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                className="font-headline text-2xl md:text-3xl text-on-surface hover:text-primary transition-colors block"
              >
                {CONTACT_PHONE}
              </a>
            </div>
          ) : null}
          {CONTACT_EMAIL ? (
            <div className="space-y-4">
              <h4 className="font-label text-xs uppercase tracking-[0.3em] text-outline">
                E-posta
              </h4>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-headline text-2xl md:text-3xl text-on-surface hover:text-primary transition-colors block break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          ) : null}
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
