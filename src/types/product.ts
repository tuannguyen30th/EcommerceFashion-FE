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
    name: string;
    rating: number;
    comment: string;
    verified: boolean;
    date: string;
  }
  
  export interface FilterState {
    category?: string;
    priceRange?: [number, number];
    colors?: string[];
    sizes?: string[];
    dressStyle?: string[];
  }
  
  