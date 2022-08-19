import Lottie from 'lottie-react'
import { NavLink } from 'react-router-dom'

import ArrowDownnimation from '../../assets/animation/not-found2.json'

import './NotFound.scss'

function NotFound() {
  return (
    <>
    <div className="NotFound">
        <h2>Não encontramos resultados para sua busca.</h2>
        <div className="NotFound__animation">
            <Lottie animationData={ArrowDownnimation} loop={true} />
        </div>
        
        <button className='Notfound__button'>
        <NavLink
            to={`../`}
        >
            Voltar para a Home
        </NavLink>
        </button>
    </div>
    </>
  );
}

export default NotFound;
