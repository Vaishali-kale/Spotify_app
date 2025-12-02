import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="w-full flex flex-col gap-4">
      {/* Top Navigation */}
      <div className="flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="Go Back"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="Go Forward"
          />
        </div>

        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black text-white px-3 py-1 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            G
          </p>
        </div>
      </div>

      {/* Bottom Category Navigation */}
      <div className="flex items-center gap-2">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">Podcasts</p>
      </div>
    </nav>
  )
}

export default Navbar
