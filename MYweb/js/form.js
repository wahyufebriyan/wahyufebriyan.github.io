document.getElementById("tombol").addEventListener("click", tampilkan_nilai_form);
document.getElementById("tombol").addEventListener("click", tampilkan_nilai);
function tampilkan_nilai(){
    var nilai_nama=document.getElementById("nama").value;
    document.getElementById("hasil").innerHTML=nilai_nama;
}
function tampilkan_nilai_form(){
    var nilai_komen=document.getElementById("komentar").value;
    document.getElementById("hasil2").innerHTML=nilai_komen;
}