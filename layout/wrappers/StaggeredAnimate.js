import { motion } from "framer-motion";
import react from "react";

function StaggeredAnimate({ children }) {
  return (
    <>
      {react.Children.map(children, (element, index) => {
        const delay = index === 0 ? 0.1 : index / 10 + 0.1;

        return (
          <motion.div
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.3,
              delay,
            }}
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.3, once: true }}
          >
            {element}
          </motion.div>
        );
      })}
    </>
  );
}

export default StaggeredAnimate;
