import SpcBrasil from '../../assets/images/spc_brasil.png'

import './Navbar.scss'

interface HeaderProps {
  links?: string[]
}

export default function Header({
  links
}: HeaderProps) {

  return (
    <>
      <header className="Header">
          <img className="Header__image" src={SpcBrasil} alt="" />
          <div className="Header__navigate">
          {
            links && links.map((link) => {
                return <span>{link}</span>
            })
          }
          </div>
      </header>     
    </>
  )
}
