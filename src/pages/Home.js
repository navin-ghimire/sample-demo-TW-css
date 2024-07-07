
import React from 'react'
import { recipes } from '../dummy/Data'

const Home = () => {
    

    return (

    <div className='p-2 space-y-5'>
    
    <h1 className='text-xl'>{recipes.name}</h1>
    <div className="img">
      <img className='h-[200px] w-[200px]' src={recipes.image} alt="" />
    </div>
    <ol>
      <h1 className='text-xl font-bold'>Ingredients</h1>
      {recipes.ingredients.map((ing, i) => {
      return <li key={i}>{`${i + 1}. ${ing}`}</li>
    })}
    </ol>

    <ol>
      <h1 className='text-xl font-bold'>Intructions</h1>
      {recipes.instructions.map((ins, i) => {
      return <li key={i}>{`${i + 1}. ${ins}`}</li>
    })}
    </ol>


    </div>

  )
}

export default Home