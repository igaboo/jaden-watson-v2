import { motion } from "framer-motion";
import react from "react";

function Animate({ children }) {
  return (
    <>
      {react.Children.map(children, (element) => {
        return element.props.className === "anchor" ? (
          <>{element}</>
        ) : (
          <motion.div
            transition={{ type: "spring", duration: 1, bounce: 0.3 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.1, once: true }}
          >
            {element}
          </motion.div>
        );
      })}
    </>
  );
}

export default Animate;
