function hitungluas() {
  const alas = document.getElementById("alas").value;
  const tinggi = document.getElementById("tinggi").value;
  const hasil = 0.5 * alas * tinggi;
  document.getElementById("hasil").value = hasil;
}

// function hitungkeliling() {
//   const sisi1 = document.getElementById("sisi1").value;
//   const sisi2 = document.getElementById("sisi2").value;
//   const sisi3 = document.getElementById("sisi3").value;
//   const hasil_sisi = sisi1 + sisi2 + sisi3;
//   document.getElementById("hasil_sisi").value = hasil_sisi;
// }

function reset() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasil").value = "";
}
