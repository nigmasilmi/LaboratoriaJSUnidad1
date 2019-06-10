"use strict";
let segundos = ()=>{
  let anhos = parseInt(document.getElementById('yrsAge').value);
  console.log(anhos);
  let total = anhos*365*24*60*60;
  console.log(total);
  document.getElementById('yrsSec').value = total;
  return total;
}

//c*1.8+32

let centigrados = ()=>{
  let faren = parseInt(document.getElementById('tF').value);
  let centi = (faren - 32) / 1.8;
  console.log(centi);
  document.getElementById('tC').value = centi;

}

let farenheit = ()=>{
  let centiti = parseInt(document.getElementById('tCent').value);
  let farenhiti = (centiti * 1.8) + 32;
  document.getElementById('tFar').value = farenhiti;

}
/*id="ingresos"
id="costos">
id="impuestos">
id="ganancias"*/


let ganancias = ()=>{
  let ingresos = parseInt(document.getElementById('ingresos').value);
  console.log(ingresos);
  let costos = parseInt(document.getElementById('costos').value);
  console.log(costos);
  let impuestos = parseInt(document.getElementById('impuestos').value) / 100;
  console.log(impuestos);
  let impuestosPagar = ingresos * impuestos;
  console.log(impuestosPagar);
  let ganancias = ingresos - (costos + impuestosPagar);
  console.log(ganancias);
  document.getElementById('ganancias').value = ganancias;


}

function limpiar(){
  document.getElementById('ingresos').value = '';
  document.getElementById('costos').value = '';
  document.getElementById('impuestos').value = '';
  document.getElementById('ganancias').value = '';

}

function dameIniciales(){
  let cuadrito = document.getElementById('iniciales');
  cuadrito.style.display = "none";
  const verInicBtn = document.getElementById('verIniciales');
  let arrayNombre = document.getElementById('nya').value;
  let arrayLimpio = arrayNombre.split('/');
  console.log ("esto es arrayLimpio:"  + arrayLimpio);
  let inicial1 = arrayLimpio[0][0].toUpperCase();
  let inicial2 = arrayLimpio[1][0].toUpperCase();
  let bordemos = inicial1 + '. ' + inicial2 + '. ';

  document.getElementById('iniciales').innerHTML = 'Borda ese pañuelo con: ' + bordemos;
  cuadrito.style.display = 'block';
  console.log(inicial1);
  console.log(inicial2);

}
