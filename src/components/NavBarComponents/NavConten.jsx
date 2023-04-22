import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faHeart} from '@fortawesome/free-solid-svg-icons';
import CartWidget from './CartWidget';
function NavConten() {
    return(
      <nav className="nav-content">
        <ul className="nav-content-list ul_nav">
          <li className="nav-content-item account-login">
            <label
              className="label_nav open-menu-login-account"
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
              <ul className="ul_nav login-list">
                <li className="login-list-item">
                  <a href="#" className='a_nav'>Mi cuenta</a>
                </li>
                <li className="login-list-item">
                  <a href="#" className='a_nav'>Unirse</a>
                </li>
                <li className="login-list-item">
                  <a href="#" className='a_nav'>Cerrar sesión</a>
                </li>
              </ul>
            </label>
          </li>
          <li className="nav-content-item">
            <a className="nav-content-link a_nav" href="#">
              <FontAwesomeIcon icon={faHeart} className='heart'/>
            </a>
          </li>
          <CartWidget/>
        </ul>
      </nav>
    );
  }

  export default NavConten