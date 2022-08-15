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
          <div>conteudos aqui</div>
      </Navbar>     
    </>
  )
}
