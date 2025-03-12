import React from 'react'
import { assets } from '../assets/assets'
import Footer from '../componts/Footer'

 const Result = () => {
  return (
   
      // <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'> 
      // <div className='bg-white rounded-lg px-2 py-2 drop-shadow-sm'>
      //   {/* ---Image Contaioner--- */}
      //   <div className='flex flex-col sm:grid-cols-2 gap-5'>
      //     {/* left side */}
      //     <div>
      //       <p className='font-semibold text-gray-600 mb-2'>Original</p>
      //       <img className='rounded-3xl border' src={assets.girl1}/>
      //     </div>
      //     {/* --Right side--- */}
      //     <div className='flex flex-col'>  
      //       <p className='font-semibold text-gray-600 mb-2'>Background Removed</p>
      //       <div className='rounded-md border border-gray-50 relative bg-layer overflow-hidden' >
      //         <img className='rounded-3xl border' src={assets.girl2}/>
      //         <div className='absolute  bottom-1/2 transform translate-x-1/2 translate-y-1/2'></div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
     <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
        {/* /image Container----- */}
      <div className='flex flex-row sm:grid-cols-2 gap-10 '>
      {/* left side */}
      <div>
        <p className='font-semibold text-gray-600 mb-2'>Original</p>
        <img className='rounded-md border' src={assets.girl1}/>
      </div>
      {/* right side */}
      <div>
        <p className='font-semibold text-gray-600 mb-2'>Background Removed</p>
        <div className='rounded-md  border-gray-300 w-200  h-60 relative bg-layer overflow-hidden'> 
       
           <img src={assets.girl2}/>  
          {/* <div className='absolute right-1/2 transform transate-x-1/2 translate-y-1/2' >
            <div className='border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin '></div> 
        </div>  */}
        </div> 
        
      </div>
      

      </div>
      {/* ---- Buttons*/}
      <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
        <button className='px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700'> Try another image</button>
        <a  className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700' href=""> Download image</a>

      </div>
      
      </div>
      <Footer/>

      </div>
     
  )
}
export default Result
