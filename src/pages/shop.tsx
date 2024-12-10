
import { useState } from 'react'
import { ShopInfo } from "@/components/local/shop-infor"
import { ShopReviews } from "@/components/local/shop-reviews"
import { ProductGrid } from "@/components/local/product-grid"
import { Pagination } from "@/components/local/pagination"
import type { Product } from "@/types/product"
import { reviews, shopInfo } from '@/data/product'

// Mock data - replace with actual data fetching in a real application



const products: Product[] = Array.from({ length: 100 }, (_, i) => ({
  id: `product-${i + 1}`,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 100) + 20,
  rating: Math.floor(Math.random() * 5) + 1,
  maxRating: 5,
  image: "/placeholder.svg"
}))

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 20
  const totalPages = Math.ceil(products.length / productsPerPage)

  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <ShopInfo {...shopInfo} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ProductGrid products={currentProducts} />
          <div className="mt-8 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
        <div>
          <ShopReviews reviews={reviews} />
        </div>
      </div>
    </div>
  )
}

