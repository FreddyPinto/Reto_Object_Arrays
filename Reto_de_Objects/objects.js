const tienda = {
  nombre: "tu tienda",
  direccion: "av tu dirección 123",
  productos: [
    {
      nombre: "producto 1",
      descripcion: "esta es la descripción del producto 1",
      precio: 999,
      stock: 10,
    },
  ],
  // 1. Crear un método en el objeto `tienda` llamado `agregarProducto`que permita agregar mas productos al array de productos.
  agregarProducto: function (producto) {
    this.productos.push(producto);
  },
  // 2. Crear un método en el objeto `tienda` llamado `obtenerProducto` que reciba como parámetro el nombre del producto y devuelva el objeto correspondiente
  obtenerProducto: function (nombre) {
    return this.productos.find(producto => producto.nombre === nombre);
  },
  // 3. Crear un método en el objeto `tienda` llamado `realizarVenta` que reciba como parámetros el nombre del producto y la cantidad vendida, y actualice la cantidad de stock correspondiente.
  realizarVenta: function (nombre, cantidad) {
    const producto = this.obtenerProducto(nombre);
    if (producto && producto.stock >= cantidad) {
      producto.stock -= cantidad;
    } else {
      console.log('Stock insuficiente o producto no encontrado');
    }
  },
  // 4. Crear una función llamada `eliminarProducto` que reciba como parámetro el nombre del producto y lo elimine de la lista de productos.
  eliminarProducto: function (nombre) {
    const index = this.productos.findIndex(producto => producto.nombre === nombre);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  },
};
// 5. Utilizar el método `Object.create` para crear un nuevo objeto llamado `tiendaOnline`
const tiendaOnline = Object.create(tienda, {
  online: { value: true, writable: true },
});
tiendaOnline.agregarStock = function (nombre, cantidad) {
  const producto = this.obtenerProducto(nombre);
  if (producto) {
    producto.stock += cantidad;
  }
};
// 6. Utilizar el método `Object.keys` para obtener un array con los nombres de las propiedades de los productos de la `tiendaOnline`.
const nombres = Object.keys(tiendaOnline.productos[0]);

// 7. Utilizar el método `Object.values` para obtener un array con todas las cantidades de stock disponibles de la tiendaOnline.
const stock = Object.values(tiendaOnline.productos[0]);

export { tienda, tiendaOnline, nombres, stock };
