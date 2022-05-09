
export interface Productos {
    mProductos: Producto[];
  }

export interface Producto {
    id: number
    nombre: string | undefined,
    descripcion: string,
    precio?: number,
}

//export default Producto;