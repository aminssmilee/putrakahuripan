import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";
import Kegiatan from "./pages/Kegiatan";
import Galeri from "./pages/Galeri";
import Kontak from "./pages/Kontak";
import Keuangan from "./pages/Keuangan";
import Struktur from "./pages/Struktur";
import Footer from "./components/Footer";
// import VisiMisi from "./pages/VisiMisi";

export default function App() {
  return (
    <>
      <main className="font-jakarta">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kegiatan" element={<Kegiatan />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/tentang" element={<Tentang />} />
          {/* <Route path="/visi-misi" element={<VisiMisi />} /> */}
          <Route path="/struktur" element={<Struktur />} />
          <Route path="/keuangan" element={<Keuangan />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}
