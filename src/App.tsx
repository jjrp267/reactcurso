import './App.css';
import Blog from './components/Blog';
import ListComponent from './components/ListComponent';
import posts from './data/data';
function App() {

debugger;

  return (
    <div className="App">
       <ListComponent />
       <Blog posts={posts} />,
    </div>
  );
}

export default App;
