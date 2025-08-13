"use client"

import { useState } from "react"
import { DollarSign, TrendingUp, TrendingDown, PieChart, Calendar, Download, Eye, FileText } from "lucide-react"
import Navbar from "../components/Navbar"

export default function Keuangan() {
  const [selectedPeriod, setSelectedPeriod] = useState("2024")
  const [selectedMonth, setSelectedMonth] = useState("all")

  const dataKeuangan = [
    { tanggal: "2024-01-01", keterangan: "Iuran Anggota Januari", kategori: "Iuran", masuk: 500000, keluar: 0 },
    {
      tanggal: "2024-01-05",
      keterangan: "Pembelian Bendera Merah Putih",
      kategori: "Perlengkapan",
      masuk: 0,
      keluar: 150000,
    },
    { tanggal: "2024-01-10", keterangan: "Donasi Warga untuk Kegiatan", kategori: "Donasi", masuk: 750000, keluar: 0 },
    {
      tanggal: "2024-01-15",
      keterangan: "Biaya Konsumsi Rapat Bulanan",
      kategori: "Operasional",
      masuk: 0,
      keluar: 200000,
    },
    {
      tanggal: "2024-01-20",
      keterangan: "Bantuan dari Pemerintah Desa",
      kategori: "Bantuan",
      masuk: 2000000,
      keluar: 0,
    },
    {
      tanggal: "2024-01-25",
      keterangan: "Pembelian Alat Kebersihan",
      kategori: "Perlengkapan",
      masuk: 0,
      keluar: 300000,
    },
    { tanggal: "2024-02-01", keterangan: "Iuran Anggota Februari", kategori: "Iuran", masuk: 520000, keluar: 0 },
    { tanggal: "2024-02-08", keterangan: "Biaya Acara Bakti Sosial", kategori: "Program", masuk: 0, keluar: 800000 },
    { tanggal: "2024-02-12", keterangan: "Donasi Masyarakat", kategori: "Donasi", masuk: 600000, keluar: 0 },
    { tanggal: "2024-02-18", keterangan: "Pembelian Sound System", kategori: "Aset", masuk: 0, keluar: 1500000 },
    {
      tanggal: "2024-02-25",
      keterangan: "Biaya Transport Kegiatan",
      kategori: "Operasional",
      masuk: 0,
      keluar: 250000,
    },
    { tanggal: "2024-03-01", keterangan: "Iuran Anggota Maret", kategori: "Iuran", masuk: 480000, keluar: 0 },
    { tanggal: "2024-03-10", keterangan: "Hasil Penjualan Merchandise", kategori: "Usaha", masuk: 350000, keluar: 0 },
    {
      tanggal: "2024-03-15",
      keterangan: "Biaya Pelatihan Kewirausahaan",
      kategori: "Program",
      masuk: 0,
      keluar: 600000,
    },
    { tanggal: "2024-03-22", keterangan: "Donasi untuk Korban Bencana", kategori: "Sosial", masuk: 0, keluar: 500000 },
    { tanggal: "2024-03-28", keterangan: "Bantuan Sponsor Acara", kategori: "Sponsor", masuk: 1000000, keluar: 0 },
  ]

  const totalMasuk = dataKeuangan.reduce((total, item) => total + item.masuk, 0)
  const totalKeluar = dataKeuangan.reduce((total, item) => total + item.keluar, 0)
  const saldoAkhir = totalMasuk - totalKeluar

  const kategoriPemasukan = [
    { nama: "Iuran Anggota", jumlah: 1500000, persentase: 30, color: "bg-blue-500" },
    { nama: "Donasi Masyarakat", jumlah: 1350000, persentase: 27, color: "bg-green-500" },
    { nama: "Bantuan Pemerintah", jumlah: 2000000, persentase: 40, color: "bg-purple-500" },
    { nama: "Usaha Mandiri", jumlah: 350000, persentase: 7, color: "bg-yellow-500" },
    { nama: "Sponsor", jumlah: 1000000, persentase: 20, color: "bg-red-500" },
  ]

  const kategoriPengeluaran = [
    { nama: "Program Kegiatan", jumlah: 1400000, persentase: 35, color: "bg-blue-600" },
    { nama: "Operasional", jumlah: 450000, persentase: 11, color: "bg-green-600" },
    { nama: "Perlengkapan", jumlah: 450000, persentase: 11, color: "bg-purple-600" },
    { nama: "Aset Organisasi", jumlah: 1500000, persentase: 38, color: "bg-yellow-600" },
    { nama: "Kegiatan Sosial", jumlah: 500000, persentase: 13, color: "bg-red-600" },
  ]

  const laporanBulanan = [
    { bulan: "Januari", pemasukan: 3250000, pengeluaran: 650000, saldo: 2600000 },
    { bulan: "Februari", pemasukan: 1120000, pengeluaran: 2550000, saldo: 1170000 },
    { bulan: "Maret", pemasukan: 1830000, pengeluaran: 1100000, saldo: 1900000 },
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparansi Keuangan</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Laporan keuangan yang transparan dan akuntabel untuk kepercayaan masyarakat
            </p>
          </div>
        </div>
      </section>

      {/* Ringkasan Keuangan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ringkasan Keuangan 2024</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-12 h-12 opacity-80" />
                <div className="text-right">
                  <div className="text-3xl font-bold">Rp {totalMasuk.toLocaleString()}</div>
                  <div className="text-blue-100">Total Pemasukan</div>
                </div>
              </div>
              <div className="text-sm text-blue-100">Dari iuran, donasi, dan bantuan</div>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <TrendingDown className="w-12 h-12 opacity-80" />
                <div className="text-right">
                  <div className="text-3xl font-bold">Rp {totalKeluar.toLocaleString()}</div>
                  <div className="text-red-100">Total Pengeluaran</div>
                </div>
              </div>
              <div className="text-sm text-red-100">Untuk program dan operasional</div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="w-12 h-12 opacity-80" />
                <div className="text-right">
                  <div className="text-3xl font-bold">Rp {saldoAkhir.toLocaleString()}</div>
                  <div className="text-green-100">Saldo Akhir</div>
                </div>
              </div>
              <div className="text-sm text-green-100">Per 31 Maret 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grafik Pemasukan dan Pengeluaran */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Kategori Pemasukan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-8">
                <PieChart className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-800">Kategori Pemasukan</h3>
              </div>

              <div className="space-y-4">
                {kategoriPemasukan.map((kategori, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${kategori.color}`}></div>
                      <span className="text-gray-700">{kategori.nama}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-800">Rp {kategori.jumlah.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">{kategori.persentase}%</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">Total Pemasukan</span>
                  <span className="text-xl font-bold text-green-600">Rp {totalMasuk.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Kategori Pengeluaran */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-8">
                <PieChart className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-800">Kategori Pengeluaran</h3>
              </div>

              <div className="space-y-4">
                {kategoriPengeluaran.map((kategori, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${kategori.color}`}></div>
                      <span className="text-gray-700">{kategori.nama}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-800">Rp {kategori.jumlah.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">{kategori.persentase}%</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">Total Pengeluaran</span>
                  <span className="text-xl font-bold text-red-600">Rp {totalKeluar.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laporan Bulanan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Laporan Bulanan</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Bulan</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Pemasukan</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Pengeluaran</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Saldo</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {laporanBulanan.map((laporan, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{laporan.bulan}</td>
                      <td className="px-6 py-4 text-sm text-right text-green-600 font-semibold">
                        Rp {laporan.pemasukan.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-right text-red-600 font-semibold">
                        Rp {laporan.pengeluaran.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-right font-semibold">
                        Rp {laporan.saldo.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            laporan.saldo > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {laporan.saldo > 0 ? "Surplus" : "Defisit"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Transaksi */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Detail Transaksi</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rincian lengkap semua transaksi keuangan organisasi
            </p>
          </div>

          {/* Filter */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="2024">Tahun 2024</option>
                  <option value="2023">Tahun 2023</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="all">Semua Bulan</option>
                  <option value="01">Januari</option>
                  <option value="02">Februari</option>
                  <option value="03">Maret</option>
                </select>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export PDF</span>
              </button>
            </div>
          </div>

          {/* Tabel Transaksi */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Tanggal</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Keterangan</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Kategori</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold">Pemasukan</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold">Pengeluaran</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {dataKeuangan.map((transaksi, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {new Date(transaksi.tanggal).toLocaleDateString("id-ID")}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{transaksi.keterangan}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {transaksi.kategori}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-right font-semibold text-green-600">
                        {transaksi.masuk > 0 ? `Rp ${transaksi.masuk.toLocaleString()}` : "-"}
                      </td>
                      <td className="px-6 py-4 text-sm text-right font-semibold text-red-600">
                        {transaksi.keluar > 0 ? `Rp ${transaksi.keluar.toLocaleString()}` : "-"}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-green-600 hover:text-green-800 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-200">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">Rp {totalMasuk.toLocaleString()}</div>
                <div className="text-sm text-green-700">Total Pemasukan</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">Rp {totalKeluar.toLocaleString()}</div>
                <div className="text-sm text-red-700">Total Pengeluaran</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">Rp {saldoAkhir.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Saldo Akhir</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Komitmen Transparansi */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <FileText className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Komitmen Transparansi</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Kami berkomitmen untuk menyajikan laporan keuangan yang transparan, akurat, dan dapat dipertanggungjawabkan
            kepada seluruh anggota dan masyarakat.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-green-100">Transparansi</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-2xl font-bold mb-2">Monthly</div>
              <div className="text-green-100">Laporan Rutin</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-2xl font-bold mb-2">Open</div>
              <div className="text-green-100">Akses Publik</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
