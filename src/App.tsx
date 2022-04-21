import './App.css';
import Container from './components/Container';
import Container2 from './components/Container2';
import TuEstasBien from './components/TuEstasBien';

function App() {

  const MyComponent = TuEstasBien(Container);
  const MyComponent2 = TuEstasBien(Container2);

  return (
    <div className="App">
       <MyComponent />
       <MyComponent2 />
       
    </div>
  );
}

export default App;
