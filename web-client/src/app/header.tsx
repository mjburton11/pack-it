import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import { LoginModal } from './login';
import { userContext } from './userContext';

export function Header() {
  const { user } = useContext(userContext);

  return (
    <>
      <nav className="header">
        <div style={{ display: 'flex' }}>
          <NavLink className="link-button" to="/">
            Home
          </NavLink>
          {user != null && (
            <NavLink className="link-button" to="/inventory">
              Inventory
            </NavLink>
          )}
        </div>
        <NavLink className="link-button" to={{ search: '?action=login' }}>
          Login
        </NavLink>
      </nav>
      <LoginModal />
    </>
  );
}
