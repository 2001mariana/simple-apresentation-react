import './Header.scss'

import SpcBrasil from 'assets/images/spc_brasil.png'
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
        <Link to="/">
          <img src={SpcBrasil} />
        </Link>
      </header>     
    </>
  )
}
