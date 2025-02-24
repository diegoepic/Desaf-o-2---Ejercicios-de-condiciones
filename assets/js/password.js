function verificatePassword() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
   
    if (num1 == "" || num2 == "" || num3 == "") {
    alert("rellene todos los campos");
    }
    else if (num1 == 9 && num2 == 1 && num3 == 1) {
        document.getElementById('messagePassword').innerHTML = ` Password 1 correcta`;
    }
    else if (num1 == 7 && num2 == 1 && num3 == 4) {
        document.getElementById('messagePassword').innerHTML = ` Password 2 correcta`;
    }
    else{
        document.getElementById('messagePassword').innerHTML = ` password incorrecto`;
    }
}