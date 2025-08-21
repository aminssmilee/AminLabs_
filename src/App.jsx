import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

// Halaman
import Banner from "./components/Banner";
import CategoryCTA from "./components/CategoryCTA";
import Category from "./components/Category";
import LookBook from "./components/LookBook";

import CatalogPage from "./pages/CatalogPage";
import ClothesPage from "./pages/ClothesPage";

function App() {
  return (
    <Routes>
      {/* Bungkus semua route dengan Layout */}
      <Route path="/" element={<Layout />}>
        {/* Halaman utama */}
        <Route
          index
          element={
            <>
              <Banner />
              <CategoryCTA />
              <Category />
              <LookBook />
            </>
          }
        />

        {/* Halaman katalog & kategori */}
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/clothes" element={<ClothesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
