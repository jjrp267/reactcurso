import BannerDiscount from "./BannerDiscount";

//Ejemplo operadores lógicos

const Modal3 = ({isSubscribed}: any) => (
    <div>
      {
        isSubscribed &&
        <BannerDiscount />
      }
    </div>
  )

export default Modal3;