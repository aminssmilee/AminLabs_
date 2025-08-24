import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import p1 from "../assets/images/aminslogo.jpg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import Navigation from "../components/Navigation";
import ImageSlider from "../components/ProductImageSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function ProductDetailPage() {
    const { id } = useParams();
    const [open, setOpen] = useState(null);

    // Dummy data produk
    const products = [
        {
            id: "1",
            name: "Suspended Black Shirt",
            price: 1200,
            description:
                "Suspended Hemdkleid aus Baumwollpopeline in Schwarz ist in Look 22 der Winterkollektion 2024 von Balenciaga zu finden.",
            images: [
                p1,
                p1,
                p1
            ],
            sizes: ["S", "M", "L", "XL"],
        },
        {
            id: "2",
            name: "White Shirt",
            price: 300,
            description: "Kemeja putih formal dengan bahan katun lembut.",
            image: "https://via.placeholder.com/400x400.png?text=White+Shirt",
            sizes: ["M", "L", "XL"],
        },
    ];

    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="max-w-6xl mx-auto px-6 py-10 text-center">
                <h2 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h2>
                <Link
                    to="/catalog/clothes"
                    className="text-blue-600 hover:underline flex items-center gap-2 justify-center"
                >
                    <FaArrowLeft className="w-5 h-5" /> Kembali ke Catalog
                </Link>
            </div>
        );
    }

    return (
        <>
            <TopBar />
            <Navigation />
            <div className="bg-beig min-h-screen font-helvetica">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 px-6 pt-6 ">
                    <Link to="/" className="hover:text-gray-700">
                        home
                    </Link>{" "}
                    /{" "}
                    <Link to="/catalog" className="hover:text-gray-700">
                        catalog
                    </Link>{" "}
                    /{" "}
                    <Link to="/catalog/clothes" className="hover:text-gray-700">
                        clothes
                    </Link>{" "}
                    / <span className="text-gray-900">{product.name.toLowerCase()}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight px-6 py-6">
                    {product.name.toUpperCase()}
                </h1>

                {/* Content */}
                <div className="flex flex-col md:flex-row md:justify-between md:px-6 border border-dark">
                    {/* Left: Image */}
                    <div className="flex items-center justify-center border-b border-l md:border-b-0 md:border-r border-dark md:w-1/2">
                        <div className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[500px] mx-auto">
                            <ImageSlider images={product.images} />
                        </div>
                    </div>

                    {/* Right: Detail */}
                    <div className="p-4 md:w-1/2">
                        {/* Title & Price */}
                        <h2 className="text-2xl font-bold mb-2 text-center hidden md:block">
                            {product.name}
                        </h2>
                        <p className="text-lg font-semibold mb-4 text-center">{product.price}$</p>
                        <p className="text-gray-600 mb-6 text-center">{product.description}</p>

                        {/* Accordion Detail */}
                        <div className="border border-black divide-y divide-black">
                            {[
                                {
                                    key: "details",
                                    label: "Product Details",
                                    content: "Bahan: Katun Premium, Made in Italy.",
                                },
                                {
                                    key: "shipping",
                                    label: "Shipping",
                                    content: "Gratis ongkir seluruh Indonesia, 3-5 hari kerja.",
                                },
                                {
                                    key: "size",
                                    label: "Size",
                                    content: product.sizes.join(", "),
                                },
                            ].map((section) => (
                                <div key={section.key} className="px-4">
                                    <button
                                        className="w-full flex justify-between items-center py-4 text-left font-medium"
                                        onClick={() => setOpen(open === section.key ? null : section.key)}
                                    >
                                        <span>{section.label}</span>
                                        {open === section.key ? (
                                            <FaChevronUp className="w-4 h-4" />
                                        ) : (
                                            <FaChevronDown className="w-4 h-4" />
                                        )}
                                    </button>

                                    {open === section.key && (
                                        <div className="pb-4 text-sm text-gray-600">{section.content}</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Add to Cart & Wishlist */}
                        <div className="mt-12">
                            <div className="flex justify-end">
                                <button className="p-3 border rounded-sm hover:bg-gray-100">
                                    <FaHeart />
                                </button>
                            </div>

                            <div className="flex items-center gap-3 mt-3">
                                <button className="flex-1 px-6 py-3 bg-black text-white rounded-sm hover:bg-gray-800">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>

                        {/* Payment Info */}
                        <p className="mt-4 text-xs text-gray-500">
                            Sie können sicher mit Kreditkarte (Visa, Mastercard, American Express),
                            Apple Pay, Klarna oder Paypal bezahlen.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
