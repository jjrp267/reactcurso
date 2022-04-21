interface ContainerProps {
    comoEstas: boolean;
    descripcion: string;
  }

const Container2: React.FunctionComponent<ContainerProps> = (props) => (
    <>
    <h1>{props.comoEstas ? "Estoy bien en contenedor 2 :)" : ":("}</h1>
    <p>{props.descripcion}</p>
    </>
  );

export default Container2;