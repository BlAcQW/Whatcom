'use client';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { mockProducts } from '@/type/product';
import { useEffect, useState } from 'react';


interface Product {
  id: string;
  name: string;
  price: number;
  description: string | null;
  image_urls: string[];
  category: string;
  created_at: string;
  stock: number;
}

const ProductPreview = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
        if (id) {
          // Type cast to ensure type matching
          const foundProduct = mockProducts.find(p => p.id === id) as Product | undefined;
          setProduct(foundProduct || null);
          setSelectedImage(foundProduct?.image_urls[0] || null);
        }
        setLoading(false);
      }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleWhatsAppPurchase = () => {
    if (!product) return;
    const message = `Hi! I want to buy ${product.name} (ID: ${product.id}).`;
    window.open(
      `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
        <Link href="/" className="text-emerald-600 hover:text-emerald-700 mt-4 inline-block">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={selectedImage || product.image_urls[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.image_urls.map((url, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(url)}
                className={`aspect-square rounded-lg overflow-hidden ${
                  selectedImage === url
                    ? 'ring-2 ring-emerald-500'
                    : 'ring-1 ring-gray-200'
                }`}
              >
                <img src={url} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-2xl font-bold text-emerald-600 mt-2">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
            <p className="text-gray-600">{product.description || 'No description available'}</p>
          </div>

          <button
            onClick={handleWhatsAppPurchase}
            className="w-full flex items-center justify-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Buy via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;