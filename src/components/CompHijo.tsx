
const CmpHijo = (props: any) => {

  const nombre = "Juan";
  let myStyles = {backgroundColor: 'grey'};

  return (
    <div style={myStyles}>
      <p>este es el nombre: {nombre}</p>
      <p>{props.message}</p>
      <button onClick={() => props.pushClick('soy el estado actualizado del hijo')}>
        click
      </button>

    </div>
  );
};

export default CmpHijo;
