import Lottie from 'lottie-react'
import './Contato.scss';
import ContactAnimation from '../../assets/animation/contact.json'

function Contato() {
  return (
    <>
    <div className="Contato">
        <h2>Esta é a página de Contato</h2>

        <div className="Contato__animation">
            <Lottie animationData={ContactAnimation} loop={true} />
        </div>
    </div>
    </>
  );
}

export default Contato;
