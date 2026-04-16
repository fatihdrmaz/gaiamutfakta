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
    series: "Violet Series",
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
      "vibrant gourmet salad in a ceramic bowl featuring purple edible flowers, spinach, orange slices, and pomegranate seeds",
  },
  {
    id: "demeter",
    name: "DEMETER",
    series: "Earthy Harvest",
    seriesColor: "earth",
    description:
      "Tarım ve bereket tanrıçası Demeter'den esinlenerek siyez bulguru, köklü sebzeler ve tohumlarla bedeninizi besleyin.",
    ingredients:
      "Roka, kuzu kulağı, marul, siyez bulguru, kırmızı turp, fırınlanmış pancar, beyaz peynir, avokado, kabak çekirdeği içi, şebboy yaprakları.",
    sauce: "Zeytinyağı, elma sirkesi, bal, hardal.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCe3N9Xuu-fuQHdr0KrXeCte4n4bLvPZHAs8qBMuwQQpbEL0GMNnY-54ACyUYOw98JO71VEIzXxP3uZFYwGjSNgCQMNCxx7XmH_8MsMrrKeAvqbXwT27ueohZFf4hmrk2pRRQpHH6NtMafx0Tb--he-KVqX_wzcq83vxY2KA9k1dxYvg5jFM37w5aysiN7O1YvbvsDb0n7EDxarK4tchgEfEwRia-HHlRsNzoGvgF-re4M0ASBGFadyE6stxK7dCINqF3bSVZeHJ1c",
    imageAlt:
      "artfully plated salad with roasted beets, avocado slices, and pink floral accents on a rustic ceramic plate",
  },
  {
    id: "hera",
    name: "HERA",
    series: "Solar Bloom",
    seriesColor: "solar",
    description:
      "Güç ve asaleti simgeleyen Hera ile mercimek, hellim ve yeşillikler sayesinde enerjinizi artırın.",
    ingredients:
      "Kuzu kulağı, marul, pazi yaprakları, haşlanmış yeşil mercimek, reyhan, çiğ fındık, hellim, kiraz domates, latin çiçeği.",
    sauce: "Zeytinyağı, limon kabuğu rendesi, bal.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArYN2w0zohKn-LpehWCJmPF5x3Dl_UnbPGts1kYr2eLk59iYSIHWgWriXPO5hegFKLZ1aMyMcBL5-h56I0N1cTlJswj95d8lXB7_71X9PZ51brgJqFwObCqxHuH4SOue6DyukdqZaJcQHz6aI4h96O5OkHlSd4QwkZ25fvFoaRgbSTm2B96Cgi75ZL6bMhqYHs2CqyBT3aiw98r2btcftIOia5j22Mj51Tt2MbghnJpdZHSHheojPPjgLflVQbb90R-7MRcBhOycY",
    imageAlt:
      "fresh green salad with grilled halloumi cheese, cherry tomatoes, and bright orange edible nasturtium flowers",
  },
  {
    id: "rhea",
    name: "RHEA",
    series: "Wintry Crimson",
    seriesColor: "crimson",
    description:
      "Toprak ve anaçlık tanrıçası Rhea'dan ilham alarak nohut, ayva ve kış meyvelerinin doyuruculuğunu deneyimleyin.",
    ingredients:
      "Marul, roka, kırmızı lahana, nohut, ayva ve kış meyveleri, kuru incir, begonya çiçekleri, ceviz.",
    sauce: "Bal, hardal, limon suyu, zeytinyağı.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC35FG7epwAMlv4ZinPbFgeLaEn_8BK72evYMGpKZdrO0Xcvx6oBYuBuTotBSYSI0GtMJiRpmdtzvOb76nYssSuPhH1ZmVUbJRvqRD7U71OM701v6fFhiS9T5Ngdhx1a9ApIYG7K295MA9wwoVXw3tOqsu2f0oEr-9xl4EQnA9RaO1sKew1ZZJW1ObiZEjn4fti6dryMDp2auSZ2WCbkqlo_E8xxMc10d-5Pj2SXiT0FJxj5l8u47T3RpNLuihbMzgirEX0E1hDB30",
    imageAlt:
      "deep red and purple winter salad featuring chickpeas, figs, and red begonia petals on a dark stoneware plate",
  },
];
