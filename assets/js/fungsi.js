var dataBarang = [{
  nama_barang: "Nama Aksesoris",
  jumlah: "Barang",
  total: 0
}];

function showBarang() {
  var listBarang = document.getElementById("table");

  listBarang.innerHTML = "<tr><th>Nama Barang</th><th>Jumlah</th><th>Total</th><th>Action</th></tr>";

  for (let i = 0; i < dataBarang.length; i++) {
    if (i !== 0) {
      var btnEdit = "<a href='#' class='btn btn-success btn-sm' onclick='editBarang(" + i + ")'>Edit</a>";
      var btnHapus = "<a href='#' class='btn btn-danger btn-sm' style='margin:5px;' onclick='deleteBarang(" + i + ")'>Hapus</a>";
      listBarang.innerHTML +=
        "<tr><td>" + dataBarang[i].nama_barang + "</td><td>" + dataBarang[i].jumlah + "</td><td>" + dataBarang[i].total + "</td><td>" + btnEdit + btnHapus + "</td></tr>";
    } else {
      // listBarang.innerHTML = "Data Belum Di Masukan";
    }
  }

  const sum = dataBarang.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const totalBayar = document.getElementById("total_bayar");
  totalBayar.innerHTML = sum;
}

function cekTotalHarga(jenisBarang, jumlah) {
  if (jenisBarang == "Minyak" && jumlah > 5) {
    const total = jumlah * 42000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Minyak" && jumlah <= 5) {
    const total = jumlah * 42000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Beras" && jumlah > 3) {
    const total = jumlah * 12000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Beras" && jumlah <= 3) {
    const total = jumlah * 12000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Telur") {
    const total = jumlah * 27000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Terigu") {
    const total = jumlah * 35000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Tepung Tapioka") {
    const total = jumlah * 5000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Garam") {
    const total = jumlah * 1500;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  }
}

function addBarang() {
  var jenisBarang = document.getElementById("jenis_barang").value;
  var jumlah = document.getElementById("jumlah").value;
  if(jenisBarang != "" && jumlah != "") {
    $("#jumlah").removeClass('error');
    $("#error_jumlah").css('display', 'none');

    const newDataBarang = cekTotalHarga(jenisBarang, jumlah);
    dataBarang.push(newDataBarang);
    showBarang();

    Swal.fire({
      icon: 'success',
      title: 'Barang telah berhasil ditambahkan.',
      target: 'body',
      iconColor: 'black',
      customClass: {
          popup: 'colored-toast'
      },
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3500,
  });

  } else {
    $("#jumlah").addClass('error');
    $("#error_jumlah").css('display', 'block');
  }
}

function editBarang(id) {
  var newjumlah = prompt("Edit jumlah", dataBarang[id].jumlah);
  const detailJenisBarang = dataBarang[id].nama_barang;

  const newDataBarang = cekTotalHarga(
    detailJenisBarang,
    newjumlah || dataBarang[id].jumlah
  );

  dataBarang[id] = newDataBarang;
  showBarang();

  Swal.fire({
    icon: 'success',
    title: 'Jumlah Barang telah berhasil diubah.',
    target: 'body',
    iconColor: 'black',
    customClass: {
        popup: 'colored-toast'
    },
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 3500,
});

}

function deleteBarang(id) {
    Swal.fire({
      title: "Hapus Data Barang?",
      text: `Apakah kamu yakin untuk menghapus data ini?`,
      icon: "warning",
      showCancelButton: !0,
      confirmButtonColor: "rgb(11, 42, 151)",
      cancelButtonColor: "rgb(209, 207, 207)",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal"
  }).then(function (t) {
      if (t.value) {
        dataBarang.splice(id, 1);
        showBarang();
          Swal.fire({
              icon: 'success',
              title: 'Barang telah berhasil dihapus.',
              target: 'body',
              iconColor: 'black',
              customClass: {
                  popup: 'colored-toast'
              },
              toast: true,
              position: 'top-right',
              showConfirmButton: false,
              timerProgressBar: true,
              timer: 3500,
          });
      }
  })
  
}

showBarang();

function change() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}