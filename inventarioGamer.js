let productos = [`Mouse`, `Teclado`, `Monitor`, `Audifonos`];
    
function mostrarInventario(array) {
    console.log(`Inventario actual:`)
    for (let i = 0; i < array.length ; i++) {
        console.log( `${i+1}.-${array[i]}`)
    }
}//mostrarInventario

console.log(mostrarInventario(productos))


function agregarProducto(array) {
    let producto = prompt(`Ingresa el producto que deseas agregar`);
    array.push(producto)

    console.log(`Producto agregado: ${producto} \n Inventario actualizado: `)
    for (let i = 0; i < array.length ; i++) {
        console.log( `${i+1}.-${array[i]}`)
    }
}//agregarProducto



agregarProducto(productos)

function eliminarProducto(array) {
    let largo = array.length -1
    console.log(`Producto eliminado ${array[largo]}`)
    array.pop()
    console.log(`Inventario actualizado:`)
    for (let i = 0; i < array.length ; i++) {
        console.log( `${i+1}.-${array[i]}`)
    }
}//eliminarProducto
eliminarProducto(productos)

function reemplazarProducto(array, indice, nuevoProducto) {
    array.slice(indice, 1, nuevoProducto)
    console.log(array)
}//reemplazarProducto

function buscarProducto(array, busqueda) {

    let num = (array.indexOf(busqueda))
    if (num >= 0) {
        return console.log(`Producto: "${array[num]}" Encontrado en indice: ${num}`)
    } else {
        return console.log(`No existente en el arreglo`)
    }
}//buscarProducto

buscarProducto(productos,`Teclado`)


function ordenarProductos(array) {
    array.sort()
    console.log(`Inventario ordenado alfabeticamente:`)
    for (let i = 0; i < array.length ; i++) {
        console.log( `${i+1}.-${array[i]}`)
    }
}//ordenarProducto

ordenarProductos(productos)


function mostrarCantidad(array){
    return console.log(`Cantidad total: ${array.length} productos`)
}//mostrarCantidad

mostrarCantidad(productos)