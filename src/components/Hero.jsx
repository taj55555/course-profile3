import React from 'react'
import hero from '../assets/hero.jpg'
import SideBar from './SideBar'

const Hero = () => {
  return (
    <section className=''>
        <div className=' relative w-full h-[400px]'>
          <img src={hero} alt="" className=' opacity-90 shadow-xl shadow-black object-cover w-full h-[400px] md:h-[500px] border-b-2 border-[#ECB246] z-[200]' />
          <div className=' h-[30px] w-full bg-[#ECB246] shadow-lg z-[-100]'></div>

          <div className=' absolute top-[100px] md:top-[150px] left-[40px] md:left-[20px] md:flex'>
            <SideBar/>
          </div>
        </div>


        
    </section>
  )
}

export default Hero
