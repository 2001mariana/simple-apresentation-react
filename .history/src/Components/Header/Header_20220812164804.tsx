import SpcBrasil from '../../assets/images/spc_brasil.png'

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
          <img src={SpcBrasil} alt="" />
      </header>     
    </>
  )
}
