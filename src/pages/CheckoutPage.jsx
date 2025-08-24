import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import TopBar from "../components/TopBar";
import img1 from "../assets/image1.png";

export default function CheckoutPage() {
  const cartItems = [
    { id: 1, name: "PARIS FOOTBALL UNIFORM", price: 1029, size: "M", color: "black", image: img1 },
    { id: 2, name: "SUSPENDED SKIRT", price: 2035, size: "M", color: "black", image: img1 },
    { id: 3, name: "SUSPENDED SKIRT", price: 2035, size: "M", color: "black", image: img1 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-beig min-h-screen">
      <TopBar />
      <Navigation />

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4 px-6 pt-6">
        <Link to="/" className="hover:text-gray-700">home</Link> /{" "}
        <Link to="/cart" className="hover:text-gray-700">cart</Link> /{" "}
        <span className="text-gray-900">checkout</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight mb-8 px-6">CHECKOUT</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6">
        {/* LEFT: Form */}
        <div className="border border-dark p-6 space-y-6">
          {/* Your Data */}
          <div>
            <h2 className="font-semibold mb-2">YOUR DATA</h2>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="FULL NAME" className="border px-3 py-2" />
              <input type="email" placeholder="E-MAIL" className="border px-3 py-2" />
              <input type="tel" placeholder="(RU) +7" className="border px-3 py-2 col-span-2" />
            </div>
          </div>

          {/* Delivery Method */}
          <div>
            <h2 className="font-semibold mb-2">DELIVERY METHOD</h2>
            <div className="flex gap-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="delivery" defaultChecked /> Courier Delivery
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="delivery" /> Delivery to the Pick-up Point
              </label>
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <h2 className="font-semibold mb-2">DELIVERY ADDRESS</h2>
            <div className="grid grid-cols-2 gap-4">
              <select className="border px-3 py-2">
                <option>Country</option>
              </select>
              <select className="border px-3 py-2">
                <option>City</option>
              </select>
              <input type="text" placeholder="Street" className="border px-3 py-2 col-span-2" />
              <input type="text" placeholder="House" className="border px-3 py-2" />
              <input type="text" placeholder="Floor" className="border px-3 py-2" />
              <input type="text" placeholder="Apartment" className="border px-3 py-2" />
            </div>
          </div>

          {/* Comment */}
          <div>
            <h2 className="font-semibold mb-2">COMMENT TO ORDER</h2>
            <textarea className="border w-full px-3 py-2" rows="3"></textarea>
          </div>

          {/* Payment Method */}
          <div>
            <h2 className="font-semibold mb-2">PAYMENT METHOD</h2>
            <div className="flex gap-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" defaultChecked /> By Card
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" /> By Cash
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" /> By Card on Receipt
              </label>
            </div>
          </div>

          <button className="w-full bg-black text-white py-3 font-semibold mt-4">
            PAY FOR THE ORDER
          </button>

          <p className="text-xs text-gray-500 mt-2">
            By clicking on the button I agree to the terms of privacy policy and the offer agreement
          </p>
        </div>

        {/* RIGHT: Cart Summary */}
        <div className="border border-dark p-6 flex flex-col gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-20 object-cover" />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm">size ({item.size}) · {item.color}</p>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <button className="px-2 border">-</button>
                    <span>1</span>
                    <button className="px-2 border">+</button>
                  </div>
                </div>
              </div>
              <span className="font-semibold">{item.price} $</span>
            </div>
          ))}

          <div className="text-2xl font-bold text-right">
            ORDER COST: {total}$
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
