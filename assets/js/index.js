precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

spanCantidad = document.querySelector(".cantidad")
valorFinal = document.querySelector(".valor-total")

let botonSuma = document.querySelector("#suma")
let botonResta = document.querySelector("#resta")

botonSuma.addEventListener ("click", () =>{
    spanCantidad.innerHTML = parseInt(spanCantidad.innerHTML) + 1
    valorFinal.innerHTML = parseInt(precio) * parseInt(spanCantidad.innerHTML)
})




botonResta.addEventListener ("click", () =>{
  if ( parseInt(spanCantidad.innerHTML) > 1) {
    spanCantidad.innerHTML = parseInt(spanCantidad.innerHTML) - 1
    valorFinal.innerHTML = parseInt(precio) * parseInt(spanCantidad.innerHTML)
}
})



