import React from 'react'

const Cards = ( {data} ) => {
  return (
    <>

    <div class=" text-center bg-white border rounded-2xl shadow overflow-hidden hover:scale-105 duration-300">
      <img src={data.url} class="w-full h-40 object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-semibold mb-2">{data.title}</h3>
        <p class="text-gray-600">{data.description}</p>
      </div>
    </div>

    </>
  )
}


export default Cards