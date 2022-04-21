import './App.css';
import Formulario from './components/Form';
import FormNoControl from './components/FormNoControl';
import FormValidation from './components/FormValidation';

function App() {
  return (
    <div className="App">
       <Formulario />
       <FormValidation />
       <FormNoControl />
    </div>
  );
}

export default App;
