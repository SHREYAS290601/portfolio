import { motion, AnimatePresence } from "motion/react";
const Alert = ({ type, text }) => {
  const alertVarient = {
    initial: { opacity: 0, y: -50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.9 },
  };
  return (
    <AnimatePresence>
    <motion.div
      className="fixed z-50 flex items-center justify-center bottom-5 right-5"
      variants={alertVarient}
      initial="initial"
      animate="animate"
      exit="exit" 
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className={`p-2 ${type === "danger" ? "bg-red-600" : "bg-royal"} items-center text-indigo-300 leading-none lg:rounded-full flex lg:inline-flex rounded-md p-5`}>
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-lavender"
          } uppercase px-2 py-1 text-xs font-semibold mr-3 `}
        >
          {type === "danger"
            ? "Failed"
            : "Success!"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
