import React from 'react';
import { Button } from "@/components/ui/button";
import ImageSlideshow from "@/components/local/image-slide-show";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray-600">
              Browse through our diverse range of meticulously crafted garments, designed
              to bring out your individuality and cater to your sense of style.
            </p>
            <Button size="lg" className="rounded-full">
              Shop Now
            </Button>
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <h3 className="text-3xl font-bold">200+</h3>
                <p className="text-sm text-gray-600">International Brands</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">2,000+</h3>
                <p className="text-sm text-gray-600">High-Quality Products</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">30,000+</h3>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <ImageSlideshow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

