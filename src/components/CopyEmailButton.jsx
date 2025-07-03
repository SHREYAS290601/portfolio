import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "shreyas290601@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <AnimatePresence mode="wait">
      <motion.button
        className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={copyToClipboard}
      >
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            key={"copied"}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src="assets/copy-done.svg"
              alt="copied email"
              className="w-5"
            />
            Email copied!
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key={"copy"}
            whileTap={{ scale: 1.5 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img src="assets/copy.svg" className="w-5" alt="copy email" />
            Copy Email Address
          </motion.p>
        )}
      </motion.button>
    </AnimatePresence>
  );
};

export default CopyEmailButton;
// This component creates a button that copies the email address to the clipboard when clicked.
