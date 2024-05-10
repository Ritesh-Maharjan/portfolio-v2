import projectsData from "../data/projects.json";
import { Link } from "react-router-dom";

const Project = () => {
  const projects = projectsData;
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center relative"
    >
      <div>
        {projects.map((project, index) => {
          return (
            <div
              className="h-screen  sticky flex items-center pointer-events-none"
              key={index}
              style={{ top: `calc(-5vh + ${index * 18}px)` }}
            >
              {index === 0 && (
                <h2
                  className={`text-2xl absolute md:text-5xl text-center left-0 right-0 media-height`}
                >
                  My Projects
                </h2>
              )}
              <div
                className={`flex flex-col md:flex-row gap-4 h-80 max-w-5xl ${
                  index % 2 === 0
                    ? "bg-[#e3e1e1] text-[#0F172A]"
                    : "bg-black text-white dark:text-current"
                } p-4 md:p-14 rounded-3xl mx-4 pointer-events-auto`}
              >
                <figure className="relative flex-1 rounded-xl overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute top-0 h-full w-full bg-black flex items-center justify-center opacity-0 hover:opacity-80">
                    <button className="bg-white px-2 py-1 rounded-lg hover:scale-110">
                      More Info
                    </button>
                  </div>
                </figure>
                <div className="flex-1 grid gap-4">
                  <div className="flex justify-between items-center">
                    <h2
                      className={`text-xl md:text-4xl py-2 ${
                        index % 2 === 0
                          ? "dark:text-black text-black"
                          : "dark:text-white text-white"
                      }`}
                    >
                      {project.name}
                    </h2>
                    <div className="flex gap-2">
                      <a href={project.live} target="_blank">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 md:w-9 md:h-9"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M20.94 13.045a9 9 0 1 0 -8.953 7.955" />
                            <path d="M3.6 9h16.8" />
                            <path d="M3.6 15h9.4" />
                            <path d="M11.5 3a17 17 0 0 0 0 18" />
                            <path d="M12.5 3a16.991 16.991 0 0 1 2.529 10.294" />
                            <path d="M16 22l5 -5" />
                            <path d="M21 21.5v-4.5h-4.5" />
                          </svg>
                        </span>
                      </a>
                      <Link to={`/project/${project.id}`}>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 md:w-9 md:h-9"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12z" />
                            <path d="M3 13h18" />
                            <path d="M8 21h8" />
                            <path d="M10 17l-.5 4" />
                            <path d="M14 17l.5 4" />
                          </svg>
                        </span>
                      </Link>
                      <a href={project.github} target="_blank">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 md:w-9 md:h-9"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                          </svg>
                        </span>
                      </a>
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
