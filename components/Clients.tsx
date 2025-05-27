import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
            Kind Words From
            <span className='text-blue-500'> Satisfed Clients</span>
        </h1>
        <div className='flex flex-col items-center md:mt-10'>
            

                 <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'
            
            />
         
         
        </div>
        
        
    </div>
  )
}

export default Clients