import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faHeart} from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../../CartWdget/CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Authentication } from '../../Context/Authentication';

function NavConten({children}) {
  const { user, logout } = useContext(Authentication);
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
              {user.logged ?
                  <>
                    <FontAwesomeIcon icon={faUserCircle} />
                  </>
                           : <>
                           <span className="login-text">
  <Link className="login-text" to={'/login'}>Ingresar</Link><strong> <Link to={'/register'}>Unirse</Link></strong>
</span>
                         </>
              }
              <span className="item-arrow" />
              <ul className="ul_nav login-list">
              {user.logged ?
                  <>
                    <Link to={'/account'}><li className="login-list-item">Mi cuenta</li></Link>
                    <button style={{cursor:'pointer', border:'none', width:'100%', textAlign:'left'}} className='login-list-item' onClick={()=> logout()}>Cerrar sesión</button>
                  </>
                           : <>
                           <Link to={'/register'}><li className="login-list-item">Unirse</li></Link>
                         </>
              }
              </ul>
            </label>
          </li>
          <li className="nav-content-item">
          <Link to={'/like'}className="nav-content-link a_nav"><FontAwesomeIcon icon={faHeart} className='heart'/></Link>
          </li>
          {children}
        </ul>
      </nav>
    );
  }

  export default NavConten