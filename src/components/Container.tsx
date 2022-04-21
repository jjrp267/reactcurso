interface ContainerProps {
    comoEstas: boolean;
  }

const Container: React.FunctionComponent<ContainerProps> = (props) => (
    <h1>{props.comoEstas ? "Estoy bien en contenedor 1 :)" : ":("}</h1>
  );

export default Container;