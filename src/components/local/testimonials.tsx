import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonial";
import { WebsiteReviewCard } from "./website-review-card";
import { webSiteReview } from "@/data/product";
import { Link } from "react-router-dom";

const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const pageCount = Math.ceil(webSiteReview.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1));
  };

  // Slice the testimonials array to only show the items for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = webSiteReview.slice(startIndex, endIndex);

  console.log("Current page:", currentPage);
  console.log("Number of products on this page:", currentProducts.length);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">OUR HAPPY CUSTOMERS</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Previous testimonial"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Next testimonial"
              onClick={handleNextPage}
              disabled={currentPage === pageCount - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentProducts.map((review) => (
           <WebsiteReviewCard review={review} key={review.id}/>
          ))}
        </div>
        <div className="flex items-center justify-center mt-5">
            <Link to={"/webReview"} className="p-4 border border-gray-100 font-bold hover:bg-slate-300 rounded-[5px] bg-slate-100">
                See All
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
