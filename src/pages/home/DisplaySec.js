import React from 'react'

const DisplaySec = () => {
  return (
    <div className='grid grid-cols-2 items-center sm:grid-cols-1 sm:mb-7'>
      
     <div className="dis-img h-[500px]">

     <dotlottie-player src="https://lottie.host/3d6f81fc-3fe1-49c0-9c8d-ec176349f392/HGagISA9sJ.json" background="transparent" speed="1" loop autoplay></dotlottie-player>


     </div>


       <div className="dis-info space-y-3 sm:text-center sm:px-4">
           
           <h1 className='text-3xl font-bold'>Hi, I am John</h1>
           <p className='text-pink-700 italic'>Some Dev, Freelancer, Rounder</p>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam autem fugiat recusandae suscipit, hic voluptate quam quidem iste ullam iure quas a asperiores omnis obcaecati aspernatur cumque possimus saepe consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi?</p>


       </div>

      
    </div>
  )
}

export default DisplaySec