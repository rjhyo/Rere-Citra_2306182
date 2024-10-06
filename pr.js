class Jadwal {
    constructor(tujuan, waktuKeberangkatan, harga) {
        this.tujuan = tujuan;
        this.waktuKeberangkatan = waktuKeberangkatan;
        this.harga = harga;
    }
}


const daftarJadwal = [
    new Jadwal("Jakarta - Surabaya", "08:00", 200000),
    new Jadwal("Jakarta - Bandung", "09:30", 100000),
    new Jadwal("Jakarta - Yogyakarta", "12:00", 250000),
    new Jadwal("Jakarta - Bali", "15:00", 500000)
];



function tampilkanJadwal() {
    console.log("Jadwal Keberangkatan:");
    daftarJadwal.forEach((jadwal, index) => {
        console.log(`${index + 1}. Tujuan: ${jadwal.tujuan}, Waktu: ${jadwal.waktuKeberangkatan}, Harga: Rp ${jadwal.harga}`);
    });
}


function beliTiket(pilihan) {
    if (pilihan > 0 && pilihan <= daftarJadwal.length) {
        const jadwalTerpilih = daftarJadwal[pilihan - 1];
        console.log(`Anda membeli tiket ke ${jadwalTerpilih.tujuan} pada pukul ${jadwalTerpilih.waktuKeberangkatan} seharga Rp ${jadwalTerpilih.harga}`);
    } else {
        console.log("Pilihan tidak valid. Silakan pilih jadwal yang tersedia.");
    }
}


tampilkanJadwal();
beliTiket(2);
