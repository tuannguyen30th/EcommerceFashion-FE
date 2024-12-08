import React from 'react';
import { ProductCard } from '@/components/local/productCard';

const RelatedProducts: React.FC = () => {
  const relatedProducts = [
    {
      id: "1",
      name: "Polo with Contrast Trims",
      price: 212,
      originalPrice: 242,
      rating: 4.0,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "2",
      name: "Gradient Graphic T-shirt",
      price: 145,
      rating: 3.5,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "3",
      name: "Polo with Tipping Details",
      price: 180,
      rating: 4.5,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "4",
      name: "Black Striped T-shirt",
      price: 120,
      originalPrice: 150,
      rating: 5.0,
      maxRating: 5,
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8">YOU MIGHT ALSO LIKE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;

