import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faHeart} from '@fortawesome/free-solid-svg-icons';
import CartWidget from './CartWidget';
function NavConten() {
    return(
      <nav className="nav-content">
        <ul className="nav-content-list">
          <li className="nav-content-item account-login">
            <label
              className="open-menu-login-account"
              htmlFor="open-menu-login-account"
            >
              <input
                className="input-menu"
                id="open-menu-login-account"
                type="checkbox"
                name="menu"
              />
              <FontAwesomeIcon icon={faUserCircle} />
              <span className="login-text">
                Ingresar<strong>Unirse</strong>
              </span>{" "}
              <span className="item-arrow" />
              <ul className="login-list">
                <li className="login-list-item">
                  <a href="#">Mi cuenta</a>
                </li>
                <li className="login-list-item">
                  <a href="#">Unirse</a>
                </li>
                <li className="login-list-item">
                  <a href="#">Cerrar sesión</a>
                </li>
              </ul>
            </label>
          </li>
          <li className="nav-content-item">
            <a className="nav-content-link" href="#">
              <FontAwesomeIcon icon={faHeart} className='heart'/>
            </a>
          </li>
          <CartWidget/>
        </ul>
      </nav>
    );
  }

  export default NavConten