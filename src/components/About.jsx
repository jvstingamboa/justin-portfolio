import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-end w-full h-full'>
            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                  <div>
                    <p className='sm:text-right text-4xl font-bold'>Hi. I'm Justin, nice to meet you. Please take a look around.</p>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fugiat dolorum doloremque rem consectetur esse, libero eum debitis nihil impedit! Eaque facere ea, quia deleniti quas quasi. Culpa, ullam sint?
                    </p>
                  </div>
                </div>
        </div>
    </div>
  )
}

export default About