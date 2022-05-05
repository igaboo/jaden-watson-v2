import styles from "./ScrollToTop.module.scss";

import { faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "../ToolTip/Tooltip";

function ScrollToTop({ visible }) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      className={styles.wrapper}
      style={{
        bottom: visible ? "5rem" : "-4rem",
      }}
    >
      <Tooltip tooltip="Scroll to Top" position="right">
        <FontAwesomeIcon
          className={`icon ${styles.icon}`}
          icon={faSquareCaretUp}
          size="4x"
          onClick={handleScrollToTop}
        />
      </Tooltip>
    </a>
  );
}

export default ScrollToTop;
