const styles = {
  h2: {
    color: "blue",
    backgroundColor: "gray",
  },
};

const CmpFuncion = () => {
  const nombre = "Juan";
  const getNombre = () => nombre;

  return (
    <div>
      <h1>Tipos de componentes</h1>
      <h2 style={styles.h2}>Esto es un componente funcional</h2>
      <p>Bienvenido {getNombre()}</p>
      <input type="text" placeholder={nombre} />
    </div>
  );
};

export default CmpFuncion;
