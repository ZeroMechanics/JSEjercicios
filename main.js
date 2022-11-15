let pizzas = []

pizzas.push({
    id: 1,
    nombre: "Mr. Pit",
    ingredientes: ["aceitunas","Queso", "Salsa"],
    precio: 350
})

pizzas.push({
    id: 2,
    nombre: "¡Q' Jamone!",
    ingredientes: ["albahaca", "Queso", "JCrudo"],
    precio: 350
})

pizzas.push({
    id: 3,
    nombre: "La Charly García",
    ingredientes: ["Mitad napolitana", "Mitad salame", "Extra de serú giran"],
    precio: 380
})

pizzas.push({
    id: 4,
    nombre: "La Maradona",
    ingredientes: [" Napolitana", "Extra de Harina y Sal", "Extra Queso"],
    precio: 450
})

pizzas.push({
    id: 5,
    nombre: "Picantovich",
    ingredientes: ["Salsa tabasco", "Mix de salsas mexicanas ", "Albahaca"],
    precio: 750
})

pizzas.push({
    id: 6,
    nombre: "La hasbulla",
    ingredientes: ["Queso de cabra", "vodka", "Extra de gracia"],
    precio: 990
})

pizzas.push({
    id: 7,
    nombre: "Leo Messi",
    ingredientes: ["Salsa goleadora","tomates cherrys", "Queso azul y blanco argentino"],
    precio: 350
})

pizzas.push({
    id: 8,
    nombre: "Nick Gi",
    ingredientes: ["4 Quesos","Jamon Cocido ", "mix de aceitunas verdes y negras"],
    precio: 0
})


// EJERCICIO 1
let ejercicio1 = pizzas.filter(function(pizza) {
    return (pizza.id % 2) !== 0
})

console.log(ejercicio1)

// EJERCICIO 2
let ejercicio2 = pizzas.filter(function(pizza) {
    return pizza.precio<600
})

console.log(ejercicio2.length > 0 ? `Hay ${ejercicio2.length} pizzas mas baratas que $600`: "No hay pizzas mas baratas de 600")

// EJERCICIO 3
pizzas.forEach(function(pizza) {
    console.log("Nombre Pizza: "+pizza.nombre+" Precio Pizza: "+pizza.precio)
    console.log(`Nombre Pizza: ${pizza.nombre} "precio pizza: ${pizza.precio}`)
})

// EJERCICIO 4
pizzas.forEach(function(pizza) {
    console.log("Nombre pizza: " +pizza.nombre)
    console.log("los Ingredientes de ",pizza.nombre,"son: ", pizza.ingredientes.join(", "))
    
})