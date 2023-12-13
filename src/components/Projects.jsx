import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <div className="h-[120vh] p-2 md:p-8 lg:p-16" id="projects">
        <div className="ml-4 mr-4 md:ml-10 lg:ml-16 mb-2">
          <h1 className="text-[1.15rem] md:text-2xl font-semibold text-slate-100 ml-4 md:ml-10 lg:ml-16">
            <span className="text-emerald-400 font-mono font-normal">03. </span>
            Projects{" "}
            <div className="h-[1px] bg-emerald-100 inline-block w-32 md:w-60 lg:w-80 mb-[0.4rem] ml-4 font-thin"></div>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center py-2 px-2 md:py-4 md:px-80 lg:relative mb-2 md:mb-8">
          <div className="relative group mb-2">
            <img src="./project-job-portal.png" alt="project-job-portal" className="object-cover w-72 h-56 lg:w-[32rem] lg:h-[20rem]" loading="lazy" />
            <div className="absolute inset-0 bg-emerald-900 opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>
          </div>
          <div>
            <div className="text-slate-200 text-base text-center md:text-2xl font-bold md:mb-4 md:text-right lg:absolute lg:top-16 lg:right-96"><a href="https://github.com/saugat23/Laravel-fullstack-job-portal" target="_blank" rel="noreferrer" className="hover:text-emerald-400 mb-2">Job Portal</a></div>
            <div className="md:mb-16 text-slate-400 text-sm lg:bg-[#18202b] md:py-6 md:px-12 lg:absolute lg:top-30 lg:right-96 py-2 px-2 break-words">A full stack Job Portal site built using Laravel, Alpine.js, TailwindCSS, MySQL which has authentication, pagination and many other features. Available on Github.</div>
            <nav className="py-2 px-2 mt-2 md:mt-32">
                <ul className="flex text-slate-400 font-mono text-xs space-x-4">
                    <li>VSCode </li>
                    <li>Laravel </li>
                    <li>Alpine.js </li>
                    <li>MySQL </li>
                    <li>TailwindCSS</li>
                </ul>
            </nav>
            <div className="lg:absolute lg:bottom-16 lg:right-96">
                <a href="https://github.com/saugat23/Laravel-fullstack-job-portal" target="_blank" rel="noreferrer"><AiOutlineGithub className="text-emerald-400 w-6 h-6 mt-2"/></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-around items-center py-2 px-2 md:py-4 md:px-80 lg:relative md:mb-8 mb-2">
          <div>
            <div className="text-slate-200 text-base text-center md:text-2xl font-bold md:mb-4 md:text-left lg:absolute lg:top-16 lg:left-90"><a href="https://github.com/saugat23/Laravel-book-review" target="_blank" rel="noreferrer" className="hover:text-emerald-400 mb-2">Book Review</a></div>
            <div className="md:mb-16 text-slate-400 text-sm md:bg-[#18202b] md:py-6 md:px-12 lg:absolute lg:top-30 lg:left-90 z-10 py-2 px-2 break-words">A full stack Book Review site built using Laravel, Alpine.js, TailwindCSS, MySQL which has pagination and many other features. Available on Github.</div>
            <nav className="py-2 px-2 mt-2 md:mt-32">
                <ul className="flex text-slate-400 font-mono text-xs space-x-4">
                    <li>VSCode </li>
                    <li>Laravel </li>
                    <li>Alpine.js </li>
                    <li>MySQL </li>
                    <li>TailwindCSS</li>
                </ul>
            </nav>
            <div className="lg:absolute lg:bottom-16 lg:left-90">
                <a href="https://github.com/saugat23/Laravel-book-review" target="_blank" rel="noreferrer"><AiOutlineGithub className="text-emerald-400 w-6 h-6 mt-2"/></a>
            </div>
          </div>
          <div className="relative group mb-2">
            <img src="./project-book-review.png" alt="project-book-review" className="object-cover w-72 h-56 lg:w-[32rem] lg:h-[20rem]" loading="lazy" />
            <div className="absolute inset-0 bg-emerald-900 opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
