"use client"

import { Users, Target, Heart, Award, Calendar, Star, TrendingUp } from "lucide-react"
import Navbar from "../components/Navbar";

export default function Tentang() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Kami</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Mengenal lebih dekat Karang Taruna Desa Suka Maju dan perjalanan kami dalam membangun generasi muda yang
              berkualitas
            </p>
          </div>
        </div>
      </section>

      {/* Sejarah Singkat */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Sejarah Singkat</h2>
              <div className="w-24 h-1 bg-blue-600 mb-8"></div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-blue-600">Karang Taruna Desa Suka Maju</strong> didirikan pada tahun{" "}
                  <strong>2001</strong> atas inisiatif para pemuda desa yang memiliki visi untuk menciptakan perubahan
                  positif di lingkungan mereka. Berawal dari keprihatinan terhadap kurangnya wadah bagi generasi muda
                  untuk berkreasi dan berkontribusi.
                </p>

                <p>
                  Dalam perjalanan lebih dari <strong>23 tahun</strong>, kami telah berkembang menjadi organisasi
                  kepemudaan yang solid dan terpercaya. Kami bertujuan menciptakan pemuda yang aktif, mandiri, dan
                  peduli lingkungan melalui berbagai program pemberdayaan dan kegiatan sosial.
                </p>

                <p>
                  Komitmen kami adalah membangun generasi muda yang tidak hanya unggul dalam prestasi, tetapi juga
                  memiliki karakter yang kuat, jiwa kepemimpinan, dan kepedulian tinggi terhadap sesama dan lingkungan.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2001</div>
                  <div className="text-gray-600 font-medium">Tahun Berdiri</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">23+</div>
                  <div className="text-gray-600 font-medium">Tahun Pengalaman</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500&text=Sejarah+Karang+Taruna"
                alt="Sejarah Karang Taruna"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <Calendar className="w-8 h-8 mb-2" />
                <div className="text-sm font-medium">Sejak 2001</div>
                <div className="text-xs opacity-90">Melayani Masyarakat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Visi & Misi</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Visi</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                "Menjadi organisasi kepemudaan terdepan dalam membentuk generasi muda Desa Suka Maju yang berkarakter,
                kreatif, mandiri, dan peduli lingkungan untuk mewujudkan masyarakat yang sejahtera dan bermartabat pada
                tahun 2030."
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Misi</h3>
              </div>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-red-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Mengembangkan potensi dan kreativitas generasi muda melalui program pelatihan dan pembinaan
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-red-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Melaksanakan program pemberdayaan ekonomi masyarakat dan pengembangan UMKM
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-red-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Membangun karakter pemuda yang berakhlak mulia dan berjiwa kepemimpinan
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-red-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Melestarikan lingkungan hidup dan budaya lokal untuk generasi mendatang
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-red-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Menciptakan sinergi dengan berbagai pihak untuk pembangunan desa yang berkelanjutan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Organisasi */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Nilai-Nilai Organisasi</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nilai-nilai fundamental yang menjadi landasan dalam setiap kegiatan dan program kerja kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Kebersamaan</h3>
              <p className="text-gray-600">
                Membangun solidaritas dan kerjasama yang kuat antar anggota dan masyarakat
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Kepedulian</h3>
              <p className="text-gray-600">
                Memiliki empati dan kepedulian tinggi terhadap sesama dan lingkungan sekitar
              </p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Integritas</h3>
              <p className="text-gray-600">
                Menjunjung tinggi kejujuran, transparansi, dan akuntabilitas dalam berorganisasi
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Inovasi</h3>
              <p className="text-gray-600">Selalu berinovasi dan beradaptasi dengan perkembangan zaman dan teknologi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Struktur Organisasi</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim kepemimpinan yang berpengalaman dan berkomitmen untuk memajukan organisasi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ketua */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img
                src="/placeholder.svg?height=150&width=150&text=Ketua"
                alt="Ketua"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Budi Santoso</h3>
              <p className="text-blue-600 font-medium mb-3">Ketua Umum</p>
              <p className="text-gray-600 text-sm">
                Memimpin organisasi dengan visi yang jelas dan komitmen tinggi untuk kemajuan pemuda desa
              </p>
            </div>

            {/* Wakil Ketua */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img
                src="/placeholder.svg?height=150&width=150&text=Wakil"
                alt="Wakil Ketua"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sari Indah</h3>
              <p className="text-blue-600 font-medium mb-3">Wakil Ketua</p>
              <p className="text-gray-600 text-sm">
                Mendampingi ketua dalam menjalankan program kerja dan koordinasi dengan berbagai pihak
              </p>
            </div>

            {/* Sekretaris */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img
                src="/placeholder.svg?height=150&width=150&text=Sekretaris"
                alt="Sekretaris"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ahmad Fauzi</h3>
              <p className="text-blue-600 font-medium mb-3">Sekretaris</p>
              <p className="text-gray-600 text-sm">
                Mengelola administrasi organisasi dan dokumentasi seluruh kegiatan dengan tertib dan rapi
              </p>
            </div>

            {/* Bendahara */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img
                src="/placeholder.svg?height=150&width=150&text=Bendahara"
                alt="Bendahara"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Rina Wati</h3>
              <p className="text-blue-600 font-medium mb-3">Bendahara</p>
              <p className="text-gray-600 text-sm">
                Mengelola keuangan organisasi dengan transparan dan akuntabel untuk semua program kegiatan
              </p>
            </div>

            {/* Koordinator Program */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img
                src="/placeholder.svg?height=150&width=150&text=Koordinator"
                alt="Koordinator Program"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Dedi Kurniawan</h3>
              <p className="text-blue-600 font-medium mb-3">Koordinator Program</p>
              <p className="text-gray-600 text-sm">
                Mengkoordinasikan seluruh program kerja dan memastikan pelaksanaan berjalan sesuai rencana
              </p>
            </div>

            {/* Humas */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img
                src="/placeholder.svg?height=150&width=150&text=Humas"
                alt="Humas"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Maya Sari</h3>
              <p className="text-blue-600 font-medium mb-3">Hubungan Masyarakat</p>
              <p className="text-gray-600 text-sm">
                Membangun komunikasi dan kerjasama dengan masyarakat serta instansi terkait
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pencapaian & Statistik */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pencapaian Kami</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Berbagai pencapaian yang telah kami raih dalam perjalanan membangun generasi muda yang berkualitas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Anggota Aktif</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Program Terlaksana</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-blue-100">Penghargaan</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Masyarakat Terlayani</div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Star className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Juara 1 Karang Taruna Terbaik</h3>
              <p className="text-blue-100">Tingkat Kabupaten tahun 2023</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Award className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Penghargaan Lingkungan</h3>
              <p className="text-blue-100">Program Go Green terbaik 2022</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Users className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Organisasi Teladan</h3>
              <p className="text-blue-100">Pemberdayaan masyarakat 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Bergabunglah Bersama Kami</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Mari bersama-sama membangun masa depan yang lebih baik untuk generasi muda dan masyarakat Desa Suka Maju.
            Jadilah bagian dari perubahan positif!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Daftar Sebagai Anggota
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
