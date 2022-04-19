
const CmpHijo = (props: any) => {

  const nombre = "Juan";
  let myStyles = {backgroundColor: 'grey'};

  return (
    <div style={myStyles}>
      <p>este es el nombre: {nombre}</p>
      <p>Bienvenido {props.message}</p>
    </div>
  );
};

export default CmpHijo;
