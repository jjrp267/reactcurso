import './App.css';
import CmpDeClase from './components/CmpDeClase';
import CmpFuncion from './components/CmpFuncion';

function App() {
  return (
    <div className="App">
       <CmpFuncion minombre='Pepa' />
       <CmpDeClase nombre='Juana'/>
    </div>
  );
}

export default App;
