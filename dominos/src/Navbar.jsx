import React from 'react'

const Navbar = () => {
  return (
    <>
     <nav className="flex  justify-between items-center px-10 py-4 shadow-md bg-white sticky top-0 z-50">

        <div className="hidden md:flex space-x-6 font-semibold text-gray-700">
          <img src="./src/assets/dominoslogo.png" alt="" className='h-7 mr-60'/>
          <p className="hover:text-blue-600 cursor-pointer">OUR MENU</p>
          <p className="hover:text-blue-600 cursor-pointer">STORES</p>
          <p className="hover:text-blue-600 cursor-pointer">GIFT CARD</p>
          <p className="hover:text-blue-600 cursor-pointer">CORPORATE ENQUIRY</p>
          <p className="hover:text-blue-600 cursor-pointer">CONTACT</p>
        </div>

        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          DOWNLOAD APP
        </button>
      </nav>

       <section className="w-full bg-blue-700">
        <img
          src="./src/assets/image.png"
          alt="Domino's Pizza Banner"
          className="w-full object-cover"
        />
      </section>
      <div>
        <h3 className='w-full p-3 bg-gray-400 mt-2'><a href="">home</a></h3>
      </div>
      </>
  )
}

export default Navbar