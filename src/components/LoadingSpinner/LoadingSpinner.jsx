
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function LoadingSpinner() {
    return (
      <div className="loader_contain">
        <FontAwesomeIcon icon={faSpinner} spin size="2x" className="loader" />
      </div>
    );
  }

export default LoadingSpinner