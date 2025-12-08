import React, { useContext } from 'react'
import MyContext from '../../../todo/src/components/MyContext'

const FormOutput = () => {
  let {data, handleDelete, regNo}  = useContext(MyContext);
  return (

    <>
     {(data || []).map((value, index) => (

        <div
          key={index}
          className={`
            flex justify-between items-center text-black border mb-2 p-6
            transform transition-transform duration-300 scale-100
            ${String(value.regno) === String(regNo)
              ? "border-green-300 border-4 bg-green-600"
              : "bg-orange-600"
            }
          `}
        >
          <span className='text-xl font-bold text-white'>{index + 1}</span>
          <span className='text-xl font-bold text-white'>{value.email}</span>
          <span className='text-xl font-bold text-white'>{value.password}</span>
          <span className='text-xl font-bold text-white'>{value.phone}</span>

          <button
            className='p-1 bg-red-700 border-2 rounded-xl hover:bg-orange-600'
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  )
}

export default FormOutput
