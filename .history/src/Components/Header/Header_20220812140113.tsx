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
