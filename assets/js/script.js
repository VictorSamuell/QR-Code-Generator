let qrCode = document.getElementById("qrCode");
let textoQR = document.getElementById("textoQR");
let imgBox = document.getElementById("imgBox");

console.log(qrCode);
console.log(textoQR);
console.log(imgBox);

function gerarQR() {
    
    if (textoQR.value.trim() === "") {
        
        //document.getElementById('qrCode').classList.remove('hidden');
        textoQR.classList.add('error');
        qrCode.classList.add('hidden');  

    } else {
        
        textoQR.classList.remove('error');
        qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textoQR.value.trim();
        qrCode.classList.remove('hidden');

    }
}