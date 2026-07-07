import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/data/contact";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Gaia Mutfak",
  description:
    "Gaia Mutfak olarak kişisel verilerinizin gizliliğine önem veriyoruz. Verilerinizin nasıl toplandığı ve işlendiği hakkında bilgi alın.",
};

export default function GizlilikPolitikasiPage() {
  return (
    <LegalPage
      eyebrow="Yasal Bilgi"
      title="Gizlilik Politikası"
      intro={
        <p>
          Gaia Mutfak olarak kişisel verilerinizin gizliliğine önem veriyoruz.
          Bu politika, sitemizi ziyaret ettiğinizde veya bizimle iletişime
          geçtiğinizde verilerinizin nasıl işlendiğini açıklar.
        </p>
      }
      sections={[
        {
          title: "1. Toplanan Veriler",
          body: (
            <p>
              Sipariş, rezervasyon veya bilgi talebi gibi durumlarda ad,
              soyad, telefon, e-posta adresi ve teslimat adresi gibi
              verilerinizi toplayabiliriz. Ayrıca sitemize yaptığınız
              ziyaretlerde tarayıcı türü ve IP adresi gibi teknik verileri
              kaydedebiliriz.
            </p>
          ),
        },
        {
          title: "2. Verilerin Kullanımı",
          body: (
            <p>
              Toplanan veriler yalnızca hizmet sunumu, sipariş takibi,
              müşterilerle iletişim ve yasal yükümlülüklerin yerine getirilmesi
              amacıyla kullanılır. Verileriniz, rızanız olmadıkça üçüncü
              taraflarla paylaşılmaz.
            </p>
          ),
        },
        {
          title: "3. Çerezler",
          body: (
            <p>
              Sitemiz, kullanıcı deneyimini geliştirmek ve temel işlevleri
              sağlamak amacıyla çerezler kullanır. Tarayıcı ayarlarınızdan
              çerezleri devre dışı bırakabilirsiniz; ancak bu, sitenin bazı
              özelliklerinin çalışmasını etkileyebilir.
            </p>
          ),
        },
        {
          title: "4. Verilerin Saklanması ve Güvenliği",
          body: (
            <p>
              Kişisel verileriniz, işlenme amacı için gerekli olan süre boyunca
              saklanır ve yetkisiz erişime karşı uygun teknik ve idari
              önlemlerle korunur.
            </p>
          ),
        },
        {
          title: "5. Haklarınız",
          body: (
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında,
              verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini
              talep etme, silinmesini isteme, işlemeye itiraz etme ve
              işlenmesine ilişkin rıza vermiş olduğunuz durumlarda bu rızayı
              geri alma haklarına sahipsiniz.
            </p>
          ),
        },
        {
          title: "6. İletişim",
          body: (
            <p>
              Gizlilik politikamıza ilişkin sorularınız veya taleplerinizi{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:opacity-70 transition-opacity underline decoration-primary/30 underline-offset-4"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              adresinden bize iletebilirsiniz.
            </p>
          ),
        },
      ]}
      lastUpdated="Aralık 2026"
    />
  );
}
