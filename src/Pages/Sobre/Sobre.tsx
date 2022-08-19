import './Sobre.scss';
import Lottie from 'lottie-react'
import ThreeDotAnimation from '../../assets/animation/three-dot.json'

function Sobre() {
  return (
    <>
    <div className="Sobre">
        <h2>Esta é a página Sobre...</h2>

        <div className="NotFound__animation">
            <Lottie animationData={ThreeDotAnimation} loop={true} />
        </div>

    </div>
    </>
  );
}

export default Sobre;
