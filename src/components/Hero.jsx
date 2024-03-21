import { FiGithub, FiInstagram, FiTwitter, FiLinkedin, FiFacebook} from 'react-icons/fi';

const Hero = () => {
  return (
    <>
        <div className='flex flex-row w-full h-auto lg:h-screen min-h-screen font-mono overflow-hidden' id='home' data-aos="fade-up" data-aos-duration="100">
            <ul className='ml-12 self-end justify-self-start fixed bottom-24 left-0 hidden md:block lg:block z-20' aria-orientation='left'>
                <li className='mb-8'><a href="https://github.com/saugat23" target='_blank' rel="noreferrer"><i className='text-white text-[1.5rem] hover:text-emerald-400'><FiGithub /></i></a></li>
                <li className='mb-8'><a href="https://www.instagram.com/saugatbhandari23/" target='_blank' rel="noreferrer"><i className='text-white text-[1.5rem] hover:text-emerald-400'><FiInstagram /></i></a></li>
                <li className='mb-8'><a href="https://twitter.com/Saugat120" target='_blank' rel="noreferrer"><i className="text-white text-[1.5rem] hover:text-emerald-400"><FiTwitter /></i></a></li>
                <li className='mb-8'><a href="https://www.linkedin.com/in/saugat-bhandari-a6a9b2143/" target='_blank' rel="noreferrer"><i className="text-white text-[1.5rem] hover:text-emerald-400"><FiLinkedin /></i></a></li>
                <li className='mb-8'><a href="https://www.facebook.com/saugatbhandari23" target='_blank' rel="noreferrer"><i className="text-white text-[1.5rem] hover:text-emerald-400"><FiFacebook /></i></a></li>
            </ul>
            <div className='text-left justify-self-start mt-32 ml-10 mr-10 md:ml-32 lg:ml-48'>
                <p className='text-emerald-400 text-center md:text-left md:mb-2 lg:mb-4'>Hi, my name is </p>
                <h2 className='text-[1.65rem] md:text-5xl lg:text-7xl text-center md:text-left text-slate-200 font-sans font-semibold mb-4 md:h-16 lg:h-24'>Saugat Bhandari.</h2>
                <h4 className='text-xl md:text-4xl lg:text-[3.5rem] text-center md:text-left text-neutral-400 font-sans font-semibold mb-4 md:h-16 lg:h-24'>Passionate, Creative, Innovative.</h4>
                <p className='md:text-left text-neutral-400 font-sans font-semibold text-sm mb-8 text-center'>I&apos;m a web developer possessing a diverse skillset, including proficiency <br /> in programming languages and tools, a passion for problem-solving, <br /> and creativity in design. Currently looking for Opportunities. Previously focused at <a href="http://www.neutrosys.com/" target='_blank' className='text-emerald-400 hover:decoration-emerald-400 hover:underline' rel="noreferrer">Neutrosys.</a></p>
                <a href="https://github.com/saugat23" target='_blank' rel="noreferrer" className='text-sm md:text-xl lg:text-2xl'><button className='border-2 border-emerald-400 md:px-5 py-1 px-2 hover:bg-emerald-400 hover:text-[#1B2430] text-emerald-400'>Check out my projects</button></a>
            </div>
            <div className='self-end justify-self-end mr-12 fixed bottom-24 right-0 hidden md:block lg:block z-20' aria-orientation='right'>
                <p className='makeitvertical text-white hover:text-emerald-400'>saugatbhandari8@gmail.com</p>
            </div>
        </div>
    </>
  )
}

export default Hero