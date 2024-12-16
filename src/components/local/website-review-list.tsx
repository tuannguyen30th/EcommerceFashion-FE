import { WebsiteReviewCard } from "@/components/local/website-review-card";
import { Button } from "@/components/ui/button";
import { WebsiteReview } from "@/types/product";
import { Pagination } from "./pagination";
import { useState } from "react";

interface WebsiteReviewListProps {
  reviews: WebsiteReview[];
}
const REVIEWS_PER_PAGE = 21;
export function WebsiteReviewList({ reviews }: WebsiteReviewListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

  const currentReviews = reviews.slice(
    (currentPage - 1) * REVIEWS_PER_PAGE,
    currentPage * REVIEWS_PER_PAGE
  );
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">
          All Reviews ({reviews.length})
        </h2>
        <select className="border rounded-md px-3 py-2">
          <option>Most Recent</option>
          <option>Highest Rated</option>
          <option>Lowest Rated</option>
        </select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentReviews.map((review) => (
          <WebsiteReviewCard key={review.id} review={review} />
        ))}
      </div>
      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
