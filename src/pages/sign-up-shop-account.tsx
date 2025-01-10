'use client'

import { useState } from 'react'
import { Eye, EyeOff, Store, Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from 'react-router-dom'

export default function RegisterShopPage() {
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically handle the shop registration logic
    // For now, we'll just simulate a successful registration
    console.log('Shop registration submitted')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <Store className="mr-2 h-6 w-6" />
            <CardTitle className="text-2xl font-bold">Register Your Shop on Shop.co</CardTitle>
          </div>
          <CardDescription className="text-center">
            Create an account for your business and start selling on our platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="shopName">Shop Name</Label>
                <Input id="shopName" placeholder="Your Shop Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ownerName">Owner's Name</Label>
                <Input id="ownerName" placeholder="Full Name" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Business Email</Label>
              <Input id="email" type="email" placeholder="shop@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  required 
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Business Phone</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Business Address</Label>
              <Textarea id="address" placeholder="123 Main St, City, State, ZIP" required />
            </div>
            {/* <div className="space-y-2">
              <Label htmlFor="category">Shop Category</Label>
              <Select required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clothing">Clothing & Apparel</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="home">Home & Garden</SelectItem>
                  <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                  <SelectItem value="food">Food & Beverages</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
            <div className="space-y-2">
              <Label htmlFor="description">Shop Description</Label>
              <Textarea id="description" placeholder="Tell us about your shop and what you sell..." required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="logo">Shop Logo</Label>
              <div className="flex items-center space-x-2">
                <Input id="logo" type="file" accept="image/*" className="hidden" />
                <Button type="button" variant="outline" onClick={() => document.getElementById('logo')?.click()}>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Logo
                </Button>
                <span className="text-sm text-gray-500">No file chosen</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="terms" className="flex items-center space-x-2">
                <Input id="terms" type="checkbox" className="w-4 h-4" required />
                <span className="text-sm">
                  I agree to the{' '}
                  <Link to="/terms" className="text-primary hover:underline">
                    terms and conditions
                  </Link>
                </span>
              </Label>
            </div>
            <Button className="w-full" type="submit">Register Shop</Button>
          </form>
        </CardContent>
        <CardFooter>
          <div className="text-sm text-center w-full">
            Already have a shop account?{' '}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

