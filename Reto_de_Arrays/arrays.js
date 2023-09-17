import dataBase from "./CarDataBase";

// 1. Obtener el costo total de los carros en inventario

function costoTotal(db) {
  return db.reduce((total, carro) => total + carro.cost, 0);
}

costoTotal(dataBase);

// 2. Obtener el promedio de los precios de los carros pares

function promedio(db) {
  // Filtrar los carros en posiciones pares
  const carrosPares = db.filter((carro, index) => index % 2 === 0);

  // Calcular la suma de los precios
  const sumaPrecios = carrosPares.reduce((total, carro) => total + carro.cost, 0);

  // Calcular el promedio
  return sumaPrecios / carrosPares.length;
}

promedio(dataBase);

// ### 3. Obtener los carros Híbridos

function carrosHibridos(db) {
  return db.filter(carro => carro.fuel_type === "Hybrid");
}

carrosHibridos(dataBase);

// ### 4. Obtener el producto más caro

function carroMasCaro(db) {
  return db.reduce((carroMasCaro, carroActual) => {
    return (carroActual.cost > carroMasCaro.cost) ? carroActual : carroMasCaro;
  });
}

carroMasCaro(dataBase);

// ## 5. Agregar un nuevo producto

function nuevoCarro(db, carro) {
  return [...db, carro];
}

const carro = {
  car_name: "Nuevo Carro",
  cost: 50000,
  model: "Sedan",
  manufacturer: "Nuevo Fabricante",
  color: "Azul",
  num_doors: 4,
  cylinder_capacity: 2000,
  fuel_type: "Gasolina",
  transmission: "Automático",
  drive_type: "Tracción delantera",
  horsepower: 150
};

nuevoCarro(dataBase);

// ### 6. Eliminar el carro mas económico

function eliminarCarro(db) {
  // Encontrar el carro más económico
  const carroMasEconomico = db.reduce((carroMasEconomico, carroActual) => {
    return (carroActual.cost < carroMasEconomico.cost) ? carroActual : carroMasEconomico;
  });

  // Crear un nuevo array sin el carro más económico
  return db.filter(carro => carro !== carroMasEconomico);
}

eliminarCarro(dataBase);

// aca se exportan todas las funciones para realizar el testing sobre tu solución
export {
  costoTotal,
  promedio,
  carrosHibridos,
  carroMasCaro,
  nuevoCarro,
  eliminarCarro,
};
