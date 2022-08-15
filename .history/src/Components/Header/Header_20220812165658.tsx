import SpcBrasil from '../../assets/images/spc_brasil.png'
import NavBar from '../NavBar/Navbar'

import './Header.scss'

interface HeaderProps {
  links?: string[]
  buttonOffcanvas?: boolean
}

export default function Header({
  links,
  buttonOffcanvas = false
}: HeaderProps) {

  return (
    <>
      <header className="Header">
          <img className="Header__image" src={SpcBrasil} alt="" />
          <NavBar links={links} />
      </header>     
    </>
  )
}
