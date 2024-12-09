import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Pencil, LogOut, ShoppingBag, CreditCard, User, Settings, Eye, PiggyBankIcon } from 'lucide-react'

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
}

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  balance?: number;
}

const ProfilePage: React.FC = () => {
  const navigate = useNavigate()
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)
  const [profile, setProfile] = useState<UserProfile>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    avatarUrl: '/placeholder.svg',
    balance: 11.5,
  })

  const orders: Order[] = [
    { id: '1234', date: '2023-05-15', status: 'Delivered', total: 145 },
    { id: '5678', date: '2023-06-02', status: 'Processing', total: 89.99 },
    { id: '9101', date: '2023-06-10', status: 'Shipped', total: 212 },
  ]

  const handleProfileSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const updatedProfile = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      avatarUrl: profile.avatarUrl
    }
    setProfile(updatedProfile)
    setIsEditProfileOpen(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={profile.avatarUrl} alt="User avatar" />
                <AvatarFallback>{profile.firstName[0]}{profile.lastName[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{profile.firstName} {profile.lastName}</CardTitle>
                <CardDescription className='my-2'>{profile.email}</CardDescription>
                <CardDescription className='flex'><PiggyBankIcon className='mr-2'/> <p className='font-extrabold text-sm text-[20px]'> ${profile.balance}</p></CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Dialog open={isEditProfileOpen} onOpenChange={setIsEditProfileOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full mb-2">
                  <Pencil className="mr-2 h-4 w-4" /> Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleProfileSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="editFirstName">First Name</Label>
                    <Input id="editFirstName" name="firstName" defaultValue={profile.firstName} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="editLastName">Last Name</Label>
                    <Input id="editLastName" name="lastName" defaultValue={profile.lastName} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="editEmail">Email</Label>
                    <Input id="editEmail" name="email" type="email" defaultValue={profile.email} />
                  </div>
                  <Button type="submit">Save Changes</Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="outline" className="w-full text-red-500 hover:text-red-700">
              <LogOut className="mr-2 h-4 w-4" /> Log Out
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="payment-history">Payment History</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="orders">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>View and manage your recent orders</CardDescription>
              </CardHeader>
              <CardContent>
                {orders.map((order) => (
                  <div key={order.id} className="flex items-start justify-between py-4 border-b last:border-b-0">
                    <div>
                      <p className="font-medium">Order #{order.id}</p>
                      <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>
                          {order.status}
                        </Badge>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Order Details #{order.id}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm text-muted-foreground">Order Date</p>
                                  <p className="font-medium">{order.date}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Status</p>
                                  <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>
                                    {order.status}
                                  </Badge>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Total Amount</p>
                                <p className="font-medium">${order.total}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Shipping Address</p>
                                <p className="font-medium">123 Example Street</p>
                                <p className="text-sm text-muted-foreground">New York, NY 10001</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Payment Method</p>
                                <div className="flex items-center gap-2">
                                  <CreditCard className="h-4 w-4" />
                                  <p className="font-medium">Visa ending in 1234</p>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                      <p className="font-medium">${order.total}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => navigate('/tracking')}>
                  <ShoppingBag className="mr-2 h-4 w-4" /> View All Orders
                </Button>
              </CardFooter>
            </TabsContent>
            <TabsContent value="payment-history">
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>View your recent payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: 'P001', date: '2023-07-01', amount: 145, method: 'Visa ending in 1234' },
                    { id: 'P002', date: '2023-06-15', amount: 89.99, method: 'PayPal' },
                    { id: 'P003', date: '2023-05-30', amount: 212, method: 'Mastercard ending in 5678' },
                  ].map((payment) => (
                    <div key={payment.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                      <div>
                        <p className="font-medium">Payment #{payment.id}</p>
                        <p className="text-sm text-gray-500">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${payment.amount}</p>
                        <p className="text-sm text-gray-500">{payment.method}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </TabsContent>
            <TabsContent value="settings">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue={profile.firstName} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue={profile.lastName} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={profile.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" type="address" />
                  </div>
                  {/* <Button type="submit">Save Changes</Button> */}
                </form>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}

export default ProfilePage

