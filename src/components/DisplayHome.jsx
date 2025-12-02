import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

function DisplayHome() {
  return (
    <>
      <Navbar />

      {/* Featured Charts */}
      <section className="mb-8">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-x-auto gap-4">
          {albumsData.map((item) => (
            <AlbumItem
              key={item.id}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </section>

      {/* Today's Biggest Hits */}
      <section className="mb-8">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-x-auto gap-4">
          {songsData.map((item) => (
            <SongItem
              key={item.id}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default DisplayHome









































































// import React from 'react'
// import Navbar from './Navbar'
// import { albumsData, songsData } from '../assets/assets'
// import AlbumItem from './AlbumItem'
// import SongItem from './SongItem'

// function DisplayHome() {
//   return (
//     <>
//       <Navbar />

//       {/* Featured Charts */}
//       <div className="mb-4">
//         <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
//         <div className="flex overflow-auto">
//           {albumsData.map((item, index) => (
//             <AlbumItem
//               key={index}
//               name={item.name}
//               desc={item.desc}
//               id={item.id}
//               image={item.image}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Today's Biggest Hits */}
//       <div className="mb-4">
//         <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
//         <div className="flex overflow-auto">
//           {songsData.map((item, index) => (
//             <SongItem
//               key={index}
//               name={item.name}
//               desc={item.desc}
//               id={item.id}
//               image={item.image}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default DisplayHome
