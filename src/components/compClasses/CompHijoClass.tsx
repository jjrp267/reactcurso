import React from "react";

class CmpHijoClass extends React.Component <any, any> {

  render() {

    const myStyles = {backgroundColor: 'blue'};

    return (<div style={myStyles}>
      <p>este es el nombre: </p>
      <p>Bienvenido: {this.props.message} </p>
    </div>
  );
    }
};

export default CmpHijoClass;
