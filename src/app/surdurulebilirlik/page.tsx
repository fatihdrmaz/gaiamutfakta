import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Sürdürülebilirlik | Gaia Mutfak",
  description:
    "Mevsimin ritmi, yerel üretici, yenilebilir çiçekler ve sıfır atık — Gaia Mutfak'ın toprağa duyduğu sorumluluğu keşfedin.",
};

export default function SurdurulebilirlikPage() {
  return (
    <LegalPage
      eyebrow="Değerlerimiz"
      title="Sürdürülebilirlik"
      intro={
        <p>
          Toprağın hikâyesi, Gaia Mutfak&rsquo;ın kalbindedir. Bu yüzden
          mutfağımızdaki her karar sürdürülebilirlik ilkesiyle şekillenir.
        </p>
      }
      sections={[
        {
          title: "Mevsimin Ritmi",
          body: (
            <p>
              Salatalarımız mevsimsel olarak değişir. Her mevsim, doğanın o
              döneme özgü sunduğu en taze ürünlerle yeni bir kompozisyon
              yaratırız. Böylece hem doğanın döngüsüne saygı duyar hem de en
              yüksek besin değerini tabağınıza taşırız.
            </p>
          ),
        },
        {
          title: "Yerel Üretici, Kısa Yol",
          body: (
            <p>
              Malzemelerimizi mümkün olduğunca yakın bölgelerdeki küçük
              üreticilerden temin ediyoruz. Uzun taşıma yerine kısa tedarik
              zincirini tercih ederek karbon ayak izini azaltıyor, yerel
              ekonomiyi destekliyoruz.
            </p>
          ),
        },
        {
          title: "Yenilebilir Çiçekler",
          body: (
            <p>
              Menekşe, latin çiçeği, begonya ve şebboy gibi yenilebilir
              çiçekleri sertifikalı üreticilerden alıyoruz. Kimyasal ilaç ve
              gübre içermeyen kültürlerden yararlanarak hem doğanın hem de
              sofranızın güvenliğini gözetiyoruz.
            </p>
          ),
        },
        {
          title: "Ambalajın Sadeliği",
          body: (
            <p>
              Paketleme malzemelerinde geri dönüştürülebilir ve
              kompostlanabilir materyalleri tercih ediyoruz. Gereksiz
              ambalajlardan kaçınıyor, sadeliği bir tasarım tercihi olarak
              değil, doğaya olan borcumuz olarak görüyoruz.
            </p>
          ),
        },
        {
          title: "Sıfır Atık Hedefi",
          body: (
            <p>
              Mutfak atıklarımızı azaltmak için doğru porsiyonlama, artık
              malzemelerin yeniden değerlendirilmesi ve organik atıkların
              kompostlanması gibi uygulamaları önceliğimiz haline getirdik.
              Amacımız, her hasat mevsiminde toprağa geri verdiğimizin,
              aldığımızdan az olmaması.
            </p>
          ),
        },
        {
          title: "Bir Söz Olarak",
          body: (
            <p className="italic font-headline text-primary text-xl">
              GAIA, toprağın hikâyesini yeniden anlatırken doğaya olan borcunu
              unutmuyor.
            </p>
          ),
        },
      ]}
    />
  );
}
