import "./App.css";
import { ListaProductos } from "./components/ListaProductos";


const productosCaseros = [
  {
    id: 500,
    nombre: 'tomate',
    descripcion: 'producto de ensalada',
    precio: 120
  },
  {
    id: 502,
    nombre: 'platano',
    descripcion: 'fruta de postre',
    precio: 125
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
