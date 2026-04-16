export default function About() {
  return (
    <section
      id="hakkimizda"
      className="scroll-mt-32 px-6 md:px-24 py-32 bg-surface-container relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <p className="font-label text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Our Story
          </p>
          <h2 className="font-headline text-5xl md:text-6xl text-center">
            Hakkımızda
          </h2>
          <div className="w-16 h-[2px] bg-primary mt-8 opacity-30" />
        </div>

        <div className="space-y-8 font-headline text-xl md:text-2xl italic leading-relaxed text-on-surface/80 text-center">
          <p>
            <span className="font-semibold not-italic text-primary">
              Gaia Mutfakta,
            </span>{" "}
            yeryüzünün sunduğu eşsiz doğallığı ve zarafeti sofralara taşıma
            fikriyle hayat buldu.
          </p>

          <p>
            Doğanın kalbinde yer alan çiçekler ve bitkiler, yalnızca estetik
            birer unsur değil; aynı zamanda keşfedilmeyi bekleyen, yenilebilir
            ve paylaşılabilir bir deneyimin parçasıdır.
          </p>

          <p>
            GAIA, toprağın sunduğu bu zarif zenginliği sadelik ve özenle yeniden
            yorumlar.
          </p>

          <div className="editorial-line my-12" />

          <p className="font-semibold not-italic text-primary text-2xl md:text-3xl">
            GAIA şimdi mutfakta…
          </p>

          <p className="text-outline">
            Toprağın hikâyesini yeniden keşfetmeye davet ediyor.
          </p>
        </div>
      </div>
    </section>
  );
}
