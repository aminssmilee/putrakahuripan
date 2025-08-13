"use client";

import { Users, Target, Heart, Calendar, Award, MapPin } from "lucide-react";
// import Navbar from "../components/navbar";
// import banner from "../assets/img/kartar.jpg";
import profile from "../assets/img/kartar.jpg";
import { useEffect, useState } from "react";

export default function Beranda() {
  const [offsetY, setOffsetY] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Daftar gambar background
  const images = [
  "banner.jpg",
  "kartar.jpg"
];

  // Efek parallax
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  // Listener scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Slider otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // ganti gambar setiap 5 detik
    return () => clearInterval(interval);
  }, []);


  
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        id="beranda"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background dengan parallax */}
        {/* Background dengan efek parallax + slider */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          transform: `translateY(${offsetY * 0.3}px)`
        }}
      ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
            Selamat Datang di
            <span className="block text-yellow-400">Putra Kahuripan</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Membangun Generasi Muda yang Berkarakter dan Berprestasi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Bergabung Dengan Kami
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-3 rounded-full transition-colors">
              Pelajari Lebih Lanjut
            </button> */}
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Tentang Kami
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Karang Taruna Putra Kahuripan
              </h3>
              <div className="max-w-3xl mx-auto text-justify">
                <p className="text-lg text-gray-700  leading-relaxed mb-6">
                  Karang Taruna Putra Kahuripan adalah organisasi yang dibentuk sebagai wadah generasi muda untuk mengembangkan diri, tumbuh, dan berkembang atas dasar kesadaran serta tanggung jawab sosial dari, oleh, dan untuk generasi muda, yang berorientasi pada tercapainya kesejahteraan sosial bagi masyarakat.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Dengan semangat gotong royong dan kebersamaan, kami terus mengembangkan berbagai program inovatif yang bermanfaat bagi masyarakat sekitar dan generasi muda Indonesia.
                </p>
              </div>


              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">Anggota Aktif</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    25+
                  </div>
                  <div className="text-gray-600">Program Kerja</div>
                </div> */}
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">5</div>
                  <div className="text-gray-600">Tahun Berdiri</div>
                </div> */}
              </div>
            </div>

            <div className="relative">
              <img
                src={profile}
                alt="Kegiatan Karang Taruna"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">2013</div>
                <div className="text-sm">Tahun Berdiri</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Visi</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Menjadi organisasi kepemudaan yang unggul dalam membentuk
                generasi muda yang berkarakter, kreatif, inovatif, dan
                berkontribusi nyata dalam pembangunan masyarakat yang sejahtera
                dan bermartabat.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Misi</h3>
              </div>
              <ul className="text-lg text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Mengembangkan potensi dan kreativitas generasi muda
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Melaksanakan program pemberdayaan masyarakat
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Membangun karakter pemuda yang berakhlak mulia
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Menciptakan lingkungan yang kondusif untuk berkembang
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Kerja */}
      <section id="program" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Program Kerja
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai program inovatif yang kami jalankan untuk pemberdayaan
              masyarakat dan pengembangan generasi muda
            </p>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Pemberdayaan Masyarakat
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Program pelatihan keterampilan, workshop wirausaha, dan
                pendampingan UMKM untuk meningkatkan kesejahteraan masyarakat.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Pengembangan Talenta
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pelatihan kepemimpinan, public speaking, dan pengembangan soft
                skills untuk mempersiapkan generasi muda yang berkualitas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Kegiatan Sosial
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bakti sosial, donor darah, bantuan bencana alam, dan program
                peduli lingkungan untuk masyarakat yang membutuhkan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Event & Festival
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Penyelenggaraan festival budaya, lomba kreativitas, dan event
                komunitas untuk mempererat silaturahmi antar warga.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Pendidikan & Literasi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Program bimbingan belajar gratis, perpustakaan keliling, dan
                kampanye literasi untuk meningkatkan kualitas pendidikan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Lingkungan Hidup
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kampanye go green, penanaman pohon, pengelolaan sampah, dan
                edukasi lingkungan untuk menjaga kelestarian alam.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Berita Terkini */}
      <section id="berita" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Berita Terkini
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="/placeholder.svg?height=250&width=400"
                alt="Kegiatan Bakti Sosial"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-red-600 font-medium mb-2">
                  15 Januari 2024
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Bakti Sosial Ramadhan 2024 Sukses Digelar
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Karang Taruna Putra Kahuripan berhasil menggelar bakti sosial
                  Ramadhan dengan membagikan 300 paket sembako kepada masyarakat
                  kurang mampu...
                </p>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="/placeholder.svg?height=250&width=400"
                alt="Pelatihan Kepemimpinan"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-red-600 font-medium mb-2">
                  10 Januari 2024
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Workshop Kepemimpinan Pemuda Angkatan ke-3
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sebanyak 50 pemuda mengikuti workshop kepemimpinan yang
                  diselenggarakan selama 3 hari dengan materi leadership dan
                  public speaking...
                </p>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="/placeholder.svg?height=250&width=400"
                alt="Festival Budaya"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-red-600 font-medium mb-2">
                  5 Januari 2024
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Festival Budaya Nusantara Meriah Digelar
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Festival budaya yang menampilkan berbagai kesenian tradisional
                  berhasil menarik ribuan pengunjung dan memperkenalkan budaya
                  lokal...
                </p>
              </div>
            </article>
          </div>

          <div className="text-center mt-12">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Lihat Semua Berita
            </button>
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section id="galeri" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Galeri Kegiatan
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Rapat Koordinasi"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Kerja Bakti"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Lomba Olahraga"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Pentas Seni"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Aksi Lingkungan"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Program Pendidikan"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Kegiatan Amal"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Perayaan"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
