let tombol = document.querySelector(".calcu-btn");
let calcu = document.querySelector("#calcu");

tombol.addEventListener("click", function(e){
    let tombolClick = e.target;
    let nilaiTombol = tombolClick.innerText;

    if( nilaiTombol ==="C"){
        calcu.value = "";
    } else if(nilaiTombol == "<"){
        calcu.value = calcu.value.slice(0, -1)
    } else if(nilaiTombol == "="){
        calcu.value = eval(calcu.value);
    } else {
        calcu.value = calcu.value + nilaiTombol
    }
})