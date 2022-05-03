import styles from "./Projects.module.scss";

import Alert from "../../components/Alert/Alert";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Notely",
    description:
      "Notely is a notes app built with React.js. With a focus on students, Notely allows you to organize your notes into courses. You can also create tags to easily sort through and find notes.",
    tags: ["REACTJS", "FIREBASE", "CRUD", "HTML", "SCSS"],
    image: "/notely.png",
  },
  {
    title: "dropdown-component",
    description:
      "dropdown-component is a React component I built to simplify my drop down menus. It utilizes hooks to allow for unlimited menus, all with custom buttons, icons, and colors.",
    tags: ["REACTJS", "COMPONENTS", "SCSS"],
    image: "/dropdown.png",
  },
];

const smallProjects = [
  {
    title: "Hangman Game",
    description: "A simple hangman game written with plain JavaScript.",
    tags: ["JAVASCRIPT", "HTML", "CSS"],
  },
  {
    title: "Poker Hand Statistics",
    description: "A JavaScript program that generates card hands.",
    tags: ["JAVASCRIPT", "CSS", "HTML"],
  },
  {
    title: "Baking Buddy",
    description: "A digital cooking book for organizing your recipes.",
    tags: ["NEXTJS", "REACTJS", "CRUD", "SCSS", "FIREBASE"],
  },
];

const Projects = () => {
  return (
    <section className={`container ${styles.container}`}>
      <h2 className="code">Featured Projects </h2>
      {projects.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
      <h3> Smaller Projects </h3>
      <div className={styles.smallProjectContainer}>
        {smallProjects.map((project, index) => {
          return <SmallProject key={index} project={project} />;
        })}
      </div>
      <Alert
        icon={faGithub}
        text={
          <p>
            Check out the rest of my projects on my{" "}
            <a href="https://github.com/igaboo">GitHub</a> profile
          </p>
        }
      />
    </section>
  );
};

const Project = ({ project }) => {
  return (
    <div className={styles.projectContainer}>
      <div>
        <header>
          <h4>{project.title}</h4>
          <button className="icon">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </button>
          <button className="icon">
            <FontAwesomeIcon icon={faLink} size="2x" />
          </button>
        </header>

        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag, index) => {
            return <code key={index}>{tag}</code>;
          })}
        </div>
      </div>
      <div className={styles.card}>
        <img src={project.image} />
      </div>
    </div>
  );
};

const SmallProject = ({ project }) => {
  return (
    <div className={styles.card}>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <div className={styles.tags}>
        {project.tags.map((tag, index) => {
          return <code key={index}>{tag}</code>;
        })}
      </div>
    </div>
  );
};

export default Projects;
