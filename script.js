function hitung() {
    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;
    let hasil = angka1 * angka2;
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}

function reset() {
  document.getElementById("angka1").value ="";
  document.getElementById("angka2").value ="";
  document.getElementById("hasil").innerHTML="";
  }