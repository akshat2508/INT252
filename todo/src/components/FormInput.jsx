import React , {useRef} from 'react'

const FormInput = ({handleFunction}) => {
    let inputData = useRef();
    let stuReg = useRef();
    let stuCgpa = useRef();

    function handleClick()
    {
      let studetnData = {
        name: inputData.current.value,
        RegNo : stuReg.current.value,
        Cgpa : stuCgpa.current.value
      }
        handleFunction(studetnData);
    }

  return (
<>
<div className='bg-black text-white flex justify-center items-center p-3 text-3xl space-x-6'>
    <input className='border rounded p-3' ref={inputData} type="text" placeholder='enter your name' />
    <input className='border rounded p-3' type="text" ref={stuReg} placeholder='enter your reg no' />
    <input className='border rounded p-3' type="text" ref={stuCgpa} placeholder='enter your cgpa ' />
    <button className=' border bg-slate-300 text-black p-4' onClick={handleClick}>Click here to add</button>
</div>
</>
  )
}

export default FormInput