import { ShopInfoProps } from "@/types/product";
import { Star } from "lucide-react";

export function ShopInfo({
  name,
  rating,
  totalReviews,
  followers,
  description,
  logo,
}: ShopInfoProps) {
  return (
    <div
      className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-lg"
      style={{
        boxShadow:
          "0px 4px 6px rgba(0, 0, 0, 0.1), 0px -2px 4px rgba(0, 0, 0, 0.1), 2px 0px 4px rgba(0, 0, 0, 0.1), -2px 0px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="w-[100px] h-[100px] rounded-full border overflow-hidden">
        <img src={logo} alt={name} className="object-cover w-full h-full" />
      </div>

      <div className="flex-1">
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="flex items-center mt-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {rating.toFixed(1)} ({totalReviews} reviews)
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          {followers?.toLocaleString()} followers
        </p>
        <p className="mt-4 text-gray-700">{description}</p>
      </div>
    </div>
  );
}
