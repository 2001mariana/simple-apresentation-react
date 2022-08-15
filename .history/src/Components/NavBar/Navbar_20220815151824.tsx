import './Header.scss'

interface HeaderProps {
  links: string[]
}

export default function Header({
  links
}: HeaderProps) {

  return (
    <>
      <header className="Header">
          <img className="Header__image" src={SpcBrasil} alt="" />
          <div>conteudos aqui</div>
      </header>     
    </>
  )
}