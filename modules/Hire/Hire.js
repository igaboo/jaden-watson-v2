import { faCode, faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Hire.module.scss";

function Hire() {
  return (
    <section className={`container ${styles.container}`}>
      <h2>
        Do you need a <a className="underline">designer</a> or a{" "}
        <a className="code-inline">front-end developer? </a>
      </h2>
      <div className={styles.options}>
        <button className={styles.option}>
          <FontAwesomeIcon icon={faCompassDrafting} size="3x" />
          <p className="heavy">I need a designer</p>
        </button>
        <button className={styles.option}>
          <FontAwesomeIcon icon={faCode} size="3x" />
          <p className="heavy">I need a developer</p>
        </button>
      </div>
      <div className={styles.options}>
        <div className={styles.option}>
          <p>
            I conceptualize the website's look and feel from the ground up to
            ensure you and your users love every bit of it.
          </p>
          <hr />
          <p className="heavy">Accurate concepts</p>
          <p>
            being both the designer as well as the developer allows for seamless
            transitions between concept and reality - no surprises.
          </p>
          <hr />
          <p className="heavy">Unlimited customization</p>
          <p>
            no WordPress or Shopify templates here - you decide how your website
            will look.
          </p>
        </div>
        <div className={styles.option}>
          <p>
            I build fast, efficient, and scalable design systems to ensure that
            your website is future-proof.
          </p>
          <hr />
          <p className="heavy">User-focused designed</p>
          <p>
            websites should be intuitive, easy to learn, and enjoyable to use -
            bells and whistles are fun, but only when they don't get in the way.
          </p>
          <hr />
          <p className="heavy">Code that works everywhere</p>
          <p>
            using JavaScript, HTML, and CSS, your website will work on all major
            web browsers - whether it be on a mobile device, tablet, or
            computer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hire;
