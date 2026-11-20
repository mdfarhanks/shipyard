
export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  featured: boolean;
};

export const products: Product[] = [
  {
    id: "wave-runner",
    name: "Wave Runner",
    price: 129,
    category: "Footwear",
    description: "Lightweight sneakers designed for everyday comfort and effortless style.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    rating: 4.8,
    featured: true,
  },
  {
    id: "urban-backpack",
    name: "Urban Backpack",
    price: 89,
    category: "Accessories",
    description: "A modern backpack with spacious compartments for your daily essentials.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    rating: 4.6,
    featured: true,
  },
  {
    id: "cloud-headphones",
    name: "Cloud Headphones",
    price: 199,
    category: "Electronics",
    description: "Premium wireless headphones with immersive sound and comfortable padding.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    rating: 4.9,
    featured: true,
  },
  {
    id: "classic-watch",
    name: "Classic Watch",
    price: 159,
    category: "Accessories",
    description: "A timeless wristwatch that combines minimal design with everyday elegance.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    rating: 4.7,
    featured: false,
  },
  {
    id: "minimal-lamp",
    name: "Minimal Lamp",
    price: 75,
    category: "Home",
    description: "A stylish desk lamp that creates a warm and relaxing atmosphere.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
    rating: 4.5,
    featured: false,
  },
  {
    id: "daily-sneakers",
    name: "Daily Sneakers",
    price: 110,
    category: "Footwear",
    description: "Versatile sneakers built for comfortable everyday adventures.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
    rating: 4.6,
    featured: false,
  },
  {
    id: "travel-bottle",
    name: "Travel Bottle",
    price: 35,
    category: "Lifestyle",
    description: "A reusable water bottle made for staying hydrated on the go.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600",
    rating: 4.4,
    featured: false,
  },
  {
    id: "leather-wallet",
    name: "Leather Wallet",
    price: 65,
    category: "Accessories",
    description: "A compact wallet with a clean design and practical storage.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600",
    rating: 4.7,
    featured: false,
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
