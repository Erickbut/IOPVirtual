// Definimos las constantes
const gananciaA = 10;
const gananciaB = 15;
const horasManoObra = 100;
const horasMaquina = 80;

// Definimos la función objetivo
function funcionObjetivo(x, y) {
  return gananciaA * x + gananciaB * y;
}

// Definimos las restricciones
function restriccionManoObra(x, y) {
  return 1 * x + 3 * y <= horasManoObra;
}

function restriccionMaquina(x, y) {
  return 2 * x + 1 * y <= horasMaquina;
}

// Definimos una función para encontrar el punto óptimo
function encontrarPuntoOptimo() {
  // Definimos los límites del gráfico
  const limiteX = 40;
  const limiteY = 40;

  // Creamos un arreglo para guardar los puntos que conforman las restricciones
  const puntos = [];

  // Generamos los puntos que conforman la restricción de mano de obra
  for (let x = 0; x <= limiteX; x++) {
    const y = (horasManoObra - 1 * x) / 3;
    if (y >= 0 && y <= limiteY && Number.isInteger(y)) {
      puntos.push([x, y]);
    }
  }

  // Generamos los puntos que conforman la restricción de máquina
  for (let y = 0; y <= limiteY; y++) {
    const x = (horasMaquina - 1 * y) / 2;
    if (x >= 0 && x <= limiteX && Number.isInteger(x)) {
      puntos.push([x, y]);
    }
  }

  // Encontramos la solución óptima
  let solucionOptima = [0, 0];
  let maximoGanancia = 0;
  for (const punto of puntos) {
    const [x, y] = punto;
    if (restriccionManoObra(x, y) && restriccionMaquina(x, y)) {
      const ganancia = funcionObjetivo(x, y);
      if (ganancia > maximoGanancia) {
        solucionOptima = [x, y];
        maximoGanancia = ganancia;
      }
    }
  }

  // Devolvemos la solución óptima
  return solucionOptima;
}

// Encontramos la solución óptima y la imprimimos en consola
const solucionOptima = encontrarPuntoOptimo();
console.log(`La solución óptima es producir ${solucionOptima[0]} unidades de A y ${solucionOptima[1]} unidades de B para maximizar las ganancias, con una ganancia total de $${funcionObjetivo(solucionOptima[0], solucionOptima[1])}.`);
