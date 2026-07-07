import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Section {
  title: string;
  body: React.ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro?: React.ReactNode;
  sections: Section[];
  lastUpdated?: string;
}

export default function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  lastUpdated,
}: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main className="relative pt-32 pb-24 px-6 md:px-24 bg-surface min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <p className="font-label text-xs tracking-[0.3em] uppercase text-primary mb-4">
              {eyebrow}
            </p>
            <h1 className="font-headline text-5xl md:text-6xl">{title}</h1>
            <div className="w-16 h-[2px] bg-primary mt-8 opacity-30" />
          </div>

          {intro ? (
            <div className="font-headline italic text-xl md:text-2xl text-on-surface/80 text-center leading-relaxed mb-16">
              {intro}
            </div>
          ) : null}

          <div className="space-y-14">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-headline text-2xl md:text-3xl text-primary mb-4">
                  {section.title}
                </h2>
                <div className="font-body text-base md:text-lg text-on-surface-variant leading-loose space-y-4">
                  {section.body}
                </div>
              </section>
            ))}
          </div>

          {lastUpdated ? (
            <>
              <div className="editorial-line my-16" />
              <p className="font-label text-xs uppercase tracking-widest text-outline text-center">
                Son güncelleme: {lastUpdated}
              </p>
            </>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
