import { Star } from 'lucide-react'

interface ShopInfoProps {
  name: string
  rating: number
  totalReviews: number
  followers: number
  description: string
  logo: string
}

export function ShopInfo({ name, rating, totalReviews, followers, description, logo }: ShopInfoProps) {
  return (
    <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-sm">
      <img src={logo} alt={name} width={100} height={100} className="rounded-full" />
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="flex items-center mt-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)} ({totalReviews} reviews)</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{followers.toLocaleString()} followers</p>
        <p className="mt-4 text-gray-700">{description}</p>
      </div>
    </div>
  )
}
