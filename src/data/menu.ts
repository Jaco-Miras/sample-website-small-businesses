import type { MenuCategory, MenuItem } from '@/types'

export const MENU_CATEGORIES: MenuCategory[] = [
  'All',
  'Espresso',
  'Pinoy Signatures',
  'Non-Coffee',
  'Pastries',
]

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'muscovado-spanish-latte',
    name: 'Muscovado Spanish Latte',
    category: 'Pinoy Signatures',
    description:
      'Double ristretto of Benguet Arabica steamed with silky milk and unrefined dark Negros muscovado sugar.',
    price: 165,
    servingNote: 'Hot / Iced · 12 oz',
    badge: 'Signature',
  },
  {
    id: 'kapeng-barako-pourover',
    name: 'Kapeng Barako Pour-Over',
    category: 'Pinoy Signatures',
    description:
      'Hand-poured Lipa, Batangas Liberica with rich, aromatic notes of dark cacao, langka, and warm toasted spice.',
    price: 150,
    servingNote: 'Single Origin · Hot',
    badge: 'Local Heritage',
  },
  {
    id: 'davao-tablea-mocha',
    name: 'Davao Tablea Mocha',
    category: 'Pinoy Signatures',
    description:
      'Single-estate Davao roasted cacao tablea melted into freshly pulled espresso and velvety micro-foamed milk.',
    price: 175,
    servingNote: 'Hot / Iced · 12 oz',
    badge: 'House Favorite',
  },
  {
    id: 'sea-salt-oat-latte',
    name: 'Sea Salt Oat Latte',
    category: 'Espresso',
    description:
      'Smooth double-shot espresso layered over creamy barista oat milk, finished with a subtle sea-salt cream cap.',
    price: 185,
    servingNote: 'Iced · 12 oz',
  },
  {
    id: 'mt-apo-americano',
    name: 'Mt. Apo Americano',
    category: 'Espresso',
    description:
      'Clean, crisp double espresso from Mt. Apo Highlands served over filtered water or crystal-clear ice.',
    price: 130,
    servingNote: 'Hot / Iced · 12 oz',
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    category: 'Espresso',
    description:
      'Balanced double ristretto topped with fine, glossy micro-foam for a smooth and naturally sweet cup.',
    price: 155,
    servingNote: 'Hot · 8 oz',
  },
  {
    id: 'ceremonial-matcha',
    name: 'Ceremonial Matcha Latte',
    category: 'Non-Coffee',
    description:
      'Stone-ground Uji matcha hand-whisked to order with cold milk and a light drizzle of local wildflower honey.',
    price: 175,
    servingNote: 'Hot / Iced · 12 oz',
  },
  {
    id: 'calamansi-tonic',
    name: 'Calamansi Cold Brew Tonic',
    category: 'Non-Coffee',
    description:
      'Fresh native calamansi juice over chilled tonic water, topped with a slow-poured float of 18-hour cold brew.',
    price: 160,
    servingNote: 'Iced · 12 oz',
    badge: 'Seasonal',
  },
  {
    id: 'ensaymada-brioche',
    name: 'Ensaymada Brioche',
    category: 'Pastries',
    description:
      'Soft, pillowy butter brioche brushed with cultured butter and finished with finely grated queso de bola.',
    price: 120,
    servingNote: 'Baked Fresh Daily',
    badge: 'Best Pairing',
  },
  {
    id: 'ube-pan-de-coco-danish',
    name: 'Ube Pan de Coco Danish',
    category: 'Pastries',
    description:
      'Crisp, flaky laminated pastry filled with slow-cooked ube halaya and caramelized toasted coconut.',
    price: 135,
    servingNote: 'Baked Fresh Daily',
  },
]

export const FEATURED_MENU_ITEM: MenuItem = MENU_ITEMS[0]
