let productos = [
    {
        id:1,
        nombre: "Lenovo IdeaPad 15ITL6",
        precio: 1300041,
        img:"https://http2.mlstatic.com/D_NQ_NP_745797-MLA69340654813_052023-O.webp",
        categoria:{
            nombre:"Notebooks",
            id:"notebooks"
        }
        
    },
    {
        id:2,
        nombre:"HP DY27",
        precio: 1638255,
        img:"https://http2.mlstatic.com/D_NQ_NP_889932-MLA52910192147_122022-O.webp",
        categoria:{
            nombre:"Notebooks",
            id:"notebooks"
        }
    },
    {
        id:3,
        nombre:"Dell Inspiron 3525 ",
        precio: 1099999,
        img: "https://http2.mlstatic.com/D_NQ_NP_696185-MLA54896761378_042023-O.webp",
        categoria:{
            nombre:"Notebooks",
            id:"notebooks"
        }
    },
    {
        id:4,
        nombre:"ROG Zephyrus G14",
        precio:1989999,
        img:"https://http2.mlstatic.com/D_NQ_NP_916221-MLU72610604143_112023-O.webp",
        categoria:{
            nombre:"Notebooks",
            id:"notebooks"
        }
    },
    {
        id:5,
        nombre:"Asus X515",
        precio:1543999,
        img:"https://http2.mlstatic.com/D_NQ_NP_618078-MLA43804510167_102020-O.webp",
        categoria:{
            nombre:"Notebooks",
            id:"notebooks"
        }
    },
    {
        id:6,
        nombre:"Acer Aspire 5",
        precio:1740219,
        img:"https://http2.mlstatic.com/D_NQ_NP_866337-MLA50987421800_082022-O.webp",
        categoria:{
            nombre:"Notebooks",
            id:"notebooks"
        }
    },
    {
        id:7,
        nombre:"Asus VivoBook X1400EA",
        precio:515899,
        img:"https://http2.mlstatic.com/D_NQ_NP_701727-MLA72856160041_112023-O.webp",
        categoria:{
            nombre:"Notebooks",
            id:"notebooks"
        }
    }
]
//DOM
const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")  //*
const tituloPrincipal = document.querySelector("titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-Agregar")
const itemcarrito = document.querySelector("#itemcarrito") 




//Render productos
function cargarProductos(productosElegidos){
    //limpiamos 
    contenedorProductos.innerHTML = ""

    productosElegidos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.img}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.nombre}</h3>
                <p class="producto-precio"> $${producto.precio} </p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `
        contenedorProductos.append(div)

    })
    actualizarBotonesAgregar()
}
//
// botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
//     aside.classList.remove("aside-visible");
// }))

//


cargarProductos(productos)

//Filtro-categoria de productos

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active")) //*
        e.currentTarget.classList.add("active")

        //funcionalidad con categorias
        if(e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id == e.currentTarget.id)
            
            tituloPrincipal.innerText = productoCategoria.categoria.nombre

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton)
        } else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }
        
    })
})


//func boton agregar

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito)
    })
}

const productosenCarrito=[]

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id == idBoton)
    //validar si existe en carrito
    if(productosenCarrito.some(producto => producto.id == idBoton)){
        productosenCarrito.findIndex(producto => producto.id === idBoton)
        productosenCarrito[index].cantidad++

    } else {
        productoAgregado.cantidad = 1
        productosenCarrito.push(productoAgregado)
    }
    actualizarItemCarrito()
    //guardamos en localstorage
    localStorage.setItem("productos-en-carrito",JSON.stringify(productosenCarrito))
}

//modificar itemcarrito
function actualizarItemCarrito(){
    let nuevoNumero = productosenCarrito.reduce((acc,producto)=> acc + producto.cantidad,0)
    itemcarrito.innerText = nuevoNumero
}


//Localstorage
