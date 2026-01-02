import React, { useContext } from "react"
import { assets } from "../assets/assets"
import { PlayerContext } from "../context/PlayerContext"

function Player() {
  const { track, playStatus, play, pause, previous, next, time, seekBg, seekBar, seekSong } =
    useContext(PlayerContext)

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      
      {/* Left Section */}
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt={track.name || "Track"} />
        <div>
          <p className="font-semibold">{track.name}</p>
          <p className="text-sm opacity-70">{track.desc?.slice(0, 12)}</p>
        </div>
      </div>

      {/* Center Controls */}
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
          <img className="w-4 cursor-pointer" onClick={previous} src={assets.prev_icon} alt="Previous" />
          {playStatus 
            ? <img className="w-4 cursor-pointer" onClick={pause} src={assets.pause_icon} alt="Pause" />
            : <img className="w-4 cursor-pointer" onClick={play} src={assets.play_icon} alt="Play" />}
          <img className="w-4 cursor-pointer" onClick={next} src={assets.next_icon} alt="Next" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="Loop" />
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-5 w-full">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[450px] bg-gray-500 rounded-full cursor-pointer">
            <hr ref={seekBar} className="h-1 border-0 w-[40%] bg-green-500 rounded-full" />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
    </div>
  )
}

export default Player
