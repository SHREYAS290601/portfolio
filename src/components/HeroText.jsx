import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
const HeroText = () => {
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }
    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            <div className="flex-col hidden md:flex c-space">
                <motion.h1 className="text-4xl font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.8 }}
                >Hello I'm Shreyas</motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p className="text-5xl font-medium text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 }}
                    >I'm a nerd, who likes </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2, type: "spring", stiffness: 100, damping: 10 }}
                    >
                        <FlipWords
                            words={["ML", "AI", "DS"]}
                            className="text-8xl font-black text-green-300" />
                    </motion.div>
                    <motion.p
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.4 }}
                        className="text-3xl font-medium text-green-200">In neurons I trust</motion.p>
                </div>
            </div>
            <div className="flex flex-col space-y-6 md:hidden">
                <motion.p
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.8 }}
                    className="text-4xl font-medium">Hello, I'm Shreyas</motion.p>
                <div>
                    <motion.p
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 }}
                        className="text-5xl font-black text-neutral-300">Building</motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2, type: "spring", stiffness: 100, damping: 10 }}
                    >
                        <FlipWords
                            words={["ML", "AI"]}
                            className="text-6xl font-bold text-green-300" />
                    </motion.div>
                    <motion.p
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.4 }}
                        className="text-4xl font-black text-green-200 ml-[-20px]">Stuff</motion.p>
                </div>
            </div>

        </div>
    )
}

export default HeroText;
