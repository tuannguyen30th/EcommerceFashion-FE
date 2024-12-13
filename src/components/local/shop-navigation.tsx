import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { ScrollArea } from "../ui/scroll-area";

export const NavigationShop: React.FC = () => {
  interface Shop {
    id: number;
    logo: string;
    name: string;
    description: string;
  }

  const shops: Shop[] = [
    {
      id: 1,
      logo: "https://via.placeholder.com/40", // Replace with actual logo URL
      name: "Shop A",
      description: "Your go-to shop for quality products.",
    },
    {
      id: 2,
      logo: "https://via.placeholder.com/40",
      name: "Shop B",
      description: "Best deals on electronics and gadgets.",
    },
    {
      id: 3,
      logo: "https://via.placeholder.com/40",
      name: "Shop C",
      description: "Premium fashion and accessories.",
    },
    {
      id: 3,
      logo: "https://via.placeholder.com/40",
      name: "Shop C",
      description: "Premium fashion and accessories.",
    },
    {
      id: 3,
      logo: "https://via.placeholder.com/40",
      name: "Shop C",
      description: "Premium fashion and accessories.",
    },
    {
      id: 3,
      logo: "https://via.placeholder.com/40",
      name: "Shop C",
      description: "Premium fashion and accessories.",
    },
    {
      id: 3,
      logo: "https://via.placeholder.com/40",
      name: "Shop C",
      description: "Premium fashion and accessories.",
    },
    {
      id: 3,
      logo: "https://via.placeholder.com/40",
      name: "Shop C",
      description: "Premium fashion and accessories.",
    },
    {
      id: 3,
      logo: "https://via.placeholder.com/40",
      name: "Shop C",
      description: "Premium fashion and accessories.",
    },
    {
      id: 3,
      logo: "https://via.placeholder.com/40",
      name: "Shop C",
      description: "Premium fashion and accessories.",
    },
  ];
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ScrollArea className=" h-[300px] rounded-[3px] border p-4">
              <div className="space-y-4 p-4 bg-gray-100 rounded-[3px] w-[500px]">
                {shops.map((shop) => (
                  <Link to={"/shop"}>
                    <NavigationMenuLink>
                      <div
                        key={shop.id}
                        className="flex items-center space-x-4 p-4 bg-white shadow rounded-[3px] mb-5 hover:shadow-2xl transition-shadow"
                      >
                        <img
                          src={shop.logo}
                          alt={`${shop.name} Logo`}
                          className="h-10 w-10 rounded-full"
                        />
                        <div>
                          <h3 className="text-sm font-bold">{shop.name}</h3>
                          <p className="text-sm text-gray-500">
                            {shop.description}
                          </p>
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                ))}
              </div>
            </ScrollArea>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
