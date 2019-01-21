var objetos = new Array();
objetos[0] = "rc-img/0.png";
objetos[1] = "rc-img/1.png";
objetos[2] = "rc-img/2.png";
objetos[3] = "rc-img/3.png";
objetos[4] = "rc-img/4.png";
objetos[5] = "rc-img/5.png";
objetos[6] = "rc-img/6.png";
objetos[7] = "rc-img/7.png";
objetos[8] = "rc-img/8.png";
objetos[9] = "rc-img/9.png";
objetos[10] = "rc-img/10.png";


function aleatorio() {
var azar = Math.floor(Math.random() * objetos.length);
document.images["imagen"].src = objetos[azar];
}
