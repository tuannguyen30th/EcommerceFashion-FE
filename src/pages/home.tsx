import React from 'react';
import Hero from '@/components/local/hero';
import ProductGrid from '@/components/local/productArrivals';
import Categories from '@/components/local/categories';
import Testimonials from '@/components/local/testimonials';
import { newArrivals, topSelling } from '@/data/product';
import ProductArrival from '@/components/local/productArrivals';
import ProductHomeList from '@/components/local/productHomeList';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductArrival
        title="NEW ARRIVALS"
        products={newArrivals}
        showNavigation
      />
      <ProductHomeList
        title="TOP SELLING"
        products={topSelling}
      />
      <Categories />
      <Testimonials />
    </div>
  );
};

export default Home;

