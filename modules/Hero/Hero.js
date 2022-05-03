import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Hero.module.scss";

import { motion } from "framer-motion";
import Link from "next/link";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

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
        <h2>
          I'm a designer & front-end developer.{" "}
          <a className="icon" href="/resume.pdf" download>
            <FontAwesomeIcon icon={faFileArrowDown} />
          </a>
        </h2>
        <span>
          <Link href="/#contact">
            <a className="button">& I'm here to help</a>
          </Link>
          <a href="https://twitter.com/oobagi" className="icon">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
          <a href="https://github.com/igaboo" className="icon">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a className="icon">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </span>
      </section>
    </motion.div>
  );
};

export default Hero;
