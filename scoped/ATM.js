let saldoAtm = 10000000;
const PIN = 112233;
let pinAtm = 0;
let percobaan= 0;
const max = 3;
var sisaSaldo = 0;
var jumlah = 0;
const nama = "keno";
console.log("Masukkan ATM");

while(percobaan < max) {
    pinAtm = parseInt(prompt("Masukkan PIN: "));
        if (pinAtm === PIN){
            menu();
            break;
        }else{
            percobaan++;
            console.log("PIN salah!");
        }
        if(percobaan === max){
            console.log("kartu terblokir");
        }
}

function cekSaldo() {
    while(percobaan < max) {
        pinAtm = parseInt(prompt("Masukkan PIN: "));
        if(pinAtm === PIN){
            console.log(`Saldo Anda: ${saldoAtm}`);
            break;
        }else{
            percobaan++;
            console.log("PIN salah!");
        }
    }
    if(percobaan === max){
        console.log("Kartu Terblokir");
        return;
    }
    let lainNya = parseInt(prompt("Apakah Anda Ingin Melanjutkan Transaksi:\n " + "1. Iya\n" + "2. Tidak\n"));
        if(lainNya === 1){
                while(percobaan < max) {
                    pinAtm = parseInt(prompt("Masukkan PIN: "));
                        if (pinAtm === PIN){
                            menu();
                            break;
                        }else{
                            percobaan++;
                            console.log("PIN salah!");
                        }
                        if(percobaan === max){
                            console.log("kartu terblokir");
                        }               
                }
        }else{
            console.log("Terimakasih");
        }
}

function TarikTunai(){
   const tar = parseInt(prompt("Jumlah Penarikan\n    1. 100000    3.250000\n    2. 500000    4.Jumlah lainnya\n"));
   if(tar === 1){
       jumlah = 100000;
   }else if(tar === 2){
       jumlah = 250000;
   }else if(tar === 3){
       jumlah = 500000;
   }else if(tar === 4){
       jumlah = parseInt(prompt("masukkan nominal "));
   }else{
       console.log("masukkan pilihan valid");
       return;
   }
   while(percobaan < max) {
    pinAtm = parseInt(prompt("Masukkan PIN: "));
        if (pinAtm === PIN){
if(jumlah > saldoAtm){
    console.log("Saldo Anda kurang!");
     let lainNya = parseInt(prompt("Apakah Anda Ingin Melanjutkan Transaksi:\n " + "1. Iya\n" + "2. Tidak\n"));
        if(lainNya === 1){
            pinAtm = parseInt(prompt("Masukkan PIN: "));
            menu();
        }else{
            console.log("Terimakasih");
        }
}else{
sisaSaldo = saldoAtm - jumlah;
console.log("Silahkan Tunggu...");
setTimeout (() => {
    console.log(`Uang Berhasil Diambil\n Sisa Saldo Anda ${sisaSaldo}`);
 const lainNya = parseInt(prompt("Apakah Anda Ingin Melanjutkan Transaksi:\n " + "1. Iya\n" + "2. Tidak\n"));
        if(lainNya === 1){
            pinAtm = parseInt(prompt("Masukkan PIN: "));
            menu();
        }else{
            console.log("Terimakasih");
        }
},1000);
}
            break;
        }else{
            percobaan++;
            console.log("PIN salah!")
        }
        if(percobaan === max){
            console.log("kartu terblokir");
        }
}
}

function kirimTunai() {
    var nominal = 0;
    var bank = parseInt(prompt("pilih tujuan BANK anda:\n  1.BRI       4.BJB\n  2.MANDIRI   5.Lainnya\n  3.CIMB\n"));
    if(bank === 5){
        bank = prompt("masukkan tujuan anda: ");
    }else if(bank === 1){
        bank = "BRI";
    }else if(bank === 2){
        bank = "MANDIRI";
    }else if(bank === 3){
        bank = "CIMB";
    }else if(bank === 4){
        bank = "BJB";
    }else{
        console.log("sing baleg");
        return;
    }
    const noRek = parseInt(prompt("Masukkan Nomor Rekening Tujuan:  "));
       const tar = parseInt(prompt("Jumlah Pengiriman\n    1. 100000    3.250000\n    2. 500000    4.nominal lainnya\n"));
if(tar === 1){
    nominal = 100000;
}else if(tar === 2){
    nominal = 250000;
}else if(tar === 3){
    nominal = 500000;
}else if(tar === 4){
    nominal = parseInt(prompt("masukkan nominal "));
}else{
    console.log("masukkan pilihan yang valid");
    menu();
}
while(percobaan < max) {
    pinAtm = parseInt(prompt("Masukkan PIN: "));
        if (pinAtm === PIN){

       sisaSaldo = saldoAtm - nominal;
       console.log(`Pengiriman Berhasil\n Dari ${nama} BANK ${bank} ke BANK ${bank}\n nomor Rekening ${noRek} nominal ${nominal} Sisa Saldo Anda ${sisaSaldo}`);
            let lainNya = parseInt(prompt("Apakah Anda Ingin Melanjutkan Transaksi:\n " + "1. Iya\n" + "2. Tidak\n"));
        if(lainNya === 1){
            pinAtm = parseInt(prompt("Masukkan PIN: "));
            menu();
        }else{
            console.log("Terimakasih");
            return;
        }
        }else{
            percobaan++;
            console.log("PIN salah!");
        }
        if(percobaan === max){
            console.log("kartu terblokir");
        }
}
}

function menu(){
    const mn = parseInt(prompt("Pilih Tindakan\n 1.cek saldo    2.Tarik Tunai\n \n 3.Kirim Tunai\n"));
   if(mn === 1){
       cekSaldo();
   }else if(mn === 2){
       TarikTunai();
   }else if(mn === 3){
       kirimTunai();
   }else{
       console.log("Masukkan pilihan Yang Valid");
       menu();
   }
}