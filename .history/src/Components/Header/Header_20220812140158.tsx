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
      </header>     
    </>
  )
}
