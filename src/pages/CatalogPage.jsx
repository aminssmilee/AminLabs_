import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function CatalogPage() {
    const categories = [
        { name: "Clothes", path: "/catalog/clothes", image: "/assets/clothes.jpg" },
        { name: "Shoes", path: "/catalog/shoes", image: "/assets/shoes.jpg" },
        { name: "Bags", path: "/catalog/bags", image: "/assets/bags.jpg" },
        { name: "Accessories", path: "/catalog/accessories", image: "/assets/accessories.jpg" },
    ];

    return (
        <>
            <TopBar />
            <Navigation />
            <div className="bg-beig">
                <div className="max-w-7xl mx-auto p-8">
                    {/* Breadcrumb */}
                    <p className="text-sm text-gray-500">
                        <Link to="/" className="hover:underline">Home</Link> /{" "}
                        <Link to="/catalog" className="hover:underline">Catalog</Link>
                    </p>

                    {/* Judul */}
                    <h1 className="text-4xl font-bold mt-3 tracking-wide">Our Catalog</h1>
                    <p className="text-gray-600 mt-2 text-lg">
                        Discover our curated collection by category
                    </p>

                    {/* Daftar Kategori */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                        {categories.map((cat, index) => (
                            <Link
                                key={index}
                                to={cat.path}
                                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                {/* Gambar */}
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition" />

                                {/* Teks */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-white text-2xl font-semibold drop-shadow-lg">
                                        {cat.name}
                                    </h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
