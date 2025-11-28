import React, { useContext } from 'react'
import MyContext from './MyContext'

const FormOutput = () => {
 let {handleDeleteData , data} = useContext(MyContext);
  return (
    <>
    {data.map((value, index) => (
    <div key={index} className='bg-amber-500 text-2xl flex justify-between p-3 my-2 rounded'>
        <span className='w-[5%] text-2xl text-black font-bold'>{index}</span>
        <span className='w-[20%] text-black text-2xl font-bold'>{value.name}</span>
          <span className='w-20%] text-black text-2xl font-bold'>{value.RegNo}</span>
        <span className='w-[10%] text-black text-2xl font-bold'>{value.Cgpa}</span>

        <button className='w-[25%] bg-amber-700 text-white py-2 rounded' onClick={() => handleDeleteData(index)}>Delete</button>
    </div>
))}

    </>
  )
}

export default FormOutput