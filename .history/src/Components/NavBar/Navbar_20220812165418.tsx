import SpcBrasil from '../../assets/images/spc_brasil.png'

import './Navbar.scss'

interface NavBarProps {
  links?: string[]
}

export default function NavBar({
  links
}: NavBarProps) {

  return (
    <>
      <NavBar className="NavBar">
          <div className="NavBar__navigate">
          {
            links && links.map((link) => {
                return <span>{link}</span>
            })
          }
          </div>
      </NavBar>     
    </>
  )
}
