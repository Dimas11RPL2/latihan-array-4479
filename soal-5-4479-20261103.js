// SOAL 5: STUDI KASUS DATA SISWA

// Membuat Array nama siswa
const namaSiswa = [
    "Andi",
    "Budi",
    "Citra",
    "Dewi",
    "Eko"
];

// Membuat Array nilai siswa
const nilaiSiswa = [80, 75, 90, 85, 70];

// 1. Menampilkan jumlah siswa
console.log("Jumlah siswa:", namaSiswa.length);

// 2. Menampilkan nama dan nilai siswa pertama
console.log("Siswa pertama:", namaSiswa[0]);
console.log("Nilai siswa pertama:", nilaiSiswa[0]);

// 3. Menampilkan nama dan nilai siswa terakhir
const indeksTerakhir = namaSiswa.length - 1;

console.log("Siswa terakhir:", namaSiswa[indeksTerakhir]);
console.log("Nilai siswa terakhir:", nilaiSiswa[indeksTerakhir]);

// 4. Memperbarui nilai Budi dari 75 menjadi 88
nilaiSiswa[1] = 88;

// 5. Memperbarui nilai Eko dari 70 menjadi 82
nilaiSiswa[4] = 82;

// 6. Menampilkan nama dan nilai siswa ketiga
console.log("Siswa ketiga:", namaSiswa[2]);
console.log("Nilai siswa ketiga:", nilaiSiswa[2]);

// 7. Menampilkan seluruh Array setelah pembaruan
console.log("Seluruh nama siswa:", namaSiswa);
console.log("Seluruh nilai siswa:", nilaiSiswa);