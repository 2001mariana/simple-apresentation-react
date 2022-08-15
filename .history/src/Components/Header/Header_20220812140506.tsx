import SpcBrasil from 'assets/images/spc_brasil.png'

import './Header.scss'

interface HeaderProps {
  label?: string
  buttonOffcanvas?: boolean
}

export default function Header({
  label,
  buttonOffcanvas = false
}: HeaderProps) {

  return (
    <>
      <header className="Header">
          <img src={SpcBrasil} />
      </header>     
    </>
  )
}
