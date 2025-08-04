export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  color: string;
}

export const blogCategories: BlogCategory[] = [
  {
    id: "zdravlje",
    name: "Zdravlje",
    description: "Saveti o zdravom životnom stilu i wellness-u",
    color: "bg-green-500",
  },
  {
    id: "lepota",
    name: "Lepota",
    description: "Saveti o nezi i kozmetičkim proizvodima",
    color: "bg-pink-500",
  },
  {
    id: "moda",
    name: "Moda",
    description: "Trendovi i modni saveti",
    color: "bg-purple-500",
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    description: "Saveti o svakodnevnom životu i organizaciji",
    color: "bg-blue-500",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "zdrav-nacin-zivota-2024",
    title: "Kako da održite zdrav način života u 2024. godini",
    excerpt:
      "Praktični saveti za održavanje zdravog životnog stila u modernom svetu",
    content: `
# Kako da održite zdrav način života u 2024. godini

U današnjem brzom svetu, održavanje zdravog životnog stila može biti izazovno. Evo nekoliko praktičnih saveta koji će vam pomoći da ostvarite svoje ciljeve.

## 1. Redovno vežbanje

Vežbanje je ključno za održavanje zdravlja. Pokušajte da vežbate najmanje 30 minuta dnevno. To može biti:
- Šetnja
- Trčanje
- Joga
- Plivanje
- Teretana

## 2. Balansirana ishrana

Vaša ishrana treba da uključuje:
- **Voće i povrće** - najmanje 5 porcija dnevno
- **Proteine** - meso, riba, jaja, mahunarke
- **Kompleksne ugljene hidrate** - integralni hleb, pirinač, kinoa
- **Zdrave masti** - avokado, orasi, maslinovo ulje

## 3. Hidratacija

Pijte najmanje 2 litre vode dnevno. Voda je neophodna za:
- Regulisanje telesne temperature
- Transport hranljivih materija
- Detoksikaciju organizma

## 4. Kvalitetan san

San je ključan za oporavak i regeneraciju. Pokušajte da:
- Spavate 7-9 sati dnevno
- Imate redovnu rutinu spavanja
- Izbegavate ekrane pre spavanja

## 5. Upravljanje stresom

Stres može negativno uticati na vaše zdravlje. Pokušajte:
- Meditaciju
- Duboko disanje
- Hobije koji vas opuštaju
- Vrijeme u prirodi

## Zaključak

Zdrav životni stil je dugoročan proces koji zahteva konzistentnost i strpljenje. Počnite sa malim promenama i postepeno gradite svoje navike.
    `,
    category: "zdravlje",
    author: "Ana Petrović",
    publishedAt: "2024-01-15",
    readTime: "5 min",
    image: "/illustrations/Asset1.svg",
    tags: ["zdravlje", "vežbanje", "ishrana", "wellness"],
    featured: true,
  },
  {
    id: "kozmeticki-ritual-za-zimu",
    title: "Kozmetički ritual za zimu: Kako da zaštitite kožu",
    excerpt:
      "Kompletni vodič kroz zimsku negu kože - od čišćenja do hidratacije",
    content: `
# Kozmetički ritual za zimu: Kako da zaštitite kožu

Zima može biti izazovna za našu kožu. Hladno vreme, suv vazduh i temperature mogu uzrokovati suvoću, iritaciju i čak ekcem. Evo kako da zaštitite svoju kožu tokom zimskih meseci.

## 1. Čišćenje kože

### Ujutru
- Koristite blago čistače koji ne uklanjaju prirodne ulje
- Izbegavajte vruću vodu - koristite mlaku
- Ne perite lice previše agresivno

### Uveče
- Uklonite šminku pre spavanja
- Koristite micelarnu vodu za delikatno čišćenje
- Pratite sa blagim čistačem

## 2. Hidratacija

### Serum
- Koristite serum sa hijaluronskom kiselinom
- Vitamin C serum za zaštitu od slobodnih radikala
- Retinol serum (noću) za regeneraciju

### Krema
- Izaberite kremu sa ceramidima
- Glicerin za zadržavanje vlage
- Shea butter za dodatnu zaštitu

## 3. Zaštita od sunca

Čak i zimi, UV zraci mogu oštetiti kožu:
- Koristite SPF 30+ dnevno
- Nanosite svaki dan, čak i kada je oblačno
- Ne zaboravite na usne - koristite balzam sa SPF

## 4. Dodatna nega

### Masker
- Hidratantne masker 2-3 puta nedeljno
- Eksfolijacija jednom nedeljno (blaga)
- Oksigenirajuće masker za svežinu

### Oko očiju
- Posebna krema za oči
- Hladni kompresi za umorne oči
- Masiranje za poboljšanje cirkulacije

## 5. Ishrana za kožu

Vaša ishrana takođe utiče na zdravlje kože:
- Omega-3 masne kiseline (riba, orasi)
- Vitamin E (avokado, semenke)
- Vitamin C (citrusi, paprika)
- Antioksidansi (bobičasto voće)

## Proizvodi koje preporučujemo

### Za suvu kožu
- CeraVe Moisturizing Cream
- La Roche-Posay Cicaplast Baume
- The Ordinary Hyaluronic Acid

### Za osetljivu kožu
- Avene Tolerance Extreme
- Bioderma Sensibio
- Clinique Moisture Surge

## Zaključak

Redovna nega i zaštita su ključni za održavanje zdrave kože tokom zime. Zapamtite - konzistentnost je važnija od savršenstva. Počnite sa osnovama i postepeno dodajte proizvode u svoju rutinu.
    `,
    category: "lepota",
    author: "Marija Jovanović",
    publishedAt: "2024-01-10",
    readTime: "8 min",
    image: "/illustrations/Asset2.svg",
    tags: ["kozmetika", "zima", "nega", "hidratacija"],
    featured: true,
  },
];
