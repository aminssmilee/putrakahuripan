"use client"

import { useState, useMemo } from "react"
import { DollarSign, TrendingUp, TrendingDown, PieChart, Calendar, Download, Eye, FileText } from "lucide-react"
import Navbar from "../components/Navbar"

export default function Keuangan() {
  const [selectedPeriod, setSelectedPeriod] = useState("2025")
  const [selectedMonth, setSelectedMonth] = useState("all")

  const dataKeuangan = [
    { tanggal: "2025-07-29", keterangan: "Sisa Saldo Pengurus Sebelumnya", kategori: "Saldo Lama  ", masuk: 730000, keluar: 0 },
    { tanggal: "2025-07-29", keterangan: "Pembelian jajan rapat", kategori: "Konsumsi", masuk: 0, keluar: 58000 },
    { tanggal: "2025-08-02", keterangan: "Pembelian jajan rapat", kategori: "Konsumsi", masuk: 0, keluar: 40000 },
    { tanggal: "2025-08-03", keterangan: "Pembelian jajan rapat", kategori: "Konsumsi", masuk: 0, keluar: 27500 },
    { tanggal: "2025-08-04", keterangan: "Dana Paguyuba Pemuda Jaya", kategori: "Donatur", masuk: 1000000, keluar: 0 },
    { tanggal: "2025-08-04", keterangan: "Donatur Pak Matrais", kategori: "Donatur", masuk: 200000, keluar: 0 },
    { tanggal: "2025-08-04", keterangan: "Dana Desa KarangTaruna", kategori: "Dana Desa", masuk: 350000, keluar: 0 },
    { tanggal: "2025-08-04", keterangan: "Pembelian jajan", kategori: "Konsumsi", masuk: 0, keluar: 2000 },
    { tanggal: "2025-08-05", keterangan: "Pembelian jajan rapat", kategori: "Konsumsi", masuk: 0, keluar: 16000 },
    { tanggal: "2025-08-07", keterangan: "Pembuatan Proposal", kategori: "Surat", masuk: 0, keluar: 420000 },
    { tanggal: "2025-08-07", keterangan: "Donatur Pak Suprayitno", kategori: "Donatur", masuk: 50000, keluar: 0 },
    { tanggal: "2025-08-08", keterangan: "Donatur Pak Kartolo", kategori: "Donatur", masuk: 1000000, keluar: 0 },
    { tanggal: "2025-08-10", keterangan: "Pembuatan Proposal", kategori: "Surat", masuk: 0, keluar: 40000 },
    { tanggal: "2025-08-10", keterangan: "Pemasukan Kartar", kategori: "Iuran", masuk: 60000, keluar: 0 },
    { tanggal: "2025-08-10", keterangan: "Pembelian Peralatan Lomba", kategori: "Perlengkapan", masuk: 0, keluar: 6500 },
    { tanggal: "2025-08-12", keterangan: "Donatur Pak Suwarno", kategori: "Donatur", masuk: 100000, keluar: 0 },
    { tanggal: "2025-08-12", keterangan: "Donatur Mas Takul (wifi)", kategori: "Donatur", masuk: 300000, keluar: 0 },
    { tanggal: "2025-08-15", keterangan: "Donatur Kaji Jumi'ah", kategori: "Donatur", masuk: 100000, keluar: 0 },
    { tanggal: "2025-08-15", keterangan: "Donatur Pak Pri (Wapo)", kategori: "Donatur", masuk: 100000, keluar: 0 },
    { tanggal: "2025-08-15", keterangan: "Donatur Apotek Zacky", kategori: "Donatur", masuk: 50000, keluar: 0 },
    { tanggal: "2025-08-15", keterangan: "Donatur Toko Tiara", kategori: "Donatur", masuk: 50000, keluar: 0 },
    { tanggal: "2025-08-15", keterangan: "Pengeluaran Pumflate", kategori: "Perlengkapan", masuk: 0, keluar: 10000 },
    
  ]

  const filteredData = useMemo(() => {
    return dataKeuangan.filter((item) => {
      const itemDate = new Date(item.tanggal)
      const itemYear = itemDate.getFullYear().toString()
      const itemMonth = (itemDate.getMonth() + 1).toString().padStart(2, "0")

      if (selectedPeriod !== itemYear) return false
      if (selectedMonth !== "all" && selectedMonth !== itemMonth) return false

      return true
    })
  }, [selectedMonth, selectedPeriod])

  const totalMasuk = useMemo(() => filteredData.reduce((total, item) => total + item.masuk, 0), [filteredData])

  const totalKeluar = useMemo(() => filteredData.reduce((total, item) => total + item.keluar, 0), [filteredData])

  const saldoAkhir = totalMasuk - totalKeluar

  const kategoriPemasukan = useMemo(() => {
    const categories = {}
    const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-yellow-500", "bg-indigo-500", "bg-pink-500"]
    let colorIndex = 0

    filteredData.forEach((item) => {
      if (item.masuk > 0) {
        if (!categories[item.kategori]) {
          categories[item.kategori] = {
            nama: item.kategori,
            jumlah: 0,
            color: colors[colorIndex % colors.length],
          }
          colorIndex++
        }
        categories[item.kategori].jumlah += item.masuk
      }
    })

    const result = Object.values(categories).map((cat) => ({
      ...cat,
      persentase: totalMasuk > 0 ? Math.round((cat.jumlah / totalMasuk) * 100) : 0,
    }))

    return result.length > 0
      ? result
      : [{ nama: "Belum ada Pemasukan", jumlah: 0, persentase: 0, color: "bg-gray-400" }]
  }, [filteredData, totalMasuk])

  const kategoriPengeluaran = useMemo(() => {
    const categories = {}
    const colors = ["bg-red-500", "bg-orange-500", "bg-rose-500", "bg-amber-500", "bg-red-600", "bg-orange-600"]
    let colorIndex = 0

    filteredData.forEach((item) => {
      if (item.keluar > 0) {
        if (!categories[item.kategori]) {
          categories[item.kategori] = {
            nama: item.kategori,
            jumlah: 0,
            color: colors[colorIndex % colors.length],
          }
          colorIndex++
        }
        categories[item.kategori].jumlah += item.keluar
      }
    })

    const result = Object.values(categories).map((cat) => ({
      ...cat,
      persentase: totalKeluar > 0 ? Math.round((cat.jumlah / totalKeluar) * 100) : 0,
    }))

    return result.length > 0
      ? result
      : [{ nama: "Belum ada Pengeluaran", jumlah: 0, persentase: 0, color: "bg-gray-400" }]
  }, [filteredData, totalKeluar])

  const laporanBulanan = useMemo(() => {
    const monthlyData = {}
    const monthNames = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ]

    dataKeuangan.forEach((item) => {
      const date = new Date(item.tanggal)
      const year = date.getFullYear()
      const month = date.getMonth()
      const monthKey = `${year}-${month}`

      if (year.toString() === selectedPeriod) {
        if (!monthlyData[monthKey]) {
          monthlyData[monthKey] = {
            bulan: monthNames[month],
            pemasukan: 0,
            pengeluaran: 0,
            saldo: 0,
          }
        }

        monthlyData[monthKey].pemasukan += item.masuk
        monthlyData[monthKey].pengeluaran += item.keluar
        monthlyData[monthKey].saldo = monthlyData[monthKey].pemasukan - monthlyData[monthKey].pengeluaran
      }
    })

    return Object.values(monthlyData).sort((a, b) => {
      const monthA = monthNames.indexOf(a.bulan)
      const monthB = monthNames.indexOf(b.bulan)
      return monthA - monthB
    })
  }, [selectedPeriod])

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparansi Keuangan</h1>
            <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto">
              Laporan keuangan yang transparan dan akuntabel untuk kepercayaan masyarakat
            </p>
          </div>
        </div>
      </section>

      {/* Ringkasan Keuangan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ringkasan Keuangan {selectedPeriod}
              {selectedMonth !== "all" &&
                ` - ${["", "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"][Number.parseInt(selectedMonth)]}`}
            </h2>
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
              <div className="text-sm text-green-100">
                {selectedMonth !== "all"
                  ? `Per ${["", "Januari", "Februari", "Maret"][Number.parseInt(selectedMonth)]} ${selectedPeriod}`
                  : `Per ${selectedPeriod}`}
              </div>
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
                  <option value="2025">Tahun 2025</option>
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
                  <option value="04">April</option>
                  <option value="05">Mei</option>
                  <option value="06">Juni</option>
                  <option value="07">Juli</option>
                  <option value="08">Agustus</option>
                  <option value="09">September</option>
                  <option value="10">Oktober</option>
                  <option value="11">November</option>
                  <option value="12">Desember</option>
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
                  {filteredData.map((transaksi, index) => (
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
      <section className="py-20 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <FileText className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Komitmen Transparansi</h2>
          <p className="text-xl text-black mb-8 leading-relaxed">
            Kami berkomitmen untuk menyajikan laporan keuangan yang transparan, akurat, dan dapat dipertanggungjawabkan
            kepada seluruh anggota dan masyarakat.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-black">Transparansi</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-2xl font-bold mb-2">Monthly</div>
              <div className="text-black">Laporan Rutin</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-2xl font-bold mb-2">Open</div>
              <div className="text-black">Akses Publik</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
