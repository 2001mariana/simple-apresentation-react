import SpcBrasil from '../../assets/images/spc_brasil.png'

import './Header.scss'

interface HeaderProps {
  links?: 
  buttonOffcanvas?: boolean
}

export default function Header({
  label,
  buttonOffcanvas = false
}: HeaderProps) {

  return (
    <>
      <header className="Header">
          <img src={SpcBrasil} alt="" />
      </header>     
    </>
  )
}
