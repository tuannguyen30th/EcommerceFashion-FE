import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination"; // Import các thành phần của Pagination
import { ProductCard } from "@/components/local/product-card";
import { Product } from "@/types/product";
import { Link } from "react-router-dom";
const PRODUCTS_PER_PAGE = 4; 
interface ProductListProps {
  title: string;
  products: Product[];
}

const ProductHomeList: React.FC<ProductListProps> = ({ title, products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, products.length);
  const visibleProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <Link
            to="/productList"
            className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Show all
          </Link> 
        </div>
      </div>
    </section>
  );
};

export default ProductHomeList;
