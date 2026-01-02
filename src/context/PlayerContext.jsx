import { useRef, useState, useEffect, createContext } from "react"
import { songsData } from "../assets/assets"

export const PlayerContext = createContext(null)

const PlayerContextProvider = ({ children }) => {

  const audioRef = useRef(null)
  const seekBg = useRef(null)
  const seekBar = useRef(null)

  const [track, setTrack] = useState(songsData[0])
  const [playStatus, setPlayStatus] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)

  const [time, setTime] = useState({
    currentTime: { minute: 0, second: 0 },
    totalTime: { minute: 0, second: 0 }
  })

  /* ---------- USER ACTION CONTROLS ---------- */

  const play = async () => {
    if (!audioRef.current) return
    try {
      await audioRef.current.play()
      setPlayStatus(true)
      setUserInteracted(true)   // ✅ important
    } catch (err) {
      console.log("Play blocked by browser")
    }
  }

  const pause = () => {
    audioRef.current.pause()
    setPlayStatus(false)
  }

  const playWithId = (id) => {
    setTrack(songsData[id])
  }

  const previous = () => {
    if (track.id > 0) setTrack(songsData[track.id - 1])
  }

  const next = () => {
    if (track.id < songsData.length - 1) setTrack(songsData[track.id + 1])
  }

  const seekSong = (e) => {
    if (!audioRef.current || !seekBg.current) return
    const clickX = e.nativeEvent.offsetX
    const width = seekBg.current.offsetWidth
    audioRef.current.currentTime =
      (clickX / width) * audioRef.current.duration
  }

  /* ---------- AUTO PLAY ONLY AFTER USER CLICK ---------- */

  useEffect(() => {
    if (!audioRef.current || !userInteracted) return
    audioRef.current.play()
    setPlayStatus(true)
  }, [track, userInteracted])

  /* ---------- TIME UPDATE ---------- */

  useEffect(() => {
  const audio = audioRef.current
  const bar = seekBar.current

  if (!audio || !bar) return   // ✅ CRITICAL FIX

  const handleTimeUpdate = () => {
    if (!audio.duration) return

    bar.style.width =
      (audio.currentTime / audio.duration) * 100 + "%"

    setTime({
      currentTime: {
        minute: Math.floor(audio.currentTime / 60),
        second: Math.floor(audio.currentTime % 60),
      },
      totalTime: {
        minute: Math.floor(audio.duration / 60),
        second: Math.floor(audio.duration % 60),
      }
    })
  }

  audio.addEventListener("timeupdate", handleTimeUpdate)

  // ✅ cleanup (VERY IMPORTANT)
  return () => {
    audio.removeEventListener("timeupdate", handleTimeUpdate)
  }

}, [])

   

  return (
    <PlayerContext.Provider value={{
      audioRef,
      seekBg,
      seekBar,
      track,
      playStatus,
      time,
      play,
      pause,
      playWithId,
      previous,
      next,
      seekSong
    }}>
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider
