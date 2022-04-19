import LogInForm from "./LogInForm";
import SignInForm from "./SignInForm";

//Ejemplo operador ternario

const Modal2 = ({isUser}: any) => (
    <div className='modal'>
    {
      isUser ? <LogInForm /> : <SignInForm />
    }
    </div>
)

export default Modal2;