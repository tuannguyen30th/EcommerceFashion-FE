export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  maxRating: number;
  image: string;
  images?: string[];
  colors?: { name: string; value: string }[];
  sizes?: string[];
  description?: string;
}

export interface Category {
  id?: number;
  name: string;
  image: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
}
export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  photos: string[];
}

export interface FilterState {
  category?: string;
  priceRange?: [number, number];
  colors?: string[];
  sizes?: string[];
  dressStyle?: string[];
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  image: string;
  quantity: number;
}

export interface CheckoutFormData {
  lastName: string;
  firstName: string;
  phoneNumber: string;
  province: string;
  district: string;
  ward: string;
  specificAddress: string;
  additionalNotes: string;
  paymentMethod: "cod" | "card";
}

export interface OrderItem {
  id: string;
  name?: string;
  type?: string;
  price?: number;
  quantity?: number;
  category?: string;
  originalPrice: number;
  discountedPrice: number;
  image?: string;
  status?: "completed" | "cancelled" | "processing" | "shipping";
}
export interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  maxRating: number;
  image: string;
}
export interface ShopInfo {
  id:string
  name: string;
  rating?: number;
  totalReviews?: number;
  followers?: number;
  description: string;
  logo: string;
}
export interface WishlistItem{
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  image: string;
  quantity: number;
}

export interface ShopInfoProps {
  name: string
  rating: number
  totalReviews: number
  followers: number
  description: string
  logo: string
}

export interface BrandHeroProps {
  name: string
  description: string
  logo: string
  coverImage: string
}
export interface BrandCategoryCardProps {
  name: string
  description: string
  image: string
  href: string
}
