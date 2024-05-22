let imgBox= document.getElementById("imgBox");
let qrCode = document.getElementById("qrCode");
let TextoQR = document.getElementById("textoQR");

console.log(imgBox);
console.log(qrCode);
console.log(TextoQR);


function gerarQR(){

    
    qrCode.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textoQR.value;


};