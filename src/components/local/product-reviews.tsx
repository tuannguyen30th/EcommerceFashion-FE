import React, { useState } from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Review } from "@/types/product";
import { Pagination } from "./pagination";
import { reviews } from "@/data/product";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { ReviewForm } from "./review-product-form";

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

  const handleNewReview = (newReview: {
    rating: number;
    title: string;
    comment: string;
    photos?: File;
  }) => {
    const review: Review = {
      id: (reviews.length + 1).toString(),
      author: "You", // In a real app, this would be the user's name
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    setCurrentPage([review, ...reviews]);
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
            <option>Recent Days</option>
            <option>Old Days</option>
          </select>
          <ReviewForm onSubmit={handleNewReview} />
        </div>
      </div>

      <div className="grid gap-6">
        {visibleReviews.map((review) => (
          <div key={review.id} className="border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <span className="font-semibold mr-3">{review.author}</span>
                  <p className="text-sm text-gray-500">
                    Posted on {review.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-2">{review.comment}</p>
            <div className="flex mt-3 flex-wrap gap-2">
              {review.photos.map((photo, index) => (
                <Dialog key={index}>
                  <DialogTrigger>
                    <img
                      src={photo}
                      alt={`Review photo ${index + 1}`}
                      className="rounded-[2px] object-cover"
                      width={80}
                      height={80}
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Review Photo</DialogTitle>
                      <DialogDescription>
                        <Carousel>
                          <CarouselContent>
                            {review.photos.map((carouselPhoto, idx) => (
                              <CarouselItem key={idx}>
                                <img
                                  src={carouselPhoto}
                                  alt={`Carousel photo ${idx + 1}`}
                                  className="rounded-lg object-cover"
                                  width={400}
                                  height={400}
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductReviews;
