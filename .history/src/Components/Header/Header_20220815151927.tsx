import SpcBrasil from '../../assets/images/spc_brasil.png'
import Navbar from '../Navbar/Navbar'

import './Header.scss'

interface HeaderProps {
  links: string[]
}

export default function Header({
  links
}: HeaderProps) {

  return (
    <>
      <header className="Header">
          <img className="Header__image" src={SpcBrasil} alt="" />
          <Navbar />
      </header>     
    </>
  )
}
