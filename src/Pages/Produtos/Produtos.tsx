import './Produtos.scss';

import Lottie from 'lottie-react'
import ThreeDotAnimation from '../../assets/animation/three-dot.json'
function Produtos() {
  return (
    <>
    <div className="Produtos">
        <h2>Esta é a página de Produtos</h2>

        <div className="NotFound__animation">
            <Lottie animationData={ThreeDotAnimation} loop={true} />
        </div>
    </div>
    </>
  );
}

export default Produtos;
