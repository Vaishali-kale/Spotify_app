import React from 'react'
import { useNavigate } from 'react-router-dom'

function AlbumItem({ image, name, desc, id }) {
  const navigate = useNavigate()

  return (
    <article
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-colors duration-200"
      role="button"
      aria-label={`Go to album ${name}`}
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') navigate(`/album/${id}`)
      }}
    >
      <img className="rounded w-full" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </article>
  )
}

export default AlbumItem























// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// function AlbumItem({ image, name, desc, id }) {

//   const navigate = useNavigate()

//   return (
//     <div 
//       onClick={() => navigate(`/album/${id}`)} 
//       className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
//     >
//       <img className="rounded" src={image} alt="" />
//       <p className="font-bold mt-2 mb-1">{name}</p>
//       <p className="text-slate-200 text-sm">{desc}</p>
//     </div>
//   )
// }

// export default AlbumItem
