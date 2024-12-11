import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Pagination } from "./pagination";

interface Category {
  name: string;
  href: string;
}

interface Item {
  id: string;
  name: string;
}

interface SubCategory {
  id: string;
  name: string;
  href: string;
  items: Item[];
  image: string;
}

const categories: Category[] = [
  {
    name: "Men's Fashion",
    href: "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
  },
  {
    name: "Women's Fashion",
    href: "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
  },
  {
    name: "Electronics",
    href: "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
  },
  {
    name: "Home & Living",
    href: "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
  },
  { name: "Beauty", href: "/category/beauty" },
  { name: "Sports", href: "/category/sports" },
  { name: "Books", href: "/category/books" },
  { name: "Toys", href: "/category/toys" },
  { name: "Automotive", href: "/category/automotive" },
  { name: "Automotive", href: "/category/automotive" },
  { name: "Automotive", href: "/category/automotive" },
  { name: "Automotive", href: "/category/automotive" },
  { name: "Automotive", href: "/category/automotive" },
  { name: "Automotive", href: "/category/automotive" },
  { name: "Automotive", href: "/category/automotive" },
  { name: "Automotive", href: "/category/automotive" },
];

const popularSubCategories: SubCategory[] = [
  {
    id: "1",
    name: "Casual Wear",
    href: "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
    items: [
      { id: "1", name: "T-Shirts" },
      { id: "2", name: "Jeans" },
    ],
    image:
      "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
  },
  {
    id: "2",
    name: "Formal Wear",
    href: "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
    items: [
      { id: "1", name: "Suits" },
      { id: "2", name: "Dress Shirts" },
    ],
    image:
      "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
  },
  {
    id: "3",
    name: "Sportswear",
    href: "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
    items: [
      { id: "1", name: "Athletic Shorts" },
      { id: "2", name: "Running Shoes" },
    ],
    image:
      "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
  },
  {
    id: "4",
    name: "Accessories",
    href: "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
    items: [
      { id: "1", name: "Watches" },
      { id: "2", name: "Belts" },
    ],
    image:
      "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
  },
  {
    id: "5",
    name: "Accessories",
    href: "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
    items: [
      { id: "1", name: "Watches" },
      { id: "2", name: "Belts" },
    ],
    image:
      "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
  },
];

const exploreCategories: SubCategory[] = [
  {
    id: "1",
    name: "T-Shirts & Tops",
    href: "/category/t-shirts-tops",
    items: [
      { id: "1", name: "Graphic Tees" },
      { id: "2", name: "Basic T-Shirts" },
    ],
    image:
      "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
  },
  {
    id: "2",
    name: "Pants & Jeans",
    href: "/category/pants-jeans",
    items: [
      { id: "1", name: "Slim Fit Jeans" },
      { id: "2", name: "Chinos" },
    ],
    image:
      "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
  },
  {
    id: "3",
    name: "Outerwear",
    href: "/category/outerwear",
    items: [
      { id: "1", name: "Jackets" },
      { id: "2", name: "Hoodies" },
    ],
    image:
      "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
  },
  {
    id: "4",
    name: "Activewear",
    href: "/category/activewear",
    items: [
      { id: "1", name: "Workout Shirts" },
      { id: "2", name: "Yoga Pants" },
    ],
    image:
      "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
  },
  {
    id: "5",
    name: "Activewear",
    href: "/category/activewear",
    items: [
      { id: "1", name: "Workout Shirts" },
      { id: "2", name: "Yoga Pants" },
    ],
    image:
      "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3",
  },
];

export function CategoryNavigation() {
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 10;
    const totalPages = Math.ceil(exploreCategories.length / productsPerPage)
  
    const currentExploreCategories = exploreCategories.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    )
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Top Categories Bar */}
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
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

      {/* Category Banner */}
      <div className="mt-8 rounded-xl bg-primary/10 p-12 text-center">
        <div className="mx-auto max-w-md">
          <img
            src="https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KhqbuGrpcVEQ7kNvgH0OfNR&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=AjMKSFt39HKCtyrXhw66_Aw&oh=00_AYCXNgyfMPiLoqqkn7bQlUSvJu1VpQ3IGODQMQi6M2XSuw&oe=675F85A3"
            alt="Men's Fashion"
            className="mx-auto mb-4 w-16 h-16 rounded-full"
          />
          <h1 className="text-3xl font-bold text-primary">Men's Fashion</h1>
        </div>
      </div>

      {/* Most Popular Section */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Most Popular in Men's Fashion</h2>
          <div className="flex space-x-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {popularSubCategories.map((subcategory) => (
            <NavigationMenu key={subcategory.name}>
              <NavigationMenuList>
                <NavigationMenuItem className="bg-gray-200">
                  <NavigationMenuTrigger className="bg-primary/10 hover:bg-primary/20 w-[250px] text-[17px]">
                    {subcategory.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink asChild>
                      <div className="w-[400px] rounded-lg border bg-card overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                          <div className="relative aspect-square md:aspect-auto">
                            <img
                              src={subcategory.image}
                              alt={subcategory.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">
                              {subcategory.name}
                            </h3>
                            <ScrollArea className="h-[200px]">
                              <nav>
                                <ul className="space-y-2">
                                  {subcategory.items.map((item) => (
                                    <li key={item.id}>
                                      <Link
                                        to={`/${subcategory.href}/${item.name
                                          .toLowerCase()
                                          .replace(/\s+/g, "-")}`}
                                        className="text-sm text-muted-foreground hover:text-primary"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </nav>
                            </ScrollArea>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ))}
        </div>
      </div>

      {/* Explore Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Explore Men's Fashion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {currentExploreCategories.map((category, index) => (
            <Card key={category.id} className="group">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <Link
                    key={index}
                    to={category.href}
                    className="flex items-center justify-between mb-4 font-medium hover:text-primary"
                  >
                    {category.name}
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <ScrollArea className="h-[200px]">
                    <ul className="space-y-2">
                      {category.items.map((item, index) => (
                        <li key={item.id}>
                          <Link
                            key={index}
                            to={`${category.href}/${item.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </CardContent>
            </Card>
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
    </div>
  );
}
