import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Review } from "@/types/product";
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

interface ShopReviewsProps {
  reviews: Review[];
}

export function ShopReviews({ reviews }: ShopReviewsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const currentReviews = reviews.slice(
    currentPage * reviewsPerPage,
    currentPage * reviewsPerPage + reviewsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4 flex border-b border-black p-3">Customer Reviews <StarIcon className="ml-3"/></h2>
      <div className="relative">
        <div className="flex justify-between my-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevPage}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div>
          {currentReviews.map((review) => (
            <div key={review.id} className="mb-6">
              <div className="flex items-start mb-4">
                <div className="flex-grow border-b pb-3">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium">{review.author}</span>
                    <div className="flex ml-2">
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
                    <span className="ml-auto text-sm text-gray-500">
                      {review.date}
                    </span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                  {/* <div className="flex mt-3 flex-wrap gap-2">
                    {review?.photos?.map((photo, index) => (
                      <Dialog key={index}>
                        <DialogTrigger>
                          <img
                            src={photo}
                            alt={`Review photo ${index + 1}`}
                            className="rounded-[3px] object-cover "
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
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <span className="text-sm text-gray-600">
            Page {currentPage + 1} of {totalPages}
          </span>
        </div>
      </div>
    </div>
  );
}
