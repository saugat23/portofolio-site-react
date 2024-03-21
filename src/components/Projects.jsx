import { AiOutlineGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <div className="h-auto min-h-screen mt-4 lg:mt-0 p-2 md:p-8 lg:p-16 overflow-hidden" id="projects" data-aos="zoom-in" data-aos-duration="700">
        <div className="ml-4 mr-4 md:ml-10 lg:ml-16 mb-2">
          <h1 className="text-[1.15rem] md:text-2xl font-semibold text-slate-100 ml-4 md:ml-10 lg:ml-16">
            <span className="text-emerald-400 font-mono font-normal">03. </span>
            Projects{" "}
            <div className="h-[1px] bg-emerald-100 inline-block w-32 md:w-60 lg:w-80 mb-[0.4rem] ml-4 font-thin"></div>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center py-2 px-2 w-[90%] lg:w-[70%] mx-auto h-auto mt-6 space-y-4 lg:space-y-0">
          <div className="relative group mb-2 w-full lg:w-1/2">
            <img src="./project-job-portal.png" alt="project-job-portal" className="bg-cover object-cover w-full h-full" loading="lazy" />
            <div className="absolute inset-0 bg-emerald-900 opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>
          </div>
          <div className="self-start w-full lg:w-1/2 flex flex-col justify-around space-y-4">
            <div className="text-slate-200 text-base text-center lg:text-2xl font-bold lg:mb-4 lg:text-right w-full"><a href="https://github.com/saugat23/Laravel-fullstack-job-portal" target="_blank" rel="noreferrer" className="hover:text-emerald-400 mb-2">Job Portal</a></div>
            <div className="text-slate-400 text-xs md:text-sm py-4 text-center lg:text-right break-words w-full">A full stack Job Portal site built using Laravel, Alpine.js, Tailwind CSS, MySQL which has authentication, pagination and many other features. Available on Github.</div>
            <nav className="py-2 mt-2">
                <ul className="flex text-slate-400 font-sans text-xs space-x-2 md:space-x-4 justify-center lg:justify-end items-center">
                    <li>VSCode </li>
                    <li>Laravel </li>
                    <li>Alpine.js </li>
                    <li>MySQL </li>
                    <li>TailwindCSS</li>
                </ul>
            </nav>
            <div className="flex justify-center lg:justify-end items-center">
                <a href="https://github.com/saugat23/Laravel-fullstack-job-portal" target="_blank" rel="noreferrer"><AiOutlineGithub className="text-emerald-400 w-6 h-6 mt-2"/></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-around items-center py-2 px-2 lg:w-[70%] w-[90%] mx-auto h-auto mt-6 space-y-4 lg:space-y-0">
          <div className="self-start w-full lg:w-1/2 flex flex-col justify-around space-y-4 mt-6 lg:mt-0">
            <div className="text-slate-200 text-base text-center lg:text-2xl font-bold lg:mb-4 lg:text-left w-full"><a href="https://github.com/saugat23/Laravel-book-review" target="_blank" rel="noreferrer" className="hover:text-emerald-400 mb-2">Book Review</a></div>
            <div className="text-slate-400 text-sm py-4 text-center lg:text-left break-words w-full">A full stack Book Review site built using Laravel, Alpine.js, TailwindCSS, MySQL which has pagination and many other features. Available on Github.</div>
            <nav className="py-2 mt-2">
                <ul className="flex text-slate-400 font-sans text-xs space-x-2 md:space-x-4 justify-center lg:justify-start items-center">
                    <li>VSCode </li>
                    <li>Laravel </li>
                    <li>Alpine.js </li>
                    <li>MySQL </li>
                    <li>TailwindCSS</li>
                </ul>
            </nav>
            <div className="flex justify-center lg:justify-start items-center">
                <a href="https://github.com/saugat23/Laravel-book-review" target="_blank" rel="noreferrer"><AiOutlineGithub className="text-emerald-400 w-6 h-6 mt-2"/></a>
            </div>
          </div>
          <div className="relative group mb-2 w-full lg:w-1/2">
            <img src="./project-book-review.png" alt="project-book-review" className="bg-cover object-cover w-full h-full" loading="lazy" />
            <div className="absolute inset-0 bg-emerald-900 opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
