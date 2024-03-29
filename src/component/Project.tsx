import { motion, useScroll } from "framer-motion";
import ecoImg from "../assets/eco.png";
import jobHuntImg from "../assets/jobhunt.png";
import mvDBImg from "../assets/mvdb.png";
import { useEffect, useRef, useState } from "react";

const Project = () => {
  const projectContainer = useRef(null);
  const [isSticky, setIsSticky] = useState(true);
  const projects = [
    {
      name: "MvDB",
      img: mvDBImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam vero impedit dolor fugiat reiciendis. Accusamus id quas ratione, temporibus odio obcaecati recusandae voluptatum quisquam inventore sunt harum eos molestiae?",
    },
    {
      name: "Ecommerce Nepal",
      img: ecoImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam vero impedit dolor fugiat reiciendis. Accusamus id quas ratione, temporibus odio obcaecati recusandae voluptatum quisquam inventore sunt harum eos molestiae?",
    },
    {
      name: "Job hunt",
      img: jobHuntImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam vero impedit dolor fugiat reiciendis. Accusamus id quas ratione, temporibus odio obcaecati recusandae voluptatum quisquam inventore sunt harum eos molestiae?",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: projectContainer,
    offset: ["start start", "end end"],
  });

  // to make the heading stick disappear after reaching the end of the container
  useEffect(() => {
    const updateStickyState = () => {
      // Update isSticky state based on scrollYProgress value
      if (scrollYProgress.get() < 1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    // Attach the function to scroll event
    const unsubscribe = scrollYProgress.onChange(updateStickyState);
    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <div
      ref={projectContainer}
      className="flex flex-col items-center justify-center relative"
    >
      <motion.h1
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
        }}
        className={`text-4xl ${isSticky ? "sticky" : "static"}  top-10`}
      >
        My Projects
      </motion.h1>
      <div>
        {projects.map((project, index) => {
          const decreasingMargin = 8 * (projects.length - index);
          return (
            <div
              className="h-screen sticky top-0 flex items-center pointer-events-none"
              key={index}
              style={{ top: `-${decreasingMargin}px` }}
            >
              <div
                className={`flex flex-col md:flex-row gap-4 max-w-5xl ${
                  index % 2 === 0 ? "bg-white" : "bg-black"
                } p-14 rounded-3xl mx-4 pointer-events-auto`}
              >
                <figure className="relative rounded-2xl overflow-hidden">
                  <img src={project.img} alt={project.name} />
                  <div className="absolute top-0 h-full w-full bg-black flex items-center justify-center opacity-0 hover:opacity-80">
                    <button className="bg-white px-2 py-1 rounded-lg hover:scale-110">More Info</button>
                  </div>
                </figure>
                <div className="grid gap-4">
                  <div className="flex flex-col md:flex-row md:justify-between items-center">
                    <h2 className="text-2xl py-2">{project.name}</h2>
                    <div className="flex gap-4 ">
                      <button className="bg-accentColor px-2 py-1 rounded-lg text-white text-sm h-fit md:text-lg hover:scale-110 ">
                        More Info
                      </button>
                      <button className="bg-[#3D9EEE] px-2 py-1 rounded-lg text-white text-sm h-fit md:text-lg hover:scale-110">
                        More Info
                      </button>
                    </div>
                  </div>
                  <p>{project.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
