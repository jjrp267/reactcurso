import React,{ useEffect, useState }  from 'react';

function CmpHookEffect() {
  const [count, setCount] = useState(0);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    debugger;
    // Actualiza el título del documento usando la API del navegador
    document.title = `You clicked ${count} times`;
  },[]); //solo al montar el componente

  useEffect(() => {
    debugger;
    // Actualiza el título del documento usando la API del navegador
    document.title = `You clicked ${count} times`;
  },[count]); // solo cuando se cambia count

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default CmpHookEffect;