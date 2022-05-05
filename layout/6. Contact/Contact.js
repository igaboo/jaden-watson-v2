import Animate from "../wrappers/Animate";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <section className={`container ${styles.container}`}>
      <Animate>
        <h2 className="code">Let's Get In Touch </h2>
        <p>
          I check my inbox every day, so I should be able to respond within the
          next day. I look forward to hearing from you!
        </p>
        <a href="mailto: jadenwatsond@gmail.com">
          <button>jadenwatsond@gmail.com</button>
        </a>
      </Animate>
    </section>
  );
}

export default Contact;
