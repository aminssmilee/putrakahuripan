"use client"

import {
  User,
  Mail,
  Phone,
  Users,
  FileText,
  DollarSign,
  Calendar,
  Shield,
  Activity,
} from "lucide-react"
import Navbar from "../components/navbar"

export default function Struktur() {
  const strukturData = [
    {
      nama: "Ahmad Fadli",
      jabatan: "Ketua Umum",
      foto: "/placeholder.svg?height=200&width=200&text=Ahmad+Fadli",
      email: "ahmad.fadli@sukamaju.id",
      phone: "0812-3456-7890",
      icon: Users,
      tugas: [
        "Memimpin dan mengkoordinasikan seluruh kegiatan organisasi",
        "Mewakili organisasi dalam hubungan eksternal",
        "Mengambil keputusan strategis untuk kemajuan organisasi",
        "Bertanggung jawab atas pencapaian visi dan misi organisasi",
      ],
    },
    {
      nama: "Siti Nurjanah",
      jabatan: "Wakil Ketua",
      foto: "/placeholder.svg?height=200&width=200&text=Siti+Nurjanah",
      email: "siti.nurjanah@sukamaju.id",
      phone: "0813-4567-8901",
      icon: User,
      tugas: [
        "Membantu ketua dalam menjalankan tugas kepemimpinan",
        "Menggantikan ketua jika berhalangan hadir",
        "Mengkoordinasikan program kerja dengan berbagai seksi",
        "Melakukan evaluasi dan monitoring kegiatan organisasi",
      ],
    },
    {
      nama: "Bambang Setiawan",
      jabatan: "Sekretaris",
      foto: "/placeholder.svg?height=200&width=200&text=Bambang+Setiawan",
      email: "bambang.setiawan@sukamaju.id",
      phone: "0814-5678-9012",
      icon: FileText,
      tugas: [
        "Mengelola administrasi dan dokumentasi organisasi",
        "Membuat notulen rapat dan surat-menyurat",
        "Mengarsipkan dokumen penting organisasi",
        "Mengelola database anggota dan kegiatan",
      ],
    },
    {
      nama: "Lilis Suryani",
      jabatan: "Bendahara",
      foto: "/placeholder.svg?height=200&width=200&text=Lilis+Suryani",
      email: "lilis.suryani@sukamaju.id",
      phone: "0815-6789-0123",
      icon: DollarSign,
      tugas: [
        "Mengelola keuangan organisasi dengan transparan",
        "Membuat laporan keuangan berkala",
        "Mengatur anggaran untuk setiap program kegiatan",
        "Bertanggung jawab atas kas dan aset organisasi",
      ],
    },
    {
      nama: "Dede Supriadi",
      jabatan: "Seksi Kegiatan",
      foto: "/placeholder.svg?height=200&width=200&text=Dede+Supriadi",
      email: "dede.supriadi@sukamaju.id",
      phone: "0816-7890-1234",
      icon: Calendar,
      tugas: [
        "Merencanakan dan melaksanakan program kegiatan",
        "Mengkoordinasikan acara dan event organisasi",
        "Mengelola jadwal kegiatan rutin dan insidental",
        "Melakukan evaluasi terhadap setiap kegiatan",
      ],
    },
    {
      nama: "Taufik Hidayat",
      jabatan: "Seksi Keamanan",
      foto: "/placeholder.svg?height=200&width=200&text=Taufik+Hidayat",
      email: "taufik.hidayat@sukamaju.id",
      phone: "0817-8901-2345",
      icon: Shield,
      tugas: [
        "Menjaga keamanan dan ketertiban dalam setiap kegiatan",
        "Mengkoordinasikan dengan aparat keamanan setempat",
        "Mengelola sistem keamanan lingkungan desa",
        "Bertanggung jawab atas keselamatan anggota dan masyarakat",
      ],
    },
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Struktur Kepengurusan</h1>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto">
            Tim kepemimpinan yang berpengalaman dan berkomitmen untuk memajukan Karang Taruna Desa Suka Maju
          </p>
        </div>
      </section>

      {/* Bagan Organisasi */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Bagan Organisasi</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Struktur organisasi yang solid dan terorganisir untuk mencapai tujuan bersama
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            {/* Ketua */}
            <div className="flex justify-center mb-8">
              <div className="bg-yellow-600 text-white p-6 rounded-xl text-center shadow-lg">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-lg">Ahmad Fadli</div>
                <div className="text-sm opacity-90">Ketua Umum</div>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-px h-8 bg-gray-300"></div>
            </div>

            {/* Wakil */}
            <div className="flex justify-center mb-8">
              <div className="bg-yellow-500 text-white p-6 rounded-xl text-center shadow-lg">
                <User className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-lg">Siti Nurjanah</div>
                <div className="text-sm opacity-90">Wakil Ketua</div>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-px h-8 bg-gray-300"></div>
            </div>
            <div className="flex justify-center mb-8">
              <div className="w-96 h-px bg-gray-300"></div>
            </div>

            {/* Sekretaris, Bendahara, Seksi */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-yellow-100 text-yellow-800 p-4 rounded-xl text-center shadow-lg">
                <FileText className="w-6 h-6 mx-auto mb-2" />
                <div className="font-bold">Bambang Setiawan</div>
                <div className="text-xs">Sekretaris</div>
              </div>
              <div className="bg-yellow-200 text-yellow-900 p-4 rounded-xl text-center shadow-lg">
                <DollarSign className="w-6 h-6 mx-auto mb-2" />
                <div className="font-bold">Lilis Suryani</div>
                <div className="text-xs">Bendahara</div>
              </div>
              <div className="bg-yellow-300 text-yellow-900 p-4 rounded-xl text-center shadow-lg">
                <Calendar className="w-6 h-6 mx-auto mb-2" />
                <div className="font-bold">Dede Supriadi</div>
                <div className="text-xs">Seksi Kegiatan</div>
              </div>
              <div className="bg-yellow-400 text-yellow-900 p-4 rounded-xl text-center shadow-lg">
                <Shield className="w-6 h-6 mx-auto mb-2" />
                <div className="font-bold">Taufik Hidayat</div>
                <div className="text-xs">Seksi Keamanan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profil Pengurus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Profil Pengurus</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mengenal lebih dekat para pengurus yang berdedikasi untuk kemajuan organisasi
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {strukturData.map((pengurus, index) => {
              const IconComponent = pengurus.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <img
                          src={pengurus.foto}
                          alt={pengurus.nama}
                          className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-yellow-100 text-yellow-600 border border-yellow-300">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">{pengurus.nama}</h3>
                            <p className="text-yellow-600 font-medium">{pengurus.jabatan}</p>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4 text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span className="text-sm">{pengurus.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span className="text-sm">{pengurus.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-800 mb-3">Tugas dan Tanggung Jawab:</h4>
                      <ul className="space-y-2">
                        {pengurus.tugas.map((tugas, tugasIndex) => (
                          <li key={tugasIndex} className="flex items-start space-x-2 text-gray-600">
                            <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{tugas}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
