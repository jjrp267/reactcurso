import { useNavigate } from "react-router-dom";
import CmpLinks from "./CmpLinks";

const styles = {
  h2: {
    color: "blue",
    backgroundColor: "gray",
  },
  span: {
    color: "red"
  }
};

const CmpFuncion = () => {
  const nombre = "Juan";
  const getNombre = () => nombre;
  const navigate = useNavigate();

  // useHistory() ya no se usa
  function handleClick1() {
    navigate('/clase');
  }


  return (
    <div>
      <h1>Tipos de componentes</h1>
      <h2 style={styles.h2}>Esto es un componente funcional</h2>
      <p>Bienvenido {getNombre()}</p>
      <input type="text" placeholder={nombre} />

      <span style={styles.span} onClick={() => handleClick1()}>
      Go class
    </span>

     <CmpLinks />

    </div>
  );
};

export default CmpFuncion;
