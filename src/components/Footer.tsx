import Image from "next/image";

const LOGO_SRC = "/logogaia.webp";

const WHOLESALE_MAIL =
  "mailto:info@gaiamutfakta.com?subject=Toptan%20Sat%C4%B1%C5%9F%20Talebi";

const footerLinks: { href: string; label: string; external?: boolean }[][] = [
  [
    { href: "#", label: "Gizlilik Politikası" },
    { href: "#", label: "Teslimat ve Kargo" },
  ],
  [
    { href: WHOLESALE_MAIL, label: "Toptan Satış" },
    { href: "#", label: "Sürdürülebilirlik" },
  ],
];

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 mt-24 bg-surface-dim grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto items-start">
      <div>
        <div className="mb-6">
          <Image
            src={LOGO_SRC}
            alt="Gaia Mutfak logosu"
            width={140}
            height={40}
            className="h-auto mix-blend-multiply"
          />
        </div>
        <p className="font-label text-sm tracking-wide uppercase text-on-surface/60">
          &copy; 2026 GAIA Mutfak. Botanik mutfağımızın özenle seçilmiş
          lezzet kaydı.
        </p>
      </div>
      {footerLinks.map((group, i) => (
        <div key={i} className="flex flex-col gap-4">
          {group.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-label text-sm tracking-wide uppercase text-on-surface/60 hover:underline decoration-primary/40 underline-offset-4 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      ))}
    </footer>
  );
}
