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

import RelatedProducts from "@/components/local/relatedProducts";
import { Pagination } from "@/components/local/pagination";
import { wishList } from "@/data/product";
import { WishlistItem } from "@/types/product";


const itemsPerPage = 3;
export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(wishList);
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
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-[20px]">
                  Price: ${item.price}
                </span>
                <div className="flex ">
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
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      <RelatedProducts />
    </div>
  );
}
