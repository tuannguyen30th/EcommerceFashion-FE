import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login submitted')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <ShoppingBag className="mr-2 h-6 w-6" />
            <CardTitle className="text-2xl font-bold">Shop.co</CardTitle>
          </div>
          <CardDescription className="text-center"> 
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
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
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
            </div>
            <Button className="w-full mt-6" type="submit">Sign In</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link to="/forgot-password" className="text-sm text-primary hover:underline">
            Forgot your password?
          </Link>
          <div className="text-sm text-center">
            Don't have an account?{' '}
            <Link to="/sign-up" className="text-primary font-semibold hover:underline">
              Create an account
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

