import React, { useRef } from 'react'

const Navbar = ( {handleAddData}) => {
    let img = useRef();
    let name = useRef();
    let price = useRef();
    let category = useRef();
    function handleClick()
    {
        let product = 
        {
            url : img.current.value,
            name : name.current.value,
            price : price.current.value,
            category : category.current.value
        }
        handleAddData(product);
    }
      return (
    <>
    <div className='flex justify-between item-center bg-slate-500 p-4'>
        <input className='font-bold border-2 rounded-xl p-2 text-white' type="text" ref={img} placeholder='url for image' />
        <input className='font-bold border-2 rounded-xl p-2 text-white' type="text" ref={name} placeholder='enter product name' />
        <input className='font-bold border-2 rounded-xl p-2 text-white' type="text" ref={price} placeholder='price of product' />
        <input className='font-bold border-2 rounded-xl p-2 text-white' type="text"  ref={category} placeholder='enter the category'/>
        <button className='bg-green-500 text-white p-3 text-xl m-3 rounded-xl border-4' onClick={handleClick}>Add Product</button>
    </div>
    </>
  )
}

export default Navbar