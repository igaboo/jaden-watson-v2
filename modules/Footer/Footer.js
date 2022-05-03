import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <p className="hero"></p>
      <h5>Designed and built by Jaden ❤️</h5>
      <div className={styles.icons}>
        <button className="icon">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </button>
        <button className="icon">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </button>
        <button className="icon">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
