const { it } = require("node:test");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function tanya(pertanyaan) {
    return new Promise((resolve) => rl.question(pertanyaan, (jawaban) => resolve(jawaban)));
}
const dataKaryawanAwal = [
    { id: "K001", nama: "Andi Pratama", departemen: "IT", gaji: 8000000 },
    { id: "K002", nama: "Sari Wulandari", departemen: "Marketing", gaji: 7500000 },
    { id: "K003", nama: "Budi Santoso", departemen: "IT", gaji: 9000000 },
    { id: "K004", nama: "Lisa Permata", departemen: "HR", gaji: 7000000 }
    ];
    const dataAbsensiAwal = [
    { karyawanId: "K001", tanggal: "2024-06-17", status: "hadir", jamMasuk: "08:00", jamKeluar: "17:00" },
    { karyawanId: "K002", tanggal: "2024-06-17", status: "hadir", jamMasuk: "08:15", jamKeluar: "17:30" },
    { karyawanId: "K001", tanggal: "2024-06-18", status: "sakit", jamMasuk: null, jamKeluar: null },
    { karyawanId: "K003", tanggal: "2024-06-17", status: "hadir", jamMasuk: "07:45", jamKeluar: "16:45" },
    { karyawanId: "K004", tanggal: "2024-06-17", status: "izin", jamMasuk: null, jamKeluar: null },
    { karyawanId: "K002", tanggal: "2024-06-18", status: "hadir", jamMasuk: "08:00", jamKeluar: "17:15" }
    ];

async function tambahKaryawan() {
    const id = await tanya("masukkan ID karyawan baru: ");
    const nama = await tanya("masukkan nama baru: ");
    const departemen = await tanya("masukan departemen baru: ");
    const gaji = parseInt(await tanya("masukan gaji: "));
    dataKaryawanAwal.push({id: id, nama: nama, departemen: departemen, gaji: gaji});


    dataKaryawanAwal.forEach(item => {
        console.log(`${item.id} | ${item.nama} | ${item.departemen} | ${item.gaji}`)
    });
    rl.close();
}

function Kehadiran(){
const hadir = [];
const izin = [];
const sakit = [];

dataAbsensiAwal.forEach((item) => {
    if (item.status === "hadir") {
      hadir.push(item);
    } else if (item.status === "izin") {
      izin.push(item);
    } else if (item.status === "sakit") {
      sakit.push(item);
    } 
  });

console.log("ID    HADIR===");
hadir.forEach(item => {
    console.log(`${item.karyawanId} | ${item.tanggal} | ${item.status} | ${item.jamMasuk} | ${item.jamKeluar}`)
});
console.log("izin");
izin.forEach(item2 => {
    console.log(`${item2.karyawanId} | ${item2.tanggal} | ${item2.status} | ${item2.jamMasuk} | ${item2.jamKeluar}`)
})
console.log("Sakit: ");
sakit.forEach(item => {
    console.log(`${item.karyawanId} | ${item.tanggal} | ${item.status} | ${item.jamMasuk} | ${item.jamKeluar}`)
});
rl.close();
}

async function dataKaryawan(){
const pilihan = await tanya("Pilih menu Info:\n 1.Karyawan\n 2.Kehadiran\n 3.Tambah Data Karyawan\n");
if(pilihan === "1"){
    dataKaryawanAwal.forEach(item => {
        console.log(`${item.id} | ${item.nama} | ${item.departemen} | ${item.gaji}`);
        
    });
    rl.close();
}else if(pilihan === "2") {
    Kehadiran();
}else if(pilihan === "3") {
    tambahKaryawan();
}
}

dataKaryawan();