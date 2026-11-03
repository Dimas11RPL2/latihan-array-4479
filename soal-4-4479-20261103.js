// SOAL 4: PROPERTI LENGTH

const daftarProduk = [
    "Keyboard",
    "Mouse",
    "Monitor",
    "Flashdisk",
    "Headset",
    "Webcam"
];

// 1. Jumlah seluruh produk
console.log("Jumlah produk:", daftarProduk.length);

// 2. Indeks produk terakhir
console.log("Indeks produk terakhir:", daftarProduk.length - 1);

// 3. Nama produk terakhir menggunakan length
console.log("Produk terakhir:", daftarProduk[daftarProduk.length - 1]);

// 4. Produk pada indeks tengah sebelah kiri
const indeksTengah = Math.floor((daftarProduk.length - 1) / 2);

console.log("Indeks tengah kiri:", indeksTengah);
console.log("Produk tengah kiri:", daftarProduk[indeksTengah]);