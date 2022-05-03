import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Hero.module.scss";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 0.3, once: true }}
    >
      <section className={`container ${styles.container}`}>
        <h1>Hi, I'm Jaden</h1>
        <h2>I'm a designer & front-end developer.</h2>
        <span>
          <button>& I'm here to help</button>
          <button className="icon">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </button>
          <button className="icon">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </button>
          <button className="icon">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </button>
        </span>
      </section>
    </motion.div>
  );
};

export default Hero;
