// dom iile tüm elementlerimi yakalıyorum
const years = document.getElementById("years") ;
const months = document.getElementById("months") ;
const days = document.getElementById("days") ;
const hours = document.getElementById("hours") ;
const minutes = document.getElementById("minutes") ;
const seconds = document.getElementById("seconds"); 

const container = document.querySelector(".container")

// sayfamı yüklediğim zaman bekleme işareti olan spinner.gif göstermek istiyorum.ilk başta dom ile yakalamalıyım. burada öncelikle loading başlatırım ve sonra loading i sona erdiririm.
const loading = document.getElementById("loading");
window.addEventListener("load" , () =>{
    loading.style.visibility ="visible" ; // görünür yaptım

    // sayfa yüklendiği zaman bir saniye görünür yapmalıyım
    // setTimeout = gecikmeli başlatmak.1.fonk,2.gecikme milisn
    // setInterval =belirli periyotlarla çalıştırmak
    setTimeout(() => {
        loading.style.display ="none"

        //loading den sonra yazılarımı göster
        container.style.display="flex" ;
    } , 1000)

})

//loading bittikten sonra sayfamda container divimi ekranda göstermke istiyorum.ilkin DOM ile yakalamalıyım


// uzun yol olarak istersem innertext ile içine ulaşabilirim.

years.innerText = "00";
years.innerText = "00";
years.innerText = "00";
years.innerText = "00";
years.innerText = "00";


