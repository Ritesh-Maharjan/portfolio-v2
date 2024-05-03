import { useState, FormEvent } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import { changeRightCity } from "../redux/features/citySlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [themeMode, setThemeMode] = useState("dark");
  const [isActive, setIsActive] = useState(false);
  const [city, setCity] = useState("");

  // using dispatch for our popup
  const dispatch = useDispatch();

  const menuSlide = {
    initial: { x: "calc(100% + 100px)" },

    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },

    exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const slide = {
    initial: { x: 120 },

    enter: (i: number) => ({
      x: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
  };
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;

  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },

    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },

    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity("");
    dispatch(changeRightCity(city));
  };

  const changeTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setThemeMode("dark");
    } else {
      setThemeMode("");
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <header className="h-20 sticky top-0 p-4 flex items-center justify-between z-40">
      <figure className="h-full bg-white dark:bg-white rounded-full p-2">
        <Link to="/">
          <img
            className="h-full"
            src="/logo.svg"
            alt="My logo with my initials"
          />
        </Link>
      </figure>

      <div
        className="cursor-pointer fixed flex z-30 gap-2 flex-col right-5 top-5"
        onClick={() => setIsActive(!isActive)}
      >
        <div
          className={`h-1 w-9 ${
            isActive ? "rotate-45 origin-top-left" : ""
          } bg-black dark:bg-blue-500 bg-blend-darken relative transition-transform duration-300`}
        ></div>
        <div
          className={`h-1 ${
            isActive ? "w-0" : "w-9"
          } bg-black dark:bg-blue-500 bg-blend-darken relative transition-all duration-1 00`}
        ></div>

        <div
          className={`h-1 w-9 ${
            isActive ? "-rotate-45 origin-bottom-left" : ""
          } bg-black dark:bg-blue-500 bg-blend-darken relative transition-transform duration-300`}
        ></div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuSlide}
            key="menuSlide"
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-screen w-80 fixed right-0 top-0 bg-gray-700 text-white"
          >
            <nav className="h-full w-full">
              <ul className="flex flex-col p-4 items-center justify-center h-full w-full gap-4">
                <form onSubmit={handleSubmit} className="relative">
                  <input
                    className="h-full p-2 pr-10 w-full bg-black"
                    type="text"
                    placeholder="Enter city"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  />
                  <button
                    type="submit"
                    className="absolute top-1/2 -translate-y-1/2 right-2 h-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="rgb(59 130 246 / var(--tw-bg-opacity)"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M21 12a9 9 0 1 0 -9 9" />
                      <path d="M3.6 9h16.8" />
                      <path d="M3.6 15h7.9" />
                      <path d="M11.5 3a17 17 0 0 0 0 18" />
                      <path d="M12.5 3a16.984 16.984 0 0 1 2.574 8.62" />
                      <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M20.2 20.2l1.8 1.8" />
                    </svg>
                  </button>
                </form>
                <motion.li
                  custom={0}
                  variants={slide}
                  initial="initial"
                  animate="enter"
                >
                  <HashLink to="/#projects">Projects</HashLink>
                </motion.li>
                <motion.li
                  custom={1}
                  variants={slide}
                  initial="initial"
                  animate="enter"
                >
                  <HashLink to="/#about">About</HashLink>
                </motion.li>
                <motion.li
                  custom={2}
                  variants={slide}
                  initial="initial"
                  animate="enter"
                >
                  <HashLink to="/#contact">Contact</HashLink>
                </motion.li>
                <motion.li
                  custom={3}
                  variants={slide}
                  initial="initial"
                  animate="enter"
                >
                  {themeMode === "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => changeTheme("")}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => changeTheme("dark")}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                        className="bg-black"
                      />
                    </svg>
                  )}
                </motion.li>
              </ul>
            </nav>
            <svg className="absolute top-0 w-[100px] -left-[100px] h-full fill-gray-700 ">
              <motion.path
                variants={curve}
                initial="initial"
                animate="enter"
                exit="exit"
              ></motion.path>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
