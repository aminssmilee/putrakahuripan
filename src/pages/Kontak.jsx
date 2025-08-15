import Navbar from "../components/Navbar";

// src/pages/Kontak.jsx
export default function Kontak() {
  return (
    <>
    <Navbar />
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Kontak Kami</h2>
      <p className="text-gray-700">Silakan hubungi kami melalui:</p>
      <ul className="mt-2 text-gray-700">
        <li>📞 WA: 0812-3456-7890</li>
        {/* <li>📧 Email: karangtaruna@example.com</li> */}
        <li>📍 Alamat: Sumampir, Madulegi, Sukodadi, Lamongan</li>
      </ul>
    </div>
    </>
  );
}
