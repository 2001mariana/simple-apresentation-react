
import './Header.scss'

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
