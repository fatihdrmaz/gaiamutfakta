import Image from "next/image";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida/ADBb0ugts0jg7DEs5YDXPQyAXymInFi2Tsp8-XwXhGS9wCNYSXFoOiBVW3uOXJPsch9jBT3Qr3fDtU9nT3xFcv3iZCRDZ05hwcWDz5e2aJf5IfLbWzyW5B3YM_tllmmn2aOIPUvZ77k1FIhVv7s1d-oTuKBfxkF96ToQ8dhAD1QKvLMpEBcbBpEtair1wXFKP5cx0KszbDaw0hQ1EIUS2o1kyiMl7VarqrUtehwZWz-FaopV8vY7EUH_iSYK4ckqH3WiwGpTq9ye5XNhaw";

const footerLinks = [
  [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Shipping" },
  ],
  [
    { href: "#", label: "Wholesale" },
    { href: "#", label: "Sustainability" },
  ],
];

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 mt-24 bg-surface-dim grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto items-start">
      <div>
        <div className="mb-6">
          <Image
            src={LOGO_URL}
            alt="Gaia Mutfak Logo"
            width={140}
            height={40}
            className="h-auto mix-blend-multiply"
          />
        </div>
        <p className="font-label text-sm tracking-wide uppercase text-on-surface/60">
          &copy; 2024 Gaia Mutfak. Artisanal Ledger of Botanical Ingredients.
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
