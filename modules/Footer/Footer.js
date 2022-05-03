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
      <h5>
        <a href="https://github.com/igaboo/jaden-watson-v2">
          Designed and built by Jaden ❤️
        </a>
      </h5>
      <div className={styles.icons}>
        <a href="https://twitter.com/oobagi" className="icon">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://github.com/igaboo" className="icon">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="" className="icon">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
