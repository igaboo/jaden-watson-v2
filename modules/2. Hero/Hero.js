import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Hero.module.scss";

import Link from "next/link";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

import StaggeredAnimate from "../wrappers/StaggeredAnimate";
import Tooltip from "../../components/ToolTip/Tooltip";

const Hero = () => {
  return (
    <section className={`container ${styles.container}`}>
      <StaggeredAnimate>
        <h1>Hi, I'm Jaden</h1>
        <h2>I'm a designer & front-end developer.</h2>
        <span>
          <Link href="/#contact">
            <a className="button">& I'm here to help</a>
          </Link>
          <Tooltip tooltip="My Resume">
            <a className="icon" href="/resume.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} size="3x" />
            </a>
          </Tooltip>
          <Tooltip tooltip="Twitter">
            <a href="https://twitter.com/oobagi" className="icon">
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
          </Tooltip>
          <Tooltip tooltip="GitHub">
            <a href="https://github.com/igaboo" className="icon">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
          </Tooltip>
          <Tooltip tooltip="LinkedIn">
            <a className="icon">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
          </Tooltip>
        </span>
      </StaggeredAnimate>
    </section>
  );
};

export default Hero;
