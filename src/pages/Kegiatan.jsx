"use client"

import { Calendar, Users, Award, Leaf, Heart, Trophy, MapPin, Clock } from "lucide-react"
import Navbar from "../components/Navbar"
import lomba from "../assets/Pumflate/PAMFLET LOMBA ANAK-ANAK.png"

export default function Kegiatan() {
  // const kegiatanRutin = [
  //   {
  //     nama: "Bersih-Bersih Lapangan",
  //     deskripsi: "Kegiatan gotong royong membersihkan lapangan desa dan fasilitas umum setiap minggu",
  //     jadwal: "Setiap Minggu Pagi",
  //     waktu: "07:00 - 09:00 WIB",
  //     lokasi: "Lapangan Desa Suka Maju",
  //     peserta: "50+ Anggota",
  //     icon: Leaf,
  //     color: "green",
  //     gambar: lomba
  //   },
  //   {
  //     nama: "Kerja Bakti Lingkungan",
  //     deskripsi: "Program pembersihan lingkungan, penanaman pohon, dan pengelolaan sampah",
  //     jadwal: "Setiap Bulan",
  //     waktu: "06:00 - 10:00 WIB",
  //     lokasi: "Seluruh Wilayah Desa",
  //     peserta: "100+ Warga",
  //     icon: Heart,
  //     color: "blue",
  //     gambar: "/placeholder.svg?height=300&width=400&text=Kerja+Bakti",
  //   },
  //   {
  //     nama: "Bakti Sosial",
  //     deskripsi: "Kegiatan bantuan sosial untuk masyarakat kurang mampu dan lansia",
  //     jadwal: "Setiap 3 Bulan",
  //     waktu: "08:00 - 12:00 WIB",
  //     lokasi: "Balai Desa",
  //     peserta: "30+ Relawan",
  //     icon: Users,
  //     color: "red",
  //     gambar: "/placeholder.svg?height=300&width=400&text=Bakti+Sosial",
  //   },
  //   {
  //     nama: "Pelatihan Kewirausahaan",
  //     deskripsi: "Workshop dan pelatihan untuk mengembangkan jiwa wirausaha pemuda",
  //     jadwal: "Setiap 2 Bulan",
  //     waktu: "13:00 - 17:00 WIB",
  //     lokasi: "Aula Desa",
  //     peserta: "40+ Peserta",
  //     icon: Award,
  //     color: "purple",
  //     gambar: "/placeholder.svg?height=300&width=400&text=Pelatihan+Wirausaha",
  //   },
  // ]

  // const kegiatanTahunan = [
  //   {
  //     nama: "Lomba 17 Agustus",
  //     deskripsi: "Berbagai perlombaan dalam rangka memperingati Hari Kemerdekaan Indonesia",
  //     tanggal: "17 Agustus 2024",
  //     lokasi: "Lapangan Desa",
  //     kategori: ["Balap Karung", "Panjat Pinang", "Tarik Tambang", "Lomba Makan Kerupuk"],
  //     hadiah: "Total Rp 5.000.000",
  //     peserta: "200+ Peserta",
  //     gambar: "/placeholder.svg?height=300&width=400&text=Lomba+17+Agustus",
  //   },
  //   {
  //     nama: "Festival Budaya Desa",
  //     deskripsi: "Pentas seni dan budaya untuk melestarikan tradisi lokal",
  //     tanggal: "15 September 2024",
  //     lokasi: "Panggung Terbuka Desa",
  //     kategori: ["Tari Tradisional", "Musik Daerah", "Teater", "Pameran Kerajinan"],
  //     hadiah: "Piala dan Uang Pembinaan",
  //     peserta: "150+ Seniman",
  //     gambar: "/placeholder.svg?height=300&width=400&text=Festival+Budaya",
  //   },
  //   {
  //     nama: "Turnamen Olahraga Antar RT",
  //     deskripsi: "Kompetisi olahraga untuk mempererat silaturahmi antar warga",
  //     tanggal: "Oktober 2024",
  //     lokasi: "Lapangan Olahraga Desa",
  //     kategori: ["Sepak Bola", "Voli", "Badminton", "Futsal"],
  //     hadiah: "Piala Bergilir",
  //     peserta: "300+ Atlet",
  //     gambar: "/placeholder.svg?height=300&width=400&text=Turnamen+Olahraga",
  //   },
  // ]

  // const kegiatanMendatang = [
  //   {
  //     nama: "Lomba Kebersihan Lingkungan",
  //     tanggal: "25 Februari 2024",
  //     waktu: "08:00 WIB",
  //     lokasi: "Seluruh RT di Desa",
  //     deskripsi: "Kompetisi kebersihan antar RT dengan penilaian dari tim juri",
  //   },
  //   {
  //     nama: "Pelatihan Digital Marketing",
  //     tanggal: "10 Maret 2024",
  //     waktu: "13:00 WIB",
  //     lokasi: "Aula Desa",
  //     deskripsi: "Workshop pemasaran digital untuk UMKM dan wirausaha muda",
  //   },
  //   {
  //     nama: "Donor Darah Massal",
  //     tanggal: "20 Maret 2024",
  //     waktu: "09:00 WIB",
  //     lokasi: "Puskesmas Desa",
  //     deskripsi: "Kegiatan donor darah bekerjasama dengan PMI setempat",
  //   },
  // ]


  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kegiatan Kami</h1>
            <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto">
              Berbagai program dan kegiatan lomba yang kami adakan untuk mendorong partisipasi dan kreativitas masyarakat
            </p>
          </div>

          {/* Daftar Kegiatan Lomba */}

          {/* Poster Lomba */}
          <div className="mt-16 text-center">
            {/* <h2 className="text-3xl font-bold mb-6">Poster Lomba Terbaru</h2> */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden inline-block">
              <img src={lomba} alt="Poster Lomba" className="w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>



      {/* Kegiatan Rutin */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Kegiatan Rutin</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Program-program yang dilaksanakan secara berkala untuk pemberdayaan masyarakat
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {kegiatanRutin.map((kegiatan, index) => {
              const IconComponent = kegiatan.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <img
                    src={kegiatan.gambar || "/placeholder.svg"}
                    alt={kegiatan.nama}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center {(kegiatan.color)}`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{kegiatan.nama}</h3>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{kegiatan.deskripsi}</p>

                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{kegiatan.jadwal}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{kegiatan.waktu}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{kegiatan.lokasi}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{kegiatan.peserta}</span>
                      </div>
                    </div>

                    <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                      Ikut Berpartisipasi
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* Kegiatan Tahunan */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Event Tahunan</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acara besar yang menjadi tradisi tahunan dan dinanti-nantikan masyarakat
            </p>
          </div>

          <div className="space-y-8">
            {kegiatanTahunan.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <img
                    src={event.gambar || "/placeholder.svg"}
                    alt={event.nama}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-yellow-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{event.nama}</h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{event.deskripsi}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{event.tanggal}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.lokasi}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Users className="w-4 h-4" />
                          <span>{event.peserta}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Kategori Lomba:</div>
                        <div className="flex flex-wrap gap-2">
                          {event.kategori.map((kategori, katIndex) => (
                            <span key={katIndex} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                              {kategori}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-yellow-600" />
                        <span className="font-medium text-yellow-800">Total Hadiah: {event.hadiah}</span>
                      </div>
                    </div>

                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                      Daftar Sekarang
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Kegiatan Mendatang */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Kegiatan Mendatang</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jadwal kegiatan yang akan datang dan terbuka untuk partisipasi masyarakat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {kegiatanMendatang.map((kegiatan, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{kegiatan.nama}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{kegiatan.deskripsi}</p>

                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{kegiatan.tanggal}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{kegiatan.waktu}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{kegiatan.lokasi}</span>
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                  Daftar Kegiatan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Statistik Kegiatan */}
      {/* <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Statistik Kegiatan</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Pencapaian kami dalam melaksanakan berbagai program dan kegiatan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-4xl font-bold mb-2">52</div>
              <div className="text-green-100">Kegiatan per Tahun</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Peserta Aktif</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-green-100">Lomba Tahunan</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100">Partisipasi Warga</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Bergabunglah dalam Kegiatan Kami</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Jadilah bagian dari perubahan positif di lingkungan kita. Setiap kontribusi Anda sangat berarti untuk
            kemajuan bersama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Daftar Sebagai Relawan
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Lihat Jadwal Lengkap
            </button>
          </div>
        </div>
      </section> */}
    </>
  )
}
