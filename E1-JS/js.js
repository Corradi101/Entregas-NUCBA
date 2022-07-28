const pizza = [
    {
      id: 1,
      nombre: 'Calabreza',
      precio: 900,
      ingredientes: ['Salsa de tomate', 'Queso', 'Cebolla caramelizada', 'Pimientos', 'Albahaca'],
    },
    {
      id: 2,
      nombre: 'Pollo BBQ',
      precio: 1200,
      ingredientes: ['Salsa de tomate', 'Queso', 'Pollo', 'Tocino', 'Cebolla morada', 'Salsa BBQ'],
    },
    {
      id: 3,
      nombre: 'Napolitana',
      precio: 1000,
      ingredientes: ['Salsa de tomate', 'Queso', 'Jamon', 'Aceituna', 'Oregano'],
    },
    {
      id: 4,
      nombre: 'Italiana',
      precio: 9500,
      ingredientes: ['Salsa de tomate', 'Queso', 'Jamon', 'Tomate', 'Aceituna','Palta', 'Oregano'],
    },
    {
      id: 5,
      nombre: 'Campo',
      precio: 1300,
      ingredientes: ['Salsa de tomate', 'Queso cabra', 'Rucula', 'Albahaca', 'Espinaca','Choclo', 'Oregano', 'Palmito'],
    },
    {
      id: 6,
      nombre: 'Mozzarella',
      precio: 550,
      ingredientes: ['Salsa de tomate', 'Mozzarella', 'Oregano', 'Aceitunas' ],
    },
  ];


/*
Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸
*/


//A
for (let i = 1; i <= 6; i++) {
if (i % 2 == 0) {
continue;
}
console.log(`El numero ${i} es impar`);
}


// B

const MenosDe600 = pizza.filter((pizza) => pizza.precio < 600);
console.log(MenosDe600);


// C

const NombrePizza = () =>
  pizza.forEach((pizza) =>
    console.log(`${pizza.nombre}`)
  );

NombrePizza();


// C

const PrecioPizza = () =>
  pizza.forEach((pizza) =>
    console.log(`${pizza.precio}`)
  );

PrecioPizza();


// E
const imprimirNombreYPrecio = () =>
  pizza.forEach((pizza) =>
    console.log(`La Pizza ${pizza.nombre} sale $${pizza.precio} `)
  );

imprimirNombreYPrecio();

