import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import TopBar from "../components/TopBar";
import img1 from "../assets/image1.png";

export default function WishlistPage() {
  const wishlistItems = [
    { id: 1, name: "PARIS FOOTBALL UNIFORM", price: 1029, size: "M", color: "black", image: img1 },
    { id: 2, name: "SUSPENDED SKIRT", price: 2035, size: "M", color: "black", image: img1 },
    { id: 3, name: "CLASSIC HOODIE", price: 1500, size: "L", color: "gray", image: img1 },
  ];

  return (
    <div className="bg-beig min-h-screen">
      <TopBar />
      <Navigation />

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4 px-6 pt-6">
        <Link to="/" className="hover:text-gray-700">home</Link> /{" "}
        <span className="text-gray-900">wishlist</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight mb-8 px-6">WISHLIST</h1>

      {/* Wishlist Items */}
      <div className="px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border border-dark p-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-28 object-cover"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm">size ({item.size}) · {item.color}</p>
              </div>
            </div>
            <span className="font-semibold">{item.price} $</span>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
