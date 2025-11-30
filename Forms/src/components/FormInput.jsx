import React, { useRef } from 'react'

const FormInput = ({handleFunction , handleSearch}) => {

    let name = useRef();
    let regno = useRef();
    let cgpa = useRef();
    let search = useRef();
    function handleClick()
    {
        let student = {
            name : name.current.value,
            regno: regno.current.value,
            cgpa : cgpa.current.value
        }
        handleFunction(student);
    }


  return (

        <>
        <div className='mb-3 p-3 flex text-3xl justify-center space-evenly bg-black rounded  space-x-6'>
            <input type="text" ref={name}  className='border-2 bg-white rounded-xl' placeholder='Enter your name'/>
             <input type="text" ref={regno}  className='border-2 bg-white rounded-xl' placeholder='Enter your regNo'/>
            <input type="text" ref={cgpa}  className='border-2 bg-white rounded-xl' placeholder='Enter your cgpa'/>
            <button className='p-2 bg-green-600 border-2 rounded-xl hover:bg-white hover:text-black transform transition-transform hover:scale-115  duration-300' onClick={handleClick}>Add</button>
        </div>
        <div>
            <input ref={search} className='p-3 border-2 rounded m-3 bg-white' type="number" placeholder='Enter to search' />
            <button className='p-3 bg-blue-500 border-2 rounded-xl hover:text-white hover:bg-yellow-700 transform transition-transform duration-200 hover:scale-115' onClick={() => handleSearch(search)}>Search</button>
        </div>

        </>
  )
}

export default FormInput