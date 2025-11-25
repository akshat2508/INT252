import React from 'react'

const FormOutput = ({data , handleDelete}) => {

  return (
    <>
    {data.map((value, index) => (
    <div key={index} className='bg-amber-500 text-2xl flex justify-between p-3 my-2 rounded'>
        <span className='w-[5%] text-2xl text-white font-bold'>{index}</span>
        <span className='w-[70%] text-white'>{value}</span>
        <button className='w-[25%] bg-amber-700 text-white py-2 rounded' onClick={() =>handleDelete(index)}>Delete</button>
    </div>
))}

    </>
  )
}

export default FormOutput