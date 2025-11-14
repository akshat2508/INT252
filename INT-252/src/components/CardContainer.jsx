import React from 'react'
import Cards from './Cards'

const CardContainer = (props) => {
  return (
    <>
    <div className='grid grid-cols-3 gap-4 p-4'>
      <Cards data={props[0]}/>
      <Cards data={props[1]}/>
      <Cards data={props[2]}/>


    </div>
    </>
  )
}

export default CardContainer