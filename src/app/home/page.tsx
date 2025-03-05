'use client';

import { useEffect, useState } from 'react';


import ProductCard from '@/components/productcard/page';
import CategoryFilter from '@/components/categoryfilter/page';
import { mockProducts, Product } from '@/type/product';

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   description: string | null;
//   image_urls: string[] | null;
//   category: string;
//   created_at: string;
// }

// Mock data

// const mockProducts: Product[] = [
//     {
//         id: '1',
//         name: 'Premium Coffee Beans',
//         price: 24.99,
//         description: 'Arabica specialty coffee from Colombia',
//         image_urls: ['/images/coffee.jpg'],
//         category: 'Beverages',
//         created_at: '2024-03-15'
//       },
//       {
//         id: '2',
//         name: 'Organic Green Tea',
//         price: 12.99,
//         description: 'High quality Japanese matcha',
//         image_urls: ['/images/coffee.jpg'],
//         category: 'Beverages',
//         created_at: '2024-03-14'
//       },
//       {
//         id: '3',
//         name: 'Stainless Steel Water Bottle',
//         price: 19.99,
//         description: 'Insulated 500ml bottle',
//         image_urls: ['/images/coffee.jpg'],
//         category: 'Accessories',
//         created_at: '2024-03-13'
//       },
//   ];


const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      const filteredProducts = selectedCategory
        ? mockProducts.filter(product => product.category === selectedCategory)
        : mockProducts;

      const uniqueCategories = Array.from(
        new Set(mockProducts.map(product => product.category))
      );

      setProducts(filteredProducts);
      setCategories(uniqueCategories);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h1>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;