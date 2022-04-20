import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
       <Home user="admin" />
       <Home user="customer" />
    </div>
  );
}

export default App;
