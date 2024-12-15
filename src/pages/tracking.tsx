'use client';

import RelatedProducts from "@/components/local/related-products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@radix-ui/react-scroll-area";

// Fake dataset with placeholder data
interface TrackingOrder {
  id: number
  name: string
  type: string
  category: string
  image: string
  originalPrice: number
  discountedPrice: number
  status: string
}
const fakeOrders: TrackingOrder[] =  [
  {
    id: 1,
    name: "Product A",
    type: "Electronics",
    category: "Gadgets",
    image: "/placeholder-image.jpg",
    originalPrice: 199.99,
    discountedPrice: 149.99,
    status: "completed",
  },
  {
    id: 2,
    name: "Product B",
    type: "Clothing",
    category: "Men's Fashion",
    image: "/placeholder-image.jpg",
    originalPrice: 59.99,
    discountedPrice: 49.99,
    status: "cancelled",
  },
  {
    id: 3,
    name: "Product C",
    type: "Home Appliance",
    category: "Kitchen",
    image: "/placeholder-image.jpg",
    originalPrice: 299.99,
    discountedPrice: 259.99,
    status: "shipping",
  },{
    id: 3,
    name: "Product C",
    type: "Home Appliance",
    category: "Kitchen",
    image: "/placeholder-image.jpg",
    originalPrice: 299.99,
    discountedPrice: 259.99,
    status: "shipping",
  },{
    id: 3,
    name: "Product C",
    type: "Home Appliance",
    category: "Kitchen",
    image: "/placeholder-image.jpg",
    originalPrice: 299.99,
    discountedPrice: 259.99,
    status: "shipping",
  },{
    id: 3,
    name: "Product C",
    type: "Home Appliance",
    category: "Kitchen",
    image: "/placeholder-image.jpg",
    originalPrice: 299.99,
    discountedPrice: 259.99,
    status: "shipping",
  },{
    id: 3,
    name: "Product C",
    type: "Home Appliance",
    category: "Kitchen",
    image: "/placeholder-image.jpg",
    originalPrice: 299.99,
    discountedPrice: 259.99,
    status: "shipping",
  },{
    id: 3,
    name: "Product C",
    type: "Home Appliance",
    category: "Kitchen",
    image: "/placeholder-image.jpg",
    originalPrice: 299.99,
    discountedPrice: 259.99,
    status: "shipping",
  },{
    id: 3,
    name: "Product C",
    type: "Home Appliance",
    category: "Kitchen",
    image: "/placeholder-image.jpg",
    originalPrice: 299.99,
    discountedPrice: 259.99,
    status: "shipping",
  },{
    id: 3,
    name: "Product C",
    type: "Home Appliance",
    category: "Kitchen",
    image: "/placeholder-image.jpg",
    originalPrice: 299.99,
    discountedPrice: 259.99,
    status: "shipping",
  },
];

export default function TrackingPage() {

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

        {/* All Orders */}
        <TabsContent value="all" className="mt-6">
          <ScrollArea className="h-[800px] overflow-y-auto">
            <div className="space-y-8">
              {fakeOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        {/* Processing Orders */}
        <TabsContent value="processing">
          <div className="py-8 text-center text-gray-500">No orders in processing</div>
        </TabsContent>

        {/* Shipping Orders */}
        <TabsContent value="shipping" className="mt-6">
          <ScrollArea className="h-[400px] overflow-y-auto">
            <div className="space-y-8">
              {fakeOrders.filter((order) => order.status === 'shipping').map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        {/* Completed Orders */}
        <TabsContent value="completed" className="mt-6">
          <ScrollArea className="h-[400px] overflow-y-auto">
            <div className="space-y-8">
              {fakeOrders.filter((order) => order.status === 'completed').map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        {/* Cancelled Orders */}
        <TabsContent value="cancelled" className="mt-6">
          <ScrollArea className="h-[400px] overflow-y-auto">
            <div className="space-y-8">
              {fakeOrders.filter((order) => order.status === 'cancelled').map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
      <RelatedProducts />
    </div>
  );
}

function OrderCard({ order }: { order: typeof fakeOrders[0] }) {
  const statusColors = {
    completed: "bg-green-500",
    cancelled: "bg-red-500",
    shipping: "bg-blue-500",
    processing: "bg-yellow-500",
  };

  return (
    <div className="border-t pt-6">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-600">
          {order.status === "completed"
            ? "Order has been delivered successfully"
            : order.status === "cancelled"
            ? "Order has been cancelled by the buyer"
            : "Order is in progress"}
        </div>
        <Badge variant="outline" className={`${statusColors[order.status]} text-white font-bold text-sm`}>
          {order.status.toUpperCase()}
        </Badge>
      </div>

      <div className="flex gap-4">
        <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
          <img
            src={order.image}
            alt={order.name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
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
        <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700">
          Rate
        </Button>
        <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
          Contact Shop
        </Button>
      </div>
    </div>
  );
}
