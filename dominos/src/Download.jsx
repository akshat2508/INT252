import React from 'react'

const Download = () => {
  return (
    <>
    <section className="bg-gray-300 py-16 px-8">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">

    {/* Left: App Image */}
    <div className="flex justify-center">
      <img
        src="./src/assets/new_app_img.png"
        alt="Domino's App"
        className="w-full max-w-md rounded-lg shadow-md"
      />
    </div>

    {/* Right: Download Info */}
    <div className="text-center md:text-left">
      <h3 className="text-3xl font-bold text-gray-800 mb-4">
        Unlock Exclusive Offers
      </h3>
      <p className="text-gray-600 mb-6">
        For a lightning fast ordering experience, download the Domino’s app.
      </p>

      <div className="flex justify-center md:justify-start gap-4">
        {/* Google Play */}
        <a
          href="https://dominos.onelink.me/uM7R/3e839899"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./src/assets/playstore.png"
            alt="Google Play Store"
            className="w-36 hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* App Store */}
        <a
          href="https://dominos.onelink.me/uM7R/aa9c37d4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./src/assets/appstore.png"
            alt="Apple App Store"
            className="w-36 hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Download