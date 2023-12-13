import React from "react";

const Experience = () => {
  return (
    <>
      <div className="h-screen p-2 md:p-10 lg:p-20" id="experience">
        <div className="ml-4 mr-4 md:ml-10 lg:ml-16">
          <h1 className="text-[1.15rem] md:text-2xl font-semibold text-slate-100 ml-4 md:ml-10 lg:ml-16">
            <span className="text-emerald-400 font-mono font-normal">02. </span>
            Experience{" "}
            <div className="h-[1px] bg-emerald-100 inline-block w-32 md:w-60 lg:w-80 mb-[0.4rem] ml-4 font-thin"></div>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 items-center justify-around py-2 px-4 md:py-6 md:px-12 lg:py-12 lg:px-44 mt-4">
          <div className="text-sm text-emerald-400 font-semibold self-center md:self-start mt-1 hover:underline">
            NEUTROLINE
          </div>
          <div>
            <div className="text-base md:text-lg font-semibold text-slate-200 mb-2">
              Full Stack PHP Developer{" "}
              <a
                href="https://neutroline.com"
                className="text-emerald-400 hover:underline"
              >
                @ Neutroline
              </a>
            </div>
            <div className="text-sm font-medium text-slate-400 font-mono mb-4">
              March 2023 - August 2023
            </div>
            <nav>
              <ul className="list-none">
                <li className='text-sm text-slate-400 leading-6 before:content-["▹"] before:text-emerald-400 before:mr-4'>
                  Implemented full stack Request Document Section on the
                  employer site of the website <br /> where employers can
                  request for the Documents they need from the organization.
                </li>
                <li className='text-sm text-slate-400 leading-6 before:content-["▹"] before:text-emerald-400 before:mr-4'>
                  Implemented Full Stack Create Project and Create Company Form
                  pages to enable the <br /> admin of the site to initialize products
                  and enable companies to register themselves in <br /> the admin site
                  of the webpage.
                </li>
                <li className='text-sm text-slate-400 leading-6 before:content-["▹"] before:text-emerald-400 before:mr-4'>Designed various web as well RESTFUL APIs to help in the operation of these <br /> full stack projects.</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
