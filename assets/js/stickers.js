
function calculateTotalSticker(){
    let sticker1 = Number(document.getElementById('sticker1').value);
    let sticker2 = Number(document.getElementById('sticker2').value);
    let sticker3 = Number(document.getElementById('sticker3').value);
    
    let totalSticker = sticker1 + sticker2 + sticker3;
    if(isNaN(totalSticker)){
        document.getElementById('parrafoSticker').innerHTML = ` Ingrese un valor valido`;
    }
    else if(totalSticker == 0){
        document.getElementById('parrafoSticker').innerHTML = ` No llevas Stickers`;
    }
     else if(totalSticker <= 10){
        document.getElementById('parrafoSticker').innerHTML = ` Llevas  ${totalSticker} Stickers`;
     }
     else if (totalSticker > 10){
        document.getElementById('parrafoSticker').innerHTML = ` Llevas demasiados stickers`;
     }

    return totalSticker;

}