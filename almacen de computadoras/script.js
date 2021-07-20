let cantidad;
let valor;
let descuento;
let total;

function calcular() {
  cantidad = document.getElementById("cantidad").value;

  if(cantidad <= 2){
    valor = cantidad * 1800000;
    descuento = valor * 0.15;
    total = valor - descuento;
    document.getElementById("valor").value = valor;
    document.getElementById("descuento").value = descuento;
    document.getElementById("total").value = total;
  } 
  else if (cantidad > 2) {
    valor = cantidad * 18000000;
    descuento = valor * 0.3;
    total = valor - descuento;
    document.getElementById("valor").value = valor;
    document.getElementById("descuento").value = descuento;
    document.getElementById("total").value = total;
  }
   else {
      alert('Igrese una cantidad')
  }
}