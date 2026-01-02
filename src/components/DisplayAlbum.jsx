import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { albumsData, songsData, assets } from "../assets/assets"
import { PlayerContext } from "../context/PlayerContext"

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`
}

function DisplayAlbum() {
  const { id } = useParams()
  const album = albumsData[Number(id)]
  const { playWithId } = useContext(PlayerContext)

  if (!album) return <div className="p-6 text-white">Album Not Found</div>

  const albumSongs = songsData.filter(song => song.albumId === album.id)

  return (
    <div className="text-white">
      <Navbar />

      <section className="mt-10 flex flex-col md:flex-row md:items-end gap-8 px-6">
        <img className="w-48 rounded shadow-lg" src={album.image} alt={album.name} />
        <div>
          <p className="uppercase text-sm text-gray-300">Playlist</p>
          <h2 className="font-bold mb-4 md:text-6xl text-4xl">{album.name}</h2>
          <h4 className="text-gray-300 mb-2">{album.desc}</h4>
          <p className="mt-1 text-gray-200 flex items-center gap-2">
            <img className="w-5 inline-block" src={assets.spotify_logo} alt="Spotify logo" />
            <b>Spotify</b> · {albumSongs.length} Songs
          </p>
        </div>
      </section>

      <section className="mt-10 mb-4 px-2 grid grid-cols-3 sm:grid-cols-4 text-[#a7a7a7] items-center">
        <p><b className="mr-4">#</b>Title</p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="w-4 m-auto" src={assets.clock_icon} alt="Duration" />
      </section>

      <hr className="border-gray-700" />

      <section>
        {albumSongs.map((song, index) => (
          <article key={song.id} onClick={() => playWithId(song.id)} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer rounded">
            <p className="flex items-center text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img className="w-10 h-10 mr-4 rounded" src={song.image} alt={song.name} />
              {song.name}
            </p>
            <p className="text-[15px]">{album.name}</p>
            <p className="hidden sm:block text-[15px]">5 days ago</p>
            <p className="text-[15px] text-center">{formatDuration(song.duration)}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default DisplayAlbum
