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
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * (Number(discountValue) / 100); 
  const deliveryFee = 15;
  const total = subtotal - discount - deliveryFee;

  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryScrollArea/>

      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link to="/">Home</Link>
        <span>/</span>
        <span className="text-gray-900">Cart</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <ScrollArea className=" h-[500px] rounded-md border p-4">
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
                    <h3 className="font-medium">{item.name}</h3>
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

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[20px]">
                      Price: ${item.price}
                    </span>

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
                <span className="font-medium">${subtotal}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>
                  Discount ({Number(discountValue) === 0 ? "No discount" : `-${discountValue}%`}
                  )
                </span>
                <span>
                  {Number(discountValue) === 0
                    ? "$0.00"
                    : `-$${(subtotal * (Number(discountValue) / 100)).toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium">${deliveryFee}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <Input
                placeholder="Add promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                readOnly
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
