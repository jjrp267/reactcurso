import React from "react";

class FormNoControl extends React.Component <{}, {}> {
  nombre: React.RefObject<any>;
  apellidos: React.RefObject<any>;
  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nombre = React.createRef();
    this.apellidos = React.createRef();
  }

  handleSubmit(event: any) {
    alert('A name was submitted: ' + this.nombre.current.value+ " " + this.apellidos.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
      <h4>formulario no controlado</h4>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.nombre} />
        </label>
        <label>
          Apellidos:
          <input type="text" ref={this.apellidos} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </>
    );
  }
}

export default  FormNoControl;