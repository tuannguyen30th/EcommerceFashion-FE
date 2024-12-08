import React, { useState } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Review } from '@/types/product';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination';

const reviews: Review[] = [
  {
    id: "1",
    name: "Samantha D.",
    rating: 4.5,
    comment: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    verified: true,
    date: "August 14, 2023"
  },
  {
    id: "2",
    name: "Alex M.",
    rating: 5,
    comment: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    verified: true,
    date: "August 15, 2023"
  },
  {
    id: "3",
    name: "Ethan R.",
    rating: 4,
    comment: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    verified: true,
    date: "August 16, 2023"
  },
  {
    id: "3",
    name: "Ethan R.",
    rating: 4,
    comment: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    verified: true,
    date: "August 16, 2023"
  },
  {
    id: "3",
    name: "Ethan R.",
    rating: 4,
    comment: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    verified: true,
    date: "August 16, 2023"
  },
  {
    id: "3",
    name: "Ethan R.",
    rating: 4,
    comment: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    verified: true,
    date: "August 16, 2023"
  }
];

const ProductReviews: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, reviews.length);
  const visibleReviews = reviews.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">All Reviews (451)</h3>
        <div className="flex items-center space-x-4">
          <select className="border rounded-md px-3 py-2">
            <option>Latest</option>
            <option>Highest Rating</option>
            <option>Lowest Rating</option>
          </select>
          <Button>Write a Review</Button>
        </div>
      </div>

      <div className="grid gap-6">
        {visibleReviews.map((review) => (
          <div key={review.id} className="border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{review.name}</span>
                {review.verified && <CheckCircle2 className="w-4 h-4 text-green-500" />}
              </div>
              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-2">{review.comment}</p>
            <p className="text-sm text-gray-500">Posted on {review.date}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index + 1}>
                <PaginationLink
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? "bg-blue-500 text-white" : ""}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default ProductReviews;
