import { useRef, useState, useEffect, createContext } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 }
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = (id) => {
    setTrack(songsData[id]);
  };

  const previous = () => {
    if (track.id > 0) {
      setTrack(songsData[track.id - 1]);
    }
  };

  const next = () => {
    if (track.id < songsData.length - 1) {
      setTrack(songsData[track.id + 1]);
    }
  };

  const seekSong = (e) => {
    const clickX = e.nativeEvent.offsetX;
    const width = seekBg.current.offsetWidth;
    const duration = audioRef.current.duration;

    if (!duration) return;

    audioRef.current.currentTime = (clickX / width) * duration;
  };

  // Auto-play whenever track changes
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.play();
    setPlayStatus(true);
  }, [track]);

  // Time update listener
  useEffect(() => {
    const audio = audioRef.current;

    audio.ontimeupdate = () => {
      if (!audio.duration) return;

      seekBar.current.style.width =
        (audio.currentTime / audio.duration) * 100 + "%";

      setTime({
        currentTime: {
          second: Math.floor(audio.currentTime % 60),
          minute: Math.floor(audio.currentTime / 60),
        },
        totalTime: {
          second: Math.floor(audio.duration % 60),
          minute: Math.floor(audio.duration / 60),
        }
      });
    };

  }, []);   // run only once

  const contextvalue = {
    audioRef,
    seekBar,
    seekBg,
    track, setTrack,
    playStatus, setPlayStatus,
    time, setTime,
    play, pause,
    playWithId,
    previous, next,
    seekSong
  };

  return (
    <PlayerContext.Provider value={contextvalue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;

































// import { useRef, useState,useEffect,useCallback } from "react";
// import { createContext } from "react";
// import { songsData } from "../assets/assets";

// export const PlayerContext=createContext();
// const PlayerContextProvider = (props)=>{

// const audioRef=useRef();
// const seekBg= useRef();
// const seekBar=useRef();

// const [track,setTrack]=useState(songsData[0]);
// const [playStatus,setPlayStatus]=useState(false);
// const [time,setTime]=useState({
//     currentTime:{
//         second:0,
//         minute:0
//     },
//     totalTime:{
//         second:0,
//         minute:0
//     }
// })

// const play=()=>{
//     audioRef.current.play();
//     setPlayStatus(true)
// }

// const pause=()=>{
//     audioRef.current.pause();
//     setPlayStatus(false)
// }

// const playWithId = async(id)=>{
//     await setTrack(songsData[id]);
//     await audioRef.current.play();
//     setPlayStatus(true);
// }

// const previous = async()=>{
//     if(track.id>0){
//         await setTrack(songsData[track.id-1]);
//         await audioRef.current.play();
//         setPlayStatus(true);
//     }
// }

// const next = async()=>{
//     if(track.id<songsData.length-1){
//         await setTrack(songsData[track.id+1]);
//         await audioRef.current.play();
//         setPlayStatus(true);
//     }
// }


// const seekSong=async(e)=>{
// audioRef.current.currentTime=((e.navtiveEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration)
// }



// useEffect(()=>{
//     setTimeout(()=>{
        
// audioRef.current.ontimeupdate=()=>{
// seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";

//     setTime({
//         currentTime:{
//             second:Math.floor(audioRef.current.currentTime%60),
//             minute:Math.floor(audioRef.current.currentTime/60)
//         },
//         totalTime:{
//             second:Math.floor(audioRef.current.duration%60),
//             minute:Math.floor(audioRef.current.duration/60)
//         }
//     })
// }

//     },1000);
// },[audioRef])



// const contextvalue ={
//  audioRef,
//  seekBar,
//  seekBg,
//  track,setTrack,
//  playStatus,setPlayStatus,
//  time,setTime,
//  play,pause,
//  playWithId,
//  previous,next,
//  seekSong
// }
// return(
//     <PlayerContext.Provider value={contextvalue}>
//         {props.children}
//     </PlayerContext.Provider>
// )

// }

// export default PlayerContextProvider;















