import React from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from 'react-router-dom'
import CategoryScrollArea from './category-scrollArea'



interface SubCategory {
  name: string
  href: string
  image: string
}


const popularSubCategories: SubCategory[] = [
  { name: "Casual Wear suighsiduhgighfidughidfuhfi", href: "/category/casual-wear", image: "/placeholder.svg" },
  { name: "Formal Wear", href: "/category/formal-wear", image: "/placeholder.svg" },
  { name: "Sportswear", href: "/category/sportswear", image: "/placeholder.svg" },
  { name: "Accessories", href: "/category/accessories", image: "/placeholder.svg" },
  { name: "Accessories", href: "/category/accessories", image: "/placeholder.svg" },
  { name: "Accessories", href: "/category/accessories", image: "/placeholder.svg" },
  { name: "Accessories", href: "/category/accessories", image: "/placeholder.svg" },
  { name: "Accessories", href: "/category/accessories", image: "/placeholder.svg" }
]

const exploreCategories: SubCategory[] = [
  {
    name: "T-Shirts & Tops",
    href: "/category/t-shirts-tops",
    image: "/placeholder.svg"
  },
  {
    name: "Pants & Jeans",
    href: "/category/pants-jeans",
    image: "/placeholder.svg"
  },
  {
    name: "Outerwear",
    href: "/category/outerwear",
    image: "/placeholder.svg"
  },
  {
    name: "Activewear",
    href: "/category/activewear",
    image: "/placeholder.svg"
  },
  {
    name: "Activewear",
    href: "/category/activewear",
    image: "/placeholder.svg"
  },
  {
    name: "Activewear",
    href: "/category/activewear",
    image: "/placeholder.svg"
  },
  {
    name: "Activewear",
    href: "/category/activewear",
    image: "/placeholder.svg"
  },
  {
    name: "Activewear",
    href: "/category/activewear",
    image: "/placeholder.svg"
  },
  {
    name: "Activewear",
    href: "/category/activewear",
    image: "/placeholder.svg"
  },
  {
    name: "Activewear",
    href: "/category/activewear",
    image: "/placeholder.svg"
  },
  {
    name: "Activewear",
    href: "/category/activewear",
    image: "/placeholder.svg"
  },
  {
    name: "Activewear",
    href: "/category/activewear",
    image: "/placeholder.svg"
  },
  {
    name: "Activewear",
    href: "/category/activewear",
    image: "/placeholder.svg"
  }
]

export function CategoryNavigation() {
  return (
    <div className="container mx-auto px-4 py-6">
      <CategoryScrollArea/>
      {/* Category Banner */}
      <div className="mt-8 rounded-xl bg-primary/10 p-12 text-center">
        <div className="mx-auto max-w-md">
          <img
            src="/placeholder.svg"
            alt="Men's Fashion"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-primary">Men's Fashion</h1>
        </div>
      </div>

      {/* Most Popular Section */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Most Popular in Men's Fashion</h2>
          <div className="flex space-x-2">
          
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-2">
          {popularSubCategories.map((subcategory) => (
            <Link
              key={subcategory.name}
              to={subcategory.href}
              className="group rounded-lg border bg-card p-2 transition-colors hover:bg-accent"
            >
              <div className="flex items-center justify-between">
                <span className="font-normal overflow-hidden text-ellipsis whitespace-nowrap w-48">{subcategory.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Explore Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Explore Men's Fashion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-6">
          {exploreCategories.map((category) => (
               <Link
                 key={category.name}
                 to={category.href}
                 className="group rounded-lg border bg-card p-2 transition-colors hover:bg-accent"
               >
                 <div className="flex items-center justify-between">
                   <span className="font-normal overflow-hidden text-ellipsis whitespace-nowrap w-48">{category.name}</span>
                 </div>
               </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

