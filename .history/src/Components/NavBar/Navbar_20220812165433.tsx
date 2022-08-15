
import './Navbar.scss'

interface NavBarProps {
  links?: string[]
}

export default function NavBar({
  links
}: NavBarProps) {

  return (
    <>
      
          <div className="NavBar__navigate">
          {
            links && links.map((link) => {
                return <span>{link}</span>
            })
          }
          </div>
  )
}
