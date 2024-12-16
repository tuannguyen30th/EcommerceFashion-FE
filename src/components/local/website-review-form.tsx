import { useState } from 'react'
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { WebsiteReview } from '@/types/product'

interface WebsiteReviewFormProps {
  onSubmit: (review: Omit<WebsiteReview, 'id' | 'date'>) => void
}

export function WebsiteReviewForm({ onSubmit }: WebsiteReviewFormProps) {
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (rating === 0) {
      alert('Please select a rating')
      return
    }
    onSubmit({rating, comment })
    // Reset form
    setRating(5)
    setComment('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="rating">Rating</Label>
        <div className="flex items-center space-x-1 ">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-6 h-6 cursor-pointer ${
                star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
      </div>
      <div>
        <Label htmlFor="comment">Your Review</Label>
        <Textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Tell us about your experience"
          required
        />
      </div>
      <Button type="submit">Submit Review</Button>
    </form>
  )
}

