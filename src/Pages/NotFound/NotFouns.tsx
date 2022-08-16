import { NavLink } from 'react-router-dom'

import Lottie from 'lottie-react'
import ArrowDownnimation from '../../assets/animation/arrow-down.json'

import './NotFound.scss'

function NotFound() {
  return (
    <>
    <div className="NotFound">
        <h2>Não encontramos resultados para sua busca.</h2>
        <div className="NotFound__animation">
            <Lottie animationData={ArrowDownnimation} loop={true} />
        </div>
        <NavLink
            to={`../`}
        >
            Voltar para a Home
        </NavLink>
    </div>
    </>
  );
}

export default NotFound;
