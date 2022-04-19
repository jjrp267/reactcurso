import React from "react";
import CmpHijoClass from "./CompHijoClass";

class CmpPadreClass extends React.Component {
  render() {
    return (
      <div>
        <h2>Componentes de clase</h2>
        <p>Soy el componente padre</p>
        <CmpHijoClass message="soy una propiedad del componente hijo" />
      </div>
    );
  }
}

export default CmpPadreClass;
