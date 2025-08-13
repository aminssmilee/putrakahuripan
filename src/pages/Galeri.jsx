import Navbar from "../components/navbar";

// src/pages/Galeri.jsx
export default function Galeri() {
  return (
    <div>
      <Navbar />
      <div className="p-6 min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-yellow-600 mb-4">Galeri Kegiatan</h2>
        <div className="text-center">
          <p className="text-gray-700 text-lg mb-2">Halaman ini masih dalam tahap pengembangan.</p>
          <p className="text-gray-500">Silakan kembali lagi nanti untuk melihat dokumentasi kegiatan Karang Taruna.</p>
        </div>
      </div>
    </div>
  );
}
