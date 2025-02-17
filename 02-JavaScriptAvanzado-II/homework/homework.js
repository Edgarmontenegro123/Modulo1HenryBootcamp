
function counter(){
  // Retorna una función que cuando sea invocada retorne un valor creciente.
  // El primer valor debería ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
    let i= 0;
    return function(){
      i ++; // return ++i --> ahorra un paso!
      return i;
    }
  }

function cacheFunction(cb){
  // Usa closures para crear un caché para la función cb.
  // La función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocación
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anteriormente, no debería invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro debería invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, debería retornar 25 (guardado previamente en el caché)
  // Tips, usa un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // Usa hasOwnProperty!
  //   let cache = new Object();
  //   return function(x) {
  //     if (!cache.hasOwnProperty(x)){
  //       return cache[x] = cb(x); 
  //     }
  //       return cache[x];
  //   }
  // }

  let obj = {};
  return function(a){
    if(obj.hasOwnProperty(a)){
      return obj[a];
    }
    else{
      return obj[a] = cb(a);
    }
  }
}

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25
}

var alumno = {
  nombre: "Juan",
  curso: "FullStack"
}

function getNombre(){
  return this.nombre;
}
// Escribir código sin modificar lo que ya se encuentra escrito arriba para poder llamar al método getNombre primero para obtener 
//el nombre del instructor y luego para obtener el nombre del alumno.
// ¡Modificar los undefined por el código correspondiente en cada caso
// Pista, tienes que bindear el this!
getNombreInstructor = getNombre.bind(instructor);
getNombreAlumno = getNombre.bind(alumno);

/*Guardar en las siguientes tres variables una función que devuelva una cadena utilizando la función "crearCadena" y el delimitador
especificado. La idea es realizarlo con la función bind para poder volver a utilizarlo múltiples veces luego:

1. textoAsteriscos
2. textoGuiones
3. textoUnderscore

Esto nos va a permitir llamar por ejemplo al método "textoAsteriscos" únicamente pasándole un argumento en vez de los tres que 
recibe "crearCadena"
*/
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena){
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

// Modificar los undefined por el código correspondiente en cada caso
// Pista, tienes que usar bind para "bindear" algunos parámetros de la función crearCadena.

let textoAsteriscos = crearCadena.bind(this, '*' , '*');

let textoGuiones = crearCadena.bind(this, '-' , '-');

let textoUnderscore = crearCadena.bind(this, '_' , '_');

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
