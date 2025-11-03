import React from 'react'

const Cards = () => {
  return (
<>
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
        </div>
      </section>


        <section className="p-10 bg-gray-50">
  <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Explore Domino’s</h2>

  <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
    {/* Menu */}
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition-transform duration-300 hover:scale-105 text-center flex flex-col">
      <a href="/menu" className="flex flex-col h-full">
        <img
          src="./src/assets/menu.png"
          alt="Explore Menu"
          className="mx-auto mb-4 rounded-lg"
        />
        <h3 className="text-xl font-semibold mb-2">Our Menu</h3>
        <p className="text-gray-600 mb-4">
          Explore our range of delicious Pizzas, delivered in 30 minutes!
        </p>
        <span className="inline-block mt-auto bg-white text-red-500 border border-black px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 hover:text-white">
          DISCOVER PIZZA
        </span>
      </a>
    </div>

    {/* Nearby Store */}
   <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition-transform duration-300 hover:scale-105 text-center flex flex-col">
  <a href="/store-location" className="flex flex-col h-full">
    <img 
      src="./src/assets/store.png"
      alt="Store Locator"
      className="mx-auto mb-4 rounded-lg"
    />
    <h3 className="text-xl font-semibold mb-2">Nearby Store</h3>
    <p className="text-gray-600 mb-4">
      Find a Domino’s Pizza restaurant near you.
    </p>

    {/* Button pushed to bottom */}
    <span className="inline-block mt-auto bg-white text-red-500 border border-black px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 hover:text-white">
      FIND DOMINO'S STORE
    </span>
  </a>
</div>


    {/* Birthday Party */}
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition-transform duration-300 hover:scale-105 text-center flex flex-col">
      <a href="/bday-party" className="flex flex-col h-full">
        <img
          src="./src/assets/bday.png"
          alt="Birthday Party"
          className="mx-auto mb-4 rounded-lg"
        />
        <h3 className="text-xl font-semibold mb-2">Birthday Party</h3>
        <p className="text-gray-600 mb-4">
          Celebrate the joy of birthdays with fresh &amp; hot pizzas.
        </p>
        <span className="inline-block mt-auto bg-white text-red-500 border border-black px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 hover:text-white">
          BOOK NOW
        </span>
      </a>
    </div>

    {/* Catering */}
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition-transform duration-300 hover:scale-105 text-center flex flex-col">
      <a href="/wedding" className="flex flex-col h-full">
        <img
          src="./src/assets/catering.png"
          alt="Catering"
          className="mx-auto mb-4 rounded-lg"
        />
        <h3 className="text-xl font-semibold mb-2">Catering</h3>
        <p className="text-gray-600 mb-4">
          Live Domino's Kitchen for weddings / corporate events.
        </p>
        <span className="inline-block mt-auto bg-white text-red-500 border border-black px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 hover:text-white">
          BOOK NOW
        </span>
      </a>
    </div>
  </div>
</section>
</>
  )
}

export default Cards