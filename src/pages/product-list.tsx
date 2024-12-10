import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "../components/ui/button";
import { ProductCard } from "@/components/local/product-card";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
} from "lucide-react";
import type { FilterState } from "../types/product";
import { Product } from "@/types/product";
import { Link } from "react-router-dom";
import { newArrivals } from "@/data/product";
import { Pagination } from "@/components/local/pagination";

const PRODUCTS_PER_PAGE = 20; 

const ProductList: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 200],
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(newArrivals.length / PRODUCTS_PER_PAGE)

  const currentProducts = newArrivals.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  )


  // State to manage which filter sections are expanded
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    categories: true,
    price: true,
    colors: true,
    sizes: true,
    dressStyle: true,
  });

  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
  const colors = [
    { name: "Green", value: "#22C55E" },
    { name: "Red", value: "#EF4444" },
    { name: "Yellow", value: "#EAB308" },
    { name: "Orange", value: "#F97316" },
    { name: "Blue", value: "#3B82F6" },
    { name: "Purple", value: "#A855F7" },
    { name: "Pink", value: "#EC4899" },
    { name: "White", value: "#FFFFFF" },
    { name: "Black", value: "#000000" },
  ];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
  ];
  const dressStyles = ["Casual", "Formal", "Party", "Gym"];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const clearFilters = () => {
    setFilters({
      priceRange: [50, 200],
    });
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Link
          to="/"
          className="mb-4 text-sm text-gray-600 hover:text-gray-900 hover:underline flex"
        >
          <ArrowLeft /> Back to home
        </Link>
      </div>
      <>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Casual</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Showing {(currentPage - 1) * PRODUCTS_PER_PAGE + 1}-
              {Math.min(currentPage * PRODUCTS_PER_PAGE, newArrivals.length)} of{" "}
              {newArrivals.length} Products
            </span>
            <select className="border rounded-md px-3 py-2">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Categories</h3>
                <button onClick={() => toggleSection("categories")}>
                  {expandedSections.categories ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
              {expandedSections.categories && (
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <button className="text-sm hover:text-gray-900 text-gray-600">
                        {category}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Price Range */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Price</h3>
                <button onClick={() => toggleSection("price")}>
                  {expandedSections.price ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
              {expandedSections.price && (
                <Slider
                  defaultValue={[0, 200]}
                  max={500}
                  step={1}
                  className="w-full"
                  onValueChange={(value) =>
                    setFilters({
                      ...filters,
                      priceRange: value as [number, number],
                    })
                  }
                />
              )}
              {expandedSections.price && (
                <div className="flex items-center justify-between">
                  <span className="text-sm">${filters.priceRange?.[0]}</span>
                  <span className="text-sm">${filters.priceRange?.[1]}</span>
                </div>
              )}
            </div>

            {/* Colors */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Colors</h3>
                <button onClick={() => toggleSection("colors")}>
                  {expandedSections.colors ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
              {expandedSections.colors && (
                <div className="grid grid-cols-5 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      className="w-8 h-8 rounded-full border hover:ring-2 hover:ring-offset-2 hover:ring-black"
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Sizes */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Size</h3>
                <button onClick={() => toggleSection("sizes")}>
                  {expandedSections.sizes ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
              {expandedSections.sizes && (
                <div className="grid grid-cols-2 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 text-sm border rounded-md hover:border-black"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}
            </div>

           {/* Dress Style */}
           <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Dress Style</h3>
                <button onClick={() => toggleSection("dressStyle")}>
                  {expandedSections.dressStyle ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
              {expandedSections.dressStyle && (
                <div className="space-y-2">
                  {dressStyles.map((style) => (
                    <button
                      key={style}
                      className="block text-sm text-gray-600 hover:text-gray-900"
                    >
                      {style}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Button className="w-full">Apply Filter</Button>
          </div>

          {/* Product Cards */}
          <div className="col-span-3">
            <div className="grid grid-cols-5 gap-2">
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductList;
