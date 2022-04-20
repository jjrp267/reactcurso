import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CmpDeClase from "./components/CmpDeClase";
import CmpFuncion from "./components/CmpFuncion";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/funcion">funcion</Link> |{" "}
        <Link to="/clase">clase</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funcion" element={<CmpFuncion />} />
        <Route path="/clase" element={<CmpDeClase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
