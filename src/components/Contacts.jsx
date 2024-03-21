const Contacts = () => {

    const email = 'saugatbhandari8@gmail.com'; 

  return (
    <>
      <div className="h-auto min-h-screen mt-12 lg:mt-0 p-2 md:p-20 lg:p-40 md:relative relative overflow-hidden" id="contact" data-aos="zoom-in" data-aos-duration="700">
        <div className="ml-4 mr-4 md:ml-16 lg:ml-16">
          <h1 className="text-[1.15rem] md:text-2xl font-semibold text-slate-100 ml-4 md:ml-10 lg:ml-16">
            <span className="text-emerald-400 font-mono font-normal">04. </span>
            Contacts{" "}
            <div className="h-[1px] bg-emerald-100 inline-block w-32 md:w-60 lg:w-80 mb-[0.4rem] ml-4 font-thin"></div>
          </h1>
        </div>
        <div className='flex justify-center items-center flex-col'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-black text-slate-200 h-16 mt-32'>Get In Touch</h2>
            <p className='text-sm font-normal text-slate-400 leading-6 text-center'>I’m currently looking for any new opportunities, so my inbox is <br />always open. Whether you have a question or just want to say hi, <br />I’ll try my best to get back to you!</p>
            <div className='mt-8 py-4'>
                <a href={`mailto:${email}`} className='border-2 h-16 text-emerald-400 border-emerald-400 px-5 py-1 hover:bg-emerald-400 hover:text-[#1B2430]'>Say Hello!</a>
            </div>
        </div>

        <div className='text-center mt-56 text-slate-400 font-mono text-sm'>
            <p> Designed & Built by Saugat Bhandari</p>
        </div>
      </div>
    </>
  )
}

export default Contacts;