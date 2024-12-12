import { BrandHero } from "@/components/local/brand-hero";
import { BrandCategoryCard } from "@/components/local/brand-category-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { categories } from "@/data/product";
import { BrandCategoryCardProps, BrandHeroProps } from "@/types/product";
import { Pagination } from "@/components/local/pagination";
import { useState } from "react";

const categoriesBrand: BrandHeroProps = {
  name: "UrbanStyle",
  description:
    "Elevate your everyday look with our modern, comfortable, and versatile clothing line.",
  logo: "/brands/urbanstyle-logo.svg",
  coverImage: "/brands/urbanstyle-cover.jpg",
};

const brandCategoryCard: BrandCategoryCardProps[] = [
  {
    name: "Men's Apparel",
    description: "Stylish and comfortable clothing for the modern man.",
    image: "/categories/mens-apparel.jpg",
    href: "/brands/urbanstyle/mens-apparel",
  },
  {
    name: "Men's Apparel",
    description: "Stylish and comfortable clothing for the modern man.",
    image: "/categories/mens-apparel.jpg",
    href: "/brands/urbanstyle/mens-apparel",
  },
  {
    name: "Men's Apparel",
    description: "Stylish and comfortable clothing for the modern man.",
    image: "/categories/mens-apparel.jpg",
    href: "/brands/urbanstyle/mens-apparel",
  },
  {
    name: "Men's Apparel",
    description: "Stylish and comfortable clothing for the modern man.",
    image: "/categories/mens-apparel.jpg",
    href: "/brands/urbanstyle/mens-apparel",
  },
  {
    name: "Men's Apparel",
    description: "Stylish and comfortable clothing for the modern man.",
    image: "/categories/mens-apparel.jpg",
    href: "/brands/urbanstyle/mens-apparel",
  },
  {
    name: "Men's Apparel",
    description: "Stylish and comfortable clothing for the modern man.",
    image: "/categories/mens-apparel.jpg",
    href: "/brands/urbanstyle/mens-apparel",
  },
];

export default function UrbanStyleBrandPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 4;
    const totalPages = Math.ceil(brandCategoryCard.length / productsPerPage)
  
    const currentExploreCategories = brandCategoryCard.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    )
  return (
    <div className="container mx-auto px-4 py-8">
      <BrandHero
        name={categoriesBrand.name}
        description={categoriesBrand.description}
        logo={categoriesBrand.logo}
        coverImage={categoriesBrand.coverImage}
      />

      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentExploreCategories.map((data, indexx) => (
            <BrandCategoryCard
              name={data.name}
              image={data.image}
              href={data.href}
            />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </div>
  );
}
