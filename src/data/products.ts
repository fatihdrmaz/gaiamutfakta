export interface Product {
  id: string;
  name: string;
  series: string;
  seriesColor: "violet" | "earth" | "solar" | "crimson";
  description: string;
  ingredients: string;
  sauce: string;
  image: string;
  imageAlt: string;
}

export const products: Product[] = [
  {
    id: "iris",
    name: "IRIS",
    series: "Menekşe Serisi",
    seriesColor: "violet",
    description:
      "Renklerin tanrıçası İris'ten ilham alarak portakal, nar, menekşe ve yeşilliklerle ferah ve canlı hissedin.",
    ingredients:
      "Marul, ıspanak, roka, haşlanmış bezelye, portakal, nar, menekşe çiçekleri, çiğ badem, çiğ karnabahar.",
    sauce:
      "Zeytinyağı, taze portakal suyu, limon kabuğu rendesi, tuz, karabiber.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsRLSTGb8_uc3oo-IQnOlVQNuwB4jg5xrLUMRp6ZqhkRuv__2G7kPGucpFqIMOOlHEHzThUrGG_VMYwUotG3jmL8xzL0vrYrjFZvBokJaCaARm_8LZKN92FAgyBrjYmOlJcvWfdJtKoguR9MjeDtczuieBXw1yhT83lTGrW5Nl3lxoDk4-qOXQN04Ur_HnTKfxpgAo_aC1kTC9KIIgxViboTr5tNe5zGlsLQuMoUJ0_8Rv2-8G5wgRGVphdK8CkRtD8htjAbnKRgo",
    imageAlt:
      "Seramik kasede menekşe çiçekleri, ıspanak, portakal dilimleri ve nar taneleriyle renkli salata",
  },
  {
    id: "demeter",
    name: "DEMETER",
    series: "Topraktan Hasat",
    seriesColor: "earth",
    description:
      "Tarım ve bereket tanrıçası Demeter'den esinlenerek siyez bulguru, köklü sebzeler ve tohumlarla bedeninizi besleyin.",
    ingredients:
      "Roka, kuzu kulağı, marul, siyez bulguru, kırmızı turp, fırınlanmış pancar, beyaz peynir, avokado, kabak çekirdeği içi, şebboy yaprakları.",
    sauce: "Zeytinyağı, elma sirkesi, bal, hardal.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCe3N9Xuu-fuQHdr0KrXeCte4n4bLvPZHAs8qBMuwQQpbEL0GMNnY-54ACyUYOw98JO71VEIzXxP3uZFYwGjSNgCQMNCxx7XmH_8MsMrrKeAvqbXwT27ueohZFf4hmrk2pRRQpHH6NtMafx0Tb--he-KVqX_wzcq83vxY2KA9k1dxYvg5jFM37w5aysiN7O1YvbvsDb0n7EDxarK4tchgEfEwRia-HHlRsNzoGvgF-re4M0ASBGFadyE6stxK7dCINqF3bSVZeHJ1c",
    imageAlt:
      "Rustik seramik tabakta fırınlanmış pancar, avokado dilimleri ve pembe çiçek süslemeli salata",
  },
  {
    id: "hera",
    name: "HERA",
    series: "Güneş Serisi",
    seriesColor: "solar",
    description:
      "Güç ve asaleti simgeleyen Hera ile mercimek, hellim ve yeşillikler sayesinde enerjinizi artırın.",
    ingredients:
      "Kuzu kulağı, marul, pazi yaprakları, haşlanmış yeşil mercimek, reyhan, çiğ fındık, hellim, kiraz domates, latin çiçeği.",
    sauce: "Zeytinyağı, limon kabuğu rendesi, bal.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArYN2w0zohKn-LpehWCJmPF5x3Dl_UnbPGts1kYr2eLk59iYSIHWgWriXPO5hegFKLZ1aMyMcBL5-h56I0N1cTlJswj95d8lXB7_71X9PZ51brgJqFwObCqxHuH4SOue6DyukdqZaJcQHz6aI4h96O5OkHlSd4QwkZ25fvFoaRgbSTm2B96Cgi75ZL6bMhqYHs2CqyBT3aiw98r2btcftIOia5j22Mj51Tt2MbghnJpdZHSHheojPPjgLflVQbb90R-7MRcBhOycY",
    imageAlt:
      "Izgaralanmış hellim, kiraz domates ve turuncu latin çiçeğiyle taze yeşil salata",
  },
  {
    id: "rhea",
    name: "RHEA",
    series: "Kışın Bordosu",
    seriesColor: "crimson",
    description:
      "Toprak ve anaçlık tanrıçası Rhea'dan ilham alarak nohut, ayva ve kış meyvelerinin doyuruculuğunu deneyimleyin.",
    ingredients:
      "Marul, roka, kırmızı lahana, nohut, ayva ve kış meyveleri, kuru incir, begonya çiçekleri, ceviz.",
    sauce: "Bal, hardal, limon suyu, zeytinyağı.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC35FG7epwAMlv4ZinPbFgeLaEn_8BK72evYMGpKZdrO0Xcvx6oBYuBuTotBSYSI0GtMJiRpmdtzvOb76nYssSuPhH1ZmVUbJRvqRD7U71OM701v6fFhiS9T5Ngdhx1a9ApIYG7K295MA9wwoVXw3tOqsu2f0oEr-9xl4EQnA9RaO1sKew1ZZJW1ObiZEjn4fti6dryMDp2auSZ2WCbkqlo_E8xxMc10d-5Pj2SXiT0FJxj5l8u47T3RpNLuihbMzgirEX0E1hDB30",
    imageAlt:
      "Koyu taş tabakta nohut, kuru incir ve kırmızı begonya yapraklarıyla kışa özgü bordo-mor salata",
  },
];
