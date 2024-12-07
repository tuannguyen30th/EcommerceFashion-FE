export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    maxRating: number;
    image: string;
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
  
  