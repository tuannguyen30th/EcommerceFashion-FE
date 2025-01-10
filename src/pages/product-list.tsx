import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "../components/ui/button";
import { ProductCard } from "@/components/local/product-card";
import { ArrowLeft, ChevronDown, ChevronUp, SlidersHorizontal, Star } from 'lucide-react';
import type { FilterState } from "../types/product";
import { Product } from "@/types/product";
import { Link } from "react-router-dom";
import { newArrivals } from "@/data/product";
import { Pagination } from "@/components/local/pagination";
import CategoryScrollArea from "@/components/local/category-scrollArea";

const PRODUCTS_PER_PAGE = 20;

const ProductListPage: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 200],
    rating: 0,
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sizeType, setSizeType] = useState<"clothes" | "shoes">("shoes");
  const totalPages = Math.ceil(newArrivals.length / PRODUCTS_PER_PAGE);

  const currentProducts = newArrivals.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  // State to manage which filter sections are expanded
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    subcategories: true,
    price: true,
    colors: true,
    sizes: true,
    style: true,
    rating: true,
  });

  const shoeSubcategories = [
    "Sneakers",
    "Boots",
    "Sandals",
    "Dress Shoes",
    "Athletic Shoes",
    "Loafers",
    "Slip-Ons",
    "Hiking Shoes",
    "Oxfords",
    "Flats"
  ];

  const colors = [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Brown", value: "#964B00" },
    { name: "Navy", value: "#000080" },
    { name: "Gray", value: "#808080" },
    { name: "Red", value: "#FF0000" },
    { name: "Blue", value: "#0000FF" },
    { name: "Green", value: "#008000" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Pink", value: "#FFC0CB" },
  ];
  const clothesSizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL"];
  const shoeSizes = [
    { us: "6", eu: "39" },
    { us: "7", eu: "40" },
    { us: "8", eu: "41" },
    { us: "9", eu: "42" },
    { us: "10", eu: "43" },
    { us: "11", eu: "44" },
    { us: "12", eu: "45" },
    { us: "13", eu: "46" },
  ];

  const brands = [ 
    "Nike",
    "Adidas",
    "Puma",
    "Reebok",
    "New Balance",
    "Converse",
    "Vans",
    "Asics",
    "Skechers",
    "Under Armour"
  ];

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
      priceRange: [0, 200],
      rating: 0,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryScrollArea />
      <div>
        <Link
          to="/"
          className="mb-4 text-sm text-gray-600 hover:text-gray-900 hover:underline flex"
        >
          <ArrowLeft className="mr-2" /> Back to home
        </Link>
      </div>
      <>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Shoes</h1>
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

            {/* Subcategories */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Subcategories</h3>
                <button onClick={() => toggleSection("subcategories")}>
                  {expandedSections.subcategories ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
              {expandedSections.subcategories && (
                <div className="space-y-2">
                  {shoeSubcategories.map((subcategory) => (
                    <div key={subcategory} className="flex items-center">
                      <button className="text-sm hover:text-gray-900 text-gray-600">
                        {subcategory}
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

            {/* Rating Filter */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Rating</h3>
                <button onClick={() => toggleSection("rating")}>
                  {expandedSections.rating ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
              {expandedSections.rating && (
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <button
                      key={star}
                      className={`flex items-center space-x-2 text-sm ${
                        filters.rating === star ? 'text-primary' : 'text-gray-600'
                      }`}
                      onClick={() => setFilters({ ...filters, rating: star })}
                    >
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className={`w-4 h-4 ${
                              index < star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span>{star} & up</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Colors
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
            {/* <div className="space-y-4">
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
                <div className="space-y-4">
                  <Tabs defaultValue="clothes" onValueChange={(value) => setSizeType(value as "clothes" | "shoes")}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="clothes">Clothes</TabsTrigger>
                      <TabsTrigger value="shoes">Shoes</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  {sizeType === "clothes" ? (
                    <div className="grid grid-cols-4 gap-2">
                      {clothesSizes.map((size) => (
                        <button
                          key={size}
                          className="px-2 py-1 text-sm border rounded-md hover:border-black flex items-center justify-center"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-4 gap-2">
                      {shoeSizes.map((size) => (
                        <button
                          key={size.us}
                          className="px-2 py-1 text-sm border rounded-md hover:border-black flex flex-col items-center"
                        >
                          <span className="text-xs text-gray-500">{size.eu}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>  */}

            {/* Style */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Brand</h3>
                <button onClick={() => toggleSection("style")}>
                  {expandedSections.style ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
              {expandedSections.style && (
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      className="block text-sm text-gray-600 hover:text-gray-900"
                    >
                      {brand}
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
                <ProductCard key={product.id} product={product} />
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

export default ProductListPage;

