import React from "react"
import Navbar from "./Navbar"
import { albumsData, songsData } from "../assets/assets"
import AlbumItem from "./AlbumItem"
import SongItem from "./SongItem"

function DisplayHome() {
  return (
    <>
      <Navbar />

      <section className="mb-8">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-x-auto gap-4">
          {albumsData.map(item => (
            <AlbumItem key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-x-auto gap-4">
          {songsData.map(item => (
            <SongItem key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}

export default DisplayHome
