import './Navbar.scss'

interface NavbarProps {
  links?: string[]
}

export default function Navbar({
  links
}: NavbarProps) {

  return (
    <>
      <div className="Navbar">
          <div>conteudos aqui</div>
          <div>links</div>
      </div>     
    </>
  )
}
