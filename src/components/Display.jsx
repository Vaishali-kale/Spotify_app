import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

function Display() {
  const displayRef = useRef(null)
  const location = useLocation()

  // Determine if we are on an album route
  const albumMatch = location.pathname.match(/\/album\/(\d+)$/)
  const albumId = albumMatch ? Number(albumMatch[1]) : null
  const isAlbum = albumId !== null && albumsData[albumId]

  useEffect(() => {
    if (!displayRef.current) return

    const defaultBg = '#121212'
    if (isAlbum) {
      const albumBg = albumsData[albumId].bgColor
      displayRef.current.style.background = `linear-gradient(${albumBg}, ${defaultBg})`
    } else {
      displayRef.current.style.background = defaultBg
    }
  }, [isAlbum, albumId, location.pathname])

  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display

























// import React, { useEffect, useRef } from 'react'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import DisplayHome from './DisplayHome'
// import DisplayAlbum from './DisplayAlbum'
// import { albumsData } from '../assets/assets';

// function Display() {
//   const displayRef = useRef();
//  const location = useLocation();
//  const isAlbum = location.pathname.includes('album');
//  const albumId = isAlbum ? location.pathname.slice(-1) :"";
//  const bgColor = albumsData[Number(albumId)].bgColor;


// useEffect(()=>{
//     if(isAlbum){
//         displayRef.current.style.background =`linear-gradient(${bgColor},#121212)`
//     }else{
//                 displayRef.current.style.background =`#121212`

//     }
// })

//   return (
//     <div  
//       ref={displayRef}
//       className='w-100% m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'
//     >
//       <Routes>
//         <Route path='/' element={<DisplayHome />} />
//         <Route path='/album/:id' element={<DisplayAlbum />} />
//       </Routes>
//     </div>
//   )
// }

// export default Display
