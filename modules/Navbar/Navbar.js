import Link from "next/link";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      </ul>
    </nav>
  );
};

export default Navbar;
