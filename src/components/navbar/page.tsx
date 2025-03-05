"use client"
import Link from 'next/link';
import { ShoppingBag, Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" legacyBehavior>
            <a className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-800">S.TechHub</span>
            </a>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/admin" legacyBehavior>
              <a className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600">
                <Settings className="h-5 w-5" />
                <span>Admin</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;