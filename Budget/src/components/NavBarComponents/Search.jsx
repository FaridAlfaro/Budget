import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
    return(
        <label className="open-search" htmlFor="open-search">
        <FontAwesomeIcon icon={faSearch}  className='fa-search'/>
        <input
        className="input-open-search"
        id="open-search"
        type="checkbox"
        name="menu"
        />
        <div className="search">
        <button className="button-search">
            <FontAwesomeIcon icon={faSearch} className='fa-search'/>
        </button>
        <input
            type="text"
            placeholder="Encontrá aquello que buscas"
            className="input-search"
        />
        </div>
    </label>
    );
}
export default Search