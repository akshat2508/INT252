import React from 'react'
import Cards from './Cards'

const CardContainer = ({ cards }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <Cards data={cards[0]} />
      <Cards data={cards[1]} />
      <Cards data={cards[2]} />
    </div>
  )
}

export default CardContainer
