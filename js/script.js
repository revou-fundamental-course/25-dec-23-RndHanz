// Hitung Luas & Keliling
function hitung() {
  const alas = document.getElementById("alas").value;
  const tinggi = document.getElementById("tinggi").value;
  const hasil = 0.5 * alas * tinggi;
  document.getElementById("hasil").value = hasil;
  const sisi1 = Number(document.getElementById("sisi1").value);
  const sisi2 = Number(document.getElementById("sisi2").value);
  const sisi3 = Number(document.getElementById("sisi3").value);
  const hasil_sisi = sisi1 + sisi2 + sisi3;
  document.getElementById("hasil_sisi").value = hasil_sisi;
}

// Tombol Untuk Reset
function reset() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasil").value = "";
  document.getElementById("sisi1").value = "";
  document.getElementById("sisi2").value = "";
  document.getElementById("sisi3").value = "";
  document.getElementById("hasil_sisi").value = "";
}

// Button Untuk Ganti Luas > Keliling
var statusluas = true;
function ganti() {
  var luasform = document.getElementById("luas");
  var kelilingform = document.getElementById("keliling");

  if (statusluas) {
    luasform.style.display = "none";
    kelilingform.style.display = "block";
    button_ganti.innerHTML = "Ganti Ke Luas";
  } else {
    luasform.style.display = "block";
    kelilingform.style.display = "none";
    button_ganti.innerHTML = "Ganti Ke keliling";
  }
  statusluas = !statusluas;
}
