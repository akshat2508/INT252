import React from 'react'

const Cards = ({props}) => {
  return (
    <>

    <div class=" text-center bg-white border-1 rounded-2xl shadow overflow-hidden hover:scale-105 duration-300">
      <img src="https://getyourcollege.s3.ap-south-1.amazonaws.com/college/images/1748253771746.jpeg" class="w-full h-40 object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-semibold mb-2">{item.url}</h3>
        <p class="text-gray-600">A vibrant and innovative campus that fosters creativity and growth.</p>
      </div>
    </div>

    </>
  )
}

export default Cards