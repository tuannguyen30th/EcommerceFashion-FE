'use client'

import { useState } from 'react'
import { ChevronDown, Check, X, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: string
  name: string
  image: string
  price: number
  rating: number
  features: {
    [key: string]: string | boolean
  }
}

const products: Product[] = [
  {
    id: '1',
    name: 'Classic White Sneakers',
    image: '/placeholder.svg',
    price: 89.99,
    rating: 4.5,
    features: {
      material: 'Leather',
      sole: 'Rubber',
      waterproof: true,
      color: 'White',
      sizes: '6-13',
      cushioning: 'Medium',
    },
  },
  {
    id: '2',
    name: 'Running Performance Shoes',
    image: '/placeholder.svg',
    price: 129.99,
    rating: 4.8,
    features: {
      material: 'Synthetic',
      sole: 'EVA',
      waterproof: false,
      color: 'Blue/Neon',
      sizes: '7-14',
      cushioning: 'High',
    },
  }
]

export default function ComparisonPage() {
  const [expandedFeatures, setExpandedFeatures] = useState(false)

  const toggleFeatures = () => {
    setExpandedFeatures(!expandedFeatures)
  }

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Badge variant="success" className="bg-green-100 text-green-800">
          <Check className="h-4 w-4 mr-1" />
          Yes
        </Badge>
      ) : (
        <Badge variant="destructive" className="bg-red-100 text-red-800">
          <X className="h-4 w-4 mr-1" />
          No
        </Badge>
      )
    }
    return value
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Product Comparison</h1>
      <ScrollArea className="w-full">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="relative w-full h-64 mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-3xl font-bold mb-4">${product.price.toFixed(2)}</p>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      ({product.rating})
                    </span>
                  </div>
                  <Button className="w-full" size="lg">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Feature</TableHead>
                {products.map((product) => (
                  <TableHead key={product.id} className="text-center">
                    {product.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.keys(products[0].features).map((feature, index) => (
                <TableRow
                  key={feature}
                  className={expandedFeatures || index < 3 ? '' : 'hidden'}
                >
                  <TableCell className="font-medium capitalize">{feature}</TableCell>
                  {products.map((product) => (
                    <TableCell key={product.id} className="text-center">
                      {renderFeatureValue(product.features[feature])}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {Object.keys(products[0].features).length > 3 && (
            <div className="mt-6 text-center">
              <Button
                variant="outline"
                onClick={toggleFeatures}
                className="inline-flex items-center"
              >
                {expandedFeatures ? 'Show Less' : 'Show More Features'}
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-transform ${
                    expandedFeatures ? 'rotate-180' : ''
                  }`}
                />
              </Button>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}

