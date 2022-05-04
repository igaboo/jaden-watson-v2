import styles from "./ScrollToTop.module.scss";

import { faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ScrollToTop({ visible }) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FontAwesomeIcon
      style={{
        bottom: visible ? "5rem" : "-4rem",
      }}
      className={`icon ${styles.icon}`}
      icon={faSquareCaretUp}
      size="4x"
      onClick={handleScrollToTop}
    />
  );
}

export default ScrollToTop;
