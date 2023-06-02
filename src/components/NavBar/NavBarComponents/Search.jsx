import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

function Search() {
  const searchRef = useRef()
  const [, setSearchParams] = useSearchParams()
  const handleSubmit = (e)=>{
    e.preventDefault()

    const searchValue = searchRef.current.value

    setSearchParams({
      search: searchValue
    })
  }
    return(
        <label className="open-search label_nav" htmlFor="open-search">
        <FontAwesomeIcon icon={faSearch}  className='fa-search'/>
        <input
        className="input-open-search"
        id="open-search"
        type="checkbox"
        name="menu"
        />
        <div className="search">
          <form onSubmit={handleSubmit}>
            <button className="button-search" type='submit'>
                <FontAwesomeIcon icon={faSearch} className='fa-search'/>
            </button>
            <input
              ref={searchRef}
              type="text"
              placeholder="Encontrá aquello que buscas"
              className="input-search"
          />
        </form>
        
        </div>
    </label>
    );
}
export default Search