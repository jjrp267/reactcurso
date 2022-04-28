import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    descripcion: "",
    localizacion: "",
    jornada: ""
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
    console.log("enviando datos..." + datos.nombre + " " + datos.apellido + " "+datos.descripcion+" "+datos.localizacion);
  };

  return (
    <div className="container">
      <h2>Cuestionario (formulario controlado)</h2>
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
          Elige preferencia:</label>
          <select value={datos.localizacion} onChange={handleInputChange} name="localizacion">
            <option value=""></option>
            <option value="ventana">ventana</option>
            <option value="puerta">puerta</option>
            <option value="pasillo">pasillo</option>
          </select>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="jornada"
              value="Mañana"
              checked={datos.jornada === "Mañana"}
              onChange={handleInputChange}
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="jornada"
              value="Tarde"
              checked={datos.jornada === "Tarde"}
              onChange={handleInputChange}
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="jornada"
              value="Partido"
              checked={datos.jornada === "Partido"}
              onChange={handleInputChange}
            />
            Other
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <div>
        <p>Nombre: {datos.nombre}</p>
        <p>Apellido: {datos.apellido}</p>
        <p>Descripcion: {datos.descripcion}</p>
        <p>Localizacion: {datos.localizacion}</p>
        <p>Opcion de jornada : {datos.jornada}</p>
      </div>
    </div>
  );
};

export default Formulario;
