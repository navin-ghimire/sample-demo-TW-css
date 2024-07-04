import React from 'react'

const MovieCard = ({title}) => {

  return (
 <div className='w-[300px] shadow-xl'>
    <img src="https://images.unsplash.com/photo-1719329411191-be2cda36a37c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" alt="" />
    
<div className="p-4">
   <h1>{title}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius cum adipisci rerum sapiente provident debitis aperiam! Minima, molestias placeat.</p>
 </div>

</div>
  )
}

export default MovieCard