import React from 'react';

interface ProductProps {
  title: string;
  price: string;
  originalPrice: string;
  rating: number;
  description: string;
  sizes: string[];
  colors: string[];
}

const ProductCard: React.FC<ProductProps> = ({ title, price, originalPrice, rating, description, sizes, colors }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-5">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <div className="flex items-center">
          <span className="text-yellow-400">★ {rating.toFixed(1)}</span>
          <span className="ml-1 text-gray-500">({Math.floor(Math.random() * 500) + 100})</span>
        </div>
      </div>
      
      <p className="text-gray-500 my-2">{description}</p>

      <div className="flex items-center justify-between mt-4">
        <span className="text-xl font-semibold text-red-600">{price}</span>
        <span className="line-through text-sm text-gray-500">{originalPrice}</span>
      </div>

      <div className="mt-4">
        <label className="text-sm font-medium text-gray-700">Select Colors</label>
        <div className="flex space-x-3 mt-2">
          {colors.map((color, index) => (
            <div key={index} className={`w-8 h-8 rounded-full bg-${color} cursor-pointer`} />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className="text-sm font-medium text-gray-700">Choose Size</label>
        <div className="mt-2">
          {sizes.map((size, index) => (
            <button key={index} className="text-sm border rounded-full px-4 py-2 mx-1 hover:bg-gray-200">
              {size}
            </button>
          ))}
        </div>
      </div>

      <button className="mt-5 w-full py-2 bg-black text-white text-xl rounded-lg">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
