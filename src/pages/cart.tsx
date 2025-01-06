import { Image, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import RelatedProducts from "@/components/local/related-products";
import { CartItem } from "@/types/product";
import { cartItem } from "@/data/product";
import { VoucherDialog } from "@/components/local/voucher-dialog";
import CategoryScrollArea from "@/components/local/category-scrollArea";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(cartItem);
  const [promoCode, setPromoCode] = useState("");
  const [discountValue, setDiscountValue] = useState(0);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const updateQuantity = (id: string, increment: boolean) => {
    setCartItems((items) =>
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
    setCartItems((items) => items.filter((item) => item.id !== id));
    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  const handleCheckboxChange = (id: string) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const subtotal = cartItems.reduce((sum, item) => {
    if (selectedItems.has(item.id)) {
      return (
        sum +
        (item.salePrice > 0 ? item.salePrice : item.defaultPrice) *
          item.quantity
      );
    }
    return sum;
  }, 0);

  const discount = subtotal * (Number(discountValue) / 100);
  const deliveryFee = 15; // Example value, optional
  const total = subtotal - discount;

  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryScrollArea />

      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link to="/">Home</Link>
        <span>/</span>
        <span className="text-gray-900">Cart</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <ScrollArea className="h-[500px] rounded-md border p-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 border rounded-lg mb-5"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <h3 className="font-medium">{item.name}</h3>
                      <input
                        type="checkbox"
                        checked={selectedItems.has(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                        className="mt-2 ml-5"
                      />
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    <p>Size: {item.size}</p>
                    <p>Color: {item.color}</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <span className="text-sm font-bold mr-2">
                      ${item.defaultPrice}
                    </span>
                    {item.salePrice && (
                      <>
                        <span className="text-xs text-gray-500 line-through mr-2">
                          ${item.salePrice}
                        </span>
                        <span className="text-xs text-red-500">
                          -
                          {Math.round(
                            ((item.salePrice - item.defaultPrice) /
                              item.salePrice) *
                              100
                          )}
                          %
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div></div>
                    <div className="flex items-center border rounded-md">
                      <button
                        onClick={() => updateQuantity(item.id, false)}
                        className="p-2 hover:bg-gray-100"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 border-x">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, true)}
                        className="p-2 hover:bg-gray-100"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>
                  Discount (
                  {Number(discountValue) === 0
                    ? "No discount"
                    : `-${discountValue}%`}
                  )
                </span>
                <span>
                  {Number(discountValue) === 0
                    ? "$0.00"
                    : `-$${(subtotal * (Number(discountValue) / 100)).toFixed(
                        2
                      )}`}
                </span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <Input
                placeholder="Add promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <VoucherDialog
                promoCode={promoCode}
                setPromoCode={setPromoCode}
                setDiscount={setDiscountValue}
              />
            </div>

            <Button className="w-full mt-4" asChild>
              <Link to="/checkout">Go to Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
}
