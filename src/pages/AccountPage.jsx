import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import TopBar from "../components/TopBar";

export default function AccountPage() {
  // Data dummy user
  const user = {
    name: "Salis Ahmad",
    email: "salis.ahmad@example.com",
    phone: "+62 812 3456 7890",
    address: "Jl. Raya No.123, Surabaya",
    memberSince: "2023-08-01",
  };

  return (
    <div className="bg-beig min-h-screen">
      <TopBar />
      <Navigation />

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4 px-6 pt-6">
        <Link to="/" className="hover:text-gray-700">home</Link> /{" "}
        <span className="text-gray-900">account</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight mb-8 px-6">MY ACCOUNT</h1>

      {/* Account Info */}
      <div className="px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-dark p-6 space-y-4">
          <h2 className="text-xl font-bold">Personal Information</h2>
          <p><span className="font-semibold">Name:</span> {user.name}</p>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
          <p><span className="font-semibold">Phone:</span> {user.phone}</p>
          <p><span className="font-semibold">Address:</span> {user.address}</p>
          <p><span className="font-semibold">Member Since:</span> {user.memberSince}</p>

          <div className="flex gap-4 mt-4">
            <Link 
              to="/account/edit"
              className="bg-black text-white px-4 py-2 font-semibold"
            >
              Edit Profile
            </Link>
            <button 
              className="bg-red-600 text-white px-4 py-2 font-semibold"
              onClick={() => alert("Logged out!")}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Optional: Wishlist or Orders Summary */}
        <div className="border border-dark p-6 space-y-4">
          <h2 className="text-xl font-bold">Quick Links</h2>
          <Link to="/wishlist" className="block text-blue-600 hover:underline">My Wishlist</Link>
          <Link to="/cart" className="block text-blue-600 hover:underline">My Cart</Link>
          <Link to="/orders" className="block text-blue-600 hover:underline">My Orders</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
