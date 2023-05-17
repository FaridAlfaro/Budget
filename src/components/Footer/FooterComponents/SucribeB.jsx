import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Subscribe(){
    return(
        <div className='send_container'>
            <h2 className='send_title'>Newsletter</h2>
            <p className='send_copy'>Dejanos tu mail y recibí nuestras ofertas antes que nadie</p>
            <label className="send_label" htmlFor="open-search">
                    <button className="button_send">
                        <FontAwesomeIcon icon={faPaperPlane} className='fa-paper-plane'/>
                    </button>
                    <input
                        type="text"
                        placeholder="Suscribirme"
                        className="input_send"
                    />
            </label>
        </div>
        
    )
}

export default Subscribe