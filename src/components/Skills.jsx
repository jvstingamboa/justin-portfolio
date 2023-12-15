import React from 'react'
import HTML from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import ReactIcon from '../assets/react.png'
import Node from '../assets/node.png'
import Mongo from '../assets/mongo.png'
import CSS from '../assets/css.png';
import TypeScript from '../assets/ts_logo.png'


const Skills = () => {
  return (
    <div name ='skills' className='bg-[#0a192f] text-gray-300  h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Experience</p>
                <p className='py-4'>These are the technologies that I have recently been working with </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-4'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-2' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-2' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-2' src={TypeScript} alt="Javascript icon" />
                    <p className='my-4'>TypeScript</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-2' src={ReactIcon} alt="React icon" />
                    <p className='my-4'>React</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-2' src={Mongo} alt="HTML icon" />
                    <p className='my-4'>MongoDB</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-2' src={Node} alt="HTML icon" />
                    <p className='my-4'>Node</p>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Skills