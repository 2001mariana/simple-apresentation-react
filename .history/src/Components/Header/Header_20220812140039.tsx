import { mdiAccountArrowRightOutline, mdiMenu, mdiMenuDown } from '@mdi/js'
import { useEffect, useState } from 'react'

import SpcBrasil from 'assets/images/spc_brasil.png'
import Button from 'components/Button'
import Menu from 'components/Menu'
import Offcanvas from 'components/Offcanvas'

import './Header.scss'
import Icon from '@mdi/react'
import { useAuth } from '../../hooks/useAuth/useAuth'
import { Link, NavLink } from 'react-router-dom'

interface HeaderProps {
  label?: string
  buttonOffcanvas?: boolean
}

export default function Header({
  label,
  buttonOffcanvas = false
}: HeaderProps) {
  const auth = useAuth()
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)
  const [isMenuUserVisible, setIsMenuUserVisible] = useState<boolean>(false)

  useEffect(() => {
    setIsMenuUserVisible(false)
  }, [isMenuVisible])

  const DropdownMenu = () => {
    return (
      <div className="Header__dropdown">
        <NavLink
          to=""
          className="Header__dropdowMenu-item"
          onClick={() => {
            auth.signOut()
          }}
        >
          <span className="Header__dropdowMenu-item-write">Sair</span>
          <Icon path={mdiAccountArrowRightOutline} size="1.15rem" />
        </NavLink>
      </div>
    )
  }

  function openMenu() {
    setIsMenuVisible(true)
  }

  function closeMenu() {
    setIsMenuVisible(false)
  }

  return (
    <>
      <header className="Header">
        {buttonOffcanvas && (
          <Button icon={mdiMenu} onClick={openMenu} size="small-xxx" />
        )}
        <Link to="/">
          <img src={SpcBrasil} />
        </Link>
        {label && (
          <Button
            label={label}
            icon={mdiMenuDown}
            onClick={() => {
              setIsMenuUserVisible(!isMenuUserVisible)
            }}
            size="small"
          />
        )}
      </header>

      <Offcanvas label="Menu" isVisible={isMenuVisible} onClose={closeMenu}>
        <Menu onNavigate={closeMenu} />
      </Offcanvas>

      {isMenuUserVisible && <DropdownMenu />}
    </>
  )
}
