import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={`container ${styles.container}`}>
      <h2 className="code">About Me </h2>

      <div className={styles.grid}>
        <div className="item">
          <p className="paragraph">
            Hi! I'm Jaden. I'm currently a student at Sierra College, working
            towards achieving my AS-T degree in computer science, which will
            allow me to transfer to a CSU to obtain my bachelor's degree.
            <br />
            <br />
            My interest in web development sparked 3 years ago while taking
            graphic design courses at Sierra College. Originally, I wanted to
            practice logo design, and layout, but I ended up falling in love
            with HTML & CSS after taking a peek at a course on YouTube.
            <br />
            <br />
            Nowadays, I've put my full focus on web development. I'm currently
            practicing with React to create quick and responsive web apps, some
            of which you can view on my GitHub.
            <br />
            <br />
            The technologies I work with currently:
          </p>
          <div className={styles.cards}>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faJs} size="3x" />
              <p className="heavy">JavaScript</p>
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faReact} size="3x" />
              <p className="heavy">React.js v18</p>
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faNodeJs} size="3x" />
              <p className="heavy">Node.js v16</p>
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faHtml5} size="3x" />
              <p className="heavy">HTML5</p>
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faCss3} size="3x" />
              <p className="heavy">CSS3</p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="/hero.jpg" width={600} height={600} />
        </div>
      </div>
    </section>
  );
};

export default About;
