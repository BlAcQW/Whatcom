'use client';

import Link from 'next/link';
import { MessageCircle, Eye } from 'lucide-react';
import { Product } from '@/type/product';
import Image from 'next/image';




interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleWhatsAppPurchase = () => {
    const message = `Hi! I want to buy ${product.name} (ID: ${product.id}).`;
    window.open(
      `https://wa.me/+233593536814?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/product/${product.id}`}>
              <Image
                  src={product.image_urls[0] ?? '/placeholder-product.jpg'}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
              />
      </Link>
      <div className="p-4">
        <Link 
          href={`/product/${product.id}`}
          className="hover:text-emerald-600 transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-emerald-600">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex space-x-2">
            <Link
              href={`/product/${product.id}`}
              className="flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Eye className="h-4 w-4" />
              <span>View</span>
            </Link>
            <button
              onClick={handleWhatsAppPurchase}
              className="flex items-center space-x-1 bg-emerald-600 text-white px-3 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Buy</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;