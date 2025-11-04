const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function tanya(pertanyaan){
  return new Promise((resolve) => rl.question(pertanyaan, (jawaban) => resolve(jawaban)));
}

const inventarisGudangAwal = [
    { id: "B001", nama: "Buku Tulis", stok: 150, harga: 5000 },
    { id: "P002", nama: "Pulpen Gel", stok: 200, harga: 3000 },
    { id: "B003", nama: "Buku Gambar", stok: 80, harga: 8000 },
    { id: "P004", nama: "Pensil Warna", stok: 120, harga: 12000 }
  ];

  async function tambahBarang() {
    const id = parseInt(await tanya("id: "));
    const nama = await tanya("nama: ");
    const stok = parseInt(await tanya("stok: "));
    const harga = parseInt(await tanya("harga: "));
    inventarisGudangAwal.push({id: id, nama: nama, stok: stok, harga: harga});
    console.log(inventarisGudangAwal);
    rl.close();
  }

  async function lihatBarang(){
    inventarisGudangAwal.forEach(item => {
      console.log(` ${item.id} | ${item.nama} | ${item.stok} | ${item.harga}`)
    });

    const lanjutan = await tanya("Apakah Anda Ingin melanjutkan?\n 1.iya\n 2.tidak");
    
    rl.close();
  }
 
  async function pilihan(){
    pilihan = await tanya("silahkan masukkan Pilihan Anda:\n 1.lihat abarang\n 2.tambah barang\n");
    if(pilihan === "1"){
      lihatBarang();
    }else if(pilihan === "2"){
      tambahBarang();
    }
  }

  pilihan();