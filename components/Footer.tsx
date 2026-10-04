import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
   <footer className='w-full pt-20 pb-10 z-0 no-scrollbar' id='contact'>
    <div className='w-full absolute left-0 -bottom-10 min-h-40'>
        <img src="/footer-grid.svg" alt="grid" className='w-full opacity-50'/>
    </div>

    <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
            Would you like to <span className='text-purple'>collaborate</span> on some projects?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
            Let&apos;s discuss some amazing ideas.
        </p>
        <a href="mailto:sbalvinder.fr@gmail.com">
            <MagicButton title={`Let's get in touch`} icon ={ <FaLocationArrow/>} position="right"/>
        </a>
    </div>

    <div className='flex mt-16 md:flex-row flex-col justify-center items-center'>
        <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile) => (
                <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-blac-200 rounded-lg border border-black-300'>
                    <a href={profile.link} target="_blank">
                    <img src={profile.img} alt={profile.img} width={20} height={20}/>
                    </a>
                </div>
            ))}
        </div>
    </div>
   </footer>
  )
}

export default Footer