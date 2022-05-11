import { Component } from 'react'
import { Link } from 'react-router-dom';

class CmpDeClase extends Component {

  render() {
    return (<><h2>Esto es un componente de clase</h2><Link to="/funcion">ir a funcion</Link></>)
  }
}

export default CmpDeClase;