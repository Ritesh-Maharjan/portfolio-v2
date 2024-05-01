import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const JibberishAnimation: React.FC<{
  targetedLetter: string;
  length: number;
}> = ({ targetedLetter, length }) => {
  const [jibberishText, setJibberishText] = useState("");
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  useEffect(() => {
    let intervalId = setInterval(() => {
      setJibberishText(generateRandomLetter());
    }, 100);
    // Clearing this interval after 2 sec when the aniamtion is completed and we get our final text;
    setTimeout(() => {
      clearInterval(intervalId);
    }, 2000 + length * 1000 - 200);
  }, []);

  const onAnimationComplete = () => {
    setJibberishText(targetedLetter);
  };

  function generateRandomLetter() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+=`12344567890";
    return characters[Math.floor(Math.random() * characters.length)];
  }

  return (
    <>
      {targetedLetter !== " " ? (
        <motion.h1
          initial="initial"
          animate="animate"
          variants={variants}
          onAnimationComplete={onAnimationComplete}
          transition={{ duration: 2 + length }}
          className="text-xl uppercase sm:text-2xl md:text-3xl lg:text-4xl border-2 dark:text-white text-black border-black dark:border-white p-2 md:p-6"
        >
          {jibberishText}
        </motion.h1>
      ) : (
        <h1 className="mx-3"></h1>
      )}
    </>
  );
};

export default JibberishAnimation;
