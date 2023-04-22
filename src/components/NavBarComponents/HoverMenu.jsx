import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HoverMenu(props) {
  return (
    <li className="all-category-list-item">
      <a href="#" className="a_nav all-category-list-link">
        {props.cat}
        <FontAwesomeIcon icon={faAngleRight} />
      </a>
      <div className="category-second-list">
        <ul className="ul_nav category-second-list-ul">
          {Array.isArray(props.item) &&
            props.item.length > 0 &&
            props.item.map((item) => (
              <li key={item.id} className="category-second-item">
                <a className='a_nav' href={item.url}>{item.name}</a>
              </li>
            ))}
        </ul>
        <div className="img-product-menu">
          <img src={props.img} />
        </div>
      </div>
    </li>
  );
}

export default HoverMenu;