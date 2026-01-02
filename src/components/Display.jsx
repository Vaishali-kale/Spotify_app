import React, { useRef, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"
import { albumsData } from "../assets/assets"

function Display() {
  const displayRef = useRef(null)
  const location = useLocation()

  const albumMatch = location.pathname.match(/\/album\/(\d+)$/)
  const albumId = albumMatch ? Number(albumMatch[1]) : null
  const isAlbum = albumId !== null && albumsData[albumId]

  useEffect(() => {
    if (!displayRef.current) return
    const defaultBg = "#121212"
    displayRef.current.style.background = isAlbum
      ? `linear-gradient(${albumsData[albumId].bgColor}, ${defaultBg})`
      : defaultBg
  }, [isAlbum, albumId, location.pathname])

  return (
    <div ref={displayRef} className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display
