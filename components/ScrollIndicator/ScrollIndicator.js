import styles from "./ScrollIndicator.module.scss";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

import { motion } from "framer-motion";
import Tooltip from "../ToolTip/Tooltip";

function ScrollIndicator({ visible }) {
  return (
    <Link href="/#about" scroll={false}>
      <a>
        <div className={`${styles.container} ${visible && styles.active}`}>
          <Tooltip tooltip="Scroll down">
            <motion.div
              transition={{
                type: "spring",
                duration: 1,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              animate={{
                y: ["10%", "-10%"],
              }}
            >
              <FontAwesomeIcon icon={faChevronDown} size="xl" />
            </motion.div>
          </Tooltip>
        </div>
      </a>
    </Link>
  );
}

export default ScrollIndicator;
