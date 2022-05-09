
const CmpHijo = (props: any) => {

  const nombre : string = "Antonio";
  let myStyles = {backgroundColor: 'grey'};

  return (
    <div style={myStyles}>
      <p>este es el nombre: {nombre}</p>
      <p>este es la propiedad: {props.message}</p>
      <button onClick={() => props.pushClick('111 soy el estado actualizado del hijo con datos')}>
        click
      </button>

    </div>
  );
};

export default CmpHijo;
