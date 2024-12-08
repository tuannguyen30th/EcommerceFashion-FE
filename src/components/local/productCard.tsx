import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="relative group cursor-pointer" onClick={handleProductClick}>
      <button className="group text-left w-full">
        <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="mt-2 space-y-1">
          <h3 className="text-sm font-medium line-clamp-1">{product.name}</h3>
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-xs text-gray-600">{product.rating}/5</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-bold">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-xs text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
                <span className="text-xs text-red-500">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              </>
            )}
          </div>
        </div>
      </button>
      <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          className="p-2 bg-white border rounded-full shadow hover:bg-orange-300 transition"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart className="h-6 w-6 text-red-500" />
        </button>
        <button
          className="p-2 ml-2 bg-white border rounded-full shadow hover:bg-orange-300 transition"
          onClick={(e) => e.stopPropagation()}
        >
          <ShoppingCart className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};
