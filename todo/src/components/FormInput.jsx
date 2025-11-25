import React , {useRef} from 'react'

const FormInput = ({handleFunction}) => {
    let inputData = useRef();

    function handleClick()
    {
        handleFunction(inputData.current.value);
    }

  return (
<>
<div className='bg-black text-white flex justify-center items-center p-3 text-3xl space-x-6'>
    <input className='border rounded p-3' ref={inputData} type="text" placeholder='enter your name' />
    <button className=' border bg-slate-300 text-black p-4' onClick={handleClick}>Click here to add</button>
</div>
</>
  )
}

export default FormInput