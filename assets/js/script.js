let qrCode = document.getElementById("qrCode");
let TextoQR = document.getElementById("textoQR");
let imgBox= document.getElementById("imgBox");

console.log(qrCode);
console.log(TextoQR);
console.log(imgBox);


function gerarQR(){

    qrCode.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textoQR.value;
    document.getElementById('qrCode').classList.remove('hidden');


};