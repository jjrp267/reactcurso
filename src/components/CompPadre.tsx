import { useState } from "react";
import CmpHijo from "./CompHijo";


const CmpPadre = () => {

  const [message, setMesssage] = useState("mensaje por defecto");

  const handleClick = (newMessage: string) => {
     setMesssage(newMessage);
  }

  return (
    <div>
      <p>Soy el componente padre</p>
      <CmpHijo message={message} pushClick={handleClick} />
    </div>
  );
};

export default CmpPadre;
