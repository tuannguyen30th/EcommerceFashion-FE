import React, { useState } from 'react';
import { ProductCard } from '@/components/local/productCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { relatedProduct } from '@/data/product';

const RelatedProducts: React.FC = () => {
 
  const relatedProducts = relatedProduct;
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
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
    <section className="mt-16 px-4 sm:px-8 lg:px-16 border-t-2  ">
      <div className="max-w-7xl mx-auto mt-3">
        <h2 className="text-3xl font-bold mb-8 text-center">You Might Also Like</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
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
