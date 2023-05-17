import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Socials() {
  return (
    <div className="col social">
      <h2 className='send_title'>Social</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faTwitterSquare} className='social_svg'/>
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} className='social_svg'/>
        </li>
        <li>
          <FontAwesomeIcon icon={faWhatsapp} className='social_svg'/>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
