import './Navbar.scss'

interface NavBarProps {
  links?: string[]
}

export default function NavBar({
  links
}: NavBarProps) {

  return (      
    <div className="NavBar">
      {links.map((link) => {
            return <span className="NavBar__item">{link}</span>
      })}
    </div>
  )
}
