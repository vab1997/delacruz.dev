---
title: "Manipular listas en JavaScript: La función map()"
date: "2020-09-06"
draft: false
summary: "En este artículo explico cómo se utiliza uno de los métodos que proporciona JavaScript para manipular listas. Se trata de la función map(), que te permite recorrer un listado y aplicar una función de transformación a todos sus elementos."
frontImageSrcSet: "/images/blog-images/pierre-bamin-dnGgAIRNnsE-unsplash.jpg"
frontImageSrc: /images/blog-images/pierre-bamin-dnGgAIRNnsE-unsplash.jpg
frontListImageSrc: /images/blog-images/pierre-bamin-dnGgAIRNnsE-unsplash.jpg
---

Map es una función que te permite **transformar** los elementos de un listado y que **devuelve uno nuevo** con los resultados de la transformación.

La firma de `map` no es _exactamente_ la siguiente, pero, para simplificar la explicación, voy a obviar un par de parámetros que no se utilizan demasiado. Si quieres ver la versión completa, consulta la [página dedicada en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map#Syntax):

```js
const nueva_lista = lista_original.map(function callback(elementoActual, index) {
  return /* Elemento devuelto de nueva_lista */;
});
```

Déjame explicártelo por partes:

- `lista_original` es el listado que queremos recorrer. Este listado, al ser un array, tiene disponible un método `.map()`.
- Map es una función que acepta como parámetro una función y que devuelve un Array.
- El array devuelto por `.map()` se almacena en la variable `nueva_lista`.
- La función `callback` que `.map()` recibe por parámetro se llamará por cada elemento de `lista_original`.
- `callback` recibe dos parámetros (ignoremos el tercero, que puedes ver [en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map#Syntax)). El primero es el valor actual del elemento que se está consultando, `elementoActual`. El segundo, el índice que indica la posición dentro de `lista_original`.
- La función `callback` \*_siempre debe devolver un valor_. De lo contrario, `nueva_lista` tendrá valores `null`. Tengo que reconocer que a menudo se me olvida hacer ese `return` 😳.

Échale un vistazo a este ejemplo práctico:

```js
const lista_original = [1, 2, 3, 4, 5];

const nueva_lista = lista_original.map(function sumaUno(elementoActual) {
  return elementoActual + 1;
});

console.log(lista_original); // [ 2, 3, 4, 5, 6 ]
```

La lista original es un `Array` que contiene números del 1 al 6. Al hacer un `map()`, se aplica la función `sumaUno()` a cada uno de los elementos. `map()` devuelve un nuevo `Array` con los resultados de aplicar `sumaUno()` en todas las posiciones. Por eso al hacer `console.log` se imprime por consola un listado nuevo con los resultados de sumar 1 a los elementos del listado original.

**Nota:** Fíjate que no le he pasado `index` como segundo parámetro a la función `sumaUno()`, ya que no lo iba a utilizar. Map espera una función capaz de recibir el `index` por parámetro, pero no tienes por qué recogerlo.

## Un par de reflexiones

Piensa en la función `sumaUno()` del ejemplo anterior. La función se _declara_ en el momento de pasársela como parámetro a `map()`. Pero ¿qué pasaría si no fuese así?

```js
function sumaUno(valor) {
  return valor + 1;
}

const lista_original = [1, 2, 3, 4, 5];

const nueva_lista = lista_original.map(sumaUno);

console.log(lista_original); // [ 2, 3, 4, 5, 6 ]
```

Como ves, sigue funcionando. No importa dónde declares la función que se le pasa a map, no tienes por qué hacerlo en el momento de utilizarla. Conocer esto es bastante útil por varios motivos:

- Puedes reutilizar el código de la función de transformación o incluso levarte la función a otro archivo.
- Puedes pasarle a `map()` cualquier función, aunque no sea tuya. Por ejemplo, una función de una librería o nativa de JavaScript. Prueba con `lista_original.map(console.log)`.
- Si le das nombres descriptivos a tus funciones, el código queda más legible.

La segunda reflexión que quería hacer es la siguiente: aunque he ido declarando la función `sumaUno()` con la palabra clave `function`, nada te impide utilizar una función flecha (o `arrow function`):

```js
const lista_original = [1, 2, 3, 4, 5];

const nueva_lista = lista_original.map((valor) => valor + 1);

console.log(lista_original); // [ 2, 3, 4, 5, 6 ]
```

O extraer el código de transformación a una variable:

```js
const sumaUno = (valor) => valor + 1;

const lista_original = [1, 2, 3, 4, 5];

const nueva_lista = lista_original.map(sumaUno);

console.log(lista_original); // [ 2, 3, 4, 5, 6 ]
```

## Puedes transformar cualquier cosa

Hasta ahora hemos visto un ejemplo muy sencillo, aplicando transformaciones a listas de números. Pero la potencia de `map()` es que la función de transformación puede devolver _cualquier cosa_. No necesariamente ha de ser del mismo tipo que recibe por parámetro. Por ejemplo:

```js
const vengadores = [
  { nombre: "Tony", apellidos: "Stark" },
  { nombre: "Steve", apellidos: "Rogers" },
  { nombre: "Bruce", apellidos: "Banner" },
  { nombre: "Natasha", apellidos: "Romanoff" },
  { nombre: "Thor", apellidos: "Odinson" },
  { nombre: "Clint", apellidos: "Barton" },
];

function nombreCompleto({ nombre, apellidos }) {
  return `${nombre} ${apellidos}`;
}

const nombres_completos = vengadores.map(nombreCompleto);

console.log(nombres_completos); // ["Tony Stark", "Steve Rogers", "Bruce Banner", "Natasha Romanoff", "Thor Odinson", "Clint Barton"]
```

En el ejemplo he transformado una **lista de objetos** en una **lista de strings** (o cadenas de texto). Por cada elemento, se llama a la función `nombreCompleto()`. Esta función recibe un objeto, que debe contener las propiedades `nombre` y `apellidos`. He utilizado [desestructuración de parámetros](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment) en la función para utilizar la misma estructura que los objetos del listado original.

## Conclusiones

Utiliza la función `map()` cuando quieras **aplicar una transformación** a los elementos del listado y **obtener un nuevo listado** que contenga los resultados.

Los elementos resultantes no tienen por qué ser del mismo tipo que los originales.

La función de transformación no tiene por qué estar declarada en el momento de utilizarla. Es más: extraerla y darle un nombre descriptivo puede hacer tu código más legible, reutilizable y fácil de probar.

Espero que te haya gustado esta explicación. Hazme saber si te gustaría que escribiese más artículos como este explicando otras funciones de JavaScript.
