import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClothesPage from "./pages/ClothesPage";
import CatalogPage from "./pages/CatalogPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="catalog" element={<CatalogPage />} />
      <Route path="/catalog/clothes" element={<ClothesPage />} />
    </Routes>
  );
}

export default App;
