# TEFA Minibar Javanica

TEFA Minibar Javanica adalah aplikasi berbasis website yang dirancang untuk mendukung operasional dan pengelolaan keuangan unit usaha Minibar pada Teaching Factory (TEFA) Javanica. Sistem ini menyediakan dua peran utama, yaitu **Admin** dan **Cashier (Barista)**, yang masing-masing memiliki fungsi dan akses berbeda sesuai kebutuhan operasional.

---

## Tujuan Sistem

Aplikasi ini dikembangkan untuk:

- Mengelola transaksi penjualan secara terstruktur
- Menghitung Harga Pokok Produksi (HPP) secara otomatis
- Menghasilkan laporan keuangan secara berkala
- Meningkatkan transparansi dan akuntabilitas operasional minibar

---

##  Role Pengguna

### 1. Admin
Memiliki akses penuh terhadap pengelolaan data dan analitik sistem.

Fitur utama:
- Manajemen pengguna dan hak akses
- Pengelolaan bahan baku dan histori perubahan harga
- Pengelolaan resep dan harga jual produk
- Perhitungan HPP otomatis dan snapshot saat transaksi
- Manajemen stok bahan baku
- Monitoring dan void transaksi
- Dashboard keuangan interaktif
- Laporan laba rugi dan rekap penjualan
- Analitik produk terlaris dan performa barista
- Audit trail aktivitas sistem
- Integrasi WhatsApp untuk distribusi struk digital

---

### 2. Cashier (Barista)
Berfokus pada operasional transaksi harian.

Fitur utama:
- Login dan autentikasi pengguna
- Pemilihan dan pengelolaan pesanan (draft)
- Proses pembayaran tunai dan non-tunai
- Generate invoice dengan nomor unik
- Cetak atau akses struk digital
- Void transaksi dengan pencatatan alasan
- Riwayat transaksi harian (read-only)

---

##  Sistem Keuangan

Sistem secara otomatis:
- Menghitung HPP berdasarkan komposisi resep dan harga bahan baku
- Menyimpan snapshot HPP saat transaksi dilakukan
- Menghasilkan laporan laba rugi per periode
- Menyediakan rekap penjualan dan rekap HPP
- Mencatat seluruh aktivitas penting melalui audit log

---

## Manajemen Stok

- Pengurangan stok otomatis saat transaksi terjadi
- Monitoring stok minimum
- Riwayat pergerakan stok bahan baku

---

## Invoice & Struk Digital

- Invoice dibuat otomatis dengan nomor unik
- Tersedia akses struk digital melalui token unik
- Integrasi WhatsApp untuk pengiriman notifikasi dan distribusi struk
- Data transaksi tersimpan sebagai arsip dan tidak dapat dihapus

---

##  Dashboard & Analitik

- Grafik penjualan per periode
- Identifikasi produk terlaris
- Analisis jam penjualan tertinggi
- Evaluasi performa barista berdasarkan transaksi

---

##  Audit & Keamanan

- Role-based access control
- Pencatatan histori perubahan harga dan resep
- Mekanisme void tanpa penghapusan data
- Audit trail untuk seluruh aktivitas penting

---

##  Teknologi

Aplikasi ini dikembangkan sebagai sistem web responsive yang dapat diakses melalui perangkat desktop maupun mobile, dengan fokus pada stabilitas, integritas data, dan kemudahan penggunaan.

---

##  Catatan

Sistem ini dirancang sebagai Minimum Viable Product (MVP) yang dapat dikembangkan lebih lanjut sesuai kebutuhan operasional dan ekspansi lini bisnis TEFA.