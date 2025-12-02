import React from 'react'
import { assets } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex flex-col bg-black text-white">

      {/* TOP MENU */}
      <div className="bg-[#121212] rounded p-3 flex flex-col gap-2">

        <div
          onClick={() => navigate('/')}
          className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#1a1a1a] rounded"
        >
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>

        <div className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#1a1a1a] rounded">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>

      </div>

      {/* LIBRARY SECTION */}
      <div className="bg-[#121212] rounded mt-3 h-full flex flex-col">

        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>

          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.play_icon} alt="" />
          </div>
        </div>

        {/* Create Playlist Box */}
        <div className="p-4 bg-[#242424] m-3 rounded font-semibold flex flex-col gap-1">
          <h1 className="text-white">Create your first playlist</h1>
          <p className="text-white font-light">It’s easy — we’ll help you</p>

          <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4">
            Create playlist
          </button>
        </div>

        {/* Podcast Box */}
        <div className="p-4 bg-[#242424] m-3 rounded font-semibold flex flex-col gap-1">
          <h1 className="text-white">Let’s find some podcasts</h1>
          <p className="text-white font-light">We’ll keep you updated on new episodes</p>

          <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4">
            Browse podcasts
          </button>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;



















// import React from 'react'
// import { assets } from '../assets/assets.js'
// import { useNavigate } from 'react-router-dom'

// function Sidebar() {

//     const navigate=useNavigate();

//   return (
//     <div className="w-[25%] h-full p-2 flex flex-col bg-[#121212]">
//       <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
//       {/* Menu Item */}
//       <div  onClick={()=>navigate('/')} className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#1a1a1a] rounded">
//         <img className='w-6' src={assets.home_icon} alt="" />
//         <p className="font-bold text-white">Home</p>
//       </div>

//       <div className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#1a1a1a] rounded">
//         <img className='w-6' src={assets.search_icon} alt="" />
//         <p className="font-bold text-white">Search</p>
//       </div>
//     </div>
// <div className='bg-[#121212] h-[85%] rounded'>
// <div className='p-4 flex items-center justify-between'>
// <div className='flex items-center gap-3'>
// <img  className="w-8" src={assets.stack_icon} alt=''/>
//  <p className='font-semibold text-white'> Your Library</p>  
// </div>
// <div className='flex items-center gap-3'>
// <img  className='w-5' src={assets.arrow_icon} alt=''/>
// <img  className='w-5' src={assets.play_icon} alt=''/>
// </div>
// </div>

// <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
//  <h1 className='text-white'>Create your first playlist</h1> 
//  <p className='font-light text-white'>it's easy we will help you</p>
//  <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>
//   Create playlist  </button> 

// </div>

// <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
//  <h1 className='text-white'>it's easy we will help you</h1> 
//  <p className='font-light text-white'>we'll keep you update on new episodes</p>
//  <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>
//   Browse podcasts  </button> 
// </div>
// </div>
//     </div>
//   )
// }

// export default Sidebar
