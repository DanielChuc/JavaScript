//Control de Flujo con IF ELSE

var compra = 30;
var descuento1 = 3;
var descuento2 = 5;
var descuento3 = 7;

if (compra <= 10) {
    console.log('su compra es de ' + '$' + compra + ' mas $3 de envio, el total es de $' + (compra + descuento1));
} else
if (compra <= 20 && compra > 10) {
    console.log('su compra es de ' + '$' + compra + ' mas $5 de envio, el total es de $' + (compra + descuento2));
} else if (compra <= 50 && compra > 20) {
    console.log('su compra es de ' + '$' + compra + ' mas $7 de envio, el total es de $' + (compra + descuento3));
} else if (compra > 50) {
    console.log('su compra es de ' + '$' + compra + ' el envio es gratis, el total es de $' + (compra));
}
//Control de FLujo con switch
var compra = 2320;
var descuento1 = 3;
var descuento2 = 5;
var descuento3 = 7;

switch (true) {
    case compra <= 10:
        console.log('su compra es de ' + '$' + compra + ' mas $3 de envio, el total es de $' + (compra + descuento1));

        break;
    case compra <= 20 && compra > 10:
        console.log('su compra es de ' + '$' + compra + ' mas $5 de envio, el total es de $' + (compra + descuento2));

        break;
    case compra <= 50 && compra > 20:
        console.log('su compra es de ' + '$' + compra + ' mas $7 de envio, el total es de $' + (compra + descuento3));

        break;
    case compra > 50:
        console.log('su compra es de ' + '$' + compra + ' el envio es gratis, el total es de $' + (compra));

        break;

    default:
        console.log('invalido');
        break;
}