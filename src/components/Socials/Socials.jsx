import { useContext } from "react";
import { faGoogle, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Authentication } from "../Context/Authentication";

const Socials = ({ type }) => {
  const { loginWithGoogle } = useContext(Authentication);

  if (type === "socials") {
    return (
      <div className="login_with">
        <a href="https://www.instagram.com" target="_blank">
          <button className="login_google">
            <FontAwesomeIcon icon={faInstagram} className="login_google_icon" />
          </button>
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <button className="login_google">
            <FontAwesomeIcon icon={faFacebook} className="login_google_icon" />
          </button>
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <button className="login_google">
            <FontAwesomeIcon icon={faTwitter} className="login_google_icon" />
          </button>
        </a>
      </div>
    );
  } else if (type === "login") {
    const handleLoginWithGoogle = () => {
      loginWithGoogle();
    };

    return (
        <div className="login_with">           
            <button className="login_google" onClick={loginWithGoogle}><FontAwesomeIcon icon={faGoogle} className="login_google_icon"/></button>
            <button className="login_google" ><FontAwesomeIcon icon={faFacebook} className="login_google_icon" /></button>
            <button className="login_google" ><FontAwesomeIcon icon={faTwitter} className="login_google_icon" /></button>
        </div>
    );
  } else {
    return null;
  }
};

export default Socials;
