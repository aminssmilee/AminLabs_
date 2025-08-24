import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClothesPage from "./pages/ClothesPage";
import CatalogPage from "./pages/CatalogPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="catalog" element={<CatalogPage />} />
      <Route path="/catalog/clothes" element={<ClothesPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="cart/checkout" element={<CheckoutPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
