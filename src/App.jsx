import React, { useContext } from 'react'
import './index.css'
import Sidebar from './components/Sidebar.jsx'
import Player from './components/Player.jsx'
import Display from './components/Display.jsx'
import { PlayerContext } from './context/PlayerContext.jsx'

function App() {
  const { audioRef, track } = useContext(PlayerContext)

  return (
    <div className="h-screen bg-black text-white">
      {/* Main Content */}
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>

      {/* Player */}
      <Player />

      {/* Audio Element */}
      <audio ref={audioRef} src={track?.file} preload="auto" />
    </div>
  )
}

export default App
