import React, { useContext, useRef } from 'react'
import MyContext from '../../../todo/src/components/MyContext';

const FormInput = () => {
    let {handleAddData} = useContext(MyContext);
    let {handleSearch}  =useContext(MyContext);
    let name = useRef();
    let regno = useRef();
    let cgpa = useRef();
    let search = useRef();
    function handleClick(e)
    {
        e.preventDefault();
        let student = {
            name : name.current.value,
            regno: regno.current.value,
            cgpa : cgpa.current.value
        }
        handleAddData(student);
    }


  return (

        <>
        <form  onSubmit={handleClick}  className='mb-3 p-3 flex text-3xl justify-center space-evenly bg-black rounded  space-x-6'>
            <input type="email" ref={name}  className='border-2 bg-white rounded-xl' placeholder='Enter your email' required />
             <input type="number" ref={regno}  className='border-2 bg-white rounded-xl' placeholder='Enter your phone no' size={10} required/>
            <input type="password" ref={cgpa}  className='border-2 bg-white rounded-xl' placeholder='Enter your password' min={8}  required/>
            <button className='p-2 bg-green-600 border-2 rounded-xl hover:bg-white hover:text-black transform transition-transform hover:scale-115  duration-300'>Add</button>
        </form>
        <div>
            <input ref={search} className='p-3 border-2 rounded m-3 bg-white' type="number" placeholder='Enter to search' />
            <button type='submit' className='p-3 bg-blue-500 border-2 rounded-xl hover:text-white hover:bg-yellow-700 transform transition-transform duration-200 hover:scale-115' onClick={() => handleSearch(search)}>Search</button>
        </div>

        </>
  )
}

export default FormInput