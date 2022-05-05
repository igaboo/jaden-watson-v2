import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "../../components/ToolTip/Tooltip";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <h5>
        <a className="mini" href="https://github.com/igaboo/jaden-watson-v2">
          Designed and built by Jaden ❤️
        </a>
      </h5>
      <div className={styles.icons}>
        <Tooltip tooltip="Twitter">
          <a href="https://twitter.com/oobagi" className="icon">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </Tooltip>
        <Tooltip tooltip="GitHub">
          <a href="https://github.com/igaboo" className="icon">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </Tooltip>
        <Tooltip tooltip="LinkedIn" position="right">
          <a href="" className="icon">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
}

export default Footer;
