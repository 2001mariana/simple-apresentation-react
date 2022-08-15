import './Navbar.scss'

interface NavbarProps {
  links: string[]
}

export default function Navbar({
  links
}: NavbarProps) {

  return (
    <>
      <Navbar className="Navbar">
          <img className="Navbar__image" src={SpcBrasil} alt="" />
          <div>conteudos aqui</div>
      </Navbar>     
    </>
  )
}
