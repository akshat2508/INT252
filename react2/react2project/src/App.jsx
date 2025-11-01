import React from 'react'

const App = () => {
  return (
    <>
      <nav className="flex  justify-between items-center px-10 py-4 shadow-md bg-white sticky top-0 z-50">

        <div className="hidden md:flex space-x-6 font-semibold text-gray-700">
          <img src="./src/assets/dominoslogo.png" alt="" className='h-7 mr-50'/>
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
        <h3 className='w-full p-3 bg-gray-400 mt-4'>home</h3>
      </div>


       <section className="p-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Coupons & Offers</h2>

        <div className="grid  md:grid-cols-3 gap-6">
          <img
            src="./src/assets/offer1.png"
            alt="Offer 1"
            className="rounded-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="./src/assets/offer2.png"
            alt="Offer 2"
            className="rounded-lg hover:scale-105  transition-transform duration-300 "
          />
          <img
            src="./src/assets/offer1.png"
            alt="Offer 3"
            className="rounded-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="./src/assets/offer1.png"
            alt="Offer 3"
            className="rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

    </>
  )
}

export default App
