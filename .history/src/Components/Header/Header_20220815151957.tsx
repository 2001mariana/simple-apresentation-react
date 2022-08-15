import SpcBrasil from '../../assets/images/spc_brasil.png'
import Navbar from '../Navbar/Navbar'

import './Header.scss'

export default function Header({

  return (
    <>
      <header className="Header">
          <img className="Header__image" src={SpcBrasil} alt="" />
          <Navbar />
      </header>     
    </>
  )
}
