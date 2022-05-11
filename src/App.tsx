import './App.css';
import Home from './components/Home';
import LazyComponent from './components/lazy/LazyComponent';

function App() {
  return (
    <div className="App">
       <Home user="admin" />
       <Home user="customer" />
       {/* <LazyComponent /> */}
    </div>
  );
}

export default App;
