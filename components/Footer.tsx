import { footer } from 'motion/react-client'
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] pb-10 md:mb-5' id='contact'>

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Wanna Tag Me Into The <span className='text-blue-500'>Ocean of Knowlodge</span> With You 
            </h1>
            <p className='text-white-100 md:mt-10 my-5 text-center '>Reach out to me today and let&apos;s discuss how I can help you with your query</p>
             <a href="mailto:protham.dey@gmail.com">
                <MagicButton 
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position='right'
                />
             </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between space-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Protham</p>

            <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile) => (
    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
        <img src={profile.img} alt={profile.img} width={20} height={20}/>
    </div>
))}
            </div>
        </div>
    </footer>
  )
}

export default Footer