import './app-info.css';
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AppInfo() {
    return (
        <div className="app-info d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faClock} className="icon-clock" />
            <h1 className='h1-app-info'>React clock</h1>
        </div>
    );
}
export default AppInfo;