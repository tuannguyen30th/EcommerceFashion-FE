import React, { useState } from "react";
import { Star, Minus, Plus, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductReviews from "@/components/local/productReviews";
import RelatedProducts from "@/components/local/relatedProducts";
import { Breadcrumb } from "@/components/local/breadCrumb";

interface Product {
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  colors: { name: string; value: string }[];
  sizes: string[];
  images: string[];
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0].name
  );
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState<string>(product.images[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: "Men", href: "/shop/men" },
          { label: "T-shirts", href: "/shop/men/t-shirts" },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Product Images */}
        <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2">
        {product.images.map((image, i) => (
          <div
            key={i}
            className="w-16 h-16 rounded-md overflow-hidden cursor-pointer hover:ring-2 hover:ring-black"
            onMouseEnter={() => setMainImage(image)}
            onMouseLeave={() => setMainImage(product.images[0])}
          >
            <img src={image} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 aspect-square rounded-lg overflow-hidden bg-gray-200">
        <img src={mainImage} alt="Main Product" className="w-full h-full object-cover" />
      </div>
    </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>

          <div className="flex items-center space-x-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < product.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">{product.rating}/5</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
                <span className="text-sm text-red-500 bg-red-50 px-2 py-1 rounded">
                  -
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  %
                </span>
              </>
            )}
          </div>

          <p className="text-gray-600">
            {product.description ||
              "This product is perfect for any occasion. Crafted from high-quality materials, it offers superior comfort and style."}
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-3">Select Colors</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full relative ${
                      selectedColor === color.name
                        ? "ring-2 ring-offset-2 ring-black"
                        : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                  >
                    {selectedColor === color.name && (
                      <Check className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Choose Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md border ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-200 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button className="flex-1">Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Tabs defaultValue="details">
          <TabsList className="w-full flex justify-around bg-gray-100 border rounded-md">
            <TabsTrigger value="details" className="flex-1 text-center">
              Product Details
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1 text-center">
              Rating & Reviews
            </TabsTrigger>
            <TabsTrigger value="faqs" className="flex-1 text-center">
              FAQs
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <div className="prose max-w-none">
              <h3>Product Description</h3>
              <p>
                {product.description ||
                  "The product features a unique design that combines style and comfort. Made from premium materials, this product offers breathability and durability for everyday use."}
              </p>
              <ul>
                <li>100% Premium Cotton</li>
                <li>Regular Fit</li>
                <li>Round Neck</li>
                <li>Short Sleeves</li>
                <li>Machine Washable</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="reviews">
            <ProductReviews />
          </TabsContent>
          <TabsContent value="faqs">
            <div className="prose max-w-none">
              <h3>Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4>What is the sizing like?</h4>
                  <p>Our t-shirts run true to size with a regular fit.</p>
                </div>
                <div>
                  <h4>How do I care for this t-shirt?</h4>
                  <p>Machine wash cold, tumble dry low. Do not bleach.</p>
                </div>
                <div>
                  <h4>What is the shipping time?</h4>
                  <p>Standard shipping takes 3-5 business days.</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <RelatedProducts />
    </div>
  );
};

export default ProductDetail;
