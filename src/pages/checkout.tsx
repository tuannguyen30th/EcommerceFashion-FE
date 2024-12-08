'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area';

interface CheckoutFormData {
  lastName: string
  firstName: string
  phoneNumber: string
  province: string
  district: string
  ward: string
  specificAddress: string
  additionalNotes: string
  paymentMethod: 'cod' | 'card'
}

interface OrderItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export default function CheckoutPage() {
  const [formData, setFormData] = useState<CheckoutFormData>({
    lastName: '',
    firstName: '',
    phoneNumber: '',
    province: '',
    district: '',
    ward: '',
    specificAddress: '',
    additionalNotes: '',
    paymentMethod: 'cod'
  })

  const [promoCode, setPromoCode] = useState('')

  const orderItems: OrderItem[] = [
    {
      id: '1',
      name: 'Hue Red-Whiskered Bulbul Code SE170128',
      price: 5000000,
      image: '/placeholder.svg',
      quantity: 2
    },
    {
      id: '2',
      name: 'Chinese Red-Whiskered Bulbul Code SE170128',
      price: 10000000,
      image: '/placeholder.svg',
      quantity: 2

    },
    {
      id: '3',
      name: 'Thai Red-Whiskered Bulbul Code SE170128',
      price: 5000000,
      image: '/placeholder.svg',
      quantity: 2

    },
    {
      id: '4',
      name: 'Cambodian Red-Whiskered Bulbul Code SE170128',
      price: 10000000,
      image: '/placeholder.svg',
      quantity: 2

    },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0)
  const discount = subtotal * 0.5 // 50% discount
  const total = subtotal - discount

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle checkout submission
    console.log(formData)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-1">PAYMENT INFORMATION</h2>
            <p className="text-sm text-gray-500">(Information have tag * is required)</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="lastName">FirstName*</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="firstName">Name*</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phoneNumber">Phone Number*</Label>
            <Input
              id="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label>Province</Label>
              <Select
                value={formData.province}
                onValueChange={(value) => setFormData({ ...formData, province: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hanoi">Hà Nội</SelectItem>
                  <SelectItem value="hochiminh">TP. Hồ Chí Minh</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>District</Label>
              <Select
                value={formData.district}
                onValueChange={(value) => setFormData({ ...formData, district: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose district" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="district1">Quận 1</SelectItem>
                  <SelectItem value="district2">Quận 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Village</Label>
              <Select
                value={formData.ward}
                onValueChange={(value) => setFormData({ ...formData, ward: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose village" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ward1">Phường 1</SelectItem>
                  <SelectItem value="ward2">Phường 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="specificAddress">Specific address...</Label>
            <Input
              id="specificAddress"
              value={formData.specificAddress}
              onChange={(e) => setFormData({ ...formData, specificAddress: e.target.value })}
            />
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">ADDITIONAL INFORMATION</h2>
            <Label htmlFor="additionalNotes">Notice (not required)</Label>
            <Textarea
              id="additionalNotes"
              placeholder="Order note, for example: time or specific to delivery"
              value={formData.additionalNotes}
              onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
              className="h-32"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">PAYMENT METHOD</h2>
            <RadioGroup
              value={formData.paymentMethod}
              onValueChange={(value: 'cod' | 'card') => setFormData({ ...formData, paymentMethod: value })}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4 border rounded-lg p-4">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod" className="flex items-center gap-2">
                  <img src="/placeholder.svg" alt="COD" width={24} height={24} />
                  Cash
                </Label>
              </div>
              <div className="flex items-center space-x-4 border rounded-lg p-4">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center gap-2">
                  <img src="/placeholder.svg" alt="VNPAY" width={24} height={24} />
                  VnPay
                </Label>
              </div><div className="flex items-center space-x-4 border rounded-lg p-4">
                <RadioGroupItem value="balance" id="balance" />
                <Label htmlFor="card" className="flex items-center gap-2">
                  <img src="/placeholder.svg" alt="Balance" width={24} height={24} />
                  Balance
                </Label>
              </div>
            </RadioGroup>
          </div>

         
        </form>

        <div>
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Orders</h2>
            <div className="space-y-4">
            <ScrollArea className="h-[300px] rounded-md border p-4">
              <div className="max-h-96 overflow-y-auto space-y-4">

                {orderItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        {item.price.toLocaleString()}đ 
                      </p>
                      <p className="text-sm text-gray-600">
                        x{item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              </ScrollArea>

              <div className="pt-4 border-t">
                {/* <div className="flex items-center gap-2">
                  <Input
                    placeholder="Nhập mã giảm giá"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button variant="outline">Áp dụng</Button>
                </div> */}

                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Temporary total</span>
                    <span>{subtotal.toLocaleString()}đ</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Discount</span>
                    <span>50%</span>
                  </div>
                  <div className="flex justify-between text-base font-bold pt-2 border-t">
                    <span>Total</span>
                    <span>{total.toLocaleString()}đ</span>
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full bg-gray-900">
            Checkout
          </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

