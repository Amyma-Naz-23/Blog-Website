
import React from 'react'

export default function Authore() {
  return (
    <div className='bg-slate-200 shadow-lg rounded-lg p-6 mt-12'>
        <div className='flex items-center animation-fadeIn'>
            <img className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-black' src="/amy.jpeg" alt="Author Image" />
        </div>
        <h3 className='text-2xl font-bold'>Amyma Naz</h3>
        <p className='text-slate-500'>
            {" "}
            Bechelor of Arts | Web Developer {" "}
        </p>

        <p className='text-xl mt-4 text-black leading-relaxed'>
        I am <b>Amyma Naz</b>, currently a Bachelor’s student. I pursued my Intermediate studies with a focus on Computer Science, as I have always been passionate about technology and its applications. My curiosity and enthusiasm for computers motivated me to deepen my understanding of the field.
        <br />

Recently I had the privilege of passing the entrance test for a prestigious <b>Artificial Intelligence Web 3.0 and Metaverse.</b> offered at the Governor House which has allowed me to further explore the fascinating world of Artificial Intelligence. This course has been an incredible journey, equipping me with knowledge about cutting-edge technologies and inspiring me to contribute to this ever-evolving domain.
<br />
In addition to my academic pursuits, I am keen on learning new skills, staying updated with the latest advancements in tech, and applying my knowledge to solve real-world problems. I aim to make meaningful contributions to the tech community and build a career that merges my passion for innovation with impactful work.
        </p>
        <div className='mt-4 flex space-x-3 '>
            <a href="https://github.com/Amyma-Naz-23" className='px-4 text-white py-2 bg-black rounded-md hover:bg-red-800 transition duration-300'>
                GitHub
            </a>

            <a href="https://www.linkedin.com/in/amyma-naz-bb46a1238/" className='px-4 text-white py-2 bg-black rounded-md hover:bg-red-800 transition duration-300'>
                Linkedin
            </a>
        </div>

    </div>
  )
}

