import {
  faBars,
  faListSquares,
  faMessage,
  faMoneyBill,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useReducer } from "react";

import Dropdown from "../../components/Dropdown/react-dropdown";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isOpen, toggleIsOpen] = useReducer((state) => {
    return !state;
  }, true);

  return (
    <nav className={styles.container}>
      <button onClick={handleScrollToTop} className="hero"></button>
      <ul>
        <li>
          <h5>
            <Link href="/#about" scroll={false}>
              About
            </Link>
          </h5>
        </li>
        <li>
          <h5>
            <Link href="/#projects" scroll={false}>
              Projects
            </Link>
          </h5>
        </li>

        <li>
          <h5>
            <Link href="/#hire" scroll={false}>
              Hire
            </Link>
          </h5>
        </li>
        <li>
          <h5>
            <Link href="/#contact" scroll={false}>
              Contact
            </Link>
          </h5>
        </li>
        <li>
          <h5>
            <Dropdown
              isOpen={isOpen}
              toggleIsOpen={toggleIsOpen}
              icon={faBars}
              buttons={[
                {
                  icon: faQuestion,
                  text: "About",
                },
                {
                  icon: faListSquares,
                  text: "Projects",
                },
                {
                  icon: faMoneyBill,
                  text: "Hire",
                },
                {
                  icon: faMessage,
                  text: "Contact",
                },
              ]}
              position="top-right"
            ></Dropdown>
          </h5>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
