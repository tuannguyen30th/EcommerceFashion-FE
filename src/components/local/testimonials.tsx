import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonial";

const Testimonials: React.FC = () => {
  const itemsPerPage = 3; 
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const visibleProducts = testimonials.slice(
    currentPage * itemsPerPage,
    Math.min((currentPage + 1) * itemsPerPage, testimonials.length)
  );

  const goToPreviousPage = () => {
    setCurrentPage((prev) => {
      return prev > 0 ? prev - 1 : 0;
    });
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => {
      return prev < totalPages - 1 ? prev + 1 : totalPages - 1;
    });
  };

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
              onClick={goToPreviousPage}
              disabled={currentPage === 0} // Vô hiệu hóa khi ở trang đầu tiên
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Next testimonial"
              onClick={goToNextPage}
              disabled={currentPage === totalPages - 1} 
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleProducts.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-semibold">{testimonial.name}</span>
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
