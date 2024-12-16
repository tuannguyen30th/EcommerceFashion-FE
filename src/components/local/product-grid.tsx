import { ProductCard } from "@/components/local/product-card"
import type { Product } from "@/types/product"

interface ProductGridProps {
  products: Product[],
}

export function ProductGrid({ products}: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

