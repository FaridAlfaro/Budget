import empty from '../../../img/Persons/1.svg';
import { Link } from 'react-router-dom';
function BuyEmpty (props) {
    return(
        <div className="buy_container">
        <div className="buy_empty_max">
            <div className="buy_empty">
                <p className="buy_empty_title">{props.title}</p>
                    <Link to={'/'}>
                        <button className='buy_empty_btn'>{props.btn}</button>
                    </Link>
            </div>
            <img src={empty} alt="" className='empty'/>
        </div>
        </div>
    )
}
export default BuyEmpty