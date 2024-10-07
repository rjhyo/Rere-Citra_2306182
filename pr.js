class Jadwal {
    constructor(tujuan, waktuKeberangkatan, harga) {
        this.tujuan = tujuan;
        this.waktuKeberangkatan = waktuKeberangkatan;
        this.harga = harga;
    }
}

class JadwalEklusif extends Jadwal {
    constructor(tujuan, waktuKeberangkatan, harga) {
        super(tujuan, waktuKeberangkatan, harga * 1.5);
    }

    display(){
        console.log(`Tujuan: ${this.tujuan}, Waktu ${this.waktuKeberangkatan}, Harga: Rp ${this.harga}`);
    }

}

class JadwalEkonomi extends Jadwal {
    constructor(tujuan, waktuKeberangkatan, harga) {
        super(tujuan, waktuKeberangkatan, harga * 0.8);
    }

    display() {
        console.log(`(Ekonomi) Tujuan: ${this.tujuan}, Waktu: ${this.waktuKeberangkatan}, Harga: Rp ${this.harga}`);
    }
}

const daftarJadwal = [
    new JadwalEklusif("Jakarta - Surabaya", "08:00", 200000),
    new JadwalEklusif("Jakarta - Bandung", "09:30", 100000),
    new JadwalEklusif("Jakarta - Yogyakarta", "12:00", 250000),
    new JadwalEklusif("Jakarta - Bali", "15:00", 500000)
];



function tampilkanJadwal() {
    console.log("Jadwal Keberangkatan:");
    daftarJadwal.forEach((jadwal, index) => {
        console.log(`${index + 1}.  `);
        jadwal.display();
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
