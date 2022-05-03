import styles from "./Alert.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Alert({ icon, text }) {
  return (
    <section className={styles.container}>
      <FontAwesomeIcon icon={icon} size="3x" />
      {text}
    </section>
  );
}

export default Alert;
