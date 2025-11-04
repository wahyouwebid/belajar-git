const barang = [{id: 1, namaBarang: "indomie", harga: 5000 },
    {id: 2, namaBarang: "sepatu", harga: 250000 },
    {id: 3, namaBarang: "beras", harga: 50000 }];

    lisNama = [{name:"Ujang"}]
    const keranjang = [];
    var keluar = true;
    function tambahBarang(){

        
        console.log("anda memilih tambah barang");
        const id = parseInt(prompt("silahkan masukkan id barang baru: "));
        const namaBarang = prompt("silahkan masukkan nama barang baru: ");
        const harga = parseInt(prompt("silahkan masukkan harga baru: "));
        if (barang.some(b => b.namaBarang === namaBarang || b.id === id)) {
            alert("nama barang atau id telah ada");
            return;
        }
        
        barang.push({id:id, namaBarang: namaBarang, harga: harga});
        alert(`barang ${namaBarang} telah di tambahkan`);
        for(let i = 0; i < barang.length; i++) {
            console.log(`no. ${i + 1} id. ${barang[i].id} nama barang: ${barang[i].namaBarang} harga barang: ${barang[i].harga}`);
        }
    }
    function lihatBarang() {
        for(let i = 0; i < barang.length; i++){
            console.log(`no. ${i + 1} id: ${barang[i].id} nama barang: ${barang[i].namaBarang} harga barang ${barang[i].harga}`);
        }
    }
    function pilihBarang(){
        for(let i = 0; i < barang.length; i++){
            console.log(`no. ${i + 1}    id: ${barang[i].id}    nama barang: ${barang[i].namaBarang}    harga barang: ${barang[i].harga}`);
        }
        const id = parseInt(prompt("silahkan masukkan id barang: "));
        const item = barang.find(b => b.id === id);
        if(!item){
            alert("barang tidak di temukan");
            return;
        }
        keranjang.push(item);
            console.log (`${item.namaBarang} berhasil di tambahkan kedalam keranjang`);
            console.log(`barang dalam keranjang = ${item.namaBarang}`);
            return;
    }
    
    function checkout(){
        keranjang.forEach(item => {
            console.log(`barang yang akan di checkout adalah: ${item.namaBarang} ${item.harga}`);
        });
        const confrmChckt = parseInt(prompt("apakah anda ingin melanjutkan pembayaran?\n" + "ketik\n" + "1.iya\n" + "2. tidak\n"));
        if(confrmChckt === 1){
            const alamat = prompt("silahkan masukkan alamat anda terlebih dahulu: ");
            if(!alamat) {
                console.log("alamat harus di isi!");
                return;
            }
        const pengiriman = parseInt(prompt("pilih metode pengiriman anda:\n " + "1. J&T ongkir (90000)\n" + "2. JNE ongkir (10000)\n" + "3. COD (gratis)\n"));
        
        let pengirim = " ";
        let ongkir = 0;
        if(pengiriman === 1){
            pengirim = "J&E";
            ongkir = 9000;
        }else if(pengiriman === 2){
            pengirim = "JNE";
            ongkir = 10000;
        }else{
            pengirim = "COD";
            ongkir = 0;
        }
        let totalBarang = 0;
      keranjang.forEach(item => {
        totalBarang += item.harga + ongkir;
      });
        let totalAkhir = totalBarang;
        
        keranjang.forEach( item => {
            console.log(`nama barang ${item.namaBarang}   harga barang  ${item.harga}`);
        });
        console.log(`alamat ${alamat}`);
        console.log(`ekspedisi ${pengirim}`);
        console.log(`Total ${totalAkhr}`);
        
        
        bayar();
        
        }else{
            ("checkout di batal kan");
        }
    }
    
    function bayar () {
        const bayar = parseInt(prompt("pembayaran: \n" + "1). BANK CIMB\n" + "2). BANK BJB\n" + "3). BANK BRI\n" + "pilih pembayaran: "));
        if(bayar){
        console.log("menunggu pemayaran.....");
        console.log("pembayaran berhasil");
        keluar = false;
        }else{
            console.log("checkout di batal kan");
        }
    }
    function menu(){
        while(keluar) {
            const pilihan = prompt("pilih tindakan:\n" + "1. tambah barang\n" + "2. lihat barang\n" + "3. pilih barang\n" + "4. checkout\n" +  "5. close\n" + "masukkan pilihan: " );
            switch (pilihan) {
                case "1":
                    tambahBarang();
                    break;
                case "2":
                    lihatBarang();
                    break;
                case "3":
                    pilihBarang();
                    break;
                case "4":
                    checkout();
                default:
                    console.log("terima kasih sudah mampir");
                    keluar = false;
            }
        }
    }
  menu();
 