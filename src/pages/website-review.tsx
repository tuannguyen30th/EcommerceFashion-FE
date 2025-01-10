import { useState } from 'react'
import { WebsiteReviewList } from '@/components/local/website-review-list'
import { WebsiteReviewForm } from '@/components/local/website-review-form'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { WebsiteReview } from '@/types/product'
import { webSiteReview } from '@/data/product'

export default function WebsiteReviewsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [reviews, setReviews] = useState<WebsiteReview[]>(webSiteReview)

  const handleNewReview = (newReview: Omit<WebsiteReview, 'id' | 'date'>) => {
    const review: WebsiteReview = {
      ...newReview,
      id: (reviews.length + 1).toString(),
      date: new Date().toISOString().split('T')[0],
    }
    setReviews([review, ...reviews])
    setIsFormOpen(false)
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Website Reviews</h1>
      <div className="mb-8">
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button>Write a Review for Website</Button>
          </DialogTrigger>
          <DialogContent>
            <WebsiteReviewForm onSubmit={handleNewReview} />
          </DialogContent>
        </Dialog>
      </div>
      <WebsiteReviewList reviews={reviews} />
    </div>
  )
}

