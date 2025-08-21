import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <div className="bg-beig">
      {/* Bagian atas selalu tampil */}
      <TopBar />
      <Navigation />

      {/* Bagian tengah berubah sesuai route */}
      <Outlet />

      {/* Bagian bawah selalu tampil */}
      <Footer />
    </div>
  );
}
