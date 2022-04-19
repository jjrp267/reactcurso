import './App.css';
import Modal from './components/Modal';
import Modal2 from './components/Modal2';
import Modal3 from './components/Modal3';

function App() {
  return (
    <div className="App">
       <Modal isVisible={true} />
       <Modal2 isUser={true} />
       <Modal3 isSubscribed={true} />
    </div>
  );
}

export default App;
