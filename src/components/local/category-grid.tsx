import { useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/product';

export function CategoryGrid() {
  const [currentPage, setCurrentPage] = useState(0);
  const categoriesPerPage = 20;
  const totalPages = Math.ceil(categories.length / categoriesPerPage);

  const visibleCategories = categories.slice(
    currentPage * categoriesPerPage,
    (currentPage + 1) * categoriesPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-12 bg-gray">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">CATEGORIES</h2>
          <div className="flex space-x-2">
          {currentPage > 0 && (
            <button onClick={prevPage} className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>)}
            {currentPage + categoriesPerPage < categories.length && (
            <button onClick={nextPage} className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
          {visibleCategories.map((category, index) => (
            <Link
              key={index}
              to={"/cate"}
              className="group flex flex-col items-center text-center border border-gray-100 h-[150px]"
            >
              <div className="relative w-20 h-20 mb-2 rounded-full overflow-hidden bg-white p-4 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-contain p-2"
                />
              </div>
              <span className="text-sm text-gray-700 group-hover:text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap w-[100px]">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

