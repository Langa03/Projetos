function ApenasLetras(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if (
            (charCode > 64 && charCode < 91) || 
            (charCode > 96 && charCode < 123) ||
            (charCode > 191 && charCode <= 255) || // letras com acentos
            (charCode == 32)
        ){
            return true;
        } else {
            return false;
        }
    } catch (err) {
        alert(err.Description);
    }
}

function ApenasNumeros(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if (
            (charCode >= 48 && charCode <= 57)
        ){
            return true;
        } else {
            return false;
        }
    } catch (err) {
        alert(err.Description);
    }
}
$(document).ready(function(){
    $("#cpf").mask("999.999.999-99");
});

$(document).ready(function(){
    $("#telefone").mask("9999-9999");
});
$(document).ready(function(){
    $("#celular").mask("99999-9999");
});
$(document).ready(function(){
    $("#cnpj").mask("99.999.999/9999-99");
});
$(document).ready(function(){
    $("#cep").mask("99999-999");
});

function valideCPF(cpf) {

    try {
     var Soma;
     var Resto;
     var strCPF = cpf.replace("-", "").replace(".", "").replace(".", "")
     Soma = 0;
     if (strCPF == "00000000000") return false;

     for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
     Resto = (Soma * 10) % 11;

     if ((Resto == 10) || (Resto == 11)) Resto = 0;
     if (Resto != parseInt(strCPF.substring(9, 10))) return false;

     Soma = 0;
     for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
     Resto = (Soma * 10) % 11;

     if ((Resto == 10) || (Resto == 11)) Resto = 0;
     if (Resto != parseInt(strCPF.substring(10, 11))) return false;

     return true;

 } catch (e) {

     return false;
 }
}