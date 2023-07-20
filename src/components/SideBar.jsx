import React from 'react'

const SideBar = () => {
  return (
    <section>
      <div className=" text-white md:fixed bg-[#050505a8] p-[8px]">
        <div className=' order-2'>
            <h2 className=' text-[1.5rem] font-bold mb-5'>Open Connect</h2>
        </div>
       
        <div className=' order-1 md:p-[10px]'>
            <h3 className=' text-[16px] font-bold border-l-2 border-[#ECB246] pl-1'>Home</h3>
            <ul className='mt-[20px] text-[#ECB246] flex flex-col gap-4 text-[12px] font-bold'>
                <li className='cursor-pointer hover:border-l-2 border-[#ECB246] pl-1'>WELCOME TO OPEN CONNECT></li>
                <li className='cursor-pointer hover:border-l-2 border-[#ECB246] pl-1'>WHAT IS OPEN CONNECT?></li>
                <li className='cursor-pointer hover:border-l-2 border-[#ECB246] pl-1'>HOW TO GET STARTED></li>
                <li className='cursor-pointer hover:border-l-2 border-[#ECB246] pl-1'>SAMPLE ARCHITECTURES></li>
                <li className='cursor-pointer hover:border-l-2 border-[#ECB246] pl-1'>WHAT’S HERE?></li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default SideBar
