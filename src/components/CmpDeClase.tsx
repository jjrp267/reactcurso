import { Component } from 'react'
//import PropTypes from 'prop-types';

class CmpDeClase extends Component <any, any> {

  static defaultProps = {
    nombre: 'Sandra',
  }
  
  render() {
    return (<><h2>Esto es un componente de clase. </h2>
    <p>Hola {this.props.nombre}!!!</p></>);
  }
}

export default CmpDeClase;