let qrCode = document.getElementById("qrCode");
let textoQR = document.getElementById("textoQR");
let imgBox = document.getElementById("imgBox");

console.log(qrCode);
console.log(textoQR);
console.log(imgBox);

function gerarQR() {
    
    if (textoQR.value.trim() === "") {
        
        //document.getElementById('qrCode').classList.remove('hidden');
        textoQR.classList.remove('error');

        //offsetWidth , faz com que o navegador execute um reflow , q é o processo no qual o navegador recalcula a posição e o tamanho dos elementos na página.
        void textoQR.offsetHeight;
        textoQR.classList.add('error');
        qrCode.classList.add('hidden');  

    } else {
        
        textoQR.classList.remove('error');
        qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textoQR.value.trim();
        qrCode.classList.remove('hidden');

    }
}


// alternar entre modo escuro e claro
const mudarModoEscuro = () => {
    const body = document.body;
    //adiciona a classe dark-mode ao body
    body.classList.toggle('dark-mode');
};

const modoEscuroBtn = document.getElementById('modo-escuro');
modoEscuroBtn.addEventListener('click', mudarModoEscuro);

/*
function mudarModoEscuro(){

    const body = document.body;

    body.classList.toggle('dark-mode');


}
*/