export interface ProductVariant {
  name: string
  price: number
}

export interface Product {
  id: string
  name: string
  category: string
  price: number
  description?: string
  image?: string
  available: boolean
  variants?: ProductVariant[]
}

export const PRODUCT_CATEGORIES = [
  'Special Beri Kopi',
  'Seri Signature',
  'Seri Matcha',
  'Seri Creamy',
  'Espresso Bar',
  'Mocktail',
  'Beri Non Kopi',
  'Add On',
  'Main Course',
  'Snack',
  'Roti & Pisang',
] as const

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number]

const R_L = (r: number, l: number): ProductVariant[] => [
  { name: 'R', price: r },
  { name: 'L', price: l },
]

const HOT_R_L = (hot: number, r: number, l: number): ProductVariant[] => [
  { name: 'Hot', price: hot },
  { name: 'R', price: r },
  { name: 'L', price: l },
]

export const products: Product[] = [
  // ── Special Beri Kopi ─────────────────────────────────────────────
  {
    id: 'beri-kopi',
    name: 'Beri Kopi',
    category: 'Special Beri Kopi',
    price: 19000,
    description: 'Es kopi susu gula aren special Beri.',
    available: true,
    variants: R_L(19000, 23000),
  },
  {
    id: 'beri-hati',
    name: 'Beri Hati',
    category: 'Special Beri Kopi',
    price: 19000,
    description: 'Es kopi susu dengan rasa butterscotch.',
    available: true,
    variants: R_L(19000, 23000),
  },
  {
    id: 'beri-kehormatan',
    name: 'Beri Kehormatan',
    category: 'Special Beri Kopi',
    price: 19000,
    description: 'Es kopi susu dengan rasa caramel.',
    available: true,
    variants: R_L(19000, 23000),
  },
  {
    id: 'beri-inspirasi',
    name: 'Beri Inspirasi',
    category: 'Special Beri Kopi',
    price: 19000,
    description: 'Es kopi susu dengan rasa vanila.',
    available: true,
    variants: R_L(19000, 23000),
  },
  {
    id: 'beri-caramel-macchiato',
    name: 'Beri Caramel Macchiato',
    category: 'Special Beri Kopi',
    price: 21000,
    available: true,
    variants: R_L(21000, 25000),
  },

  // ── Seri Signature ───────────────────────────────────────────────
  {
    id: 'coffee-creamy',
    name: 'Coffee Creamy',
    category: 'Seri Signature',
    price: 24000,
    description: 'Rasa kopi ringan, lembut, dan creamy.',
    available: true,
    variants: R_L(24000, 27000),
  },
  {
    id: 'caramel-cheesecream',
    name: 'Caramel Cheesecream',
    category: 'Seri Signature',
    price: 24000,
    description: 'Rasa kopi intens, manis legit caramel, dan gurih creamy dari cheese cream.',
    available: true,
    variants: R_L(24000, 27000),
  },
  {
    id: 'creamy-latte',
    name: 'Creamy Latte',
    category: 'Seri Signature',
    price: 24000,
    description: 'Espresso, caramel cream, coconut sugar, custom milk.',
    available: true,
    variants: R_L(24000, 27000),
  },
  {
    id: 'love-berry-much',
    name: 'Love Berry Much',
    category: 'Seri Signature',
    price: 24000,
    description:
      'Custom milk, espresso, special cream, banana flavour, strawberry, butterscotch.',
    available: true,
    variants: R_L(24000, 27000),
  },

  // ── Seri Matcha ──────────────────────────────────────────────────
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    category: 'Seri Matcha',
    price: 28000,
    available: true,
    variants: R_L(28000, 32000),
  },
  {
    id: 'matcha-strawberry',
    name: 'Matcha Strawberry',
    category: 'Seri Matcha',
    price: 30000,
    available: true,
    variants: R_L(30000, 35000),
  },
  {
    id: 'matcha-lemonade',
    name: 'Matcha Lemonade',
    category: 'Seri Matcha',
    price: 30000,
    available: true,
    variants: R_L(30000, 35000),
  },
  {
    id: 'strawberry-matcha-presso',
    name: 'Strawberry Matcha Presso',
    category: 'Seri Matcha',
    price: 30000,
    available: true,
    variants: R_L(30000, 35000),
  },
  {
    id: 'matcha-cheese-cream',
    name: 'Matcha Cheese Cream',
    category: 'Seri Matcha',
    price: 30000,
    available: true,
    variants: R_L(30000, 35000),
  },

  // ── Seri Creamy ──────────────────────────────────────────────────
  {
    id: 'beri-creamy',
    name: 'Beri Creamy',
    category: 'Seri Creamy',
    price: 22000,
    description: 'Special cream, yogurt, dan strawberry puree.',
    available: true,
    variants: R_L(22000, 26000),
  },
  {
    id: 'mango-creamy',
    name: 'Mango Creamy',
    category: 'Seri Creamy',
    price: 22000,
    description: 'Special cream, yogurt, dan mango flavour.',
    available: true,
    variants: R_L(22000, 26000),
  },
  {
    id: 'fortune-cookies',
    name: 'Fortune Cookies',
    category: 'Seri Creamy',
    price: 22000,
    description: 'Special cream, yogurt, milk, strawberry puree, dan oreo di atasnya.',
    available: true,
    variants: R_L(22000, 26000),
  },
  {
    id: 'choco-lava-cheesecream',
    name: 'Choco Lava Cheesecream',
    category: 'Seri Creamy',
    price: 22000,
    description:
      'Special cream, yogurt, milk, chocolate, strawberry puree, dan manis gurih dari cheese cream.',
    available: true,
    variants: R_L(22000, 25000),
  },

  // ── Espresso Bar ─────────────────────────────────────────────────
  {
    id: 'espresso',
    name: 'Espresso',
    category: 'Espresso Bar',
    price: 15000,
    available: true,
  },
  {
    id: 'double-espresso',
    name: 'Double Espresso',
    category: 'Espresso Bar',
    price: 16000,
    available: true,
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'Espresso Bar',
    price: 16000,
    available: true,
    variants: HOT_R_L(16000, 18000, 20000),
  },
  {
    id: 'cappucino',
    name: 'Cappucino',
    category: 'Espresso Bar',
    price: 19000,
    available: true,
    variants: HOT_R_L(19000, 21000, 24000),
  },
  {
    id: 'caffe-latte',
    name: 'Caffe Latte',
    category: 'Espresso Bar',
    price: 19000,
    available: true,
    variants: HOT_R_L(19000, 21000, 24000),
  },

  // ── Mocktail ─────────────────────────────────────────────────────
  {
    id: 'orange-wish',
    name: 'Orange Wish',
    category: 'Mocktail',
    price: 22000,
    description: 'Espresso, lychee syrup, vanilla syrup, orange syrup.',
    available: true,
    variants: R_L(22000, 26000),
  },
  {
    id: 'tropical-blizz',
    name: 'Tropical Blizz',
    category: 'Mocktail',
    price: 22000,
    description: 'Orange syrup, lemon syrup, banana syrup, soursop syrup, lemongrass.',
    available: true,
    variants: R_L(22000, 26000),
  },
  {
    id: 'triple-peach',
    name: 'Triple Peach',
    category: 'Mocktail',
    price: 22000,
    description: 'Espresso, triple syrup, peach syrup.',
    available: true,
    variants: R_L(22000, 26000),
  },
  {
    id: 'cold-brew-cheesecream',
    name: 'Cold Brew Cheesecream',
    category: 'Mocktail',
    price: 22000,
    description: 'Cold brew coffee, lychee syrup, strawberry puree, special cheese cream.',
    available: true,
    variants: R_L(22000, 26000),
  },
  {
    id: 'summer-cream-berry',
    name: 'Summer Cream Berry',
    category: 'Mocktail',
    price: 22000,
    description:
      'Cold brew coffee, strawberry syrup, banana syrup, butterscotch syrup, special cheese cream.',
    available: true,
    variants: R_L(22000, 26000),
  },
  {
    id: 'rose-berry',
    name: 'Rose Berry',
    category: 'Mocktail',
    price: 22000,
    description: 'Strawberry puree, mojito mint syrup, rosella tea.',
    available: true,
    variants: R_L(22000, 26000),
  },

  // ── Beri Non Kopi ────────────────────────────────────────────────
  {
    id: 'beri-coklat',
    name: 'Beri Coklat',
    category: 'Beri Non Kopi',
    price: 18000,
    available: true,
    variants: HOT_R_L(18000, 20000, 24000),
  },
  {
    id: 'beri-red-velvet',
    name: 'Beri Red Velvet',
    category: 'Beri Non Kopi',
    price: 18000,
    available: true,
    variants: HOT_R_L(18000, 20000, 24000),
  },
  {
    id: 'sweet-bubble-gum',
    name: 'Sweet Bubble Gum',
    category: 'Beri Non Kopi',
    price: 20000,
    available: true,
    variants: R_L(20000, 24000),
  },
  {
    id: 'jeruk-coco',
    name: 'Jeruk Coco',
    category: 'Beri Non Kopi',
    price: 20000,
    available: true,
    variants: R_L(20000, 24000),
  },
  {
    id: 'yakult-lychee',
    name: 'Yakult Lychee',
    category: 'Beri Non Kopi',
    price: 19000,
    available: true,
    variants: R_L(19000, 22000),
  },
  {
    id: 'jasmine-tea',
    name: 'Jasmine Tea',
    category: 'Beri Non Kopi',
    price: 19000,
    available: true,
    variants: R_L(19000, 22000),
  },
  {
    id: 'lychee-tea',
    name: 'Lychee Tea',
    category: 'Beri Non Kopi',
    price: 19000,
    available: true,
    variants: R_L(19000, 22000),
  },
  {
    id: 'teh-beri-tetangga',
    name: 'Teh Beri Tetangga',
    category: 'Beri Non Kopi',
    price: 19000,
    available: true,
    variants: R_L(19000, 22000),
  },

  // ── Add On ───────────────────────────────────────────────────────
  {
    id: 'addon-ice-cube',
    name: 'Ice Cube',
    category: 'Add On',
    price: 5000,
    available: true,
  },
  {
    id: 'addon-espresso',
    name: 'Espresso',
    category: 'Add On',
    price: 5000,
    available: true,
  },
  {
    id: 'addon-whipped-cream',
    name: 'Whipped Cream',
    category: 'Add On',
    price: 6000,
    available: true,
  },
  {
    id: 'addon-all-syrup',
    name: 'All Syrup',
    category: 'Add On',
    price: 6000,
    available: true,
  },
  {
    id: 'addon-gula-aren',
    name: 'Gula Aren',
    category: 'Add On',
    price: 6000,
    available: true,
  },
  {
    id: 'addon-air-mineral',
    name: 'Air Mineral Botol',
    category: 'Add On',
    price: 8000,
    available: true,
  },

  // ── Main Course ──────────────────────────────────────────────────
  {
    id: 'nasi-goreng-beri-dari-sini',
    name: 'Nasi Goreng Beri Dari Sini',
    category: 'Main Course',
    price: 23000,
    available: true,
  },
  {
    id: 'nasi-goreng-beri-dari-hongkong',
    name: 'Nasi Goreng Beri Dari Hongkong',
    category: 'Main Course',
    price: 19000,
    available: true,
  },
  {
    id: 'nasi-goreng-bakso-rempah-rendang',
    name: 'Nasi Goreng Bakso Rempah Rendang',
    category: 'Main Course',
    price: 23000,
    available: true,
  },
  {
    id: 'nasi-ayam-geprek-sambal-matah',
    name: 'Nasi Ayam Geprek Sambal Matah + Telur',
    category: 'Main Course',
    price: 25000,
    available: true,
  },
  {
    id: 'nasi-ayam-geprek-sambal-bawang',
    name: 'Nasi Ayam Geprek Sambal Bawang + Telur',
    category: 'Main Course',
    price: 25000,
    available: true,
  },
  {
    id: 'nasi-kulit-sambal-bawang',
    name: 'Nasi Kulit Sambal Bawang + Telur',
    category: 'Main Course',
    price: 25000,
    available: true,
  },
  {
    id: 'spaghetti-aglio-e-olio',
    name: 'Spaghetti Aglio e Olio',
    category: 'Main Course',
    price: 26000,
    available: true,
  },
  {
    id: 'spaghetti-bolognese',
    name: 'Spaghetti Bolognese',
    category: 'Main Course',
    price: 26000,
    available: true,
  },
  {
    id: 'spaghetti-carbonara',
    name: 'Spaghetti Carbonara',
    category: 'Main Course',
    price: 26000,
    available: true,
  },
  {
    id: 'ricebowl-chicken-sambal-matah',
    name: 'Ricebowl Chicken Sambal Matah',
    category: 'Main Course',
    price: 26000,
    available: true,
  },
  {
    id: 'ricebowl-chicken-oriental',
    name: 'Ricebowl Chicken Oriental',
    category: 'Main Course',
    price: 27000,
    available: true,
  },
  {
    id: 'ricebowl-chicken-salted-egg',
    name: 'Ricebowl Chicken Salted Egg',
    category: 'Main Course',
    price: 26000,
    available: true,
  },
  {
    id: 'ricebowl-beef-saikoro',
    name: 'Ricebowl Beef Saikoro',
    category: 'Main Course',
    price: 36000,
    available: true,
  },
  {
    id: 'fried-chicken-original',
    name: 'Fried Chicken Original',
    category: 'Main Course',
    price: 18000,
    available: true,
  },
  {
    id: 'fried-chicken-spicy',
    name: 'Fried Chicken Spicy',
    category: 'Main Course',
    price: 19000,
    available: true,
  },

  // ── Snack ────────────────────────────────────────────────────────
  {
    id: 'beri-kentang',
    name: 'Beri Kentang',
    category: 'Snack',
    price: 16000,
    available: true,
  },
  {
    id: 'beri-cireng',
    name: 'Beri Cireng',
    category: 'Snack',
    price: 15000,
    available: true,
  },
  {
    id: 'beri-tahu-lada-garam',
    name: 'Beri Tahu Lada Garam',
    category: 'Snack',
    price: 18000,
    available: true,
  },
  {
    id: 'beri-mix-platter',
    name: 'Beri Mix Platter',
    category: 'Snack',
    price: 28000,
    available: true,
  },
  {
    id: 'beri-tempe',
    name: 'Beri Tempe',
    category: 'Snack',
    price: 15000,
    available: true,
  },
  {
    id: 'tahu-gejrot',
    name: 'Tahu Gejrot',
    category: 'Snack',
    price: 16000,
    description: 'Ditulis "Tahu Gejrot" pada menu asli.',
    available: true,
  },
  {
    id: 'batagor',
    name: 'Batagor',
    category: 'Snack',
    price: 19000,
    available: true,
  },
  {
    id: 'pempek',
    name: 'Pempek',
    category: 'Snack',
    price: 20000,
    available: true,
  },
  {
    id: 'siomay-udang',
    name: 'Siomay Udang',
    category: 'Snack',
    price: 25000,
    available: true,
  },
  {
    id: 'siomay-ayam',
    name: 'Siomay Ayam',
    category: 'Snack',
    price: 25000,
    available: true,
  },
  {
    id: 'lumpia-kulit-tahu',
    name: 'Lumpia Kulit Tahu',
    category: 'Snack',
    price: 25000,
    available: true,
  },
  {
    id: 'wonton-goreng',
    name: 'Wonton Goreng',
    category: 'Snack',
    price: 25000,
    available: true,
  },
  {
    id: 'chicken-finger',
    name: 'Chicken Finger',
    category: 'Snack',
    price: 16000,
    available: true,
  },
  {
    id: 'crispy-chicken-skin',
    name: 'Crispy Chicken Skin',
    category: 'Snack',
    price: 18000,
    available: true,
  },
  {
    id: 'cimol',
    name: 'Cimol',
    category: 'Snack',
    price: 16000,
    available: true,
  },
  {
    id: 'cuanki',
    name: 'Cuanki',
    category: 'Snack',
    price: 19000,
    available: true,
  },
  {
    id: 'beri-pudding',
    name: 'Beri Pudding',
    category: 'Snack',
    price: 16000,
    available: true,
  },

  // ── Roti & Pisang ────────────────────────────────────────────────
  {
    id: 'beri-roti-cokelat',
    name: 'Beri Roti Cokelat',
    category: 'Roti & Pisang',
    price: 19000,
    available: true,
  },
  {
    id: 'beri-roti-keju',
    name: 'Beri Roti Keju',
    category: 'Roti & Pisang',
    price: 19000,
    available: true,
  },
  {
    id: 'beri-roti-strawberry',
    name: 'Beri Roti Strawberry',
    category: 'Roti & Pisang',
    price: 19000,
    available: true,
  },
  {
    id: 'beri-roti-tiramisu',
    name: 'Beri Roti Tiramisu',
    category: 'Roti & Pisang',
    price: 19000,
    available: true,
  },
  {
    id: 'beri-roti-cokelat-keju',
    name: 'Beri Roti Cokelat Keju',
    category: 'Roti & Pisang',
    price: 21000,
    available: true,
  },
  {
    id: 'pisang-cokelat',
    name: 'Pisang Cokelat',
    category: 'Roti & Pisang',
    price: 18000,
    available: true,
  },
  {
    id: 'pisang-keju',
    name: 'Pisang Keju',
    category: 'Roti & Pisang',
    price: 18000,
    available: true,
  },
  {
    id: 'pisang-strawberry',
    name: 'Pisang Strawberry',
    category: 'Roti & Pisang',
    price: 18000,
    available: true,
  },
  {
    id: 'pisang-tiramisu',
    name: 'Pisang Tiramisu',
    category: 'Roti & Pisang',
    price: 18000,
    available: true,
  },
  {
    id: 'nasi-putih',
    name: 'Nasi Putih',
    category: 'Roti & Pisang',
    price: 7000,
    available: true,
  },
  {
    id: 'kerupuk',
    name: 'Kerupuk',
    category: 'Roti & Pisang',
    price: 4000,
    available: true,
  },
  {
    id: 'scramble-egg-telur',
    name: 'Scramble Egg / Telur (Dadar / Ceplok)',
    category: 'Roti & Pisang',
    price: 5000,
    available: true,
  },
  {
    id: 'sambal',
    name: 'Sambal',
    category: 'Roti & Pisang',
    price: 6000,
    available: true,
  },
  {
    id: 'topping-roti-pisang',
    name: 'Topping: Keju, Cokelat, Tiramisu, Strawberry',
    category: 'Roti & Pisang',
    price: 5000,
    available: true,
  },
]

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  })
    .format(price)
    .replace(/\u00a0/g, ' ')

export const formatCompactPrice = (price: number): string => `${price / 1000}K`

export const productsByCategory = (category: string): Product[] =>
  products.filter((product) => product.category === category)

export const getFeaturedProducts = (): Product[] =>
  ['beri-kopi', 'love-berry-much', 'matcha-strawberry', 'beri-creamy', 'ricebowl-chicken-sambal-matah', 'beri-roti-cokelat-keju']
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product))

export const categoryCounts = PRODUCT_CATEGORIES.map((category) => ({
  category,
  count: productsByCategory(category).length,
}))

export const foodCategories: string[] = ['Main Course', 'Snack', 'Roti & Pisang']
export const drinkCategories: string[] = PRODUCT_CATEGORIES.filter(
  (category) => !foodCategories.includes(category),
)

export const totalProducts = products.length
export const totalDrinks = products.filter((product) => drinkCategories.includes(product.category)).length
export const totalFood = products.filter((product) => foodCategories.includes(product.category)).length
