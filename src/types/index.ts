export type MenuCategory =
  | 'All'
  | 'Espresso'
  | 'Pinoy Signatures'
  | 'Non-Coffee'
  | 'Pastries'

export type DishCategory = Exclude<MenuCategory, 'All'>

export interface NavLink {
  label: string
  href: string
}

export type SocialPlatform = 'facebook' | 'instagram' | 'x' | 'tiktok'

export interface SocialItem {
  platform: SocialPlatform
  label: string
}

export interface RoasteryHighlight {
  id: string
  number: string
  title: string
  description: string
}

export interface MenuItem {
  id: string
  name: string
  category: DishCategory
  description: string
  price: number
  servingNote: string
  badge?: string
}

export interface LocationItem {
  id: string
  branch: string
  region: string
  address: string
  hours: string
  status: string
}
