import { NavLink } from 'react-router-dom'
import './header.css'

export function Header() {
  return (
    <nav className="header">
      <NavLink className="link-button" to="/">
        Home
      </NavLink>
      <NavLink className="link-button" to="/inventory">
        Inventory
      </NavLink>
    </nav>
  )
}
