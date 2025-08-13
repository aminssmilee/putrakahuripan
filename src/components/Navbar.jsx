import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tentangOpen, setTentangOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const linkClass = (path, exact = true) =>
    `hover:underline ${(exact && currentPath === path) ||
      (!exact && currentPath.startsWith(path))
      ? "text-yellow-400 font-semibold underline"
      : ""
    }`;

  return (
    <header className="bg-karang-merah text-white sticky top-0 shadow-md z-50">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold">Putra Kahuripan</h1>
        </div>

        {/* Tombol Mobile */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center relative">
          <Link to="/" className={linkClass("/")}>
            Beranda
          </Link>

          {/* Dropdown Tentang */}
          <div
            className="relative group"
            onMouseEnter={() => setTentangOpen(true)}
            onMouseLeave={() => setTentangOpen(false)}
          >
            <span className="cursor-pointer hover:underline">Tentang ▾</span>
            {tentangOpen && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-2 w-48 z-50">
                <Link
                  to="/tentang"
                  className="block px-4 py-2 hover:bg-yellow-100"
                >
                  Profil
                </Link>
                <Link
                  to="/visi-misi"
                  className="block px-4 py-2 hover:bg-yellow-100"
                >
                  Visi & Misi
                </Link>
                <Link
                  to="/struktur"
                  className="block px-4 py-2 hover:bg-yellow-100"
                >
                  Struktur
                </Link>
              </div>
            )}
          </div>

          <Link to="/kegiatan" className={linkClass("/kegiatan")}>
            Kegiatan
          </Link>
          <Link to="/keuangan" className={linkClass("/keuangan")}>
            Keuangan
          </Link>
          <Link to="/galeri" className={linkClass("/galeri")}>
            Galeri
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/")}
            >
              Beranda
            </Link>

            {/* Submenu Tentang di Mobile */}
            <div>
              <button
                onClick={() => setTentangOpen(!tentangOpen)}
                className={`w-full text-left ${currentPath.startsWith("/tentang") ||
                    currentPath === "/visi-misi" ||
                    currentPath === "/struktur"
                    ? "text-yellow-400 font-semibold underline"
                    : ""
                  }`}
              >
                Tentang ▾
              </button>
              {tentangOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link
                    to="/tentang"
                    onClick={() => setMenuOpen(false)}
                    className={`${linkClass(
                      "/tentang"
                    )} block px-2 py-1 rounded hover:bg-yellow-100 ${currentPath === "/tentang"
                        ? "bg-yellow-400 text-white"
                        : ""
                      }`}
                  >
                    Profil
                  </Link>
                  <Link
                    to="/visi-misi"
                    onClick={() => setMenuOpen(false)}
                    className={`${linkClass(
                      "/visi-misi"
                    )} block px-2 py-1 rounded hover:bg-yellow-100 ${currentPath === "/visi-misi"
                        ? "bg-yellow-400 text-white"
                        : ""
                      }`}
                  >
                    Visi & Misi
                  </Link>
                  <Link
                    to="/struktur"
                    onClick={() => setMenuOpen(false)}
                    className={`${linkClass(
                      "/struktur"
                    )} block px-2 py-1 rounded hover:bg-yellow-100 ${currentPath === "/struktur"
                        ? "bg-yellow-400 text-white"
                        : ""
                      }`}
                  >
                    Struktur
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/kegiatan"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/kegiatan")}
            >
              Kegiatan
            </Link>
            <Link
              to="/keuangan"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/keuangan")}
            >
              Keuangan
            </Link>
            <Link
              to="/galeri"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/galeri")}
            >
              Galeri
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
