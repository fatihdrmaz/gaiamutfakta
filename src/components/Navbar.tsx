import Image from "next/image";

const navLinks = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#iris", label: "Iris" },
  { href: "#demeter", label: "Demeter" },
  { href: "#hera", label: "Hera" },
  { href: "#rhea", label: "Rhea" },
];

const LOGO_SRC = "/logogaia.webp";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fff8f1]/80 backdrop-blur-xl flex justify-between items-center px-8 py-4">
      <div className="flex items-center">
        <Image
          src={LOGO_SRC}
          alt="Gaia Mutfak logosu"
          width={140}
          height={40}
          className="h-auto mix-blend-multiply"
          priority
        />
      </div>
      <div className="hidden md:flex gap-12 items-center">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-headline italic text-lg tracking-tight text-on-surface/70 hover:text-primary transition-colors duration-500"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="w-[140px] md:hidden" />
    </nav>
  );
}
