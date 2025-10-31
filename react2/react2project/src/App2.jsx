import React from 'react'

const App = () => {
  return (
    <div className="font-sans bg-white">

      {/* 🔵 NAVBAR */}
      <nav className="flex flex-wrap justify-between items-center px-10 py-4 shadow-md bg-white sticky top-0 z-50">
        <h2 className="text-blue-600 text-2xl font-bold">Domino's Pizza</h2>

        <div className="hidden md:flex space-x-6 font-semibold text-gray-700">
          <p className="hover:text-blue-600 cursor-pointer">OUR MENU</p>
          <p className="hover:text-blue-600 cursor-pointer">STORES</p>
          <p className="hover:text-blue-600 cursor-pointer">GIFT CARD</p>
          <p className="hover:text-blue-600 cursor-pointer">CORPORATE ENQUIRY</p>
          <p className="hover:text-blue-600 cursor-pointer">CONTACT</p>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          DOWNLOAD APP
        </button>
      </nav>

      {/* 🟦 HERO IMAGE */}
      <section className="w-full">
        <img
          src="https://www.dominos.co.in/theme2/front/images/home-bg.jpg"
          alt="Domino's Pizza Banner"
          className="w-full object-cover"
        />
      </section>

      {/* 🟥 OFFERS SECTION */}
      <section className="p-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Latest Offers</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="https://www.dominos.co.in/theme2/front/images/banner_home_1new.jpg"
            alt="Offer 1"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://www.dominos.co.in/theme2/front/images/banner_home_2new.jpg"
            alt="Offer 2"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://www.dominos.co.in/theme2/front/images/banner_home_3new.jpg"
            alt="Offer 3"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* 🟩 DOWNLOAD APP SECTION */}
      <section className="flex flex-col md:flex-row justify-between items-center bg-blue-50 px-10 py-16">
        <div className="max-w-md mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Download the Domino’s App</h2>
          <p className="text-gray-700 mb-6">
            Get faster delivery, exclusive deals, and order tracking right from your phone.
          </p>
          <div className="flex space-x-4">
            <img
              src="https://www.dominos.co.in/theme2/front/images/play_store.png"
              alt="Play Store"
              className="w-36 cursor-pointer"
            />
            <img
              src="https://www.dominos.co.in/theme2/front/images/app_store.png"
              alt="App Store"
              className="w-36 cursor-pointer"
            />
          </div>
        </div>

        <img
          src="https://www.dominos.co.in/theme2/front/images/new_app_img.png"
          alt="App Promo"
          className="w-72"
        />
      </section>

      {/* ⚫ FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <p>© 2025 Domino’s Pizza Clone | Built with ❤️ using React + Tailwind CSS</p>
      </footer>
    </div>
  )
}

export default App
