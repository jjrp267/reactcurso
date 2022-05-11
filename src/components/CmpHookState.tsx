import { useState } from "react";

const CmpHookState = () => {
  const [count, setCount] = useState(0);

  const [persona, setPersona] = useState({nombre: '', apellidos: '', isActive: false});

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
export default CmpHookState;
