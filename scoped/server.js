const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function tanya(pertanyaan) {
  return new Promise((resolve) => rl.question(pertanyaan, (jawaban) => resolve(jawaban)));
}

let saldoAtm = 10000000;
const PIN = 112233;
let percobaan = 0;
const max = 3;
let sisaSaldo = 0;
let jumlah = 0;
const nama = "keno";

async function main() {
  console.log("Masukkan ATM");

  while (percobaan < max) {
    const pinAtm = parseInt(await tanya("Masukkan PIN: "));
    if (pinAtm === PIN) {
      await menu();
      break;
    } else {
      percobaan++;
      console.log("PIN salah!");
    }
    if (percobaan === max) {
      console.log("Kartu terblokir");
      rl.close();
    }
  }
}

async function cekSaldo() {
  while (percobaan < max) {
    const pinAtm = parseInt(await tanya("Masukkan PIN: "));
    if (pinAtm === PIN) {
      console.log(`Saldo Anda: ${saldoAtm}`);
      break;
    } else {
      percobaan++;
      console.log("PIN salah!");
    }
  }
  if (percobaan === max) {
    console.log("Kartu Terblokir");
    rl.close();
    return;
  }

  const lanjut = parseInt(
    await tanya("Apakah Anda Ingin Melanjutkan Transaksi:\n1. Iya\n2. Tidak\n")
  );

  if (lanjut === 1) {
    await menu();
  } else {
    console.log("Terimakasih");
    rl.close();
  }
}

async function tarikTunai() {
  const tar = parseInt(
    await tanya("Jumlah Penarikan\n1. 100000\n2. 250000\n3. 500000\n4. Jumlah lainnya\nPilih: ")
  );

  if (tar === 1) jumlah = 100000;
  else if (tar === 2) jumlah = 250000;
  else if (tar === 3) jumlah = 500000;
  else if (tar === 4) jumlah = parseInt(await tanya("Masukkan nominal: "));
  else {
    console.log("Masukkan pilihan valid");
    return;
  }

  const pinAtm = parseInt(await tanya("Masukkan PIN: "));
  if (pinAtm !== PIN) {
    console.log("PIN salah!");
    percobaan++;
    if (percobaan === max) console.log("Kartu terblokir");
    return;
  }

  if (jumlah > saldoAtm) {
    console.log("Saldo Anda kurang!");
  } else {
    sisaSaldo = saldoAtm - jumlah;
    saldoAtm = sisaSaldo;
    console.log("Silahkan Tunggu...");
    await new Promise((r) => setTimeout(r, 1000));
    console.log(`Uang Berhasil Diambil\nSisa Saldo Anda: ${sisaSaldo}`);
  }

  const lanjut = parseInt(
    await tanya("Apakah Anda Ingin Melanjutkan Transaksi:\n1. Iya\n2. Tidak\n")
  );
  if (lanjut === 1) await menu();
  else {
    console.log("Terimakasih");
    rl.close();
  }
}

async function kirimTunai() {
  let bank = parseInt(
    await tanya("Pilih tujuan BANK anda:\n1. BRI\n2. MANDIRI\n3. CIMB\n4. BJB\n5. Lainnya\nPilih: ")
  );

  if (bank === 5) {
    bank = await tanya("Masukkan nama bank tujuan: ");
  } else if (bank === 1) bank = "BRI";
  else if (bank === 2) bank = "MANDIRI";
  else if (bank === 3) bank = "CIMB";
  else if (bank === 4) bank = "BJB";
  else {
    console.log("Pilihan tidak valid");
    return;
  }

  const noRek = await tanya("Masukkan Nomor Rekening Tujuan: ");
  let nominal = parseInt(
    await tanya("Jumlah Pengiriman\n1. 100000\n2. 250000\n3. 500000\n4. Nominal lainnya\nPilih: ")
  );

  if (nominal === 1) nominal = 100000;
  else if (nominal === 2) nominal = 250000;
  else if (nominal === 3) nominal = 500000;
  else if (nominal === 4) nominal = parseInt(await tanya("Masukkan nominal: "));
  else {
    console.log("Pilihan tidak valid");
    return;
  }

  const pinAtm = parseInt(await tanya("Masukkan PIN: "));
  if (pinAtm !== PIN) {
    console.log("PIN salah!");
    percobaan++;
    if (percobaan === max) console.log("Kartu terblokir");
    return;
  }

  if (nominal > saldoAtm) {
    console.log("Saldo Anda tidak cukup!");
    return;
  }

  sisaSaldo = saldoAtm - nominal;
  saldoAtm = sisaSaldo;

  console.log(`Pengiriman Berhasil!
Dari: ${nama}
Ke BANK: ${bank}
Nomor Rekening: ${noRek}
Nominal: ${nominal}
Sisa Saldo Anda: ${sisaSaldo}`);

  const lanjut = parseInt(
    await tanya("Apakah Anda Ingin Melanjutkan Transaksi:\n1. Iya\n2. Tidak\n")
  );
  if (lanjut === 1) await menu();
  else {
    console.log("Terimakasih");
    rl.close();
  }
}

async function menu() {
  const mn = parseInt(
    await tanya("Pilih Tindakan:\n1. Cek Saldo\n2. Tarik Tunai\n3. Kirim Tunai\nPilih: ")
  );

  if (mn === 1) await cekSaldo();
  else if (mn === 2) await tarikTunai();
  else if (mn === 3) await kirimTunai();
  else {
    console.log("Masukkan pilihan yang valid");
    await menu();
  }
}

main();
