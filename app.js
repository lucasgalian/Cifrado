const ingresoTexto = document.getElementById("valorDePalabra");
let remplazar = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
] 
document.getElementById("mensajeFinal").style.display="none";
function btnEncriptar(){
    const textoEncriptado=encriptar(ingresoTexto.value);
    document.getElementById("mensajeFinal").style.display="block";
    document.getElementById("mensajeFinal").value=textoEncriptado;
    document.getElementById('valorDePalabra').value='';
    document.getElementById("logo_desencriptado").style.display = "none";
    document.getElementById("contenido").innerHTML = "Texto Encriptado con Exito!!";
    document.getElementById("contenido_dos").style.display = "none";
    document.getElementById("copia").style.display="show";
    document.getElementById("copia").style.display="inherit";

}

function encriptar(texto) {
    texto = texto.toLowerCase();
    for (let i = 0 ; i < remplazar.length; i++) {
        if(texto.includes(remplazar[i][0])){
            texto = texto.replaceAll(remplazar[i][0], remplazar[i][1]);
        }
    }
    return texto    
}
function btnDesencriptar(){
    const textoDesencriptado=desencriptar(ingresoTexto.value);
    document.getElementById("mensajeFinal").value= textoDesencriptado;
    document.getElementById("contenido").innerHTML = "Texto Desencriptado con Exito!!";
    document.getElementById("mensajeFinal").style.display="block";

     
}
function desencriptar(texto) {
    texto = texto.toLowerCase();
    for (let i = 0 ; i < remplazar.length; i++) {
        if(texto.includes(remplazar[i][1])){
            texto = texto.replaceAll(remplazar[i][1], remplazar[i][0]);
        }

    }
    return texto;
}




function copiar(){
    let cont = document.getElementById("mensajeFinal");
    navigator.clipboard.writeText(cont.value);
    alert ("Texto Copiado");
}