import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/local/productCard";
import { Product } from "@/types/product";

interface ProductArrivalProps {
  title: string;
  products: Product[];
  showNavigation?: boolean;
  itemsPerPage?: number; 
}

const ProductArrival: React.FC<ProductArrivalProps> = ({ title, products, showNavigation = false, itemsPerPage = 4 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cắt mảng sản phẩm để chỉ lấy sản phẩm cần hiển thị dựa trên currentIndex
  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < products.length) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, products.length - itemsPerPage));
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          {showNavigation && (
            <div className="flex space-x-2">
              {currentIndex > 0 && (
                <Button variant="outline" size="sm" onClick={handlePrev}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              )}
              {currentIndex + itemsPerPage < products.length && (
                <Button variant="outline" size="sm" onClick={handleNext}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductArrival;
