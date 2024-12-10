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

const ProductArrival: React.FC<ProductArrivalProps> = ({ title, products, showNavigation = false}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1));
  };

  // Slice the products array to only show the items for the current page
  const currentProducts = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          {showNavigation && (
            <div className="flex space-x-2">
              {currentPage > 0 && (
                <Button variant="outline" size="sm" onClick={handlePrevPage}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              )}
              {currentPage + itemsPerPage < products.length && (
                <Button variant="outline" size="sm" onClick={handleNextPage}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} isArrival={true}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductArrival;
