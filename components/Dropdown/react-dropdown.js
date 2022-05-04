import styles from "./next-dropdown.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

const Button = ({ text, icon, color, func, iconsOnly, textOnly }) => {
  const changeBackground = (e) => {
    !color
      ? (e.target.style.backgroundColor = "var(--hover")
      : (e.target.style.backgroundColor = `rgba(${color}, .2)`);
  };
  const removeBackground = (e) => {
    e.target.style.backgroundColor = "transparent";
  };

  return (
    <button
      style={{
        color: `rgba(${color}, 1)`,
        justifyContent: `${textOnly || iconsOnly ? "center" : "space-between"}`,
      }}
      onMouseEnter={(e) => changeBackground(e)}
      onMouseLeave={(e) => removeBackground(e)}
      onClick={func}
    >
      {!textOnly && (
        <FontAwesomeIcon
          style={{ color: `rgba(${color}, 1)` }}
          icon={icon}
          size="lg"
        />
      )}
      {!iconsOnly && text}
    </button>
  );
};

function DropdownMenu({
  buttons,
  toggleIsOpen,
  isOpen,
  position,
  iconsOnly,
  textOnly,
}) {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        !isOpen && toggleIsOpen();
      }

      document.addEventListener("mouseup", handleClickOutside);
      return () => {
        document.removeEventListener("mouseup", handleClickOutside);
      };
    }, [isOpen]);
  }

  let styling = {
    transformOrigin: "50% 50%",
  };

  if (position === "top-left") {
    styling = {
      transformOrigin: "0% 0%",
      left: "-50%",
      marginTop: ".75rem",
    };
  } else if (position === "top-right") {
    styling = {
      transformOrigin: "100% 0%",
      right: "-50%",
      marginTop: ".75rem",
    };
  } else if (position === "top-center") {
    styling = {
      transformOrigin: "50% 0%",
      transform: "translate(-50%)",
      left: "50%",
      marginTop: ".75rem",
    };
  } else if (position === "bottom-left") {
    styling = {
      transformOrigin: "0% 100%",
      left: "-50%",
      top: "100%",
      transform: "translate(0, calc(-100% + -2rem))",
      marginTop: "-0.25rem",
    };
  } else if (position === "bottom-center") {
    styling = {
      transformOrigin: "50% 100%",
      left: "50%",
      top: "100%",
      transform: "translate(-50%, calc(-100% + -2rem))",
      marginTop: "-0.25rem",
    };
  } else if (position === "bottom-right") {
    styling = {
      transformOrigin: "100% 0%",
      right: "-50%",
      top: "100%",
      transform: "translate(0, calc(-100% + -2rem))",
      marginTop: "-0.25rem",
    };
  }

  if (iconsOnly || textOnly) {
    styling["width"] = "auto";
    styling["alignItems"] = "center";
  } else {
    styling["width"] = "8rem";
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div
      className={`${styles.wrapper} ${
        !isOpen ? styles.activated : styles.deactivated
      }`}
    >
      <div
        ref={wrapperRef}
        className={`${styles.dropdown} ${
          isOpen ? styles.collapsed : styles.expanded
        }`}
        style={styling}
      >
        {buttons.map((btn) => {
          return (
            <Button
              key={buttons.indexOf(btn)}
              text={btn.text}
              icon={btn.icon}
              color={btn.color}
              func={btn.func}
              iconsOnly={iconsOnly}
              textOnly={textOnly}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function Dropdown({
  icon,
  buttons,
  isOpen,
  toggleIsOpen,
  position,
  iconsOnly,
  textOnly,
}) {
  return (
    <div className={styles.dropdownWrapper}>
      <FontAwesomeIcon
        icon={icon}
        size="lg"
        style={{
          color: !isOpen && "$active",
        }}
        className="btn-icon"
        onClick={toggleIsOpen}
      />
      <DropdownMenu
        buttons={buttons}
        toggleIsOpen={toggleIsOpen}
        isOpen={isOpen}
        position={position}
        iconsOnly={iconsOnly}
        textOnly={textOnly}
      />
    </div>
  );
}
