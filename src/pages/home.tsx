import React from 'react';
import Hero from '@/components/local/hero';
import ProductGrid from '@/components/local/productArrivals';
import Categories from '@/components/local/categories';
import Testimonials from '@/components/local/testimonials';
import { newArrivals, topSelling } from '@/data/product';
import ProductArrival from '@/components/local/productArrivals';
import ProductList from '@/components/local/productList';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductArrival
        title="NEW ARRIVALS"
        products={newArrivals}
        showNavigation
      />
      <ProductList
        title="TOP SELLING"
        products={topSelling}
      />
      <Categories />
      <Testimonials />
    </div>
  );
};

export default Home;

