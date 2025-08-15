import { useState } from "react";
import logo from "../assets/logo.png"; // Pastikan file ini ada di folder yang sesuai

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());

  const socialLinks = [
    {
      name: "Twitter/X",
      icon: "𝕏",
      url: "#",
      bgColor: "bg-black hover:bg-gray-800",
    },
    {
      name: "Facebook",
      icon: "📘",
      url: "#",
      bgColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: "📷",
      url: "#",
      bgColor:
        "bg-gradient-to-tr from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    },
    {
      name: "YouTube",
      icon: "📺",
      url: "#",
      bgColor: "bg-red-600 hover:bg-red-700",
    },
  ];

  const quickLinks = [
    { name: "Beranda", url: "/" },
    { name: "Tentang Kami", url: "/tentang" },
    { name: "Program Kegiatan", url: "/kegiatan" },
    { name: "Galeri", url: "/galeri" },
    // { name: "Berita", url: "/berita" },
    { name: "Kontak", url: "/kontak" },
  ];

  const externalLinks = [
    // { name: "Portal Desa Madulegi", url: "#" },
    // { name: "Kementerian Sosial RI", url: "https://kemensos.go.id" },
    // { name: "Karang Taruna Indonesia", url: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-karang-merah to-karang-merah text-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center text-center lg:text-left">
          {/* Info Organisasi */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <span className="text-2xl"><img src={logo} alt="" srcset="" /></span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Karang Taruna</h3>
                <h3 className="font-bold text-lg text-yellow-300">
                  Putra Kahuripan
                </h3>
              </div>
            </div>

            <div className="text-white/90 space-y-3 mb-6">
              <div className="flex gap-2">
                <span className="text-yellow-300 mt-1">📍</span>
                <address className="not-italic leading-snug">
                  Jl. Sumampir, Semampir, Madulegi, Kec. Sukodadi,
                  <br />
                  Kab. Lamongan, Jawa Timur 62253
                </address>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-yellow-300">📞</span>
                <a
                  href="tel:+6285736077235"
                  className="hover:text-yellow-300 transition"
                >
                  +62 857-3607-7235
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-yellow-300">✉️</span>
                <a
                  href="mailto:putrakahuripan@gmail.com"
                  className="hover:text-yellow-300 transition"
                >
                  putrakahuripan@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-yellow-300">Ikuti Kami</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    title={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 ${social.bgColor} rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition`}
                  >
                    <span className="text-white text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Utama */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-300">Menu Utama</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="block text-white/90 hover:text-yellow-300 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tautan Penting */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-300">
              Tautan Penting
            </h4>
            <ul className="space-y-2">
              {externalLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/90 hover:text-yellow-300 transition"
                  >
                    <span className="text-yellow-300">🔗</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <div className="text-center md:text-left">
            <p>
              © {currentYear}{" "}
              <span className="font-semibold">
                Karang Taruna Putra Kahuripan
              </span>
              . Seluruh hak cipta dilindungi undang-undang.
            </p>
            <p className="mt-1">
              Dibuat dengan ❤️ untuk kemajuan pemuda Indonesia
            </p>
          </div>
          {/* <div className="flex gap-4 items-center">
            <span>Powered by</span>
            <span className="flex items-center gap-1 font-semibold">
              ⚛️ React
            </span>
            <span>|</span>
            <span className="flex items-center gap-1 font-semibold">
              🎨 Tailwind CSS
            </span>
          </div> */}
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-400 text-blue-900 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center font-bold text-lg"
        title="Kembali ke atas"
      >
        ↑
      </button>
    </footer>
  );
}
