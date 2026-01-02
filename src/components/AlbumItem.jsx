import React from 'react'
import { useNavigate } from 'react-router-dom'

function AlbumItem({ image, name, desc, id }) {
  const navigate = useNavigate()

  const goToAlbum = () => navigate(`/album/${id}`)

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Go to album ${name}`}
      onClick={goToAlbum}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          goToAlbum()
        }
      }}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-colors duration-200"
    >
      <img className="rounded w-full" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </article>
  )
}

export default AlbumItem
