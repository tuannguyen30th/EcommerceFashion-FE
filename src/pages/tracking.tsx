'use client'

import RelatedProducts from "@/components/local/relatedProducts"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@radix-ui/react-scroll-area"

interface OrderItem {
  id: string
  name: string
  type: string
  category: string
  originalPrice: number
  discountedPrice: number
  image: string
  status: 'completed' | 'cancelled' | 'processing' | 'shipping'
}

export default function TrackingPage() {
  const orders: OrderItem[] = [
    {
      id: '1',
      name: 'Huế Bird',
      type: 'Bird Species: Songbird | Male',
      category: 'Category: Adult Bird',
      originalPrice: 5000000,
      discountedPrice: 4999000,
      image: '/placeholder.svg',
      status: 'completed'
    },
    {
      id: '2',
      name: 'Huế Bird',
      type: 'Bird Species: Songbird | Male',
      category: 'Category: Adult Bird',
      originalPrice: 5000000,
      discountedPrice: 4999000,
      image: '/placeholder.svg',
      status: 'cancelled'
    },
    {
      id: '2',
      name: 'Huế Bird',
      type: 'Bird Species: Songbird | Male',
      category: 'Category: Adult Bird',
      originalPrice: 5000000,
      discountedPrice: 4999000,
      image: '/placeholder.svg',
      status: 'cancelled'
    },
    {
      id: '2',
      name: 'Huế Bird',
      type: 'Bird Species: Songbird | Male',
      category: 'Category: Adult Bird',
      originalPrice: 5000000,
      discountedPrice: 4999000,
      image: '/placeholder.svg',
      status: 'cancelled'
    },
    {
      id: '2',
      name: 'Huế Bird',
      type: 'Bird Species: Songbird | Male',
      category: 'Category: Adult Bird',
      originalPrice: 5000000,
      discountedPrice: 4999000,
      image: '/placeholder.svg',
      status: 'cancelled'
    },
    {
      id: '2',
      name: 'Huế Bird',
      type: 'Bird Species: Songbird | Male',
      category: 'Category: Adult Bird',
      originalPrice: 5000000,
      discountedPrice: 4999000,
      image: '/placeholder.svg',
      status: 'cancelled'
    },
    {
      id: '2',
      name: 'Huế Bird',
      type: 'Bird Species: Songbird | Male',
      category: 'Category: Adult Bird',
      originalPrice: 5000000,
      discountedPrice: 4999000,
      image: '/placeholder.svg',
      status: 'cancelled'
    },
    {
      id: '2',
      name: 'Huế Bird',
      type: 'Bird Species: Songbird | Male',
      category: 'Category: Adult Bird',
      originalPrice: 5000000,
      discountedPrice: 4999000,
      image: '/placeholder.svg',
      status: 'cancelled'
    },
    {
      id: '2',
      name: 'Huế Bird',
      type: 'Bird Species: Songbird | Male',
      category: 'Category: Adult Bird',
      originalPrice: 5000000,
      discountedPrice: 4999000,
      image: '/placeholder.svg',
      status: 'cancelled'
    },
    {
      id: '2',
      name: 'Huế Bird',
      type: 'Bird Species: Songbird | Male',
      category: 'Category: Adult Bird',
      originalPrice: 5000000,
      discountedPrice: 4999000,
      image: '/placeholder.svg',
      status: 'cancelled'
    },
    {
      id: '2',
      name: 'Huế Bird',
      type: 'Bird Species: Songbird | Male',
      category: 'Category: Adult Bird',
      originalPrice: 5000000,
      discountedPrice: 4999000,
      image: '/placeholder.svg',
      status: 'cancelled'
    },
    {
      id: '2',
      name: 'Huế Bird',
      type: 'Bird Species: Songbird | Male',
      category: 'Category: Adult Bird',
      originalPrice: 5000000,
      discountedPrice: 4999000,
      image: '/placeholder.svg',
      status: 'cancelled'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full flex justify-around bg-gray-100 border rounded-md">
          <TabsTrigger value="all" className="flex-1 text-center">All</TabsTrigger>
          <TabsTrigger value="processing" className="flex-1 text-center">Processing</TabsTrigger>
          <TabsTrigger value="shipping" className="flex-1 text-center">Shipping</TabsTrigger>
          <TabsTrigger value="completed" className="flex-1 text-center">Completed</TabsTrigger>
          <TabsTrigger value="cancelled" className="flex-1 text-center">Cancelled</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <ScrollArea className="h-[800px] overflow-y-auto">
            <div className="space-y-8">
              {orders.map((order) => (
                <div key={order.id} className="border-t pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-green-600">
                      {order.status === 'completed' ? 'Order has been delivered successfully' : 'Order has been cancelled by the buyer'}
                    </div>
                    <div className="text-sm font-semibold text-red-500">
                      {order.status === 'completed' ? 'COMPLETED' : 'CANCELLED'}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                      <img src={order.image} alt={order.name} width={96} height={96} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{order.name}</h3>
                      <p className="text-sm text-gray-600">{order.type}</p>
                      <p className="text-sm text-gray-600">{order.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 line-through">${order.originalPrice.toLocaleString()}</p>
                      <p className="font-semibold">${order.discountedPrice.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700">Rate</Button>
                    <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">Contact Shop</Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="processing">
          <div className="py-8 text-center text-gray-500">No orders in processing</div>
        </TabsContent>

        <TabsContent value="shipping">
          <div className="py-8 text-center text-gray-500">No orders in shipping</div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="mt-6">
            <ScrollArea className="h-[400px] overflow-y-auto">
              <div className="space-y-8">
                {orders.filter(order => order.status === 'completed').map((order) => (
                  <div key={order.id} className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-green-600">Order has been delivered successfully</div>
                      <div className="text-sm font-semibold text-red-500">COMPLETED</div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                        <img src={order.image} alt={order.name} width={96} height={96} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{order.name}</h3>
                        <p className="text-sm text-gray-600">{order.type}</p>
                        <p className="text-sm text-gray-600">{order.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 line-through">${order.originalPrice.toLocaleString()}</p>
                        <p className="font-semibold">${order.discountedPrice.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700">Rate</Button>
                      <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">Contact Shop</Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </TabsContent>

        <TabsContent value="cancelled">
          <div className="mt-6">
            <ScrollArea className="h-[400px] overflow-y-auto">
              <div className="space-y-8">
                {orders.filter(order => order.status === 'cancelled').map((order) => (
                  <div key={order.id} className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-green-600">Order has been cancelled by the buyer</div>
                      <div className="text-sm font-semibold text-red-500">CANCELLED</div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                        <img src={order.image} alt={order.name} width={96} height={96} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{order.name}</h3>
                        <p className="text-sm text-gray-600">{order.type}</p>
                        <p className="text-sm text-gray-600">{order.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 line-through">${order.originalPrice.toLocaleString()}</p>
                        <p className="font-semibold">${order.discountedPrice.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700">Rate</Button>
                      <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">Contact Shop</Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </TabsContent>
      </Tabs>
      <RelatedProducts />
    </div>
  )
}
