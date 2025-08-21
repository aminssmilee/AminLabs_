import { Link } from "react-router-dom";

export default function CatalogPage() {
    const categories = [
        { name: "Clothes", path: "/catalog/clothes" },
        { name: "Shoes", path: "/catalog/shoes" },
        { name: "Bags", path: "/catalog/bags" },
        { name: "Accessories", path: "/home/catalog/accessories" },
    ];

    return (
        <div className="p-8">
            {/* Breadcrumb */}
            <p className="text-gray-600">
                <Link to="/" className="hover:underline">home</Link> /{" "}
                <Link to="/catalog" className="hover:underline">catalog</Link>
            </p>

            {/* Judul */}
            <h1 className="text-4xl font-bold mt-2">CATALOG</h1>

            {/* Daftar Kategori */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {categories.map((cat, index) => (
                    <Link
                        key={index}
                        to={cat.path}
                        className="p-6 border rounded-xl shadow hover:shadow-lg transition text-center"
                    >
                        <h2 className="text-xl font-semibold">{cat.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}
