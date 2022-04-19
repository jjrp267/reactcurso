//Ejemplo Condicional if/else

const Modal = ({ isVisible }: any) => {
  if (!isVisible) return null;

  return <div className="modal">Contenido visible</div>;
};

export default Modal;
