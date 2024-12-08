import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  HeartCrack,
  Minus,
  Plus,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination"; // Replace with the actual import path
import RelatedProducts from "@/components/local/relatedProducts";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  image: string;
  quantity: number;
}
const seedData: WishlistItem[] = [
    {
      id: "1",
      name: "Gradient Graphic T-shirt",
      price: 145,
      size: "Large",
      color: "White",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIloQi3tgZAxkQDNbN3hHwirzKN3QKbWRzA&s",
      quantity: 1,
    },
    {
      id: "2",
      name: "Checkered Shirt",
      price: 180,
      size: "Medium",
      color: "Red",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANdcdShgRopxhfjwKd8fdQFkHuhFgNO8DbY&s",
      quantity: 1,
    },
    {
      id: "3",
      name: "Denim Jacket",
      price: 220,
      size: "Large",
      color: "Blue",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhzdWZKE8tfsFJAjOcEtBO3BgS-tDKtMDQw&s",
      quantity: 1,
    },
    {
      id: "4",
      name: "Hooded Sweatshirt",
      price: 175,
      size: "Small",
      color: "Black",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMd84OwXlGeOWMHF9eghy1BIlQ39LkxuZUw&s",
      quantity: 1,
    },
    {
      id: "5",
      name: "Classic Polo Shirt",
      price: 120,
      size: "Medium",
      color: "Green",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRjs3OkNs_WkrhySdo5COewmlm5G6LOzrUA&s",
      quantity: 1,
    },
    {
      id: "6",
      name: "Casual Sneakers",
      price: 300,
      size: "9 (US)",
      color: "White",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwKcDEwxwRs2OknOSCS9UJXsPVO3DkCqIpVA&s",
      quantity: 1,
    },
    {
      id: "7",
      name: "Leather Belt",
      price: 75,
      size: "One Size",
      color: "Brown",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4Lp48pdSMy0cyVQaY4BXFA69i79YR8WAJw&s",
      quantity: 1,
    },
    {
      id: "8",
      name: "Slim Fit Jeans",
      price: 200,
      size: "32",
      color: "Dark Blue",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiVjP8OuHPSbThmjNeaqOZyMfpoXnn82pSnQ&s",
      quantity: 1,
    },
    {
      id: "9",
      name: "Woolen Scarf",
      price: 90,
      size: "One Size",
      color: "Gray",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXeyv2PjKrGMbFbKZKvTFL8_qZBh_XUHIhg&s",
      quantity: 1,
    },
    {
      id: "10",
      name: "Bucket Hat",
      price: 50,
      size: "One Size",
      color: "Beige",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9V0upLHoB6Yufq5uNLXPE10OFekWxWt_oA&s",
      quantity: 1,
    },
  ];
  
const itemsPerPage = 3;

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(seedData);
  const [currentPage, setCurrentPage] = useState(1);

  const updateQuantity = (id: string, increment: boolean) => {
    setWishlistItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: increment
                ? item.quantity + 1
                : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  const totalPages = Math.ceil(wishlistItems.length / itemsPerPage);
  const currentItems = wishlistItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link to="/">Home</Link>
        <span>/</span>
        <span className="text-gray-900">Wishlist</span>
      </div>

      <h1 className="text-4xl font-bold mb-8">YOUR WISHLIST</h1>

      <div className="space-y-4">
        {currentItems.map((item) => (
          <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
            <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">{item.name}</h3>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <HeartCrack className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>
                <span className="font-bold">${item.price}</span>
              </div>
              <div className="mt-4 flex items-center justify-end">
                <div className="flex items-center border rounded-md mr-2">
                  <button
                    onClick={() => updateQuantity(item.id, false)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-x">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, true)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
                className={
                  currentPage === 1 ? "opacity-50 pointer-events-none" : ""
                }
              >
                Previous
              </PaginationPrevious>
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(index + 1)}
                  className={
                    index + 1 === currentPage ? "bg-black text-white" : ""
                  }
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
                className={
                  currentPage === totalPages
                    ? "opacity-50 pointer-events-none"
                    : ""
                }
              >
                Next
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <RelatedProducts />
    </div>
  );
}
