import React from "react";
import img1 from "../assets/image1.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import TopBar from "../components/TopBar";

export default function Clothes() {
  const products = [
    { id: 1, name: "black jacket", price: 550, image: img1 },
    { id: 1, name: "black jacket", price: 550, image: img1 },
    { id: 1, name: "black jacket", price: 550, image: img1 },
    { id: 1, name: "black jacket", price: 550, image: img1 },
    { id: 1, name: "black jacket", price: 550, image: img1 },
    { id: 1, name: "black jacket", price: 550, image: img1 },
    { id: 1, name: "black jacket", price: 550, image: img1 },
    { id: 1, name: "black jacket", price: 550, image: img1 },

  ];


  return (
    <>
      <div className="bg-beig font-helvetica">
        <TopBar />
        <Navigation />
        <div className="bg-beig min-h-screen py-10">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4 px-6">
            <Link to="/" className="hover:text-gray-700">home</Link> /{" "}
            <Link to="/catalog" className="hover:text-gray-700">catalog</Link> /{" "}
            <span className="text-gray-900">clothes</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold tracking-tight mb-8 px-6">CLOTHES</h1>

          {/* Filter & Sort */}
          <div className="flex justify-between items-center border-y border-dark px-6 py-3">
            <button className="text-sm flex items-center gap-1">
              all filters <span className="text-lg">☰</span>
            </button>
            <select className="text-sm bg-transparent focus:ring-0">
              <option>sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Produk Grid */}
          <div className="px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-dark">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="text-center border-r border-dark"
                >
                  <Link to={`/product/${product.id}`}>
                    <img
                      className="w-full h-[350px] object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                    <h2>{product.name}</h2>
                  </Link>

                  {/* <img
                    src={product.image}
                    alt={product.name}
                  /> */}
                  <div className="flex justify-between items-center border-t border-dark px-2 py-2 text-sm">
                    <span>{product.name}</span>
                    <span className="font-semibold">{product.price} $</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center border-y border-dark px-6 py-3">
            {/* Pagination (tampilan saja) */}
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 border rounded opacity-50">&lt;</button>
              <button className="px-2 py-1 border rounded bg-dark text-white">1</button>
              <button className="px-2 py-1 border rounded">2</button>
              <button className="px-2 py-1 border rounded">3</button>
              <button className="px-2 py-1 border rounded">4</button>
              <button className="px-2 py-1 border rounded opacity-50">&gt;</button>
            </div>

            {/* Load More (tampilan saja) */}
            <button className="text-sm underline">load more</button>
          </div>

        </div>

        <Footer />
      </div>
    </>
  );
}
