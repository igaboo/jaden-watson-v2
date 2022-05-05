import styles from "./Tooltip.module.scss";

function Tooltip({ children, tooltip, position }) {
  return (
    <span className={styles.tooltipWrapper}>
      {children}

      <div
        className={`${styles.tooltip} ${
          position === "right" && styles.tooltipRight
        }`}
      >
        {tooltip}
      </div>
    </span>
  );
}

export default Tooltip;
