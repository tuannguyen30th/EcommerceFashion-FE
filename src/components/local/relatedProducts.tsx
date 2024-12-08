import React, { useState } from 'react';
import { ProductCard } from '@/components/local/productCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button"

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
      id: "5",
      name: "Vintage Denim Jacket",
      price: 280,
      originalPrice: 320,
      rating: 4.8,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "6",
      name: "Classic White Sneakers",
      price: 95,
      rating: 4.2,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "7",
      name: "Leather Messenger Bag",
      price: 199,
      originalPrice: 250,
      rating: 4.7,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "8",
      name: "Slim Fit Chino Pants",
      price: 85,
      rating: 4.3,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "9",
      name: "Wool Blend Overcoat",
      price: 350,
      originalPrice: 400,
      rating: 4.9,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "10",
      name: "Printed Silk Scarf",
      price: 65,
      rating: 4.1,
      maxRating: 5,
      image: "/placeholder.svg"
    },
    {
      id: "11",
      name: "Leather Belt",
      price: 45,
      rating: 4.4,
      maxRating: 5,
      image: "/placeholder.svg"
    }
  ];
  
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(relatedProducts.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1));
  };

  // Slice the products array to only show the items for the current page
  const currentProducts = relatedProducts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className="mt-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">You Might Also Like</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8 gap-4">
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === pageCount - 1}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
