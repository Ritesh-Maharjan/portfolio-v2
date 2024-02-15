import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import JibberishAnimation from "./Jibberish";

const HeroSection = () => {
  // Tagline for my hero
  const myDesc = [
    ["Hello", " My name", "is Ritesh"],
    ["Full Stack", "Developer"],
    ["Passionate", "about", "innovation"],
    ["Code", "Dota", "Repeat"],
  ];

  //   Displaying one setence only
  const [sentence, setSentence] = useState(myDesc[0]);
  //   keepig track/changing the sentence
  const [index, setIndex] = useState(1);
  // to make sure the words is changing when moving to different sentence
  const [animationKey, setAnimationKey] = useState(0);

  //  sentences animation i.e. hiding for 1 sec
  const childVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  // to change sentences
  const changeIndex = () => {
    if (index === myDesc.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  // where our text gets changed every 5 sec.
  //   Using settimeout cause it runs after every index change
  useEffect(() => {
    setTimeout(() => {
      setSentence(myDesc[index]);
      changeIndex();
      setAnimationKey((prevState) => prevState + 1);
    }, 5000);
  }, [index]);

  return (
    <div
      key={animationKey}
      className="min-h-screen mx-auto flex flex-col gap-8 items-center justify-center max-w-screen-lg relative -mt-20"
    >
      {sentence.map((words, i) => {
        return (
          // container of each words divided array
          <div className="flex" key={i}>
            {words.split("").map((el, j) => (
              <motion.div key={j} variants={childVariants}>
                <JibberishAnimation targetedLetter={el} length={i} />
              </motion.div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default HeroSection;
