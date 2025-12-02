import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`
}

function DisplayAlbum() {
  const { id } = useParams()
  const albumId = Number(id)
  const album = albumsData[albumId]

  const { playWithId } = useContext(PlayerContext)

  // Filter songs belonging to this album
  const albumSongs = songsData.filter(song => song.albumId === albumId)

  // Safety check
  if (!album) {
    return <div className="p-6 text-white">Album Not Found</div>
  }

  return (
    <div className="text-white">
      <Navbar />

      {/* Album Header Section */}
      <section className="mt-10 flex flex-col md:flex-row md:items-end gap-8 px-6">
        <img
          className="w-48 rounded shadow-lg"
          src={album.image}
          alt={album.name}
        />
        <div className="flex flex-col">
          <p className="uppercase text-sm text-gray-300">Playlist</p>
          <h2 className="font-bold mb-4 md:text-6xl text-4xl">{album.name}</h2>
          <h4 className="text-gray-300 mb-2">{album.desc}</h4>
          <p className="mt-1 text-gray-200 flex items-center gap-2">
            <img
              className="w-5 inline-block"
              src={assets.spotify_logo}
              alt="Spotify logo"
            />
            <b>Spotify</b> · {albumSongs.length} Songs · about 2 hr 30 min
          </p>
        </div>
      </section>

      {/* Table Header */}
      <section className="mt-10 mb-4 px-2 grid grid-cols-3 sm:grid-cols-4 text-[#a7a7a7] items-center">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="w-4 m-auto" src={assets.clock_icon} alt="Duration" />
      </section>

      <hr className="border-gray-700" />

      {/* Song List */}
      <section>
        {albumSongs.map((song, index) => (
          <article
            key={song.id}
            onClick={() => playWithId(song.id)}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer rounded"
          >
            {/* Number + Image + Title */}
            <p className="flex items-center text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img
                className="w-10 h-10 mr-4 rounded"
                src={song.image}
                alt={song.name}
              />
              {song.name}
            </p>

            {/* Album Name */}
            <p className="text-[15px]">{album.name}</p>

            {/* Date Added */}
            <p className="hidden sm:block text-[15px]">5 days ago</p>

            {/* Duration */}
            <p className="text-[15px] text-center">
              {typeof song.duration === 'number'
                ? formatDuration(song.duration)
                : song.duration}
            </p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default DisplayAlbum




























// // import React, { useContext } from 'react'
// // import Navbar from './Navbar'
// // import { useParams } from 'react-router-dom'
// // import { albumsData, assets, songsData } from '../assets/assets'
// // import { PlayerContext } from '../context/PlayerContext'

// // function DisplayAlbum() {

// //   const { id } = useParams()
// //   const album = albumsData[id]   // selected album
// //  const {playwithId} = useContext(PlayerContext)
// //   return (
// //     <div>
// //       <Navbar />

// //       {/* Album Header Section */}
// //       <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end px-6">

// //         {/* Album Artwork */}
// //         <img className="w-48 rounded" src={album.image} alt="" />

// //         {/* Album Details */}
// //         <div className="flex flex-col">
// //           <p className="uppercase text-sm text-gray-300">Playlist</p>

// //           <h2 className="inline-block font-bold mb-4 md:text-7xl">
// //             {album.name}
// //           </h2>

// //           <h4 className="text-gray-300">{album.desc}</h4>

// //           <p className="mt-1 text-gray-200">
// //             <img className="inline-block w-5 mr-1" src={assets.spotify_logo} alt="" />
// //             <b>Spotify</b>
// //             · 1,323,154 likes 
// //             · <b>50 Songs</b> 
// //             · about 2 hr 30 min
// //           </p>
// //         </div>
// //       </div>

// //       {/* Table Header */}
// //       <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
// //         <p><b className='mr-4'>#</b>Title</p>
// //         <p>Album</p>
// //         <p className='hidden sm:block'>Date Added</p>
// //         <img className='m-auto w-4' src={assets.clock_icon} alt='' />
// //       </div>

// //       <hr />

// //       {
// //         songsData.map((item, index) => (
// //           <div onClick={()=>playwithId(item.id)}
// //             key={index}
// //             className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'
// //           >
// //             {/* Number + Image + Title */}
// //             <p className='flex items-center text-white'>
// //               <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
// //               <img className='w-10 mr-5' src={item.image} alt='' />
// //               {item.name}
// //             </p>

// //             {/* Album Name */}
// //             <p className='text-[15px]'>{album.name}</p>

// //             {/* Date Added */}
// //             <p className='text-[15px] hidden sm:block'>5 days ago</p>

// //             {/* Duration */}
// //             <p className='text-[15px] text-center'>{item.duration}</p>
// //           </div>
// //         ))
// //       }

// //     </div>  
// //   )
// // }

// // export default DisplayAlbum
