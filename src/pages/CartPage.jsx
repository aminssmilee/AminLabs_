import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import TopBar from "../components/TopBar";
import img1 from "../assets/image1.png";

export default function CartPage() {
  const cartItems = [
    { id: 1, name: "PARIS FOOTBALL UNIFORM", price: 1029, size: "M", color: "black", image: img1, qty: 1 },
    { id: 2, name: "SUSPENDED SKIRT", price: 2035, size: "M", color: "black", image: img1, qty: 1 },
    { id: 3, name: "SUSPENDED SKIRT", price: 2035, size: "M", color: "black", image: img1, qty: 2 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="bg-beig min-h-screen">
      <TopBar />
      <Navigation />

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4 px-6 pt-6">
        <Link to="/" className="hover:text-gray-700">home</Link> /{" "}
        <span className="text-gray-900">cart</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight mb-8 px-6">CART</h1>

      {/* Cart Items */}
      <div className="px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
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
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <button className="px-2 border">-</button>
                    <span>{item.qty}</span>
                    <button className="px-2 border">+</button>
                  </div>
                </div>
              </div>
              <span className="font-semibold">{item.price * item.qty} $</span>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border border-dark p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>{total} $</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="border-t border-dark mt-4 pt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{total} $</span>
          </div>

          <Link
            to="/cart/checkout"
            className="block w-full bg-black text-white text-center py-3 font-semibold mt-6"
          >
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
