function hitungluas() {
  alas = document.getElementById("alas").value;
  tinggi = document.getElementsByid("tinggi").value;
  hasil = (1 / 2) * Alas * tinggi;
  document.getElementById("hasil").value = hasil;
}

function reset() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasil").value = "";
}
