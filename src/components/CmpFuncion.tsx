const styles = {
  h2: {
    color: "blue",
    backgroundColor: "gray",
  },
};

const CmpFuncion = (props: any) => {
  const nombre = "Alejandra";
  const getNombre = () => nombre;

  return (
    <div>
      <h1>Tipos de componentes</h1>
      <h2 style={styles.h2}>Esto es un componente funcional</h2>
      <p>Nombre {getNombre()}</p>
      <input type="text" placeholder={nombre} />
      <p>Apellidos</p>
      <input type="text" placeholder={props.minombre} />
    </div>
  );
};

export default CmpFuncion;
