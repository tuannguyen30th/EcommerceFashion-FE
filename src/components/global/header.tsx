import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link, Links } from "react-router-dom";
import ProfileButton from "../local/profile-drop-down";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { ScrollArea } from "../ui/scroll-area";
import { NavigationShop } from "../local/shop-navigation";
import { useState } from "react";
import { Badge } from "../ui/badge";

export function Header() {
  const [cartItemsCount, setCartItemsCount] = useState(1);
  const [wishlistItemsCount, setWishlistItemsCount] = useState(1);
  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            SHOP.CO
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
           <NavigationShop/>

            <Link to="/productList" className="text-sm font-medium">
              On Sale
            </Link>
            <Link to="/new-arrivals" className="text-sm font-medium">
              New Arrivals
            </Link>
            {/* <Link to="/brands" className="text-sm font-medium">
              Brands
            </Link> */}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block w-72">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search for products..." className="pl-8" />
            </div>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                  {cartItemsCount}
                </Badge>
              )}
            </Link>
            <Link to="/wishList" className="relative">
              <Heart className="h-6 w-6" />
               {wishlistItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                  {wishlistItemsCount}
                </Badge>
              )}
            </Link>
            <Link to="/account">
              <ProfileButton />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
