import CmpHijo from "./CompHijo";


const CmpPadre = () => {

  return (
    <div>
      <h2>Componentes de funcion</h2>
      <p>Soy el componente padre</p>
      <CmpHijo message="soy una propiedad del componente hijo" />
    </div>
  );
};

export default CmpPadre;
