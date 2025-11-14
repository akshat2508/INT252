import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-orange-100 flex justify-between items-center px-10 py-4 shadow-md  sticky top-0 z-50">
        
        <div className="w-32">
          <img
            src="https://cdn.universitykart.com//Content/upload/admin/03dtozib.5kq.png"
            alt="lpu chancellor"
            className="w-full object-contain border rounded-xl"
          />
        </div>

        <div className="flex gap-6 text-gray-700 font-bold">
          <button className="hover:text-orange-600 ">About</button>
          <button className="hover:text-orange-600 ">Contact</button>
          <button className="hover:text-orange-600 ">Feedback</button>
        </div>

        <button className="bg-orange-600 text-white px-5 py-2 rounded-md hover:bg-orange-700 transition">
          Download App
        </button>

      </nav>
    </>
  );
};

export default Navbar;
