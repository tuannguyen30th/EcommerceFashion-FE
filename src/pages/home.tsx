import React, { useState } from "react";
import Hero from "@/components/local/hero";
import { ProductGrid } from "@/components/local/product-grid";
import Testimonials from "@/components/local/testimonials";
import { newArrivals, topSelling } from "@/data/product";
import ProductArrival from "@/components/local/product-arrivals";
import { CategoryGrid } from "@/components/local/category-grid";
import { Pagination } from "@/components/local/pagination";
import { Brands } from "@/components/local/brand";
import { ProductCard } from "@/components/local/product-card";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;
  const totalPages = Math.ceil(topSelling.length / productsPerPage);

  const currentProducts = topSelling.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  return (
    <div className="min-h-screen">
      <Hero />
      <CategoryGrid />
      <ProductArrival
        title="NEW ARRIVALS"
        products={newArrivals}
        showNavigation
      />
      <section className="py-12">
        <div className="container mx-auto p-10 bg-slate-100 rounded-[5px]">
          {/* <h2 className="text-2xl font-bold mb-8">TOP SELLINGS</h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </section>

      <Brands />
      <Testimonials />
    </div>
  );
};

export default HomePage;
