const change = document.querySelectorAll(".changeButton");
const content = document.querySelectorAll(".content");

// untuk button mengganti persegi dengan persegi panjang
// menambah class jika button di click dan dihapus classnya
for (let i = 0; i < change.length; i++) {
    change[i].addEventListener("click", function (){
        setTimeout(() => {
            changeContent.style.opacity = "1";
            changeContent.classList.remove("content-active");
            content[i].classList.add("content-active");
        }, 400);
        
        let changeActive = document.querySelector(".changeButton-active");
        changeActive.classList.remove("changeButton-active");
        this.classList.add("changeButton-active");
        
        let changeContent = document.querySelector(".content-active");
        changeContent.style.opacity = "0";
        
    });
}

// function yang berfungsi untuk mencari luas persegi
function hitung_luas(){
    let sisi = document.getElementById("sisi-luas").value;
    let hasil = sisi * sisi;
    var output = "L = S x S <br>L = " + sisi + " x " + sisi + "<br>L = " + hasil;
    console.log(output);
    document.getElementById("output_luas").innerHTML = output;
}

// function yang berfungsi untuk mencari keliling persegi
function hitung_keliling(){
    let sisi = document.getElementById("sisi-keliling").value;
    let hasil = 4 * sisi;
    var output = "K = 4 x S <br>K = 4 x " + sisi + "<br>K = " + hasil;
    console.log(output);
    document.getElementById("output_keliling").innerHTML = output;
}
// function yang berfungsi untuk menghapus hasil luas
function reset(){
    document.getElementById("output_luas").innerHTML = "";
}

// function yang berfungsi untuk menghapus hasil keliling
function reset2(){
    document.getElementById("output_keliling").innerHTML = "";
}

