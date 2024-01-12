
//Obtenemos productos del localstorage
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);


const productosenCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"))
const contenedorCarritoVacio = document.querySelector("#carrito-vacio")
const contenedorCarritoProductos = document.querySelector("#carrito-productos")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones")
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")

let total = 0
if (productosenCarrito) {

    contenedorCarritoVacio.classList.add("disabled")
    contenedorCarritoProductos.classList.remove("disabled")
    contenedorCarritoAcciones.remove("disabled")
    contenedorCarritoComprado.classList.add("disabled")

    productosenCarrito.forEach(producto =>{

        const div = document.createElement("div")
        div.classList.add("carrito-producto")
        total += producto.precio
        div.innerHTML = `
            <img class = "carrito-producto-img" src="${producto.img}">
                <div class = "carrito-producto-titulo">
                    <small>Articulo</small>
                    <h3>${producto.nombre}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>${producto.precio}</small
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal: ${total}</small
                </div>
                <burron class = "carrito-producto-eliminar" id="${producto.div}"><i class = "bi bi-trash-fill"></i> </burron>

        `
        
        contenedorCarritoProductos.append(div)
    })
    
} else {

}