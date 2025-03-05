export interface Product {
    id: string;
    name: string;
    price: number;
    description: string | null;
    image_urls: string [] | null;
    category: string;
    created_at: string;
    stock: number;
  }

  export const mockProducts: Product[] = [
    {
        id: '1',
        name: 'Premium Coffee Beans',
        price: 24.99,
        description: 'Arabica specialty coffee from Colombia',
        image_urls: ['/images/coffee.jpg'],
        category: 'Beverages',
        created_at: '2024-03-15',
        stock: 19,
      },
      {
        id: '2',
        name: 'Organic Green Tea',
        price: 12.99,
        description: 'High quality Japanese matcha',
        image_urls: ['/images/coffee.jpg'],
        category: 'Beverages',
        created_at: '2024-03-14',
        stock: 19,
      },
      {
        id: '3',
        name: 'Stainless Steel Water Bottle',
        price: 19.99,
        description: 'Insulated 500ml bottle',
        image_urls: ['/images/coffee.jpg'],
        category: 'Accessories',
        created_at: '2024-03-13',
        stock: 19,
      },
  ];