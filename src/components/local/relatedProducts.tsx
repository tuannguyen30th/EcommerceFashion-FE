import React, { useState } from 'react';
import { ProductCard } from '@/components/local/productCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    },
    {
      id: "4",
      name: "Black Striped T-shirt",
      price: 120,
      originalPrice: 150,
      rating: 5.0,
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollLeft = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleScrollRight = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, relatedProducts.length - 4));
  };
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8">YOU MIGHT ALSO LIKE</h2>
      <div className="flex items-center">
        <button
          onClick={handleScrollLeft}
          className="p-2 bg-gray-200 rounded-l-md hover:bg-gray-300"
          disabled={currentIndex === 0}
        >
          <ChevronLeft />
        </button>
        <div className="overflow-x-hidden flex w-full">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            style={{ transform: `translateX(-${currentIndex * 25}%)`, transition: 'transform 0.3s ease' }}
          >
            {relatedProducts.slice(currentIndex, currentIndex + 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <button
          onClick={handleScrollRight}
          className="p-2 bg-gray-200 rounded-r-md hover:bg-gray-300"
          disabled={currentIndex >= relatedProducts.length - 4}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default RelatedProducts;

