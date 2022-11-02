// OBJECT

let biodata = {
    nama_depan : ("Farhan"),
    nama_tengah : ("Arif"),
    nama_belakang : ("Ramadika")
}

// di JavaScript bisa menggunakan Class dan Id seperti di CSS

// document.getElementById("tampil").innerHTML = biodata.nama_depan
// document.getElementById("tampil").innerHTML = biodata.nama_tengah
// document.getElementById("tampil").innerHTML = biodata.nama_belakang

document.getElementById("tampil").innerHTML = biodata.nama_depan + biodata.nama_tengah + biodata.nama_belakang

// ARRAY

let karyawan = ["Agus", "Rifki", "Rifan", "Rendra"]

document.getElementById("karyawan").innerHTML = karyawan
// console.log(karyawan)

for(let i = 0; i < karyawan.length; i++){
    console.log(i)
}