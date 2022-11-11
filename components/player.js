
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";

export default function Player(props) {

    const [windowObj, setWindowObj] = useState(false);
    const playerOne = useRef(null);
    const playerTwo = useRef(null);
    
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
      if (typeof window !== "undefined") {
        setWindowObj(true);
      }
    }, []);







  const youtubePlayer =  <ReactPlayer url="https://www.youtube.com/watch?v=2ubIhBZG9NA"
    ref={playerOne}
    controls={true}      
    playing={playing}
    />

    const audioPlayer = <audio 
    src="https://dcs.megaphone.fm/AXIOS9139132273.mp3?key=67b078db5ba9be83f86d428b1244b82b"
    ref={playerTwo}
    controls 
    autoPlay={false}
    />


  return (
    <>
    <div className="md:flex md:items-center md:justify-between mb-5">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Responsive Header
        </h2>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            Responsive 1
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Responsive 2
        </button>
      </div>
    </div>
        <div>
            {windowObj && youtubePlayer}
        </div>
        <div>
            {audioPlayer}
        </div>
    </>
  )
}