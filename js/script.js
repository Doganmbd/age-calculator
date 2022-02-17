// dom iile tüm elementlerimi yakalıyorum
const years = document.getElementById("years") ;
const months = document.getElementById("months") ;
const days = document.getElementById("days") ;
const hours = document.getElementById("hours") ;
const minutes = document.getElementById("minutes") ;
const seconds = document.getElementById("seconds"); 



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
const container = document.querySelector(".container")

//1.yol = uzun yol olarak istersem innertext ile içine ulaşabilirim.
/* years.innerText = "00";
months.innerText = "00";
days.innerText = "00";
hours.innerText = "00";
minutes.innerText = "00";
seconds.innerText = "00"; */

//2.yol = for deöngüsü ,container içindeki h2 elementlerimi yakalamalıyım.o zaman getELementByTagName kullanmalıyım.for döngüsünde HTML collection ,nodelist,array kullanabiliriz.
/* let h2Element = document.getElementsByTagName("h2") ;           // HTML collection (6)
for (let index = 0; index < h2Element.length; index++) {
    const element = h2Element[index].innerText ="00" ;  // teker teker index e göre değişim .
    
} */

//2.yol ekstra = (Array.from) HTML collection array a çevirdim ve forEach yaptım
/* let h2Element = document.getElementsByTagName("h2") ; 
Array.from(h2Element).forEach(el => {
    el.innerHTML = "00";
}); */


//3.yol = en kısa ve kullanışlı .forEach , 2 datatype ile çaşışır(Nodelist.forEach,array.forEach)
// getElementsByName,querySelectorAll == NodeList
// document yerine container (parent div) yazabilirim

let h2Element2 = container.querySelectorAll("h2") ;   // nodelist (6)
h2Element2.forEach((e) => {
    e.innerHTML ="00"
})

// 3.yol ekstra = [...] ( split operator)
/* let h2Element2 = container.querySelectorAll("h2") ;   // nodelist (6)
[...h2Element2].forEach(el => {
    el.innerText ="00"
})
 */

// seçmiş olduğum tarihin onchange event'ine bir fonk. tanımlayacaz ve sürekli çalışmasını sağlayacaz.event.target:Olayı tetikleyen öğe döndürür.count ta eleman saydırmada [] gibi burada da bir tane boş birthday tanımlamalıyım.
let selectedBirthday ;
let birthdayInput = document.querySelector("[name = birthday]") ;
birthdayInput.addEventListener("change" , (e) => {
    // console.log(typeof e.target.value);    dateString
    selectedBirthday = new Date (e.target.value) ; // burada date object formatına çevirdim.kıyaslama yapabilirim.

    //e.target == birthdayInput
    
    // kullanıcı bugünden büyük doğum tarihi giremez.
    if (selectedBirthday > new Date()) {
        alert("Doğum tarihiniz bugünden büyük olamaz.") ;
        return;              // bir daha girememesi için buradan çıkmamı sağlamalıyım.
        
    }
    document.body.style.backgroundImage = "url(./image/m.jfif)" // yıl seçtiği aman arka plan rengimi değiştirdim.

    // setInterval(updateCountdown, 1000);  // buraya yazmamızın sebebi fonk.içinde yani change eventi gerçekleştiği zaman çalışmasını istiyorum.
})




// hesaplama işlemlerime geçiyorum .bugünün tarihinden doğum tarihimi çıkaracam. seçeceğim doğum yılımın yıl,ay, gün,saat,dakika,saniye sini güncelleyerek tanımlamam gerekir. ve saniye min her zaman ilerlemesini sağlamalıyım.
const updateContainer = () => {
    let updateYear = selectedBirthday.getFullYear() ;  // seçtiğim yılı bana verir.
    let updateMonth = selectedBirthday.getMonth() ;  // seçtiğim ay
    let updateDay = selectedBirthday.getDate() ; // seçtiğim gün , getDay haftalık alır.getDate aylık alır.
    let updateHour =selectedBirthday.getHours() ;   // seçtiğim saat
    let updateMinute =selectedBirthday.getMinutes() ; // seçtiğim dakika
    let updateSecond =selectedBirthday.getSeconds() ; // seçtiğim saniye

    



}


















