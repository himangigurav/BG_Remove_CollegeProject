import React from 'react'
import { assets } from '../assets/assets'

 const Footer = () => {
  return (
     
    <div className='flex items-center justify-between gap-4 lg:px-44 py-3 '>
        <img  width={150} src={assets.logo} alt=''/>
        
        <p className='flex-1 border-1 border-gray-400 text-sm text-gray-500 max-sm:hidden'>Copyright @GreatStack.dev | All right reserved.</p>
        <img width={30} src={assets.facebook_icon}/>
             <img width={30} src={assets.twitter_icon} />
             <img width={30} src={ assets.google_plus_icon} /> 
        {/* <div className='flex-gap-2 '> 
            <img width={20} src={assets.facebook_icon}/>
             <img width={20} src={assets.twitter_icon} />
             <img width={20} src={ assets.google_plus_icon} />
        </div> */}
    </div>
  )
}
export default Footer
