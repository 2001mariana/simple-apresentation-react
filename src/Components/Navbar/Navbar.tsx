import { NavLink } from 'react-router-dom'

import './Navbar.scss'

export default function Navbar() {

  return (
    <div className="Navbar">
         <NavLink
            className="Navbar__item"
            to={`../`}
          >
            Home
          </NavLink>
          <NavLink
            className="Navbar__item"
            to={`../sobre`}
          >
            Sobre
          </NavLink>
          <NavLink
            className="Navbar__item"
            to={`../produtos`}
          >
            Produtos
          </NavLink>
          <NavLink
            className="Navbar__item"
            to={`../contato`}
          >
            Contato
          </NavLink>
    </div>     
  )
}
