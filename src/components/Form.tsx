import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    descripcion: "",
    sabor: ""
  });

  const handleInputChange = (event: any) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event: any) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.nombre + " " + datos.apellido + " "+datos.descripcion+" "+datos.sabor);
  };

  return (
    <div className="container">
      <h2>Cuestionario</h2>
      <form onSubmit={enviarDatos}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            className="form-control"
            onChange={handleInputChange}
            name="nombre"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            placeholder="Apellido"
            className="form-control"
            onChange={handleInputChange}
            name="apellido"
          ></input>
        </div>
        <div className="form-group">
        <label htmlFor="descripcion"></label>
          Descripcion:
          <textarea
            value={datos.descripcion}
            className="form-control"
            onChange={handleInputChange}
            name="descripcion"
          />
        </div>
        <div className="form-group">
        <label htmlFor="nombre">
          Elige el sabor:</label>
          <select value={datos.sabor} onChange={handleInputChange} name="sabor">
            <option value="uva">Uva</option>
            <option value="limon">Limón</option>
            <option value="coco">Coco</option>
            <option value="mango">Mango</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <div>
        <p>Nombre: {datos.nombre}</p>
        <p>Apellido: {datos.apellido}</p>
        <p>Descripcion: {datos.descripcion}</p>
        <p>Sabor: {datos.sabor}</p>
      </div>
    </div>
  );
};

export default Formulario;
