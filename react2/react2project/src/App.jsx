import React from 'react'

const App = () => {
  return (
    <div className="p-6">
      <h1 className="text-blue-500 text-4xl font-bold">Domino's</h1><br />
      <h3 className="text-lg mt-2">Login to unlock awesome benefits</h3><br />

      <div className="flex justify-between mt-4 w-full ">
        <p>🍕 Personalised offers</p>
        <p>🏆 Loyalty Rewards</p>
        <p>💳 Easy Payments</p>
      </div><br />

      <input
        type="text"
        placeholder="Enter your phone number"
        className="border-2  mt-4 px-2 py-1 w-full font-bold"
        value= "+91"
      />
    </div>
  )
}

export default App
