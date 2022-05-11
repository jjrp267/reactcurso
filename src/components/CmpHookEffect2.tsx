import React,{ useEffect, useState }  from 'react';

function CmpHookEffect2() {
  const [persona, setPersona] = useState({nombre: "", apellidos: "", edad: 0});

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    debugger;
    // Actualiza el título del documento usando la API del navegador
    document.title = `Your surname ${persona.apellidos}`;
  },[]); //solo al montar el componente

  useEffect(() => {
    debugger;
    document.title = `tu nombre es ${persona.nombre}`;
  },[persona]); // solo cuando se cambia persona

  function seteoPersona(e: any){
    debugger;
    setPersona({nombre: 'pepe',apellidos: 'lopez', edad: 20 });
  }

  return (
    <div>
      <p>Nombre de la persona: {persona.nombre} </p>
      <p>Apellido de la persona: {persona.apellidos} </p>
      <p>Edad de la persona: {persona.edad} </p>
      <button onClick={seteoPersona}>
        Click me
      </button>
    </div>
  );
}

export default CmpHookEffect2;