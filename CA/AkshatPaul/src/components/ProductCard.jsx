import React from 'react'

const ProductCard = ({data , handleDelete}) => {
  return (
    (data.map((value ,index) => (
      <div className='bg-slate-400 flex flex-col p-4 text-center justify-evenly rounded-2xl' key={index}>
        <img className='border object-fit h-full overflow-hidden rounded-2xl p-2 m-2 ' src={value.url} alt="image" />
        <p className='text-2xl border rounded-2xl p-2 m-2'>{value.name}</p>
        <p className='text-2xl border rounded-2xl p-2 m-2'> {value.price}</p>
        <p className='text-2xl border rounded-2xl p-2 m-2'>{value.category}</p>

        <button className='border bg-red-600 text-white hover:text-2xl hover:bg-amber-800 p-4 rounded-2xl' onClick={() => handleDelete(index)}>Delete</button>
      </div>
    ))
  )
)
}

export default ProductCard