import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai';

const About = () => {
  return (
    <>
        <div className='h-screen p-2 md:p-10 lg:p-20' id='about'>
            <div className='ml-4 mr-4 md:ml-10 lg:ml-16'><h1 className='text-[1.15rem] md:text-2xl font-semibold text-slate-100 ml-4 md:ml-10 lg:ml-16'><span className='text-emerald-400 font-mono font-normal'>01. </span>About Me <div className='h-[1px] bg-emerald-100 inline-block w-32 md:w-60 lg:w-80 mb-[0.4rem] ml-4 font-thin'></div></h1></div>
            <div className='flex flex-col space-y-8 md:flex-row items-center justify-center py-6 lg:py-12 px-8 lg:px-24'>
                <div className='text-sm md:text-md lg:text-lg text-slate-300 font-mono'>Hello! My name is Saugat. Welcome to my portfolio site! I&apos;m a web<br /> developer with a passion for creating dynamic user-friendly websites<br /> using the latest tools and technologies. With expertise in <br />programming languages such as HTML, CSS, and JavaScript, I design and develop online solutions that engage and delight users. <br /><br /> Fast forward to day, i'm currently working at <a href="http://www.neutrosys.com/" className='text-emerald-400' target='_blank' rel="noreferrer"> Neutrosys.</a> Checkout my projects <a href="https://github.com/saugat23" className='text-emerald-400' target='_blank' rel="noreferrer">here.</a> <br /> Browse my work and let&apos;s collaborate on your next project! <br /><br /> Here are the some of the technologies i've been working on : 
                    <div className='flex items-center justify-around mt-4'>
                        <div>
                            <p><i><AiFillCaretRight className='inline'/></i> Javscript</p>
                            <p><i><AiFillCaretRight className='inline'/></i> React.js + Next.js</p>
                            <p><i><AiFillCaretRight className='inline'/></i> Node</p>
                        </div>
                        <div>
                            <p><i><AiFillCaretRight className='inline'/></i> PHP</p>
                            <p><i><AiFillCaretRight className='inline'/></i> Laravel</p>
                            <p><i><AiFillCaretRight className='inline'/></i> Mysql</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 ml-2 h-[16rem]'><img src="./photo.jpg" alt="photo" className='h-[14rem] w-[14rem] bg-center bg-cover' loading='lazy' /></div>
            </div>
        </div>
    </>
  )
}

export default About