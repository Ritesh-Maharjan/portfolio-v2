import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StarProps {
  src: string;
}

const Star: React.FC<StarProps> = ({ src }) => {
  const [width, setWidth] = useState<number>(1000);
  const randomDuration = Math.floor(Math.random() * 10) + 10;
  const randomTop = Math.floor(Math.random() * 100);
  const randomDelay = Math.floor(Math.random() * 3);

  useEffect(() => {
    setWidth(screen.width);
  }, []);

  return (
    <motion.img
      src={src}
      alt="background image"
      className={`absolute top-full`}
      initial={{ x: -150 }}
      animate={{
        x: width,
        y: [0, 100, 0],
        transition: {
          duration: randomDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: randomDelay,
        },
      }}
      style={{ top: `${randomTop}vw` }}
    />
  );
};

export default Star;
