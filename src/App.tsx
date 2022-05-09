import "./App.css";
import { ListaProductos } from "./components/ListaProductos";
import { Producto } from "./models/interfaces";


const productosCaseros : Producto[] = [
  {
    id: 500,
    nombre: undefined,
    descripcion: 'producto de ensalada',
    precio: 120
  },
  {
    id: 502,
    nombre: 'platano',
    descripcion: 'fruta de postre'
  },
  {
    id: 508,
    nombre: 'naranja',
    descripcion: 'fruta de postre',
    precio: 150
  }
];

function App() {
  return (
    <div className="App">
      <ListaProductos mProductos={productosCaseros} />
    </div>
  );
}

export default App;
