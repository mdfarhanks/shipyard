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
    description:
      "Lightweight sneakers designed for everyday comfort and effortless style.",
    image: "/products/wave-runner.jpg",
    rating: 4.8,
    featured: true,
  },
  {
    id: "urban-backpack",
    name: "Urban Backpack",
    price: 89,
    category: "Accessories",
    description:
      "A modern backpack with spacious compartments for your daily essentials.",
    image: "/products/urban-backpack.jpg",
    rating: 4.6,
    featured: true,
  },
  {
    id: "cloud-headphones",
    name: "Cloud Headphones",
    price: 199,
    category: "Electronics",
    description:
      "Premium wireless headphones with immersive sound and comfortable padding.",
    image: "/products/cloud-headphones.jpg",
    rating: 4.9,
    featured: true,
  },
  {
    id: "classic-watch",
    name: "Classic Watch",
    price: 159,
    category: "Accessories",
    description:
      "A timeless wristwatch that combines minimal design with everyday elegance.",
    image: "/products/classic-watch.jpg",
    rating: 4.7,
    featured: false,
  },
  {
    id: "minimal-lamp",
    name: "Minimal Lamp",
    price: 75,
    category: "Home",
    description:
      "A stylish desk lamp that creates a warm and relaxing atmosphere.",
    image: "/products/minimal-lamp.jpg",
    rating: 4.5,
    featured: false,
  },
  {
    id: "daily-sneakers",
    name: "Daily Sneakers",
    price: 110,
    category: "Footwear",
    description:
      "Versatile sneakers built for comfortable everyday adventures.",
    image: "/products/daily-sneakers.jpg",
    rating: 4.6,
    featured: false,
  },
  {
    id: "travel-bottle",
    name: "Travel Bottle",
    price: 35,
    category: "Lifestyle",
    description:
      "A reusable water bottle made for staying hydrated on the go.",
    image: "/products/travel-bottle.jpg",
    rating: 4.4,
    featured: false,
  },
  {
    id: "leather-wallet",
    name: "Leather Wallet",
    price: 65,
    category: "Accessories",
    description:
      "A compact wallet with a clean design and practical storage.",
    image: "/products/leather-wallet.jpg",
    rating: 4.7,
    featured: false,
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}