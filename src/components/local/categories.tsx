import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Category } from "@/types/product";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories: Category[] = [
  {
    name: "Casual",
    image: "/placeholder.svg",
    href: "/category/casual",
  },
  {
    name: "Formal",
    image: "/placeholder.svg",
    href: "/category/formal",
  },
  {
    name: "Party",
    image: "/placeholder.svg",
    href: "/category/party",
  },
  {
    name: "Gym",
    image: "/placeholder.svg",
    href: "/category/gym",
  },{
    name: "Gym",
    image: "/placeholder.svg",
    href: "/category/gym",
  },{
    name: "Gym",
    image: "/placeholder.svg",
    href: "/category/gym",
  },{
    name: "Gym",
    image: "/placeholder.svg",
    href: "/category/gym",
  },{
    name: "Gym",
    image: "/placeholder.svg",
    href: "/category/gym",
  },{
    name: "Gym",
    image: "/placeholder.svg",
    href: "/category/gym",
  },{
    name: "Gym",
    image: "/placeholder.svg",
    href: "/category/gym",
  },{
    name: "Gym",
    image: "/placeholder.svg",
    href: "/category/gym",
  },
];

const Categories: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (visibleIndex + itemsPerPage < categories.length) {
      setVisibleIndex((prev) => prev + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (visibleIndex > 0) {
      setVisibleIndex((prev) => Math.max(prev - itemsPerPage, 0));
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">BROWSE BY DRESS STYLE</h2>
        <div className="relative">
          {/* Arrow Left */}
          {visibleIndex > 0 && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg z-10"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          {/* Arrow Right */}
          {visibleIndex + itemsPerPage < categories.length && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg z-10"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden">
            {categories.slice(visibleIndex, visibleIndex + itemsPerPage).map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;