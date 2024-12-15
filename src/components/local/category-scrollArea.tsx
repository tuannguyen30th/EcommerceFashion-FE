import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Link } from "react-router-dom";

interface Category {
  name: string;
  href: string;
}
const categories: Category[] = [
  { name: "Men's Fashion", href: "/category/mens-fashion" },
  { name: "Women's Fashion", href: "/category/womens-fashion" },
  { name: "Electronics", href: "/category/electronics" },
  { name: "Home & Living", href: "/category/home-living" },
  { name: "Beauty", href: "/category/beauty" },
  { name: "Sports", href: "/category/sports" },
  { name: "Books", href: "/category/books" },
  { name: "Toys", href: "/category/toys" },
  { name: "Men's Fashion", href: "/category/mens-fashion" },
  { name: "Men's Fashion", href: "/category/mens-fashion" },
  { name: "Men's Fashion", href: "/category/mens-fashion" },
  { name: "Men's Fashion", href: "/category/mens-fashion" },
  { name: "Men's Fashion", href: "/category/mens-fashion" },
  { name: "Men's Fashion", href: "/category/mens-fashion" },
  { name: "Men's Fashion", href: "/category/mens-fashion" },
  { name: "Men's Fashion", href: "/category/mens-fashion" },
  { name: "Automotive", href: "/category/automotive" },
];

function CategoryScrollArea() {
  return (
    <div className="container pb-8">
      {/* Top Categories Bar */}
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4 ">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {category.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default CategoryScrollArea;
