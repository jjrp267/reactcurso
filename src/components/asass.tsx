import { useRef } from "react";


function TextInputWithFocusButton() {
    const inputEl = useRef();
    const onButtonClick = () => {
      // `current` apunta al elemento de entrada de texto montado
      //inputEl.current.sefocus();
    };
    return (
      <>
        {/* <input ref={inputEl} type="text" /> */}
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }