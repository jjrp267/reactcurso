import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CmpDeClase from "./components/CmpDeClase";
import CmpFuncion from "./components/CmpFuncion";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/funcion" element={<CmpFuncion />} />
          <Route path="/clase" element={<CmpDeClase />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
