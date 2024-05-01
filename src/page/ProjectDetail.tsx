import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import projectsData from "../data/projects.json";
import { useEffect, useRef, useState } from "react";

type project = {
  id: string;
  name: string;
  img: string;
  desc: string;
  live: string;
  github: string;
  technologies: string[];
  goals: string[];
  first_highlight: string;
  first_highlight_src: string;
  first_highlight_src_img: string;
  first_highlight_src_alt: string;
  second_highlight: string;
  second_highlight_src: string;
  insights: string[];
};
const ProjectDetail = () => {
  const { id } = useParams();
  const [width, setWidth] = useState<number>(0);

  const projectData = projectsData.find((el: project) => el.id === id);

  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // grabbing the array length and multplying with 2 as we are duplicating the array and mapping it below
    // using nullish colaescing as width shouldnt be underfined, so if no values in projectData it will be set to 0
    setWidth(projectData?.technologies.length ?? 0 * 2);
  }, [width]);

  return (
    <main className="flex flex-col gap-10 max-w-4xl mx-auto px-4">
      <div className="flex justify-between ">
        <h1 className="text-4xl ">{projectData?.name}</h1>
        <div className="flex gap-2">
          <a href={projectData?.live} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-[#88fcca] dark:text-[#38BDF8] md:w-9 md:h-9 cursor-pointer"
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
          </a>

          <a href={projectData?.github} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-[#88fcca] dark:text-[#38BDF8] md:w-9 md:h-9 cursor-pointer"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
        </div>
      </div>

      <figure>
        <img src={`/${projectData?.img}`} alt={`${projectData?.name} image`} />
      </figure>

      <p className="text-justify">{projectData?.desc}</p>

      {/* Project Skills */}

      <h2 className="text-base md:text-3xl">Technologies Used</h2>
      <div className="overflow-hidden dark:bg-gray-800 bg-[#2F89F8] rounded-2xl p-4">
        {projectData?.technologies && (
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -(width * 64 + width * 56) }} //  multiplying with the image size and gap with total number of images
            transition={{ ease: "linear", duration: 4, repeat: Infinity }}
            ref={ref}
            className="flex gap-14"
          >
            {[...projectData?.technologies, ...projectData?.technologies]?.map(
              (el, index) => {
                return (
                  <img
                    key={index}
                    className="h-16 w-16 trans"
                    src={el}
                    alt={`logo`}
                  />
                );
              }
            )}
          </motion.div>
        )}
      </div>

      <div>
        <details>
          <summary className="dark:bg-gray-800 bg-[#2F89F8] p-4">Goals</summary>
          <div className="flex gap-4 flex-col my-4">
            {projectData?.goals?.map((goal, i) => {
              return (
                <p className="text-justify" key={i}>
                  {goal}
                </p>
              );
            })}
          </div>
        </details>
        <details>
          <summary className="dark:bg-gray-800 bg-[#2F89F8] p-4">
            Highlights
          </summary>
          <div className="flex gap-4 flex-col my-4">
            {projectData?.first_highlight && (
              <p className="text-justify">{projectData.first_highlight}</p>
            )}
            {projectData?.first_highlight_src && (
              <video autoPlay loop>
                <source
                  src={projectData.first_highlight_src}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
            {projectData?.first_highlight_src_img && (
              <img
                src={projectData.first_highlight_src_img}
                alt={projectData.first_highlight_src_alt}
                className="w-80 mx-auto"
              />
            )}
            {projectData?.second_highlight && (
              <p className="text-justify">{projectData.second_highlight}</p>
            )}
            {projectData?.second_highlight_src && (
              <video autoPlay loop>
                <source
                  src={projectData.second_highlight_src}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </details>
        <details>
          <summary className="dark:bg-gray-800 bg-[#2F89F8] p-4">
            Insights
          </summary>
          <div className="flex gap-4 flex-col my-4">
            {projectData?.insights?.map((insight, i) => {
              return (
                <p className="text-justify" key={i}>
                  {insight}
                </p>
              );
            })}
          </div>
        </details>
      </div>
    </main>
  );
};

export default ProjectDetail;
