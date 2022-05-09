import { useState } from "react";
import CmpHijo from "./CompHijo";


const CmpPadre = () => {

  const [message, setMesssage] = useState("mensaje por defecto");

  console.log('inicio:' + message);

  const handleClick = (newMessage: string) => {

     console.log('valor antes:' +message);
     setMesssage(newMessage);
     console.log('valor despues:' +message);
  }

  return (
    <div>
      <p>Soy el componente padre</p>
      <CmpHijo message={message} pushClick={handleClick} />
    </div>
  );
};

export default CmpPadre;
